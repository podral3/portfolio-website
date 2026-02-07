<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'

const route = useRoute()
</script>

<template>
  <div class="bg-[#fcfdfa] text-forest-900 antialiased min-h-screen">
    <NavBar />
    <router-view />
    <FooterBar v-if="route.name === 'home'" />
  </div>
</template>
