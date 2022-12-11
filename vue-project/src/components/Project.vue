<script setup lang="ts">
const project = defineProps({
    name: String,
    imageURL: String,
    ['stack']: { type: Array, required: true },
    status: String,
    codeURL: String,
    liveURL: String,
    description: String
} );

let name = project.name;
//const project = defineProps({setProject: Object})

const removeSection = () => {
    name = undefined;
};

console.log("child", name)
</script>

<template >
<section class="Project__section" v-if="name">
    <h2>{{name}}</h2>

</section>
</template>

<style>
@import '../CSS/Project.css'
</style>