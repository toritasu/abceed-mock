<script setup lang="ts">
import TemplatesSubCategoryList from '@/components/templates/SubCatgegoryList.vue'

const props = defineProps<{
  id: string,
  name: string,
  subCategories: []
}>();
</script>

<template>
  <div class="c-topcategory">
    <TemplatesSubCategoryList
      v-for="(category, index) in subCategories"
      :key="index"
      :id="category['id_category']"
      :name="category['name_category']"
      :books="category['book_list']"
      :parentId="id"
    />
  </div>
</template>

<style lang="scss" scoped>
.c-topcategory {
  width: 100%;
  max-width: var(--max-width);
  padding: 20px 0;
  margin: 0 auto;
}
</style>
