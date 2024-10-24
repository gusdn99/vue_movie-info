<template>
  <!-- <button @click="$store.dispatch('getWeather')">getWeather</button> -->
  <Navbar />
  <div v-if="!$store.state.toggle"> <!-- toggle이 false일 때 MainComp 표시 -->
    <MainComp />
  </div>
  <div v-else> <!-- toggle이 true일 때 About 컴포넌트 표시 -->
    <About />
  </div>
  
</template>

<script setup>
  import Navbar from './components/Navbar.vue';
  import MainComp from './components/MainComp.vue';
  import About from './components/About.vue';
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex'; // Vuex store 사용을 위한 함수

  const store = useStore(); // store 인스턴스 생성
  
  // 앱이 실행되면 날씨 데이터 가져오기
  onMounted(() => {
    store.dispatch('getWeather');
  })

  // 검색어 이벤트 함수
  const onSearchCity = (city) => { // city가 매개변수 inputText를 의미함.
    weatherData.value.city = city; // 검색할 도시 업데이트
    getWeather(); // 날씨 데이터 다시 가져오기
  }
</script>

<style scoped lang="scss">

</style>
