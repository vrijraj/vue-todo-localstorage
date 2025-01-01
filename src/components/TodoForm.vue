// src/components/TodoForm.vue
<template>
  <form @submit.prevent="handleSubmit" class="todo-form">
    <input 
      v-model="todoText"
      type="text"
      placeholder="What needs to be done?"
      required
    >
    <button type="submit">Add</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])
const todoText = ref('')

const handleSubmit = () => {
  emit('add', todoText.value.trim())
  todoText.value = ''
}
</script>

<style scoped>
.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style>