<script setup lang="ts">
import ListItem from './ListItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'

import { useItensStore } from '../stores/itens';
import { storeToRefs } from 'pinia';

const store = useItensStore()

const { resetTODO, deleteItem } = store
const { itens } = storeToRefs(store);

</script>

<template>
  <ListItem v-for="item in itens" :key="item.title">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ item.title }}</template>

    <template #description>{{ item.description }}</template>
    <template #button>
      <button :disabled="!itens.length" @click="deleteItem(item)">X</button>
    </template>
  </ListItem>
  <div class="resetButton">
    <button :disabled="!itens.length" @click="resetTODO">Reset List</button>
  </div>
</template>

<style scoped>
.resetButton {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
</style>