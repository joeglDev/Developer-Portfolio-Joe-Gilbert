<script setup lang="ts">

</script>

<template>
  
    <nav class="navbar">
        <!-- NAVIGATION MENU -->
        <ul class="navbar__ul">
            <!-- USING CHECKBOX HACK -->
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>

            <!-- NAVIGATION MENUS -->

            <div class="menu">

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