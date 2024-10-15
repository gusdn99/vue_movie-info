<template>
  <h1>영화정보</h1>
  
  <!-- 
    v-for="(item, index) in 데이터"
    :key="키값(배열번호)"
    반복문 돌리려먼 키값이 필요함.
  -->
  <div v-for="(movie, i) in data" :key="i" class="item">
    
    <figure>
      <!-- 동적 값을 넣으려면 속성 앞에 콜론(:)을 붙임. -->
      <img :src="`${movie.imgUrl}`" :alt="movie.title">
    </figure>
    <div class="info">

      <!--
        중괄호 2개 써서 변수명을 적음.(데이터 바인딩)
        :속성명="데이터" 
      -->
      <h3 class="bg-yellow" :style="textRed">{{ movie.title }}</h3>
      <p>개봉 : {{ movie.year }}</p>
      <p>장르 : {{ movie.category }}</p>

      <!--
        v-on:이벤트명="실행코드" 또는
        @:이벤트명="실행코드"
        매개변수 i = 배열값
      -->
      <button
        @click="increaseLike(i)">좋아요
      </button>
      <span>{{ movie.like }}</span>
      <p>
        <button @click="isModal=true">상세보기</button>
      </p>
    </div>
  </div>

  <!-- 조건문: v-if -->
  <div class="modal" v-if="isModal">
    <div class="inner">
      <h3>Detail</h3>
      <p>영화 상세정보</p>
      <button @click="isModal=false">닫기</button>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'App', // 컴포넌트 이름
    // data 옵션: 컴포넌트의 반응형 데이터를 정의
    data() {
      return {
        isModal: false,
        data:[
          {
            title: "노량",
            year: 2023,
            category: "액션, 드라마",
            textRed: "color: red",
            like: 0,
            imgUrl: './assets/노량.jpg'
          },
          {
            title: "아쿠아맨과 로스트 킹덤",
            year: 2023,
            category: "액션, 판타지, 어드벤처",
            like: 0,
            imgUrl: './assets/아쿠아맨.jpg'
          },
          {
            title: "3일의 휴가",
            year: 2023,
            category: "판타지, 드라마",
            like: 0,
            imgUrl: './assets/3일의휴가.jpg'
          },
        ]
        
      }
    },
    // methods 옵션: 컴포넌트의 메소드를 정의
    methods: {
      increaseLike(i) {
        // this를 사용하여 컴포넌트 인스턴스의 프로퍼티와 메소드에 접근
        // 객체 내부에서 사용하는 변수는 앞에 this를 붙여줌.
        this.data[i].like += 1;
      }
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
</style>
