<script setup lang="ts">
import {ref} from 'vue';

//define states
const isOpen = ref(false);

// define props
const project = defineProps({
    name: String,
    imageURL: String,
    stack: { type: Array, required: true },
    status: String,
    codeURL: String,
    liveURL: String,
    description: String
} );

//open section
if (project.name !== '') {
    isOpen.value = true;
}

const {name, imageURL, stack, status, codeURL, liveURL, description} = project;
//const project = defineProps({setProject: Object})

const removeSection = () => {
    isOpen.value = false;
};
console.log(status)
</script>

<template >
<section class="Project__section" v-if="isOpen">
    <h2 class="Project__section__h2">{{name}}</h2>
    <button class="Project__section__btn"  @click="removeSection">Click to remove project.</button>

</section>
</template>

<style>
@import '../CSS/Project.css'
</style>