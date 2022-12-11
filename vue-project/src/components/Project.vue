<script setup lang="ts">
const project = defineProps({
    name: String,
    imageURL: String,
    ['stack']: { type: Array, required: true },
    status: String || Boolean,
    codeURL: String,
    liveURL: String,
    description: String
} );


console.log("child", project.name)
</script>

<template>
<section class="Project__section">
    <h2>h</h2>
</section>
</template>

<style>
@import '../CSS/Project.css'
</style>