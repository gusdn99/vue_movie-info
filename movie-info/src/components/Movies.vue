<template>
  <div class="container">
    <h1>영화정보</h1>    
    <!-- 
      v-for="(item, index) in 데이터"
      :key="키값(배열번호)"
      반복문 돌리려먼 키값이 필요함.
    -->
    <div v-for="(movie) in data" :key="movie.id" class="item">     
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
          @이벤트명="실행코드"
          매개변수 i = 배열값
        -->
        <button
          @click="$emit('increaseLike', movie.id)">좋아요
        </button>
        <span>{{ movie.like }}</span>
        <p>
          <!--
            $emit(이름, 전달할 값) 형태로 요청
            2번째 인자에 인덱스 번호를 전달
          -->
          <button @click="$emit('openModal', movie.id)">상세보기</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  // export default {} - 대표 컴포넌트로 내보낼 때 사용. 컴포넌트를 모듈로 만듦.
  export default { // 컴포넌트의 JavaScript 객체를 내보내는 역할
    name: 'MoviesComponent', // 컴포넌트 이름 (두 단어 이상 사용 권장) Vue 내부에서 사용됨.
    props: { // 부모 컴포넌트로부터 데이터를 전달 받을 때 사용.
      // 변수명: 자료형
      data: Array,// 부모로부터 받을 data prop 정의 (배열 타입)
    }
  }
</script>

<style>
  .container {
    padding: 20px;
  }
</style>