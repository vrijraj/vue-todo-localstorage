// src/components/TodoFilters.vue
<template>
  <div class="filters">
    <button 
      v-for="f in filters" 
      :key="f"
      :class="{ active: modelValue === f.toLowerCase() }"
      @click="$emit('update:modelValue', f.toLowerCase())"
    >
      {{ f }}
    </button>
  </div>
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

const filters = ['All', 'Active', 'Completed']
</script>

<style scoped>
.filters {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}

button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

button.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}
</style>
