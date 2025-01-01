<!-- src/App.vue -->
<template>
  <div class="container">
    <TodoApp />
  </div>
</template>

<script setup>
import TodoApp from '@/components/TodoApp.vue'
</script>

<style>
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}
</style>