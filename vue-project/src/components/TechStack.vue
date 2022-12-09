<script setup lang="ts">
import {techStackArr} from '../../data';
</script>

<template>
    <section class="techstack__section" id="tech">
        <h2 class="techstack__section__h2">Technologies</h2>
        <div class="techstack__section__grid__container">
            <ul v-for="i in techStackArr">
                <li v-bind:class="`techstack__section__grid__item__${i.type}`">
                    <img v-bind:src="`${i.logoURL}`" v-bind:alt="`${i.name}`">
                    <p>{{ i.name }}</p>
                </li>

            </ul>
        </div>

    </section>
</template>

<style>
@import '../CSS/TechStack.css'
</style>