<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import About from './components/About.vue';
</script>

<template>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,800,900" rel="stylesheet">
    <NavBar></NavBar>
    <About></About>
</template>

<style>
@import './CSS/App.css'
</style>

