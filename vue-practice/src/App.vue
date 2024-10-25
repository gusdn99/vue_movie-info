<template>
  <h1>Ref & Reactive</h1>
  <p>{{ count }}</p> <!-- 템플릿에서는 ref의 .value 자동 언래핑(생략 가능) -->
  <p>{{ str }}</p> <!-- 템플릿에서는 ref의 .value 자동 언래핑(생략 가능) -->
  <p>obj(ref): {{ obj.name }}</p> <!-- ref 객체도 템플릿에서는 .value 생략 가능 -->
  <p>reactive_obj: {{ reactive_obj.name }}</p> <!-- reactive 객체는 항상 직접 접근 -->

  <h1>{{ title }}</h1>
  <Comp v-model="title" /> <!-- v-model로 자식과 양방향 데이터 바인딩 -->

  <!-- v-model로 salary와 입력 필드를 양방향 바인딩 -->
  <input
    v-model="salary"
    placeholder="수입을 숫자로 입력"/>
  <p>actual salary: {{actualSalary}}</p> <!-- computed로 계산된 실수령액 표시 -->
</template>

<script setup>

  // ref: 모든 타입(원시값, 객체)을 반응형으로 만들 수 있음
  // reactive: 객체만 반응형으로 만들 수 있음
  // computed: 반응형 계산 속성 생성
  import { ref, reactive, computed } from 'vue'; 
  import Comp from './components/Comp.vue';

  // ref로 원시값(primitive) 반응형 만들기
  const count = ref(0); // 숫자형
  const str = ref('hello'); // 문자열

  // ref로 객체 반응형 만들기
  const obj = ref({name: "kim"});

  // reactive로 객체 반응형 만들기
  const reactive_obj = reactive({name: "kim"});

  console.log('ref_obj', obj.value.name); // ref 객체는 .value로 접근 (스크립트 내에서)
  console.log(reactive_obj.name); // reactive 객체는 직접 접근

  let title = ref('title'); // 반응형 변수 생성

  const salary = ref(null); // 입력받을 급여액 (반응형)
  const taxRate = 3.3;
  
  // computed: 다른 반응형 데이터를 기반으로 계산된 값을 반환
  const actualSalary = computed(() => { // salary가 변경될 때마다 자동 재계산
    return salary.value - (taxRate/100) * salary.value; // return: 계산된 결과를 반환 (필수)
  })
</script>

<style scoped lang="scss">
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    :hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    .vue {
      &:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
      }
    }
  }
</style>
