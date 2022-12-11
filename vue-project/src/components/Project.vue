<script setup lang="ts">
import {ref} from 'vue';

//define states
const isOpen = ref(false);

// define props
const project = defineProps({
    name: String,
    imageURL: String,
    ['stack']: { type: Array, required: true },
    status: String,
    codeURL: String,
    liveURL: String,
    description: String
} );

//open section
if (project.name !== '') {
    isOpen.value = true;
}

let name = project.name;
//const project = defineProps({setProject: Object})

const removeSection = () => {
    isOpen.value = false;
};

console.log("child", name)
</script>

<template >
<section class="Project__section" v-if="isOpen">
    <h2>{{name}}</h2>
    <h3>ahj</h3>
    <button @click="removeSection">Click to remove project.</button>

</section>
</template>

<style>
@import '../CSS/Project.css'
</style>