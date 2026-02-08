<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <header class="relative pt-40 pb-32 hero-gradient overflow-hidden">
    <div class="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-grass-400 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-1/4 right-0 w-64 h-64 bg-lime-300 blur-[100px] rounded-full"></div>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-grass-300 text-xs font-bold uppercase tracking-widest mb-8">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-grass-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-grass-500"></span>
          </span>
          <span>{{ t('hero.badge') }}</span>
        </div>
        <h1 class="text-6xl md:text-8xl font-extrabold text-white leading-[1.1] mb-8">
          Michał <br /><span class="text-gradient">Podralski</span>
        </h1>
        <i18n-t 
          keypath="hero.description" 
          tag="p" 
          class="text-xl text-grass-100/70 mb-10 leading-relaxed font-medium"
        >
          <template #backendDev>
            <span class="text-grass-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Backend Developer</span>
          </template>
          <template #devops>
            <span class="text-grass-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Dev Ops</span>
          </template>
           <template #solutionarchitect>
            <span class="text-grass-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Solution Architect</span>
          </template>
           <template #interdisciplinary>
            <span class="text-grass-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">interdisciplinary</span>
          </template>
        </i18n-t>
        <div class="flex flex-wrap gap-5">
          <a href="#projects" class="px-8 py-4 bg-grass-500 hover:bg-grass-400 text-forest-950 font-bold rounded-2xl transition-all shadow-xl shadow-grass-500/20 flex items-center gap-2">
            <span>{{ t('hero.cta') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </a>
          <div class="flex items-center gap-4 px-2">
            <a href="https://github.com/podral3" target="_blank" class="text-white/60 hover:text-grass-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
            <a href="https://pl.linkedin.com/in/micha%C5%82-podralski-50528a389" target="_blank" class="text-white/60 hover:text-grass-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
