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
  // let name = "";
  // let routeName = route.name as string;
  let routeName = route.matched[1].name as string;

  console.log(route);

  // name =
  //   code.value.charAt(0).toUpperCase() +
  //   code.value.slice(1) +
  //   routeName.charAt(0).toUpperCase() +
  //   routeName.slice(1);

  // console.log(name);

  console.log("compName", getCurrentComp(code.value, routeName));

  return getCurrentComp(code.value, routeName);
});

onMounted(() => {});
</script>

<style scoped></style>
