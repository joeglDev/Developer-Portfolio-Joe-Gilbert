<script setup lang="ts">
import { techStackArr } from '../../data';
//create editable array from import
let filteredTechStackArr = techStackArr.filter((i) => {
    if (i.type) {return i}});
/*
    //funct to apply diff filters and edit above
    const selector = 'front';
    filteredTechStackArr = filteredTechStackArr.filter((i) => {
    if (i.type === selector) {return i}


});
*/
</script>

<template>
    <section class="techstack__section" id="tech">
        <h2 class="techstack__section__h2">Technologies</h2>
        <ul class="techstack__section__grid__container">
            <li v-bind:class="`grid__item__container ${i.type}`" v-bind:aria-label="`${i.name} icon`" v-for="i in filteredTechStackArr">
                <img class="grid__item__img" v-bind:src="`${i.logoURL}`" v-bind:alt="`${i.name}`">
                <p class="grid__item__name">{{ i.name }}</p>
            </li>

        </ul>

    </section>
</template>

<style>
@import '../CSS/TechStack.css'
</style>