<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="experience">
    <div class="mb-10">
      <span class="text-grass-600 font-bold uppercase tracking-widest text-xs">Career</span>
      <h2 class="text-3xl font-extrabold mt-1">{{ t('experience.title') }}</h2>
    </div>
    <div class="max-w-3xl">
      <div class="group p-8 bg-white rounded-3xl border border-grass-100 hover:border-grass-400 hover:shadow-xl hover:shadow-grass-500/5 transition-all">
        <div class="flex items-start gap-6">
          <div class="shrink-0">
            <img src="/vimap_icon.png" alt="Vimap logo" class="w-16 h-16 rounded-2xl object-contain" />
          </div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold mb-2 group-hover:text-grass-700 transition-colors">{{ t('experience.vimap.title') }}</h3>
            <p class="text-grass-600 font-bold text-sm mb-4">{{ t('experience.vimap.role') }}</p>
            <p class="text-forest-900/70 leading-relaxed mb-4">{{ t('experience.vimap.desc') }}</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-forest-900 text-white text-xs font-bold rounded-lg">.NET</span>
              <span class="px-3 py-1 bg-forest-900 text-white text-xs font-bold rounded-lg">3D Rendering</span>
              <span class="px-3 py-1 bg-forest-900 text-white text-xs font-bold rounded-lg">LiDAR</span>
              <span class="px-3 py-1 bg-forest-900 text-white text-xs font-bold rounded-lg">Spatial Data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
