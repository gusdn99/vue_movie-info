<template>
  <div>
    <h2>Child Component</h2>
    <!--
      동적 스타일 데이터 바인딩
      왼쪽은 CSS 속성명, 오른쪽은 props로 받은 값
    -->
    <p :style="{color : color, backgroundColor: bgColor}">{{ color }}</p>
  </div>
</template>
<script setup>
  const props = defineProps({ // props 정의. 부모 컴포넌트로부터 color와 bgColor를 받음.
    color: String,
    bgColor: String,
  })
  console.log(props.color);
</script>
<style> /* 전역 스타일 (scoped가 없으므로 다른 컴포넌트에도 적용될 수 있음) */
  
</style>