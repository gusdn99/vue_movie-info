<script setup>
  import Navbar from './components/Navbar.vue';
  import data from './assets/portfolio';
</script>

<template>
  <Navbar />
  
  <!-- router-view:
    현재 라우트에 매칭된 컴포넌트를 렌더링하는 영역
    :data 속성을 통해 data를 전달
    모든 라우트 컴포넌트가 이 데이터에 접근할 수 있음.
  -->
  <router-view :data="data"/>
</template>

<style scoped lang="scss"> /* scss를 사용하려면 npm install -D sass 입력해서 의존성 추가해야 함 */

</style>
