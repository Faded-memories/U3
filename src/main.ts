import { createSSRApp } from "vue";
import App from "./App.vue";
// import { createPinia } from 'pinia' //引入pinia

export function createApp() {
  const app = createSSRApp(App);
  // app.use(createPinia())
  return {
    app,
  };
}
