<script setup>
</script>

<template>
  <header class="c-header">
    <div class="c-header__inner">
      <h1>abceedコーディング試験</h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.c-header {
  height: 50px;
  background-color: #ddd;
  &__inner {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 15px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 18px;
      font-weight: 700;
    }
  }
}
</style>