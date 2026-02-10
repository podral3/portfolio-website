<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="grid grid-cols-1 gap-16">
    <router-link to="/gekon" class="block group">
      <section id="circle" class="bg-forest-950 rounded-[3rem] p-10 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row gap-8 items-center transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.01]">
        <div class="absolute top-0 right-0 w-1/3 h-full bg-grass-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div class="flex-1 relative z-10">
          <span class="text-grass-400 font-bold uppercase tracking-widest text-xs">Community</span>
          <h2 class="text-3xl font-extrabold mt-2 mb-4">{{ t('circle.title') }}</h2>
          <p class="text-grass-100/70 text-base leading-relaxed mb-6">{{ t('circle.desc') }}</p>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-sm">
              <div class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-grass-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
              </div>
              <span>{{ t('circle.item1') }}</span>
            </li>
            <li class="flex items-center gap-3 text-sm">
              <div class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-grass-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="7" r="4" /><path d="M17 21v-2a4 4 0 0 0-4 4v2" /></svg>
              </div>
              <span>{{ t('circle.item2') }}</span>
            </li>
            <li class="flex items-center gap-3 text-sm">
              <div class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-grass-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" /><polyline points="16 3 16 7 8 7 8 3" /></svg>
              </div>
              <span>{{ t('circle.item3') }}</span>
            </li>
            <li class="flex items-center gap-3 text-sm">
              <div class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-grass-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <span>{{ t('circle.item4') }}</span>
            </li>
          </ul>
          <!-- Details arrow -->
          <div class="mt-6 flex items-center gap-2 text-grass-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>{{ t('projects.viewDetails') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m9 18 6-6-6-6" /></svg>
          </div>
        </div>
        <div class="w-48 h-48 bg-gradient-to-br from-grass-500 to-forest-700 rounded-3xl rotate-6 shadow-2xl p-1 shrink-0 group-hover:rotate-3 transition-transform duration-300">
          <div class="w-full h-full bg-forest-950 rounded-[1.4rem] flex items-center justify-center overflow-hidden p-4">
            <img src="/gekon/logo.png" alt="GEKON Logo" class="w-full h-full object-contain" />
          </div>
        </div>
      </section>
    </router-link>
  </div>
</template>
