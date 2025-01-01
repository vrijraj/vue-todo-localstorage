// src/composables/useTodos.js
import { ref, computed } from 'vue'

export function useTodos() {
  const todos = ref([])
  const filter = ref('all')

  // Load todos from localStorage
  const loadTodos = () => {
    const saved = localStorage.getItem('todos')
    if (saved) todos.value = JSON.parse(saved)
  }

  // Save todos to localStorage
  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }

  // Add new todo
  const addTodo = (text) => {
    todos.value.push({
      id: Date.now(),
      text,
      completed: false
    })
    saveTodos()
  }

  // Delete todo
  const deleteTodo = (id) => {
    todos.value = todos.value.filter(todo => todo.id !== id)
    saveTodos()
  }

  // Toggle todo completion
  const toggleTodo = (id) => {
    const todo = todos.value.find(t => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
      saveTodos()
    }
  }

  // Clear completed todos
  const clearCompleted = () => {
    todos.value = todos.value.filter(todo => !todo.completed)
    saveTodos()
  }

  // Computed properties
  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'active':
        return todos.value.filter(t => !t.completed)
      case 'completed':
        return todos.value.filter(t => t.completed)
      default:
        return todos.value
    }
  })

  const remaining = computed(() => 
    todos.value.filter(t => !t.completed).length
  )

  return {
    todos,
    filter,
    filteredTodos,
    remaining,
    loadTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    clearCompleted
  }
}