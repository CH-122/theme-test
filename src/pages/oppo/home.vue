<template>
  <div>oppo home</div>

  <router-link to="/home/children1"
    ><el-button>children1</el-button></router-link
  >
  <router-link to="/home/children2"
    ><el-button>children2</el-button></router-link
  >
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
