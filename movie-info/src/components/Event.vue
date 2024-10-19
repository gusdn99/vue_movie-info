<template>
  <!--
    스타일 동적 적용
    "{클래스명 : 조건}"
    true일 때는 클래스 추가되고, false일 때는 클래스가 추가되지 않음
  -->
  <!-- 동적 클래스 바인딩: isOpen이 true일 때 'show' 클래스 추가 -->
  <div class="event" :class="{show : isOpen}">
    <p>{{ text }}</p> <!-- text prop을 표시 -->
    <button @click="isOpen=false">X</button> <!-- X 버튼클릭 시 isOpen을 false로 설정. show 클래스가 제거됨 -->
  </div>
</template>

<script>
  // export default {} - 대표 컴포넌트로 내보낼 때 사용. 컴포넌트를 모듈로 만듦.
  export default { // 컴포넌트의 JavaScript 객체를 내보내는 역할
    name: 'EventComponent', // 컴포넌트 이름 (두 단어 이상 사용 권장) Vue 내부에서 사용됨.
    props: { // 부모 컴포넌트로부터 데이터를 전달 받을 때 사용.
      // 변수명: 자료형
      text: String, // 부모로부터 받을 text prop 정의 (문자열 타입)
      isEventOpen: Boolean,
    },
    data() { // 컴포넌트의 반응형 데이터를 정의하는 함수
      return {
        isOpen: true // 컴포넌트의 내부 상태. 이 값에 따라 show 클래스의 추가/제거가 결정됨
      }
    }
  }
</script>

<style>
  .event {
    background: #444;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
    font-size: small;
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: none; /* 기본적으로 요소를 숨김 */
  }

  .show {
    display: flex; /* .show 클래스가 적용되면 요소를 보이게 함 */
  }

  .event p {
    margin: 0;
  }

  .event button {
    margin: 0;
  }
</style>