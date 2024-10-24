import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store/store'

// import the fontawesome core
// 아이콘을 등록하고 관리하는 데 사용됨.
import { library } from '@fortawesome/fontawesome-svg-core'

// import font awesome icon component
// 아이콘을 화면에 렌더링하는 데 사용됨.
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 사용할 아이콘 불러오기 (하이픈 사용 불가, 카멜 케이스로 작성)
import { faBarsStaggered, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// 아이콘 등록하기
// 등록된 아이콘들만 프로젝트에서 사용할 수 있음.
library.add(faBarsStaggered, faLocationDot, faMagnifyingGlass);

createApp(App)
  .use(store) // .use(store)로 Vuex store를 전역으로 주입
  .component('font-awesome-icon', FontAwesomeIcon) // 템플릿에서 <font-awesome-icon :icon="['fas', 'bars-staggered']"/> 와 같이 사용 가능
  .mount('#app')
