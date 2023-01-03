<script setup lang="ts">
 /**
   * Returns number of  subarrays of input array s which conform to length m and reduce to d.
   *
   *  @param {Array<number>} s Input array of integers.
   * @param {number} d Sum of valid sub arrays.
   * @param {number} m Length of valid sub arrays.
   * @return {number} count Number of valid sub arrays found.
   */
</script>

<template>
  
    <nav class="navbar">
        <!-- NAVIGATION MENU -->
        <ul class="navbar__ul">
            <!-- USING CHECKBOX HACK -->
            <input type="checkbox" id="toggle__navbar" />
            <label aria-label="click to toggle display of nav bar" for="toggle__navbar" class="navbar__ul__hamburger">&#9776;</label>

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