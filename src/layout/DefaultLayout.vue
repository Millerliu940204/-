<template>
  <div class="layout">
    <Sidebar />

    <div class="main">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/SlidingSidebar.vue'
// import Navbar from '@/components/Navbar.vue' //
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: #f4f4f4; /* 或你的主體背景色 */
}
</style>
