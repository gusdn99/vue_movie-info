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
    toggle: false, // true일 때 about 페이지 보여줌.
  },

  // mutations(데이터 변경) commit()으로 mutations 함수를 호출하여 상태변경 가능
  mutations: { // state를 변경할 수 있는 유일한 방법. 동기적 로직만 사용
    // count 증가 mutation
    // state: 현재 상태를 참조하는 매개변수
    addCount(state, payload) {  // payload: 컴포넌트에서 전달하는 데이터 (여기서는 count)
      // state.count: 현재 count 값
      state.count += 1 + payload; // state.count에 (1 + payload)를 더함
    },

    // 날씨 데이터 업데이트 mutation
    updateWeather(state, payload) { // payload: API로부터 받은 날씨 데이터
      state.weatherData.icon = payload.weather[0].icon;
      state.weatherData.temp = payload.main.temp;
      state.weatherData.text = payload.weather[0].description;
      state.weatherData.location = payload.sys.country;
      state.weatherData.city = payload.name;
    },
    // 검색할 도시를 변경하는 mutation
    onSearchCity(state, payload){ // payload는 SearchBar에서 전달받은 inputText를 의미
      state.weatherData.city = payload; // 검색할 도시 업데이트
    },
    // toggle 값을 반전시키는 mutation
    toggleButton (state) {
      // 현재 상태를 반전
      state.toggle = !state.toggle; // false -> true 또는 true -> false로 전환
    }
  },
  // 비동기 작업을 처리하고 mutations를 호출. API 호출 등의 비동기 로직을 처리할 때 사용
  actions: {
    // getWeather: 업데이트된 city로 날씨 데이터를 다시 요청하는 action
    getWeather(context) {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`;
      fetch(API_URL) // fetch(): 네트워크 요청을 보내고 Promise를 반환하는 웹 API
        // res(response): 서버로부터 받은 응답 객체
        // res.json(): JSON 형태의 응답 데이터를 JavaScript 객체로 파싱하는 메서드
        .then(res => res.json())
        .then(data => { // data: 파싱된 JSON 데이터가 JavaScript 객체로 변환된 결과
          console.log(data);
          // context.commit: mutation을 호출
          // updateWeather mutation을 호출하여 상태 업데이트
          context.commit('updateWeather', data); // 날씨 데이터 업데이트
        })
        .catch(err => {
          alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        })
    }
  }
})