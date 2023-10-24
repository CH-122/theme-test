<template>
  <component :is="dealComponent"></component>
</template>

<script setup lang="ts">
import useAppConfigStore from "@/store/appConfig.ts";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const appConfigStore = useAppConfigStore();

const { config } = storeToRefs(appConfigStore);

const route = useRoute();

const dealComponent = computed(() => {
  let name = "OppoIndex";

  return name;
});
</script>

<style scoped></style>
