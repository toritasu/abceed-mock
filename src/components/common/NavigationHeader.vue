<script setup>
</script>

<template>
  <div class="c-nav-header">
    <router-link to="/" class="c-nav-header__prev">
      <img class="c-nav-header__" src="@/assets/images/chevron-left.svg">
      <slot />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.c-nav-header {
  width: 100%;
  height: 50px;
  padding: 0 15px;
  background-color: var(--bg-main);
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__prev {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
}
</style>
