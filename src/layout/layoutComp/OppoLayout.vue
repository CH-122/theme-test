<template>
  <div class="flex h-screen">
    <div class="flex flex-col items-center gap-12px p-20px bg-blue">
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

    <div class="flex-1 pl-32px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
