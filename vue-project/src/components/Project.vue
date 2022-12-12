<script setup lang="ts">
import { ref } from 'vue';
import { techStackArr } from '../../data';


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
});

//open section
if (project.name !== '') {
    isOpen.value = true;
}

let { name, imageClass, stack, status, codeURL, liveURL, description } = project;

//convert stack arr into stack objects
const stackObjects = stack.map((item) => {
    const match = techStackArr.filter((tech) => {
        if (tech.name === item) { return tech }
    })

    return match[0]
})

//define functions
const removeSection = () => {
    isOpen.value = false;
};

</script>

<template type="module">
    <section class="Project__section" v-if="isOpen">

        <h2 class="Project__section__h2">{{ name }}</h2>
        <button class="Project__section__btn" @click="removeSection">Click to remove project.</button>

        <article class="Project__section__grid__container">
            <ul class="grid__item__list list">
                <li>Name: {{ name }}</li>
                <li v-if="liveURL !== ''"><a target="_blank" :href="`${liveURL}`">Click here for the live website</a>
                </li>
              
                <li><a target="_blank" :href="`${codeURL}`">Click here to view the code on GitHub</a></li>
                
                <li class="grid__item__list  status">Status: {{ status }}</li>
                <li>{{ description }}</li>
            </ul>
            <div :class="` project__grid__item__img  project__${imageClass}`"></div>
            <ul class="grid__item__stack__container">
                <li class="flex__item__li" v-for="i in stackObjects">
                <img class="flex__item__img" v-bind:src="`${i.logoURL}`" v-bind:alt="`${i.name}`">
                <p class="flex__item__name">{{ i.name }}</p>
            </li>
            </ul>

        </article>

    </section>
</template>

<style>
@import '../CSS/Project.css'
</style>