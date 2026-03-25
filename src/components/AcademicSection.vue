<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()
const showThesisImages = ref(false)
</script>

<template>
  <section id="academic">
    <div class="mb-10">
      <span class="text-grass-600 font-bold uppercase tracking-widest text-xs">Research</span>
      <h2 class="text-3xl font-extrabold mt-1">{{ t('academic.title') }}</h2>
    </div>
    <div class="space-y-6">
      <!-- Bachelor's Thesis -->
      <div
        class="group relative p-8 bg-gradient-to-br from-grass-50 to-lime-50 rounded-3xl border-2 border-grass-200 hover:border-grass-400 hover:shadow-2xl hover:shadow-grass-500/10 transition-all overflow-hidden"
        @mouseenter="showThesisImages = true"
        @mouseleave="showThesisImages = false"
      >
        <div class="flex items-start gap-6 relative z-10">
          <div class="p-4 bg-white rounded-2xl text-grass-600 group-hover:bg-grass-500 group-hover:text-white transition-colors shrink-0 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><path d="M9 10h6" /></svg>
          </div>
          <div class="flex-1">
            <div class="flex items-start justify-between gap-4 mb-2">
              <div>
                <span class="inline-block px-2 py-1 bg-grass-600 text-white text-[10px] font-black uppercase tracking-wider rounded mb-2">{{ t('academic.thesis.type') }}</span>
                <h4 class="font-bold text-xl group-hover:text-grass-700 transition-colors leading-snug">{{ t('academic.thesis.title') }}</h4>
              </div>
            </div>
            <p class="text-forest-900/70 text-sm mb-4 leading-relaxed">{{ t('academic.thesis.desc') }}</p>
            <div class="flex flex-wrap items-center gap-4">
              <span class="px-3 py-1 bg-white/80 rounded-lg text-xs font-bold text-grass-700">{{ t('academic.thesis.university') }} • {{ t('academic.thesis.year') }}</span>
              <span class="text-xs text-grass-600 font-medium flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                {{ t('academic.thesis.hoverHint') }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Image preview overlay -->
        <transition
          enter-active-class="transition-all duration-500 ease-out"
          leave-active-class="transition-all duration-300 ease-in"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-4"
        >
          <div v-if="showThesisImages" class="mt-6 grid grid-cols-2 gap-4">
            <div class="rounded-2xl overflow-hidden shadow-xl border-2 border-white">
              <img src="/thesis/camera.jpg" alt="Geodesy equipment" class="w-full h-48 object-cover" />
            </div>
            <div class="rounded-2xl overflow-hidden shadow-xl border-2 border-white">
              <img src="/thesis/3dmodel.jpg" alt="3D spatial model" class="w-full h-48 object-cover" />
            </div>
          </div>
        </transition>
      </div>
      <a
        href="https://www.mdpi.com/1424-8220/26/7/2043"
        target="_blank"
        class="group block p-8 bg-white rounded-3xl border border-grass-100 hover:border-grass-400 hover:shadow-xl hover:shadow-grass-500/5 transition-all"
      >
        <div class="flex items-start gap-6">
          <div class="p-4 bg-grass-50 rounded-2xl text-grass-600 group-hover:bg-grass-500 group-hover:text-white transition-colors shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" /><path d="M8 7h6" /><path d="M8 11h8" /></svg>
          </div>
          <div>
            <h4 class="font-bold text-xl mb-2 group-hover:text-grass-700 transition-colors leading-snug">{{ t('academic.article2.title') }}</h4>
            <p class="text-forest-900/60 text-sm mb-4">{{ t('academic.article2.authors') }}</p>
            <div class="flex flex-wrap items-center gap-4">
              <span class="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">Sensors (MDPI) • 2026</span>
              <span class="text-xs text-grass-600 font-mono">DOI: 10.3390/s26072043</span>
            </div>
          </div>
        </div>
      </a>
      <a
        href="https://www.gisjournal.us.edu.pl/index.php/gis-odyssey-journal/article/view/139"
        target="_blank"
        class="group block p-8 bg-white rounded-3xl border border-grass-100 hover:border-grass-400 hover:shadow-xl hover:shadow-grass-500/5 transition-all"
      >
        <div class="flex items-start gap-6">
          <div class="p-4 bg-grass-50 rounded-2xl text-grass-600 group-hover:bg-grass-500 group-hover:text-white transition-colors shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" /><path d="M8 7h6" /><path d="M8 11h8" /></svg>
          </div>
          <div>
            <h4 class="font-bold text-xl mb-2 group-hover:text-grass-700 transition-colors leading-snug">{{ t('academic.article1.title') }}</h4>
            <p class="text-forest-900/60 text-sm mb-4">{{ t('academic.article1.authors') }}</p>
            <div class="flex flex-wrap items-center gap-4">
              <span class="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">GIS Odyssey Journal • 2025</span>
              <span class="text-xs text-grass-600 font-mono">DOI: 10.57599/gisoj.2025.5.1.83</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>
