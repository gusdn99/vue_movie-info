<template>
  <section id="title">
    <div class="container"> <!-- container: 반응형 고정 너비 컨테이너 -->
      <div class="detail row">
        <figure class="col-md-6">
          <img src="../assets/images/title.png" alt="title">
        </figure>
        <div class="text col-md-6">
          <h2 v-html="title"></h2> <!-- v-html 디렉티브를 사용하여 HTML 콘텐츠를 동적으로 렌더링 -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const title = "Hello,<br> I'm David Kim"; // title 변수에 HTML 문자열을 할당
</script>

<style lang="scss"> /* scss를 사용하려면 npm install -D sass 입력해서 의존성 추가해야 함 */
  #title { /* Nesting 시작: #title */

    .container { /* Nesting: .container는 #title의 자식 */
      $navbar_height: 56px; // navbar 높이값
      height: 100vh;
      padding: $navbar_height;

      .row { /* Nesting: .row는 .container의 자식 */
        height: 100%;
        flex-direction: row-reverse;
      }
    }

    figure { /* Nesting: figure는 #title의 자식 */
      img { /* Nesting: img는 figure의 자식 */
        width: 100%;
      }
      display: grid;
      place-items: center;
    }

    .text { /* Nesting: .text는 #title의 자식 */
      h2 { /* Nesting: h2는 .text의 자식 */
        font-size: 4em;
      }

      display: grid;
      place-items: center;
    }
  } /* Nesting 종료: #title */
</style>