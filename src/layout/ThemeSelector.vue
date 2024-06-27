<template v-slot="theme-selector">
  <component :is="dealComponent('oppo', name)"></component>
</template>
<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
});
import { getCurrentComp } from "../theme/themeUtils";
const dealComponent = (theme: string, name: string) => {
  return getCurrentComp(theme, name);
};
</script>
