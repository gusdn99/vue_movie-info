import { createWebHistory, createRouter } from "vue-router"; // vue-router에서 필요한 함수들을 가져옴.

// 라우팅할 컴포넌트들을 가져옴.
import TitlePage from "../components/TitlePage.vue";
import Portfolio from "../components/Portfolio.vue";
import About from "../components/About.vue";
import Detail from "../components/Detail.vue";

const router = createRouter({ // createRouter 함수를 사용하여 라우터 인스턴스를 생성
  history: createWebHistory(), // createWebHistory()는 HTML5 History API를 사용하는 라우터 모드를 생성. URL에 '#'이 없는 깔끔한 URL을 제공
  routes: [ // routes 배열은 경로와 컴포넌트를 매핑
    { path: '/', component: TitlePage }, // '/' 경로(홈페이지)에 TitlePage 컴포넌트를 매핑
    { path: '/portfolio', component: Portfolio }, // '/portfolio' 경로에 Portfolio 컴포넌트를 매핑
    { path: '/about', component: About }, // '/about' 경로에 About 컴포넌트를 매핑
    { path: '/detail/:id', component: Detail }, // :id'는 동적 세그먼트를 나타냄. 다양한 id 값에 대해 같은 컴포넌트를 사용할 수 있게 함.
  ]
})

export default router;
