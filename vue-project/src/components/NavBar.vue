<script setup lang="ts">
import { ref } from 'vue';

//states
/**
 *  @vue-prop {Boolean} isNavbarOpen - Initial Boolean value of isCheckboxOpen
 */
const isNavbarOpen = ref(false);

/**
  * On keydown.enter simulates a mouseclick of id toggle__navbar checkbox in order to allow keyboard opening and closing of mobile navbar.
  */
const toggleCheckbox = () => {
    console.log(isNavbarOpen.value)
    const checkbox = document.getElementById('toggle__navbar');

    if (isNavbarOpen.value) {
        isNavbarOpen.value = false;
        checkbox?.click();
    } else if (!isNavbarOpen.value) {
        isNavbarOpen.value = true;
        checkbox?.click();
    }
};
</script>

<template>

    <nav class="navbar">
        <!-- NAVIGATION MENU -->
        <ul class="navbar__ul">
            <!-- USING CHECKBOX HACK -->
            <input type="checkbox" id="toggle__navbar" />
            <label v-on:keydown.enter="toggleCheckbox()" tabindex=0 aria-label="click to toggle display of nav bar"
                for="toggle__navbar" class="navbar__ul__hamburger">&#9776;</label>

            <!-- NAVIGATION MENUS -->

            <div class="navbar__ul__lists">

                <li><a class="navbar__a" href="#about">About</a></li>
                <li><a class="navbar__a" href="#tech">Technologies</a></li>
                <li><a class="navbar__a" href="#projects">My projects</a></li>
                <li><a class="navbar__a" href="#contact">Contact</a></li>
                <li><a class="navbar__a" target="_blank"
                        href="https://www.dropbox.com/s/x2in4iz3di30gej/2022-11-CV-JG-V12.pdf?dl=0"
                        download="file">Download my CV</a></li>
            </div>
        </ul>
    </nav>

</template>

<style>
@import '../CSS/NavBar.css'
</style>