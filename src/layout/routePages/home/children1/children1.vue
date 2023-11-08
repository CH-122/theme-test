<script lang="ts">
import { defineComponent } from "vue";
import ThirdBasePage from "../../..//thirdBasePage.vue";

// import useAppConfigStore from "@/store/appConfig.ts";

// const appConfigStore = useAppConfigStore();
export default defineComponent({
  name: "children1",
  extends: ThirdBasePage,
  setup: ThirdBasePage.setup,
});
</script>
