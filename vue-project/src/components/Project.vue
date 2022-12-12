<script setup lang="ts">
import {ref} from 'vue';


//define states
const isOpen = ref(false);

// define props
const project = defineProps({
    name: String,
    stack: { type: Array, required: true },
    status: String,
    codeURL: String,
    liveURL: String,
    description: String,
    imageClass: String,
} );

//open section
if (project.name !== '') {
    isOpen.value = true;
}

const {name, imageClass, stack, status, codeURL, liveURL, description} = project;

//define functions
const removeSection = () => {
    isOpen.value = false;
};

</script>

<template type="module">
<section class="Project__section" v-if="isOpen">
    
    <h2 class="Project__section__h2">{{name}}</h2>
    <button class="Project__section__btn"  @click="removeSection">Click to remove project.</button>

    <article class="Project__section__grid__container">
        <ul class="grid__item__list list">
            <li>Name: {{name}}</li>
            <li v-if="liveURL !== '' "><a target="_blank" :href="`${liveURL}`">Click here for the live website</a></li>
            <li><a target="_blank" :href="`${codeURL}`">Click here to view the code on GitHub</a></li>
            <li>Technologies: {{stack}}</li>
            <li>Status: {{status}}</li>
        </ul>
        <div :class="`grid__item__div__image__container project__grid__item__img  project__${imageClass}`"></div>
        <p class="grid__item__p desc">{{description}}</p>
       
    </article>

</section>
</template>

<style>
@import '../CSS/Project.css'
</style>