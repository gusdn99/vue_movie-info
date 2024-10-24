<script setup>
  import Navbar from './components/Navbar.vue';
  import MainComp from './components/MainComp.vue';
  import About from './components/About.vue';
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex'; // Composition API에서 store 사용하는 방법

  const store = useStore();

  // 날씨 데이터 상태변수
  const weatherData = ref ({
    icon: 'icon',
    temp: 0,
    text: 'text',
    location: 'location',
    city: 'Seoul',
  })

  // 날씨 데이터 가져오기
  function getWeather() {
    console.log('mounted')
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=d231856d22be47ebf13c07e363aad4a2`
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        weatherData.value.icon = data.weather[0].icon;
        weatherData.value.temp = data.main.temp;
        weatherData.value.text = data.weather[0].description;
        weatherData.value.location = data.sys.country;
        weatherData.value.city = data.name;
        console.log(weatherData.value);
      })
      .catch(err => {
        alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      })
  }
  

  // 앱이 실행되면 날씨 데이터 가져오기
  onMounted(() => {
    store.dispatch('getWeather');
  })

  // 검색어 이벤트 함수
  const onSearchCity = (city) => { // city가 매개변수 inputText를 의미함.
    weatherData.value.city = city;
    getWeather();
  }
</script>

<template>
  <button @click="$store.dispatch('getWeather')">getWeather</button>
  <Navbar />
  <div v-if="!$store.state.toggle">
    <MainComp />
  </div>
  <div v-else>
    <About />
  </div>
  
</template>

<style scoped lang="scss">

</style>
