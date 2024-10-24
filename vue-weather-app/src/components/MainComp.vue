<template>
  <div class="container">
    <SearchBar />
    <WeatherInfo /> <!-- defineProps를 props 변수로 받아와서 붙여줌. -->
  </div>
</template>

<script setup>
  import SearchBar from './SearchBar.vue';
  import WeatherInfo from './WeatherInfo.vue';

</script>

<style lang="scss" scoped>
  .container {
    padding: 20px;
  }
</style>