<template>
  <div class="layout w-full">
    <div class="flex items-center gap-12px p-16px bg-blue">
      <router-link to="/home">
        <el-button>home</el-button>
      </router-link>
      <router-link to="/index">
        <el-button>index</el-button>
      </router-link>
      <router-link to="/about">
        <el-button>about</el-button>
      </router-link>
    </div>
    <div class="pt-32px">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
