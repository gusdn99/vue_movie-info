import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import router from './router/router'; // 생성한 라우터 인스턴스를 가져옴.

createApp(App).use(router).mount('#app') // Vue 애플리케이션을 생성하고, 라우터를 사용하도록 설정한 후, '#app' 요소에 마운트
