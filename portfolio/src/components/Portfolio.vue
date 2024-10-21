<template>
  <section id="portfolio" class="container"> <!-- container: 반응형 고정 너비 컨테이너 -->
    <h1>Portfolio</h1>
    <ul class="list row"> <!-- row: 그리드 행을 생성 -->
      <!--
        col-md-4: 중간 크기 화면에서 4칸 차지 (3개의 열)
        item은 변수 이름
      -->
      <li class="col-md-4" v-for="item in data">
        <img :src="item.imgUrl" alt="1">
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
        <!--
          mb-3: 아래쪽 마진 추가 
          text-secondary: 보조 텍스트 색상 적용
        -->
        <small class="mb-3 text-secondary">{{ item.skills}}</small>

        <!--
          router-link 컴포넌트: Vue Router에서 제공하는 네비게이션 컴포넌트. 클릭 시 페이지 새로고침 없이 라우트 변경
          :to 속성에 동적으로 경로 생성
          '/detail/': 라우트의 경로(routes 배열에서 정의한 path)
          item.id는 현재 항목의 고유 식별자
          id는 라우트 정의에서 사용한 동적 세그먼트의 이름
        -->
        <router-link class="btn btn-primary" :to="'/detail/' + item.id">상세보기</router-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
  const props = defineProps({
    data: Array,
  })
  console.log(props.data);
</script>

<style lang="scss"> /* scss를 사용하려면 npm install -D sass 입력해서 의존성 추가해야 함 */
  #portfolio { /* Nesting 시작: #portfolio */
    h1 { margin-bottom: 1rem; } /* Nesting: h1은 #portfolio의 자식 */
    .list { /* Nesting: .list는 #portfolio의 자식 */
      list-style-type: none;
      padding: 0;

      li { /* Nesting: li는 .list의 자식 */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 10vh;
        img { /* Nesting: img는 li의 자식 */
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          object-position: top;
        }
        h4 { margin-top: 1rem; } /* Nesting: h4는 li의 자식 */
      }
    }
  } /* Nesting 종료: #portfolio */
</style>