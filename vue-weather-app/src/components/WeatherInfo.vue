<template>
  <div class="weather-info">
    <!-- Vuex store의 state에 직접 접근 -->
    <!-- <p>{{ $store.state.weatherData.icon }}</p> -->
    <div class="icon">
      <img :src="`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`" :alt="weatherData.icon">
    </div>
    <!-- 
      ($store.state.weatherData.temp - 273.15): 켈빈 온도를 섭씨로 변환
      .toFixed(1): 소수점 첫째 자리까지만 표시 (반올림)
      &deg;: HTML 특수문자(entity)로 '°' 기호를 표시
      & (앰퍼샌드): HTML에서 특수문자를 시작할 때 사용
      deg: degree(각도)의 약자
      ; (세미콜론): 특수문자의 끝을 나타냄
    -->
    <div class="temp">{{(weatherData.temp - 273.15).toFixed(1)}}&deg;</div>
    <div class="text">{{ weatherData.text }}</div>
    <div class="location">{{ weatherData.city }},{{ weatherData.location }}</div>
  </div>
</template>

<script setup>
  import { useStore } from '../store/store'; // 스토어 함수 임포트
  import { storeToRefs } from 'pinia'; // storeToRefs 헬퍼 함수 임포트

  // store 가져오기
  const store = useStore(); // useStore 호출하여 스토어 인스턴스 생성

  // storeToRefs: store의 상태를 반응형으로 구조분해할당. actions는 storeToRefs 불필요
	// weatherData: store.state.weatherData를 반응형으로 가져옴
  const { weatherData } = storeToRefs(store);
</script>

<style lang="scss" scoped>
  .weather-info {
    padding: 20px;
    & > div {
      margin-bottom: 20px;
      padding: 20px;
      /* border: 1px solid #ccc; */
    }
    .icon img {
      width: 140px;
    }
    .temp {
      font-size: 4em;
    }
    .text {
      font-size: 2em;
    }
  }
</style>