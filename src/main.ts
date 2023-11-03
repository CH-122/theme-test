import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import pinia from "./store";
import registerAllComp from "./theme/registerAllComp";
import NoPage from "@/components/404.vue";

const app = createApp(App);

app.use(router);

app.use(pinia);

registerAllComp(app);

app.component("404", NoPage);

app.mount("#app");
