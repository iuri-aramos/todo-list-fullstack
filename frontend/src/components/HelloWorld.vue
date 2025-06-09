<script setup>
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    default: 'Welcome to Your Vue.js App'
  }
})
</script>

<template>
  <h1>{{ msg }}</h1>
  
</template>
