<script lang="ts">
import { defineComponent } from "vue";
import SecondBasePage from "../../secondBasePage.vue";

// import useAppConfigStore from "@/store/appConfig.ts";

// const appConfigStore = useAppConfigStore();
export default defineComponent({
  name: "about",
  extends: SecondBasePage,
  setup: SecondBasePage.setup,
});
</script>
