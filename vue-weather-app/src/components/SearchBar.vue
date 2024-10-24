<template>
  <div class="search-bar">
    <form @submit.prevent> <!-- form의 기본 제출 동작 방지 (.prevent) -->
      <div class="form-group">
        <input @input="inputText = $event.target.value" type="search" placeholder="지역을 입력해 주세요.">
        <!-- 
          commit으로 mutation 호출하여 검색할 도시 변경
          dispatch로 action 호출하여 변경된 도시의 날씨 데이터 요청
        -->
        <button 
          @click="
            $store.commit('onSearchCity', inputText);
            $store.dispatch('getWeather');
          "
        > <!-- inputText를 매개변수(payload)로 store에 전달 -->
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" /> <!-- 아이콘 사용 -->
        </button>
      </div>
    </form>
  </div>
  <!-- <p>{{ inputText }}</p> -->
</template>

<script setup>
  import { ref } from 'vue';
  const inputText = ref(''); // 입력값을 저장할 반응형 변수

  // 이 컴포넌트가 발생시킬 수 있는 이벤트 정의
  const emits = defineEmits(['onSearchCity']); // 이벤트를 정의하고 함수를 반환
</script>

<style lang="scss" scoped>
  .search-bar {
    padding: 8px 20px;
    border-radius: 40px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 0 20px;
  
    form {
      .form-group {
        display: flex;
        input {
          width: 100%;
          border: none;
          padding: 1em 0;
          font-size: 18px;
          outline: none;
        }
        button {
          background: transparent;
          border: none;
          &:hover { cursor: pointer; }
          .icon { font-size: 24px; }
        }
      }
    }
  }
</style>