<script setup lang="ts">
import AddItens from './AddItens.vue'

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="formWrapper">
    <h1 class="green">{{ msg }}</h1>
    <AddItens />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  text-align: center;
}

.formWrapper{
  width: 400px;
}
</style>
