<script setup lang="ts">
import {ref} from 'vue';

//states
const headingContent = ref(`Hi, I'm Joe Gilbert 
and I'm a full-stack Developer.`);
const funFactsArr = ["My current hair colour is pink.", "I really love the colours of Trans Pennine Express trains (2022).", "The vast majority of this website was coded whilst listining to the Japanese pop band 'Perfume'.", "I currently have 5 different LGBTQ+ pride flags hung up in my house.", "I'm planning a motorcycling holiday around the north coast of Scotland."];

const changeHeader = (event: Event) => {
    const randomNumber = Math.floor(Math.random() * (funFactsArr.length));
    const newHeadingContent = funFactsArr[randomNumber];
    headingContent.value = newHeadingContent;

};
</script>

<template>
    <section class="header__intro__section" id="about">
        <div class="about__grid__container">
            <h1 class="header__intro__h1 heading" @click="changeHeader">{{headingContent}}</h1>
            <img class="header__intro__img img" src="../assets/img_1.jpg"
                alt="an image of myself on holiday in Murano, Venice, Italy">
            <div class="header__intro__tech tech">
                <p>Having worked in academic science and medical diagnostics I thought it was time for a change and so I
                    used my previous experience to dive into the world of web development ^w^</p>
                <p>Click the <span class="header__intro__tech__span">above title for a fun fact</span> about myself or
                    scroll <span class="header__intro__tech__span">down to view my tech stack</span> and projects.</p>
            </div>
        </div>
    </section>
</template>

<style>
@import '../CSS/About.css'
</style>