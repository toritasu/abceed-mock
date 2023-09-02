<script setup>
import TemplatesSubCategoryList from '@/components/templates/SubCatgegoryList.vue'

const { contents } = defineProps(['contents']);
</script>

<template>
  <div>
    <TemplatesSubCategoryList
      v-for="(category, index) in contents"
      :key="index"
      :contents="category" />
  </div>
</template>

<style>
div {
  overflow: scroll
}
</style>
