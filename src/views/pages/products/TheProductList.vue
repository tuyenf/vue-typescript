<template>
  <div class="tw-max-w-[1140px] tw-mx-auto tw-py-7">
    <div class="tw-flex tw-justify-between tw-mb-7">
      <span class="tw-font-bold tw-text-xl tw-text-textDark">Products</span>
      <div class="search-input tw-bg-white">
        <input type="text" v-model.trim="filter.search" @input="searchData" class="tw-h-full tw-text-sm" placeholder="Quick search by name">
        <span class="ionicon ionicon-search-outline tw-text-md search-input-icon tw-text-textLight"></span>
      </div>
    </div>
    <div class="product-block tw-bg-white tw-rounded-md">
      <div class="table-row table-row-header tw-rounded-tl-md tw-rounded-tr-md">
        <div class="table-col">No</div>
        <div class="table-col">Title</div>
        <div class="table-col">Branch</div>
        <div class="table-col">Category</div>
        <div class="table-col">Description</div>
        <div class="table-col">Price</div>
        <div class="table-col">Stock</div>
      </div>
      <the-loading v-if="productStore.isLoading"></the-loading>
      <div v-else-if="!productStore.isLoading && !products.length" class="tw-min-h-[500px] tw-flex tw-justify-center tw-items-center tw-text-sm tw-text-textLight">No data</div>
      <ul v-else class="product-list" ref="productList">
        <template v-for="(product, i) in products"
                  :key="product.id">
          <the-product-item :product="product" :no="i + 1"></the-product-item>
        </template>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup name="ProductList">
import {onBeforeMount, ref} from "vue";
import {ProductStore, useProductStore} from "@/stores/product";
import TheLoading from "@/components/TheLoading.vue";
import {ProductModule} from "@/@types/product";
import { useInfiniteScroll } from '@vueuse/core'
import TheProductItem from "@/views/pages/products/TheProductItem.vue";

const productStore: ProductStore = useProductStore()

const filter = ref<ProductModule.Filter>({
  search: '',
  limit: 20,
  skip: 0
})
const productList = ref<HTMLElement>(null)
const products = ref<ProductModule.ProductItem[]>([])

/*
* Hooks*/
onBeforeMount(async () => {
  await productStore.getList(filter.value)
  products.value = [...productStore.productList]
})

/*
* Methods*/
const searchData = async () => {
  filter.value.skip = 0
  await productStore.getList(filter.value)
  products.value = [...productStore.productList]
}

useInfiniteScroll(
    productList,
    async () => {
      if (filter.value.skip < productStore.total - filter.value.limit) {
        filter.value.skip += filter.value.limit
        await productStore.getList(filter.value)
        products.value = [].concat(products.value, productStore.productList)
      }
    },
    { distance: 10 }
)

</script>