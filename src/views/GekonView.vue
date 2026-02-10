<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const activitySteps = [
  {
    num: 1,
    titleKey: 'gekon.act1t',
    descKey: 'gekon.act1d',
    images: ['/gekon/gravel_3dmodel.png'],
    layout: 'image-left',
  },
  {
    num: 2,
    titleKey: 'gekon.act2t',
    descKey: 'gekon.act2d',
    images: ['/gekon/drone1.jpg', '/gekon/drone2.jpg'],
    layout: 'image-right',
  },
  {
    num: 3,
    titleKey: 'gekon.act3t',
    descKey: 'gekon.act3d',
    images: ['/gekon/education.jpg', '/gekon/education2.jpg'],
    layout: 'image-left',
  },
  {
    num: 4,
    titleKey: 'gekon.act4t',
    descKey: 'gekon.act4d',
    images: ['/gekon/event-organization.jpg'],
    layout: 'image-right',
  },
  {
    num: 5,
    titleKey: 'gekon.act5t',
    descKey: 'gekon.act5d',
    images: ['/gekon/kopernik-3dmodel.png'],
    layout: 'image-left',
  },
  {
    num: 6,
    titleKey: 'gekon.act6t',
    descKey: 'gekon.act6d',
    images: ['/gekon/travel.jpg'],
    layout: 'image-right',
  },
]
</script>

