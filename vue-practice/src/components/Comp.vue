<script setup>
  import { ref } from 'vue'

  const model = defineModel(); // 부모의 v-model과 연결된 변수 생성
</script>

<template>
  <h2>{{ model }}</h2> <!-- model로 받은 데이터 표시 -->
  <p>inputText: {{ model}}</p>

  <!-- 입력값이 자동으로 부모의 title과 동기화 -->
  <input 
    type="text" 
    v-model="model"
  />
</template>