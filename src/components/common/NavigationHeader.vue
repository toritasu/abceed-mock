<script setup>
</script>

<template>
  <div class="c-nav-header">
    <div class="c-nav-header__inner">
      <router-link to="/" class="c-nav-header__prev">
        <img class="c-nav-header__" src="@/assets/images/chevron-left.svg">
        <slot />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-nav-header {
  width: 100%;
  height: 50px;
  background-color: var(--bg-main);
  &__inner {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__prev {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
}
</style>
