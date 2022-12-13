<script setup lang="ts">
import {ref} from 'vue';

//refs
const emailAddress = ref("");
const emailMessage = ref("");

//functions

const submitEmail = () => {
    
};
</script>

<template>
  <form ref={form}>
      <label>Email</label>
      <input type="email" id="user_email" v-model="emailAddress"/>
      <label>Message</label>
      <textarea name="message" v-model="emailMessage"/>
      <button @click="submitEmail"></button>
    </form>
</template>

<style>
@import '../CSS/Email.css'
</style>