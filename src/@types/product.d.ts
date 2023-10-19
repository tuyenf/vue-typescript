import * as module from 'module'

declare namespace ProductModule {
  interface ProductListResponse {
    products: ProductItem[]
    total: number
    skip: number
    limit: number
  }

  interface ProductItem {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }
  interface Filter {
    limit: number
    skip: number
    search?: string
  }
}
