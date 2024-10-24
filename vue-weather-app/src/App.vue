<template>
  <!-- <button @click="$store.dispatch('getWeather')">getWeather</button> -->
  <Navbar />
  <div v-if="!toggle"> <!-- toggle이 false일 때 MainComp 표시 -->
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
  // import { useStore } from 'vuex'; // Vuex store 사용을 위한 함수
  import { useStore } from './store/store'; // 스토어 함수 임포트
  import { storeToRefs } from 'pinia'; // storeToRefs 헬퍼 함수 임포트

  // store 인스턴스 생성 
  const store = useStore(); // useStore 호출하여 스토어 인스턴스 생성

  // storeToRefs: store의 상태를 반응형으로 구조분해할당. actions는 storeToRefs 불필요
	// toggle: store.state.toggle을 반응형으로 가져옴
  const { toggle } = storeToRefs(store); // toggle 상태를 반응형으로 구조분해할당

  // 앱이 실행되면 날씨 데이터 가져오기
  onMounted(() => {
    // store.dispatch('getWeather'); Vuex 방식
    store.getWeather(); // Pinia 방식
  })
</script>

<style scoped lang="scss">

</style>
