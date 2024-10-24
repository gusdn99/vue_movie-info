<template>
  <nav class="navbar">
    <!-- 
      토글 버튼 클릭 시 mutation 호출 
      commit('toggleButton')으로 toggle 상태 변경 
    -->
    <button class="toggle" @click="$store.commit('toggleButton')">
      <font-awesome-icon class="icon" :icon="['fas', 'bars-staggered']" /> <!-- 아이콘 사용 -->
    </button>
  </nav>
</template>

<script setup>

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