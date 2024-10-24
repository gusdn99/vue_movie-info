import { defineStore } from "pinia";

// store 만들기
const useStore = defineStore('main', { // 'main' - 스토어 이름
  state: () => ({
    // 상태 변수 정의
    weatherData: {
      icon: 'icon',
      temp: 0,
      text: 'text',
      location: 'location',
      city: 'Seoul',
    },
    toggle: false, // true일 때 about을 보여줌.
  }),
  actions: {
    // 함수
    addCount(payload) {
      this.count += 1 + payload;
    },
    updateWeather(payload) { // payload는 data를 의미
      this.weatherData.icon = payload.weather[0].icon;
      this.weatherData.temp = payload.main.temp;
      this.weatherData.text = payload.weather[0].description;
      this.weatherData.location = payload.sys.country;
      this.weatherData.city = payload.name;
    },
    // SearchBar
    onSearchCity(payload){ // payload는 inputText를 의미
      this.weatherData.city = payload;
    },
    toggleButton (state) {
      this.toggle = !this.toggle;
    },

    // 비동기 함수 async
    async getWeather() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.weatherData.city}&appid=${API_KEY}`;
      await fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          // mutations 함수로 날씨 정보 업데이트
          // context.commit('updateWeather', data); // mutations 함수에 전달
          this.updateWeather(data);
        })
        .catch(err => {
          alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        })
    }
  }
  
})