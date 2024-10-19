<template>

  <!-- Navbar 컴포넌트 사용 -->
  <Navbar />

  <!-- Event 컴포넌트 사용
    props로 부모 컴포넌트(App) 데이터를 자식 컴포넌트(Event)에 전달하는 법
    속성명(props 변수) = "보낼 값"
    text가 props 변수 이름
    text prop에 data의 text 값을 전달
  -->
  <Event :text="text[eventTextNum]"/> <!-- "text"는 데이터의 변수 이름-->
  {{ eventTextNum }} <!-- 현재 표시 중인 텍스트의 인덱스를 화면에 출력 -->

  <!--
    Searchbar 컴포넌트 사용
    :data="data_temp": 자식 컴포넌트로 data_temp 배열을 전달
		@searchMovie: 자식 컴포넌트에서 발생한 searchMovie 이벤트를 처리
  -->
  <Searchbar :data="data_temp" @searchMovie="searchMovie($event)"/>
  <p>
    <button @click="showAllMovie" class="btn-all">전체보기</button>
  </p>

  <!--
    Movies 컴포넌트 사용
    data prop 전달
    openModal 이벤트 리스너 등록
    $event는 자식 컴포넌트에서 전달한 인덱스 값
  -->
  <Movies
    :data="data_temp"
    @openModal="isModal=true; selectedMovie=$event"
    @increaseLike="increaseLike($event)"
  />

  <!--
    Modal 컴포넌트 사용
    data, isModal, selectedMovie props 전달
    자식 컴포넌트에서 발생한 이벤트명(커스텀 이벤트)은 앞에 @ 추가
    closeModal 이벤트 리스너 등록
  -->
  <Modal
    :data="data"
    :isModal="isModal"
    :selectedMovie="selectedMovie"
    @closeModal="isModal=false"
  />
</template>

<script>

  // import {가져올 변수 이름} - 외부 변수를 가져올 때 사용(여러 개 가능)
  // import { data } from './assets/movies';
  // import 변수 이름 - 외부 대표 변수(default)를 가져올 때 사용(여러 개 불가!)
  import data from './assets/movies'; // data 객체를 불러옴.
  import Navbar from './components/Navbar.vue'; // Navbar 컴포넌트를 불러옴.
  import Event from './components/Event.vue'; // Event 컴포넌트를 불러옴.
  import Modal from './components/Modal.vue'; // Modal 컴포넌트를 불러옴.
  import Movies from './components/Movies.vue'; // Movies 컴포넌트를 불러옴.
  import Searchbar from './components/Searchbar.vue'; // Searchbar 컴포넌트를 불러옴.
  console.log(data)
  export default {
    name: 'App', // 컴포넌트 이름
    // data 옵션: 컴포넌트의 반응형 데이터를 정의
    data() {
      return {
        isModal: false, // 자식 컴포넌트에 전달할 데이터

        // 원본
        data: data, // 왼쪽은 템플릿에서 사용할 변수, 오른쪽은 movies.js에서 import한 data

        // 사본(검색 결과나 필터링된 결과를 저장)
        data_temp: [...data], // destructuring
        selectedMovie: 0, // 자식 컴포넌트에 전달할 데이터

        // 순환할 텍스트 배열
        text: [ // 자식 컴포넌트에 전달할 데이터
          'NETFLIX 강렬한 운명의 드라마, 경기크리처',
          '디즈니 100주년 기념작, 위시',
          '그날, 대한민국의 운명이 바뀌었다, 서울의 봄',
        ],
        eventTextNum: 0, // 현재 표시 중인 텍스트의 인덱스
        interval: null, // setInterval의 참조를 저장할 변수
      }
    },

    // methods 옵션: 컴포넌트의 메소드를 정의
    methods: {
      // 좋아요 수를 증가시키는 메서드
      increaseLike(id) {
        // this를 사용하여 컴포넌트 인스턴스의 프로퍼티와 메소드에 접근
        // 객체 내부에서 사용하는 변수는 앞에 this를 붙여줌.
        // this.data[i].like += 1;
        this.data.find(movie => { // find 메서드로 해당 id를 가진 영화를 찾아 좋아요 수 증가
          if(movie.id == id) {
            movie.like += 1;
          }
        })
      },

      // 검색 기능을 수행하는 메서드
      searchMovie(title) { // 자식 컴포넌트에 전달할 메서드
        // 영화제목이 포함된 데이터를 가져옴.
        this.data_temp = this.data.filter(movie => { // .filter(콜백함수)
          return movie.title.includes(title); // 제목에 검색어가 포함된 영화만 필터링
        }) 
      },

      // 전체 영화 목록을 보여주는 메서드
      showAllMovie() {
        this.data_temp = [...this.data]; // 원본 데이터를 다시 복사하여 전체 목록 표시
      }
    },
    // 컴포넌트 등록
    components: {
      // 왼쪽은 템플릿에서 사용할 컴포넌트 이름, 오른쪽은 import한 컴포넌트
      Navbar: Navbar,
      Event: Event,
      Modal: Modal,
      Movies: Movies,
      Searchbar: Searchbar,
    },

    // mounted: 컴포넌트에서 DOM이 만들어진 시점
    mounted() {
      console.log('mounted');
      this.interval = setInterval(() => {
        if(this.eventTextNum == this.text.length - 1) {
          this.eventTextNum = 0;
        } else {
          this.eventTextNum += 1;
        }
      }, 3000) // 컴포넌트가 종료되도 계속 interVal이 실행될 수도 있음.
    },

    // unmounted: 컴포넌트 종료
    unmounted() {
      clearInterval(this.interval);// interval 해제
    }
    
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    max-width: 768px;
    margin: 0 auto;
    padding: 20px;
  }

  h1,
  h2,
  h3 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  button {
    margin-right: 10px;
    margin-top: 1rem;
  }

  .item {
    width: 100%;
    border: 1px solid #ccc;
    display: flex;
    margin-bottom: 20px;
    padding: 1rem;
  }

  .item figure {
    width: 30%;
    margin-right: 1rem;
  }

  .item img {
    width: 100%;
  }

  .item .info {
    width: 100%;
  }

  .modal {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal .inner {
    background: #fff;
    width: 80%;
    padding: 20px;
    border-radius: 10px;
  }

  p:has(.btn-all) {
    text-align: center;
  }
</style>
