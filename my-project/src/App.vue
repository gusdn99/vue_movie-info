<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="increaseCount">count++</button>
    <p>{{ count }}</p> <!-- ref 변수는 템플릿에서 .value 없이 사용 가능 -->
    <ChildComp :color="color" bgColor="yellow"/> <!-- ChildComp 컴포넌트에 props 전달 -->
    <button @click="color='red'">change color</button>
  </div>
</template>

<script setup>
  import { ref, onMounted, watch } from 'vue'; // Vue 3의 Composition API에서 제공하는 함수들을 import
  import ChildComp from './components/ChildComp.vue'; // 자식 컴포넌트 import

  // ref()를 사용해 반응형 변수 생성. 컴포넌트가 다시 렌더링되어도 값이 유지됨
  let count = ref(0); // 상태변수 초기값(state)

  // 일반 변수. 반응형이 아니므로 값이 변경되어도 컴포넌트가 다시 렌더링되지 않음
  let title = "Hello Vue";
  let color = ref('green');

  onMounted(() => { // onMounted를 import해야 함.
    console.log('mounted');
  })

  const increaseCount = () => {
    count.value++; // ref로 생성된 변수는 .value로 접근해야 함
  }

  // color 변수의 변화 감지
  watch(color, ()=> { // watch를 import해야 함.
    console.log('color 변경')
  })
</script>

<style scoped> /* scoped를 사용하면 이 스타일은 현재 컴포넌트에만 적용됨 (지역 스타일) */
  
</style>
