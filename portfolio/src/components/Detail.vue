<template>
  <section id="detail" class="container"> <!-- container: 반응형 고정 너비 컨테이너 -->
    <!-- 
      props.data를 통해 전달받은 데이터에 접근합니다.
      $route.params.id를 인덱스로 사용하여 특정 항목에 접근합니다.
    -->
    <h1>{{ props.data[$route.params.id].title}}</h1> <!-- props 생략 가능 -->
    <!--
      $route 객체를 통해 현재 라우트 정보에 접근
      params 객체는 URL의 동적 세그먼트 값을 포함
      id는 라우트 정의에서 사용한 동적 세그먼트의 이름
    -->
    {{ $route.params.id }} 
    <article class="pb-5"> <!-- pb-5: 아래쪽 패딩을 크게 설정 -->
      <img 
        :src="`${data[$route.params.id].imgUrl}`" 
        :alt="`${data[$route.params.id].title}`"
      />
      <p>{{ data[$route.params.id].desc }}</p>
      <small class="text-secondary">{{ data[$route.params.id].skills }}</small> <!-- text-secondary: 보조 텍스트 색상 적용 -->
      <p>
        <!--
          btn: 버튼 스타일 적용
          btn-primary: 주요 강조 버튼 스타일
          mt-4: 위쪽 마진 추가
        -->
        <a 
          :href="`${data[$route.params.id].link}`" 
          class="btn btn-primary mt-4"
          target="_blank"
        >홈페이지
        </a>
      </p>
      <br>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta nihil earum harum possimus quidem minus voluptatibus vitae expedita quia voluptatem dolorum pariatur omnis, molestias, placeat quo cumque deserunt at.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, consequatur. Alias dignissimos beatae sequi corrupti atque ducimus expedita optio voluptatum maiores nisi, vero nobis consequatur neque ut soluta nemo aliquam!</p>

      <!-- 
        $router.back()
          Vue Router의 프로그래매틱 네비게이션 메서드
          브라우저의 히스토리에서 이전 페이지로 이동
      -->
      <button @click="$router.back()" class="btn btn-secondary">돌아가기</button> 
    </article>
  </section>
</template>

<script setup>
  const props = defineProps({ // defineProps를 사용하여 부모로부터 전달받은 props를 정의
    data: Array,
  })
</script>

<style lang="scss" scoped> /* scss를 사용하려면 npm install -D sass 입력해서 의존성 추가해야 함 */
  #detail h1 { /* Nesting 시작: #detail h1 */
    display: flex;
    gap: 1rem;
    align-items: center;
    .badge { /* Nesting: .badge는 #detail h1의 자식 */
      font-size: small;
    }
  } /* Nesting 종료: #detail h1 */

  article { /* Nesting 시작: article */
    img { /* Nesting: img는 article의 자식 */
      width: 100%;
      aspect-ratio: 8/3;
      object-fit: cover;
      object-position: top;
      margin-bottom: 1em;
    }
  } /* Nesting 종료: article */
</style>