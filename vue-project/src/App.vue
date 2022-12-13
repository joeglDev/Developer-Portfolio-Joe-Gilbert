<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import About from './components/About.vue';
import TechStack from './components/TechStack.vue';
import ProjectGrid from './components/ProjectGrid.vue';
import Footer from './components/Footer.vue';
import Email from './components/Email.vue';
</script>

<template>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,800,900" rel="stylesheet">
    <NavBar></NavBar>
    <About></About>
    <TechStack></TechStack>
    <ProjectGrid></ProjectGrid>
    <Email></Email>
    <Footer></Footer>
</template>

<style>
@import './CSS/App.css'
</style>

