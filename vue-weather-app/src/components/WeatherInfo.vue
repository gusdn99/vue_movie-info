<template>
  <div class="weather-info">
    <p>{{ $store.state.weatherData.icon }}</p>
    <div class="icon">
      <img :src="`https://openweathermap.org/img/wn/${$store.state.weatherData.icon}@2x.png`" :alt="$store.state.weatherData.icon">
    </div>
    <!-- 
      ($store.state.weatherData.temp - 273.15): 켈빈 온도를 섭씨로 변환
      .toFixed(1): 소수점 첫째 자리까지만 표시 (반올림)
      &deg;: HTML 특수문자(entity)로 '°' 기호를 표시
      & (앰퍼샌드): HTML에서 특수문자를 시작할 때 사용
      deg: degree(각도)의 약자
      ; (세미콜론): 특수문자의 끝을 나타냄
    -->
    <div class="temp">{{($store.state.weatherData.temp - 273.15).toFixed(1)}}&deg;</div>
    <div class="text">{{ $store.state.weatherData.text }}</div>
    <div class="location">{{ $store.state.weatherData.city }},{{ $store.state.weatherData.location }}</div>
  </div>
</template>

<script setup>
  
</script>

<style lang="scss" scoped>
  .weather-info {
    padding: 20px;
    & > div {
      margin-bottom: 20px;
      padding: 20px;
      border: 1px solid #ccc;
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