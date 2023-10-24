import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import pinia from "./store";
import registerAllComp from "./theme/registerAllComp";

const app = createApp(App);

app.use(router);

app.use(pinia);

registerAllComp(app);

app.mount("#app");
