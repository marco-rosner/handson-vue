<script setup lang="ts">
import { reactive } from 'vue'
import { useItensStore } from '../stores/itens';

const item = reactive({
    title: '',
    description: ''
})

const store = useItensStore()

const { addItem } = store;

console.log('item >>>', item)

</script>

<template>
    <div class="addItens">
        <h3>Add your itens below:</h3>
        <form @submit.prevent="addItem(item)">
            <div class="formField">
                <label for="title">Title</label>
                <input type="text" name="title" class="fieldSize" v-model="item.title" />
            </div>
            <div class="formField">
                <label for="description">Description</label>
                <input type="text" name="description" class="fieldSize" v-model="item.description" />
            </div>
            <div class="addItem">
                <button type="submit">Add item</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.addItens h3 {
    text-align: left;
}

.formField {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0.5rem;
}

.fieldSize {
    width: 250px;
}

.addItem {
    display: flex;
    justify-content: end;
}
</style>