// src/components/TodoList.vue
<template>
  <ul class="todo-list">
    <li v-for="todo in todos" :key="todo.id" class="todo-item">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="$emit('toggle', todo.id)"
      >
      <span :class="{ completed: todo.completed }">
        {{ todo.text }}
      </span>
      <button @click="$emit('delete', todo.id)" class="delete-btn">
        ×
      </button>
    </li>
  </ul>
</template>

<script setup>
defineProps(['todos'])
defineEmits(['toggle', 'delete'])
</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid var(--border-color);
  gap: 10px;
}

.completed {
  text-decoration: line-through;
  color: #999;
}

.delete-btn {
  margin-left: auto;
  background: none;
  border: none;
  color: #ff4444;
  font-size: 18px;
  cursor: pointer;
}

.delete-btn:hover {
  color: #cc0000;
}
</style>