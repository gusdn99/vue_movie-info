<template>
  <div class="modal" v-if="isModal"> <!-- v-if 디렉티브: isModal이 true일 때만 모달을 렌더링 -->
    <div class="inner">
      <h3>{{data[selectedMovie].title}}</h3> <!-- data prop의 selectedMovie 인덱스에 해당하는 영화 제목 표시 -->
      <p>영화 상세정보</p>
      <!-- $emit('이벤트명') -->
      <button @click="$emit('closeModal')">닫기</button> <!-- 닫기 버튼 클릭 시 'closeModal' 이벤트를 부모 컴포넌트로 emit -->
    </div>
  </div>
</template>

<script>
  // export default {} - 대표 컴포넌트로 내보낼 때 사용. 컴포넌트를 모듈로 만듦.
  export default { // 컴포넌트의 JavaScript 객체를 내보내는 역할
    name: 'ModalComponent', // 컴포넌트 이름 (두 단어 이상 사용 권장) Vue 내부에서 사용됨.
    props: { // 부모 컴포넌트로부터 데이터를 전달 받을 때 사용.
      // 변수명: 자료형
      data: Array, // 부모로부터 받을 data prop 정의 (배열 타입)
      isModal: Boolean, // 부모로부터 받을 isModal prop 정의 (논리 타입)
      selectedMovie: Number, // 부모로부터 받을 selectedMovie prop 정의 (졍수 타입)
    }
  }
</script>

<style>
</style>