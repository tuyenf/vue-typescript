<template>
  <li class="table-row table-row-body">
    <div class="table-col">{{ no }}</div>
    <div class="table-col tw-pl-0">
      <img :src="product.thumbnail" :alt="product.title" class="tw-w-[40px] tw-h-[40px] tw-mr-3 tw-rounded-full tw-object-cover">
      {{ product.title }}
    </div>
    <div class="table-col">{{ product.brand }}</div>
    <div class="table-col">{{ product.category }}</div>
    <div class="table-col">
      <span class="tw-w-full line-2">{{ product.description }}</span>
    </div>
    <div class="table-col">{{ product.price }}</div>
    <div class="table-col">{{ product.stock }}</div>
  </li>
</template>
<script lang="ts" setup>
import {ProductModule} from "@/@types/product";

interface IProps {
  product: ProductModule.ProductItem
  no: number
}
const props = defineProps<IProps>()
</script>