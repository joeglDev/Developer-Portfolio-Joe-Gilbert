<script setup lang="ts">
import { ref } from 'vue';
import type { imageObject } from '../../Interfaces';

//data
const headingContentArr = ["Hi, I'm Joe Gilbert and I'm a full-stack Developer.", "My current hair colour is bleached pink.", "I really love the colours of Trans Pennine Express trains (2022).", "The vast majority of this website was coded whilst listining to the Japanese pop band 'Perfume'.", "I currently have 5 different LGBTQ+ pride flags hung up in my house.", "I'm planning a motorcycling holiday around the north coast of Scotland."];
const imageArr: imageObject[] = [{ name: "img_1.jpg", alt: "an image of myself on holiday in Murano, Venice, Italy" }, { name: "img_2.jpg", alt: "an image of myself against the lgbtq progress flag. Long straight hair, bleached pink" }];

//states
const headingContent = ref(headingContentArr[0]);

const currentProfileImage = ref(imageArr[0]);

//not a state but local var
const currentImageIndex = ref(0);

//methods
const changeHeader = (event: Event) => {
    //ref.value would have done the job to...
    const currentHeadingIndex = headingContentArr.indexOf(document.getElementsByClassName("header__intro__h1")[0].innerHTML);
    let newHeadingIndex;
    currentHeadingIndex < headingContentArr.length - 1 ? newHeadingIndex = currentHeadingIndex + 1 : newHeadingIndex = 0;
    headingContent.value = headingContentArr[newHeadingIndex];
};

const changeProfileImage = (event: Event) => {
    currentImageIndex.value < imageArr.length - 1 ? currentImageIndex.value += 1 : currentImageIndex.value = 0;
    currentProfileImage.value = imageArr[currentImageIndex.value];
}

const getImgUrl = (name: string) => {
    return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<template>
    <section class="header__intro__section" id="about">
        <div class="about__grid__container">
            <h1 class="header__intro__h1 heading" @click="changeHeader">{{ headingContent }}</h1>
            <img class="header__intro__img img" :src="getImgUrl(currentProfileImage.name)"
                v-bind:alt="`${currentProfileImage.alt}`" @click="changeProfileImage">
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