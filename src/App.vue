<template>
  <el-button type="primary" @click="changeCode">changeCode</el-button>
  <component :is="dealLoyout"></component>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layout/layoutComp/DefaultLayout.vue";
import OppoLayout from "@/layout/layoutComp/OppoLayout.vue";
import { computed } from "vue";
import useAppConfigStore from "@/store/appConfig.ts";
import { storeToRefs } from "pinia";

const appConfigStore = useAppConfigStore();

const { code } = storeToRefs(appConfigStore);

const dealLoyout = computed(() => {
  if (code.value === "oppo") {
    return OppoLayout;
  } else {
    return DefaultLayout;
  }
});

const changeCode = () => {
  if (code.value === "oppo") {
    code.value = "default";
  } else {
    code.value = "oppo";
  }
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
