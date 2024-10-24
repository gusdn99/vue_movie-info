import { defineStore } from "pinia"; // Pinia 스토어를 정의하는 함수

// defineStore: Pinia 스토어를 정의하는 함수
// useStore: 스토어를 사용할 때 호출할 함수명
// defineStore를 사용해 스토어 생성 및 내보내기
export const useStore = defineStore('main', { // 'main' - 스토어의 고유 ID
  // state: 상태를 정의하는 함수 (Vuex의 state와 동일)
  state: () => ({ // 화살표 함수로 객체를 반환
    weatherData: {
      icon: 'icon',
      temp: 0,
      text: 'text',
      location: 'location',
      city: 'Seoul',
    },
    toggle: false, // true일 때 about을 보여줌.
  }),

  // actions: 상태를 변경하는 메서드들 (Pinia에서는 actions에서 직접 상태 변경 가능)
  // (Vuex의 mutations + actions 통합)
  actions: {
    addCount(payload) {
      // this로 직접 상태에 접근 가능 (Vuex와 다름)
      this.count += 1 + payload; // state.count → this.count
    },
    updateWeather(payload) { // payload는 data를 의미
      // mutation 없이 직접 상태 변경 (매개변수 state 불필요)
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

    // 비동기 함수 async (비동기 처리를 동기식처럼 작성)
    async getWeather() {
      // 환경 변수 사용
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.weatherData.city}&appid=${API_KEY}`;

      // await: Promise가 완료될 때까지 대기
      await fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          // this: 현재 store 인스턴스를 가리킴
          // updateWeather: 다른 action을 직접 호출
          // Vuex와 달리 commit이나 dispatch 불필요
          this.updateWeather(data);
        })
        .catch(err => {
          alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        })
    }
  }
  
})