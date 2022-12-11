<script setup lang="ts">
import { projectsArr } from '../../data';
import { ref } from 'vue';
import Project from '../components/Project.vue';

//define props

const defaultObject = {
    name: "",
    stack: [""],
    status: "",
    codeURL: "",
    liveURL: "false",
    description: "",
    imageClass: ""
};

let setProject = ref(defaultObject);


const selectProjectProp = (name: string) => {
    const prop = projectsArr.filter((project) => {
        return project.name === name ? project : undefined
    });
    setProject.value = prop[0];

};

</script>

<template>
    <section id="projects" class="ProjectGrid__section">
        <h2 class="ProjectGrid__section__h2">My Projects</h2>
        <p class="ProjectGrid__section__p">Click a project for more information</p>
        <Project :imageClass="setProject.imageClass" :name="setProject.name" :status="setProject.status"
            :description="setProject.description" :stack="setProject.stack" 
            :codeURL="setProject.codeURL" :liveURL="setProject.liveURL" :key="setProject.name"></Project>
        <ul class="ProjectGrid__section__grid__container">
            <li v-bind:class="`ProjectGrid__section__grid__item`" v-bind:aria-label="`Project: ${i.name}`"
                v-for="i in projectsArr" @click="selectProjectProp(i.name)">
                <div :class="`grid__item__div__image__container ${i.imageClass}`"></div>
                <p class="grid__item__name">{{ i.name }}</p>

            </li>

        </ul>
    </section>


</template>

<style>
@import '../CSS/ProjectGrid.css'
</style>