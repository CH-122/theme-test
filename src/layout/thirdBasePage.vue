<template>
  <component :is="dealComponent"></component>
</template>

<script setup lang="ts">
import useAppConfigStore from "@/store/appConfig.ts";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getCurrentComp } from "../theme/themeUtils";

const appConfigStore = useAppConfigStore();

const { code } = storeToRefs(appConfigStore);

const route = useRoute();

const dealComponent = computed(() => {
  let routeName = route.matched[2].name as string;

  console.log(route);

  console.log("compName", getCurrentComp(code.value, routeName));

  return getCurrentComp(code.value, routeName);
});

onMounted(() => {});
</script>

<style scoped></style>
