<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';

const routes = useRoute()
</script>

<template>
  <Navbar v-if="!routes.meta.hideNavbar"/>
  <RouterView />
</template>