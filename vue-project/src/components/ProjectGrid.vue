<script setup lang="ts">
import { projectsArr } from '../../data';
import { ref } from 'vue';
import Project from '../components/Project.vue';

//define props


let setProject = ref({});


const selectProjectProp = (name: string) => {
    const prop = projectsArr.filter((project) => {
        return project.name === name ? project : undefined
    });
    setProject.value= prop[0];
    
};

</script>

<template>
    <section id="projects" class="ProjectGrid__section">
        <h2 class="ProjectGrid__section__h2">My Projects</h2>
        <p class="ProjectGrid__section__p">Click a project for more information</p>
        <ul class="ProjectGrid__section__grid__container">
            <li v-bind:class="`ProjectGrid__section__grid__item`" v-bind:aria-label="`Project: ${i.name}`"
                v-for="i in projectsArr" @click="selectProjectProp(i.name)">

                <img class="grid__item__img" v-bind:src="`${i.imageURL}`" v-bind:alt="`${i.description}`">
                <p class="grid__item__name">{{ i.name }}</p>

            </li>

        </ul>
    </section>

    <Project :name="setProject.name" :key="setProject.name"></Project>
</template>

<style>
@import '../CSS/ProjectGrid.css'
</style>