<template>
  <nav class="navbar">
    <!-- 
      토글 버튼 클릭 시 mutation 호출 
      commit('toggleButton')으로 toggle 상태 변경 
      actions의 toggleButton 함수 호출
    -->
    <button class="toggle" @click="store.toggleButton()">
      <font-awesome-icon class="icon" :icon="['fas', 'bars-staggered']" /> <!-- 아이콘 사용 -->
    </button>
  </nav>
</template>

<script setup>
  import { useStore } from '../store/store'; // 스토어 함수 임포트

  // 스토어 가져오기
  const store = useStore(); // useStore 호출하여 스토어 인스턴스 생성
</script>

<style scoped lang="scss">
  .navbar {
    background: #fff;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: end;

    button {
      border: none;
      background: transparent;
      cursor: pointer;
    }
    .icon {
      color: #333;
      font-size: 24px;
    }
  }
</style>