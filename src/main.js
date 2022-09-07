import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App.vue";
import mitt from "mitt";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);
const emitter = mitt();

const optionsToast = {
  position: "top-right",
  timeout: 2543,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false
};



app.config.globalProperties.emitter = emitter

app.use(Toast, optionsToast);
app.mount("#app");
