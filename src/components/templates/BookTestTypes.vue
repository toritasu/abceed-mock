<script setup lang="ts">
// テストタイプ(モック用)
// 本来は、書籍詳細オブジェクトに識別データが含まれていると思われる
// 想定1: [ 'app', 'test' ]
// 想定2: test_types { app: true, test: true, audio: false, sw: false, ... }
const testTypes: Array<{
  label: string, icon: string
}> = [
  { label: 'アプリ学習', icon: 'icon_study_quiz.svg' },
  { label: 'テスト', icon: 'icon_study_test.svg' },
  { label: '音声(無料)', icon: 'icon_study_sound.svg' },
  { label: 'SWトレ', icon: 'icon_study_sw.svg' },
  { label: '単語一覧', icon: 'icon_study_vocab.svg' },
  { label: 'マークシート', icon: 'icon_study_marksheet.svg' },
  { label: '学習記録', icon: 'icon_study_record.svg' }
]
</script>

<template>
  <ul class="c-test-types">
    <li class="c-test-types__item" v-for="testType in testTypes" :key="testType">
      <div class="c-test-types__item__inner">
        <picture>
          <source media="(prefers-color-scheme: dark)" :srcset="`/images/icons/dark/${testType.icon}`">
          <img :src="`/images/icons/light/${testType.icon}`" alt="" class="c-test-types__item__icon">
        </picture>
        <div class="c-test-types__item__label">{{ testType.label }}</div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
.c-test-types {
  $size: 70px;
  $margin: 15px;
  padding: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (min-width: 820px) {
    max-width: calc($size * 4 + $margin * 3 + 15px * 2);
  }
  &__item {
    width: $size;
    aspect-ratio: 1 / 1;
    flex-shrink: 0;
    background-color: var(--bg-main);
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: $margin;
    margin-bottom: $margin;
    /* ボタンの中身を中央合わせ */
    display: flex;
    align-items: center;
    justify-content: center;
    &__inner {
      text-align: center;
    }
    &:nth-of-type(4n) {
      @media screen and (min-width: 800px) {
        margin-right: 0;
      }
    }
    &:nth-last-of-type(-n + 4) {
      @media screen and (min-width: 800px) {
        margin-bottom: 0;
      }
    }
    &__icon {
      width: 40px;
      height: 40px;
      margin-bottom: 5px;
    }
    &__label {
      color: var(--text-main);
      font-size: 10px;
      font-weight: 500;
    }
  }
}
</style>