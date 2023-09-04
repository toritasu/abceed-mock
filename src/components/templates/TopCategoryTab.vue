<script setup>
import TemplatesSubCategoryList from '@/components/templates/SubCatgegoryList.vue'

const { contents } = defineProps(['contents']);
</script>

<template>
  <div class="c-topcategory">
    <TemplatesSubCategoryList
      v-for="(category, index) in contents"
      :key="index"
      :contents="category" />
  </div>
</template>

<style lang="scss" scoped>
.c-topcategory {
  width: 100%;
  padding: 20px 0;
  max-width: calc((90px + 20px) * 10 + (15px * 2) - 20px); // 書籍10件が入りきる幅
  margin: 0 auto;
}
</style>
