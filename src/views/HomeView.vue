<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import AcademicSection from '@/components/AcademicSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import TechnologiesSection from '@/components/TechnologiesSection.vue'
import GekonSection from '@/components/GekonSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <HeroSection />
  <main class="max-w-6xl mx-auto px-6 py-32 space-y-40">
    <ProjectsSection />
    <AcademicSection />
    <ExperienceSection />
    <TechnologiesSection />
    <GekonSection />
    <ContactSection />
  </main>
</template>
