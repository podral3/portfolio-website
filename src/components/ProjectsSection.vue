<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="projects">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
      <div>
        <span class="text-grass-600 font-bold uppercase tracking-widest text-sm">Portfolio</span>
        <h2 class="text-4xl md:text-5xl font-extrabold mt-2">{{ t('projects.title') }}</h2>
      </div>
      <p class="text-forest-900/60 max-w-md">{{ t('projects.subtitle') }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Law Firm App Card -->
      <router-link
        to="/law-firm"
        class="group relative bg-white rounded-[2rem] border border-grass-100 overflow-hidden hover:shadow-2xl hover:shadow-grass-500/10 transition-all duration-500 hover:-translate-y-2 block"
      >
        <div class="h-64 bg-grass-50 flex items-center justify-center relative overflow-hidden">
          <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div class="p-8 bg-white rounded-3xl shadow-xl text-grass-600 group-hover:scale-110 transition-transform duration-700">
            <img src="/law/icon.png" alt="Law Firm Management System" class="w-16 h-16 object-contain" />
          </div>
        </div>
        <div class="p-10">
          <h3 class="text-2xl font-bold mb-4">{{ t('projects.law.title') }}</h3>
          <p class="text-forest-900/70 mb-8 leading-relaxed">{{ t('projects.law.desc') }}</p>

          <div class="bg-grass-50 rounded-2xl p-6 border border-grass-100/50 mb-8">
            <h4 class="text-xs font-black uppercase text-grass-800 tracking-wider mb-2">{{ t('projects.law.role') }}</h4>
            <p class="text-sm text-forest-900/80 leading-relaxed">{{ t('projects.law.roleDesc') }}</p>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-forest-900 text-white text-[11px] font-bold rounded-lg">React</span>
              <span class="px-3 py-1 bg-forest-900 text-white text-[11px] font-bold rounded-lg">.NET 10</span>
              <span class="px-3 py-1 bg-forest-900 text-white text-[11px] font-bold rounded-lg">Supabase</span>
              <span class="px-3 py-1 bg-forest-900 text-white text-[11px] font-bold rounded-lg">Docker</span>
            </div>
            <span class="text-grass-600 font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
              <span>{{ t('projects.viewDetails') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </span>
          </div>
        </div>
      </router-link>

      <!-- Dog App -->
      <article class="group relative bg-white rounded-[2rem] border border-grass-100 overflow-hidden hover:shadow-2xl hover:shadow-grass-500/10 transition-all duration-500 hover:-translate-y-2">
        <div class="h-64 bg-lime-50 flex items-center justify-center relative overflow-hidden">
          <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div class="p-8 bg-white rounded-3xl shadow-xl text-grass-600 group-hover:scale-110 transition-transform duration-700">
            <img src="/dogwalk/dogIcon.jpg" alt="DoggyWalk App" class="w-16 h-16 object-contain" />
          </div>
        </div>
        <div class="p-10">
          <h3 class="text-2xl font-bold mb-4">{{ t('projects.dog.title') }}</h3>
          <p class="text-forest-900/70 mb-8 leading-relaxed">{{ t('projects.dog.desc') }}</p>
          <div class="bg-grass-50 rounded-2xl p-6 border border-grass-100/50 mb-8">
            <h4 class="text-xs font-black uppercase text-grass-800 tracking-wider mb-2">{{ t('projects.dog.role') }}</h4>
            <p class="text-sm text-forest-900/80 leading-relaxed">{{ t('projects.dog.roleDesc') }}</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-forest-900 text-white text-[11px] font-bold rounded-lg">React Native</span>
            <span class="px-3 py-1 bg-forest-900 text-white text-[11px] font-bold rounded-lg">.NET 8</span>
            <span class="px-3 py-1 bg-forest-900 text-white text-[11px] font-bold rounded-lg">PostgreSQL</span>
            <span class="px-3 py-1 bg-forest-900 text-white text-[11px] font-bold rounded-lg">Docker</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