<template>
  <main class="max-w-6xl mx-auto px-6 pt-32 pb-20">
    <!-- Back link -->
    <router-link to="/" class="inline-flex items-center gap-2 text-grass-600 font-bold mb-12 group">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m15 18-6-6 6-6" /></svg>
      <span>{{ t('gekon.backToPortfolio') }}</span>
    </router-link>

    <!-- Hero Header -->
    <div class="mb-24">
      <div class="flex flex-col md:flex-row md:items-start gap-8 mb-8">
        <div class="flex-1">
          <span class="text-grass-600 font-bold uppercase tracking-widest text-sm">{{ t('gekon.category') }}</span>
          <h1 class="text-5xl md:text-6xl font-black mt-4 mb-8 leading-tight max-w-4xl">{{ t('gekon.title') }}</h1>
          <p class="text-xl md:text-2xl text-forest-900/60 leading-relaxed max-w-3xl">{{ t('gekon.description') }}</p>
        </div>
        <div class="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-3xl overflow-hidden shadow-xl bg-white p-3">
          <img src="/gekon/logo.png" alt="GEKON Logo" class="w-full h-full object-contain" />
        </div>
      </div>
      <!-- Chairman badge -->
      <div class="inline-flex items-center gap-3 bg-grass-50 border border-grass-200 rounded-2xl px-5 py-3 mt-4">
        <div class="w-10 h-10 bg-grass-500 rounded-xl flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
        </div>
        <div>
          <p class="text-grass-800 font-bold text-sm">{{ t('gekon.role') }}</p>
          <p class="text-forest-900/50 text-xs leading-snug max-w-md">{{ t('gekon.roleDesc') }}</p>
        </div>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
      <div class="p-8 bg-white rounded-3xl border border-grass-100 feature-card">
        <div class="w-12 h-12 bg-grass-50 rounded-xl flex items-center justify-center text-grass-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
        </div>
        <h3 class="text-xl font-bold mb-3">{{ t('gekon.f1t') }}</h3>
        <p class="text-forest-900/60 text-sm leading-relaxed">{{ t('gekon.f1d') }}</p>
      </div>
      <div class="p-8 bg-white rounded-3xl border border-grass-100 feature-card">
        <div class="w-12 h-12 bg-grass-50 rounded-xl flex items-center justify-center text-grass-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M9 12l2 2 4-4" /></svg>
        </div>
        <h3 class="text-xl font-bold mb-3">{{ t('gekon.f2t') }}</h3>
        <p class="text-forest-900/60 text-sm leading-relaxed">{{ t('gekon.f2d') }}</p>
      </div>
      <div class="p-8 bg-white rounded-3xl border border-grass-100 feature-card">
        <div class="w-12 h-12 bg-grass-50 rounded-xl flex items-center justify-center text-grass-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
        </div>
        <h3 class="text-xl font-bold mb-3">{{ t('gekon.f3t') }}</h3>
        <p class="text-forest-900/60 text-sm leading-relaxed">{{ t('gekon.f3d') }}</p>
      </div>
    </div>

    <!-- Activities Gallery -->
    <div class="mb-40">
      <div class="text-center mb-20">
        <span class="text-grass-600 font-bold uppercase tracking-widest text-sm">{{ t('gekon.galleryTag') }}</span>
        <h2 class="text-5xl font-black mt-4 mb-6">{{ t('gekon.galleryTitle') }}</h2>
        <p class="text-xl text-forest-900/60 max-w-2xl mx-auto">{{ t('gekon.gallerySubtitle') }}</p>
      </div>

      <div class="space-y-32 max-w-full">
        <div
          v-for="step in activitySteps"
          :key="step.num"
          class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
        >
          <!-- Text side -->
          <div :class="step.layout === 'image-left' ? 'order-1 lg:order-2 lg:col-span-2' : 'lg:col-span-2'">
            <span class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-grass-500 text-white font-black text-2xl mb-4">{{ step.num }}</span>
            <h2 class="text-2xl font-black mb-4 leading-tight">{{ t(step.titleKey) }}</h2>
            <p class="text-base text-forest-900/70 leading-relaxed">{{ t(step.descKey) }}</p>
          </div>
          <!-- Images side -->
          <div :class="[
            step.layout === 'image-left' ? 'order-2 lg:order-1 lg:col-span-3' : 'lg:col-span-3',
            step.images.length > 1 ? 'grid grid-cols-2 gap-4' : ''
          ]">
            <div v-for="img in step.images" :key="img" class="rounded-2xl overflow-hidden shadow-lg">
              <img :src="img" :alt="t(step.titleKey)" class="w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Achievements -->
    <section class="bg-forest-950 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden mb-40">
      <div class="absolute inset-0 bg-grass-500/5 pointer-events-none"></div>
      <div class="max-w-4xl relative z-10">
        <span class="text-grass-400 font-bold uppercase tracking-widest text-sm">{{ t('gekon.achieveTag') }}</span>
        <h2 class="text-4xl md:text-5xl font-black mt-4 mb-12">{{ t('gekon.achieveTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="space-y-4">
            <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-grass-400 border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10" /><path d="M5 8h14" /><path d="M6 4v4" /><path d="M18 4v4" /><rect x="3" y="8" width="18" height="9" rx="2" /></svg>
            </div>
            <h4 class="text-xl font-bold">{{ t('gekon.achieve1t') }}</h4>
            <p class="text-grass-100/60 text-sm leading-relaxed">{{ t('gekon.achieve1d') }}</p>
          </div>
          <div class="space-y-4">
            <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-grass-400 border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            </div>
            <h4 class="text-xl font-bold">{{ t('gekon.achieve2t') }}</h4>
            <p class="text-grass-100/60 text-sm leading-relaxed">{{ t('gekon.achieve2d') }}</p>
          </div>
          <div class="space-y-4">
            <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-grass-400 border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <h4 class="text-xl font-bold">{{ t('gekon.achieve3t') }}</h4>
            <p class="text-grass-100/60 text-sm leading-relaxed">{{ t('gekon.achieve3d') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <div class="mb-40">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black mb-6">{{ t('gekon.teamTitle') }}</h2>
        <p class="text-xl text-forest-900/60 max-w-2xl mx-auto">{{ t('gekon.teamDesc') }}</p>
      </div>
    </div>

    <!-- Technologies & Tools -->
    <div class="pt-20 border-t border-grass-100">
      <h3 class="text-xl font-bold mb-10">{{ t('gekon.techTitle') }}</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12 font-mono text-xs uppercase tracking-widest text-forest-900/40">
        <div>
          <p class="text-grass-800 font-bold mb-4">UAV / Drones</p>
          <p>DJI Phantom</p>
          <p>DJI Mavic</p>
          <p>Mission Planning</p>
        </div>
        <div>
          <p class="text-grass-800 font-bold mb-4">Photogrammetry</p>
          <p>Agisoft Metashape</p>
          <p>CloudCompare</p>
          <p>MeshLab</p>
        </div>
        <div>
          <p class="text-grass-800 font-bold mb-4">GIS & Mapping</p>
          <p>QGIS</p>
          <p>ArcGIS</p>
          <p>GDAL / OGR</p>
        </div>
        <div>
          <p class="text-grass-800 font-bold mb-4">Development</p>
          <p>Python</p>
          <p>Machine Learning</p>
          <p>Computer Vision</p>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer CTA -->
  <footer class="bg-white py-20 border-t border-grass-100">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <router-link to="/#contact" class="px-8 py-4 bg-forest-900 text-white rounded-2xl font-bold hover:bg-forest-700 transition-all inline-block mb-10">
        {{ t('gekon.footerCta') }}
      </router-link>
      <p class="text-forest-900/40 text-sm font-mono">&copy; 2024 Michał Podralski</p>
    </div>
  </footer>
</template>
