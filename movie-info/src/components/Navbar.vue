<template>
  <nav class="navbar">
    <a href="#">Home</a>
    <a href="#">Movies</a>
    <a href="#">About</a>
  </nav>
</template>

<script>
  // export default {} - 대표 컴포넌트로 내보낼 때 사용. 컴포넌트를 모듈로 만듦.
  export default { // 컴포넌트의 JavaScript 객체를 내보내는 역할
    name: 'NavbarComponent', // 컴포넌트 이름 (두 단어 이상 사용 권장) Vue 내부에서 사용됨.
  }
</script>

<style>
  .navbar {
    background: #000;
    padding: 20px;
    text-align: center;
  }

  .navbar a {
    color: #fff;
    text-decoration: none;
    padding: 1em;
  }
</style>