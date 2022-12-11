<script setup lang="ts">
import { techStackArr } from '../../data';
import { onMounted, ref } from 'vue';

//reactive state
let filteredTechStackArr = ref(techStackArr);

const filterTechStack = (input: string) => {
    changeClickedButtonClass(input);
    filteredTechStackArr.value = techStackArr.filter((item) => {
        return input === "all" ? item : item.type === input ? item : null
    })
};


const changeClickedButtonClass = (input: string) => {
    const buttons = document.getElementsByClassName("techstack__section__btn");
    for (let btn of buttons) {
        btn.id === input ? btn.setAttribute('class', "techstack__section__btn clicked") : btn.setAttribute('class', "techstack__section__btn");
    }
};


</script>

<template>
    <section class="techstack__section" id="tech">
        <h2 class="techstack__section__h2">Technologies</h2>
        <div class="techstack__section__btn__container">
            <button id="all" type="button" class="techstack__section__btn clicked"
                aria-label="click this button to filter technologies to all technologies"
                @click="filterTechStack('all')">All</button>
                <button id="language" type="button" class="techstack__section__btn"
                aria-label="click this button to filter technologies to include only languages"
                @click="filterTechStack('language')">Language</button>
            <button id="front" type="button" class="techstack__section__btn"
                aria-label="click this button to filter technologies to include only technologies of type: front end"
                @click="filterTechStack('front')">Front-End</button>
            <button id="back" type="button" class="techstack__section__btn"
                aria-label="click this button to filter technologies to include only technologies of type: back end"
                @click="filterTechStack('back')">Back-End</button>
            <button id="process" type="button" class="techstack__section__btn"
                aria-label="click this button to filter technologies to include only technologies of type: process"
                @click="filterTechStack('process')">Process</button>
            <button id="testing" type="button" class="techstack__section__btn"
                aria-label="click this button to filter technologies to include only technologies of type: testing"
                @click="filterTechStack('testing')">Testing</button>
        </div>
        <p>Filter the technologies by use using the buttons above.</p>
        <ul class="techstack__section__grid__container">
            <li v-bind:class="`grid__item__container ${i.type}`" v-bind:aria-label="`${i.name} icon`"
                v-for="i in filteredTechStackArr">
                <img class="grid__item__img" v-bind:src="`${i.logoURL}`" v-bind:alt="`${i.name}`">
                <p class="grid__item__name">{{ i.name }}</p>
            </li>

        </ul>

    </section>
</template>

<style>
@import '../CSS/TechStack.css'
</style>