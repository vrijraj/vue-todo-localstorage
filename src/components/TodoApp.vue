<!-- src/components/TodoApp.vue -->
<template>
  <div class="todo-app">
    <h1>Todo App</h1>
    <TodoForm @add="addTodo" />
    <TodoFilters v-model="filter" />

    <TodoList
      :todos="filteredTodos"
      @toggle="toggleTodo"
      @delete="deleteTodo"
    />

    <div class="todo-footer">
      <span>{{ remaining }} items left</span>
      <button
        v-if="todos.length > remaining"
        @click="clearCompleted"
        class="clear-btn"
      >
        Clear completed
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useTodos } from "../composables/useTodos";
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
import TodoFilters from "./TodoFilters.vue";

const {
  todos,
  filter,
  filteredTodos,
  remaining,
  loadTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  clearCompleted,
} = useTodos();

onMounted(() => {
  loadTodos();
});
</script>

<style scoped>
.todo-app {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  color: #666;
}

.clear-btn {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
}

.clear-btn:hover {
  color: #666;
}
</style>