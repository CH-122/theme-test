<script lang="ts">
import { defineComponent } from "vue";
import BasePage from "../basePage.vue";

// import useAppConfigStore from "@/store/appConfig.ts";

// const appConfigStore = useAppConfigStore();
export default defineComponent({
  name: "home",
  extends: BasePage,
  setup: BasePage.setup,
});
</script>
