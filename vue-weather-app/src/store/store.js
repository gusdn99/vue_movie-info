import { createStore } from 'vuex'; // createStore: Vuex 4에서 스토어를 생성하는 함수

// store 만들기
export default createStore({ // createStore로 store 인스턴스 생성 및 내보내기
  state: { // 중앙 집중식 데이터 저장소. 컴포넌트 간에 공유할 데이터를 보관
    // initial state
    count: 0,
    weatherData: {
      icon: 'icon',
      temp: 0,
      text: 'text',
      location: 'location',
      city: 'Seoul',
    },
    toggle: false, // true일 때 about을 보여줌.
  },
  mutations: { // state를 변경할 수 있는 유일한 방법. 동기적 로직만 사용
    // mutations(데이터 변경) commit()으로 mutations 함수를 호출하여 상태변경 가능
    addCount(state, payload) {
      state.count += 1 + payload;
    },
    updateWeather(state, payload) { // payload는 data를 의미
      state.weatherData.icon = payload.weather[0].icon;
      state.weatherData.temp = payload.main.temp;
      state.weatherData.text = payload.weather[0].description;
      state.weatherData.location = payload.sys.country;
      state.weatherData.city = payload.name;
    },
    // SearchBar
    onSearchCity(state, payload){ // payload는 inputText를 의미
      state.weatherData.city = payload;
    },
    toggleButton (state) {
      state.toggle = !state.toggle;
    }
  },
  actions: { // 비동기 작업을 처리하고 mutations를 호출. API 호출 등의 비동기 로직을 처리할 때 사용
    getWeather(context) {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`;
      fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          // mutations 함수로 날씨 정보 업데이트
          context.commit('updateWeather', data); // mutations 함수에 전달
        })
        .catch(err => {
          alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        })
    }
  }
})