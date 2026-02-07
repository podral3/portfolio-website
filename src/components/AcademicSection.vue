<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="academic">
    <div class="mb-10">
      <span class="text-grass-600 font-bold uppercase tracking-widest text-xs">Research</span>
      <h2 class="text-3xl font-extrabold mt-1">{{ t('academic.title') }}</h2>
    </div>
    <div class="space-y-6">
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
