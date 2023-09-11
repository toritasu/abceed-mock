<script setup>
</script>

<template>
  <div class="c-nav-header">
    <div class="c-nav-header__inner">
      <router-link to="/" class="c-nav-header__prev">
        <img src="@/assets/images/chevron-left.svg">
        <slot />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/variables.scss" as var;
.c-nav-header {
  width: 100%;
  height: var.$navHeight;
  background-color: var(--bg-main);
  &__inner {
    width: 100%;
    height: 100%;
    max-width: var.$headerWidth;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__prev {
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
}
</style>
