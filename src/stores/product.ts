import { defineStore } from 'pinia'
import { ApiService } from '@/plugins/ApiService'
import { Constant } from '@/plugins/Constant'
import {ProductModule} from "@/@types/product";
interface ProductStoreState {
    productList: Array<ProductModule.ProductItem>,
    isLoading: boolean,
    total: number
}

interface ProductStoreAction {
    getList(payload: ProductModule.Filter): Promise<void>
}

export interface ProductStore extends ProductStoreState, ProductStoreAction {
}

export const useProductStore = defineStore('product', {
    state(): ProductStoreState {
        return {
            productList: [],
            isLoading: false,
            total: 0
        }
    },
    actions: {
        async getList(payload: ProductModule.Filter): Promise<void> {
            try {
                this.isLoading = true
                const response: ProductModule.ProductListResponse
                    = !payload.search
                    ? await ApiService.instance().axios.get(Constant.PRODUCT_LIST + `?limit=${payload.limit}&skip=${payload.skip}`)
                    : await ApiService.instance().axios.get(Constant.PRODUCT_LIST + `/search?q=${payload.search}`)
                this.productList = response.products
                this.total = response.total
            } catch (e) {
                console.log(e)
            } finally {
                this.isLoading = false
            }
        },
    },
})
