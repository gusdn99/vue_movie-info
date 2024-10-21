<template>
  <!--
    navbar: 네비게이션 바 컨테이너
    navbar-expand-lg: 큰 화면에서 네비게이션 바 확장
    bg-body-tertiary: 배경색 설정
    fixed-top: 화면 상단에 고정
    data-bs-theme="dark": 다크 테마 적용 
  -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
    <div class="container-fluid"> <!-- container-fluid: 전체 너비 컨테이너 -->
      <a class="navbar-brand" href="#">Doolee</a> <!-- navbar-brand: 브랜드/로고 스타일 -->

      <!-- navbar-toggler: 모바일 토글 버튼 스타일 -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span> <!-- navbar-toggler-icon: 토글 아이콘 -->
      </button>
      <div class="collapse navbar-collapse" id="navbarNav"> <!-- collapse navbar-collapse: 접을 수 있는 네비게이션 컨텐츠 -->
        <!--
          navbar-nav: 네비게이션 항목 리스트
          ms-auto: 왼쪽 마진 자동 (오른쪽 정렬)
        -->
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"> <!-- nav-item: 네비게이션 항목 -->
            <!--
              nav-link: 네비게이션 링크 스타일
              active: 현재 활성화된 링크 표시
              router-link 컴포넌트: Vue Router에서 제공하는 네비게이션 컴포넌트. 클릭 시 페이지 새로고침 없이 라우트 변경
              'to' 속성은 링크의 목적지를 지정
              "/": 라우트의 경로(routes 배열에서 정의한 path)
            -->
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <!--
              router-link: 라우터 지원 앱에서 사용자 네비게이션을 가능하게 함.
              'to' 속성은 링크의 목적지를 지정
              "/portfolio": 라우트의 경로(routes 배열에서 정의한 path)
            -->
            <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <!--
              router-link: 라우터 지원 앱에서 사용자 네비게이션을 가능하게 함.
              'to' 속성은 링크의 목적지를 지정.
              "/about": 라우트의 경로(routes 배열에서 정의한 path)
            -->
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped> /* scss를 사용하려면 npm install -D sass 입력해서 의존성 추가해야 함 */
  .navbar { /* Nesting 시작: .navbar */
    .nav-item { margin-left: 2em; } /* Nesting: .nav-item은 .navbar의 자식 */
  } /* Nesting 종료: .navbar */
</style>