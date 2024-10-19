<template>
  <div class="search-box">
    <!--
      v-model="변수"
      사용자에게 입력받은 값을 변수에 저장
      @input="inputText = $event.target.value" => v-model="inputText"

      change 이벤트
      입력 후 엔터를 치거나 확인 버튼을 누를 때 처리됨
      $emit: 부모 컴포넌트로 이벤트를 발생시킴
      $event.target.value: 현재 입력된 값
    -->
    <input
      type="search"
      @change="$emit('searchMovie', $event.target.value); inputText = $event.target.value; $event.target.value =''"
      placeholder="검색어 입력"
    >
    <button>검색</button>
  </div>
  <p>{{ inputText }}</p> <!-- inputText의 현재 값을 화면에 표시 -->
</template>
<script>
  // export default {} - 대표 컴포넌트로 내보낼 때 사용. 컴포넌트를 모듈로 만듦.
  export default { // 컴포넌트의 JavaScript 객체를 내보내는 역할
    name: 'SearchbarComponent', // 컴포넌트 이름 (두 단어 이상 사용 권장) Vue 내부에서 사용됨.
    data() { // 컴포넌트의 반응형 데이터를 정의하는 함수
      return {
        inputText: '', // 사용자 입력을 저장할 반응형 변수
      }
    },
    props: { // 부모 컴포넌트로부터 데이터를 전달 받을 때 사용.
      data: Array,
    },
    emits: ['searchMovie'], // 부모 컴포넌트로 전달할 이벤트를 명시적으로 선언
    // watch는 특정 상태변수가 변경됨을 감지하는 hook
    // 검사할 변수명(변경값) { 로직}
    watch: {
      inputText(name) {
        // 입력한 영화제목이 데이터에 있는지 확인
        // 객체 안의 data는 앞에 this 붙임.
        const findName = this.data.filter(movie => { // .filter(콜백함수)
          // includes(값) - 배열 안에 특정 값이 있는지 알려줌.
          return movie.title.includes(name);
        })
        if (findName.length == 0) {
          alert('해당하는 자료가 없습니다.');
        }
      }
    }
  }
</script>
<style>
  .search-box {
    padding: 10px;
    display: flex;
    justify-content: center;
  }

  .search-box input {
    padding: 5px 10px;
  }

  .search-box button {
    margin: 0;
  }
</style>