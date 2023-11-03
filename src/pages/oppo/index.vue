<template>
  <div>
    oppo index

    {{ appConfigStore.name }}
  </div>
</template>

<script setup lang="ts">
import useAppConfigStore from "@/store/appConfig.ts";

const appConfigStore = useAppConfigStore();
</script>

<style lang="scss" scoped></style>
