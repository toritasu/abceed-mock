<script setup>
</script>

<template>
  <header class="c-header">
    <div class="c-header__inner">
      <h1>abceed Mock</h1>
      <router-link to="/mypage/">
        <img src="@/assets/images/user.svg">
      </router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.c-header {
  height: 50px;
  background-color: #fff;
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