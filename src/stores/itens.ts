import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Item {
  title: string,
  description: string
}

export const useItensStore = defineStore('itens', () => {
  const itens = ref([{
    title: 'Your activity',
    description: 'Activity description'
  }])


  function addItem(item: Item) {
    itens.value.push({ title: item.title, description: item.description })
    return itens
  }

  function deleteItem(item: Item) {
    const i = itens.value.lastIndexOf(item)
    if(i > -1) itens.value.splice(i, 1)
  }

  function resetTODO() {
    if (window.confirm('Are you sure you want to reset the list?')) {
      itens.value = []
    }
  }

  return { itens, addItem, deleteItem, resetTODO }
})
