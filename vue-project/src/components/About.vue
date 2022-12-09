<script setup lang="ts">
const funFactsArr = ["My current hair colour is pink.", "I really love the colours of Trans Pennine Express trains (2022).", "Some of my favourite discography by the Japanese pop band 'Perfume' is 'Future Pop' or 'Triangle'.", "I currently have 5 different LGBTQ+ pride flags hung up in my house.", "I'm planning a motorcycling holiday around the north coast of Scotland."];

const changeHeader = (event: Event) => {
    const heading = document.getElementsByClassName("header__intro__h1")[0];
    const randomNumber = Math.floor(Math.random() * (funFactsArr.length));
    heading.innerHTML = funFactsArr[randomNumber];
};
</script>

<template>
    <section class="header__intro__section" id="about">
        <div class="about__grid__container">
            <h1 class="header__intro__h1" @click="changeHeader">Hiya, I'm Joe Gilbert <br> and I'm a full-stack
                Developer.</h1>
            <img class="header__intro__img" src="../assets/img_1.jpg"
                alt="an image of myself on holiday in Murano, Venice, Italy">
            <div class="header__intro__tech">
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