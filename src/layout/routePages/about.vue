<template>
  <component :is="dealComponent('oppo', 'about')"></component>
</template>
<script setup lang="ts">
import { getCurrentComp } from "../../theme/themeUtils";
const dealComponent = (theme: string, name: string) => {
  return getCurrentComp(theme, name);
};
</script>
