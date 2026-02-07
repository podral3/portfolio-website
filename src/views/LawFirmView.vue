<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const tourSteps = [
  {
    num: 1,
    titleKey: 'lawFirm.tour1t',
    descKey: 'lawFirm.tour1d',
    images: ['/law/org_details.webp'],
    layout: 'image-left',
  },
  {
    num: 2,
    titleKey: 'lawFirm.tour2t',
    descKey: 'lawFirm.tour2d',
    images: ['/law/cases_list.webp', '/law/file_preview.webp'],
    layout: 'image-right',
  },
  {
    num: 3,
    titleKey: 'lawFirm.tour3t',
    descKey: 'lawFirm.tour3d',
    images: ['/law/client_details.webp'],
    layout: 'image-left',
  },
  {
    num: 4,
    titleKey: 'lawFirm.tour4t',
    descKey: 'lawFirm.tour4d',
    images: ['/law/emails.webp'],
    layout: 'image-right',
  },
  {
    num: 5,
    titleKey: 'lawFirm.tour5t',
    descKey: 'lawFirm.tour5d',
    images: ['/law/calendar.webp'],
    layout: 'image-left',
  },
  {
    num: 6,
    titleKey: 'lawFirm.tour6t',
    descKey: 'lawFirm.tour6d',
    images: ['/law/szablon_create.webp', '/law/szablon_preveiw.webp'],
    layout: 'image-right',
  },
]
</script>

<template>
  <main class="max-w-6xl mx-auto px-6 pt-32 pb-20">
    <router-link to="/" class="inline-flex items-center gap-2 text-grass-600 font-bold mb-12 group">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m15 18-6-6 6-6" /></svg>
      <span>{{ t('lawFirm.backToPortfolio') }}</span>
    </router-link>

    <!-- Header -->
    <div class="mb-24">
      <span class="text-grass-600 font-bold uppercase tracking-widest text-sm">{{ t('lawFirm.category') }}</span>
      <h1 class="text-6xl font-black mt-4 mb-8 leading-tight max-w-4xl">{{ t('lawFirm.title') }}</h1>
      <p class="text-2xl text-forest-900/60 leading-relaxed max-w-3xl">{{ t('lawFirm.description') }}</p>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
      <div class="p-8 bg-white rounded-3xl border border-grass-100 feature-card">
        <div class="w-12 h-12 bg-grass-50 rounded-xl flex items-center justify-center text-grass-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h10" /><path d="M7 12h10" /><path d="M7 17h10" /></svg>
        </div>
        <h3 class="text-xl font-bold mb-3">{{ t('lawFirm.f1t') }}</h3>
        <p class="text-forest-900/60 text-sm leading-relaxed">{{ t('lawFirm.f1d') }}</p>
      </div>
      <div class="p-8 bg-white rounded-3xl border border-grass-100 feature-card">
        <div class="w-12 h-12 bg-grass-50 rounded-xl flex items-center justify-center text-grass-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
        </div>
        <h3 class="text-xl font-bold mb-3">{{ t('lawFirm.f2t') }}</h3>
        <p class="text-forest-900/60 text-sm leading-relaxed">{{ t('lawFirm.f2d') }}</p>
      </div>
      <div class="p-8 bg-white rounded-3xl border border-grass-100 feature-card">
        <div class="w-12 h-12 bg-grass-50 rounded-xl flex items-center justify-center text-grass-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
        </div>
        <h3 class="text-xl font-bold mb-3">{{ t('lawFirm.f3t') }}</h3>
        <p class="text-forest-900/60 text-sm leading-relaxed">{{ t('lawFirm.f3d') }}</p>
      </div>
    </div>

    <!-- Product Tour -->
    <div class="mb-40">
      <div class="text-center mb-20">
        <span class="text-grass-600 font-bold uppercase tracking-widest text-sm">{{ t('lawFirm.tourTag') }}</span>
        <h2 class="text-5xl font-black mt-4 mb-6">{{ t('lawFirm.tourTitle') }}</h2>
        <p class="text-xl text-forest-900/60 max-w-2xl mx-auto">{{ t('lawFirm.tourSubtitle') }}</p>
      </div>

      <div class="space-y-32 max-w-full">
        <div
          v-for="step in tourSteps"
          :key="step.num"
          class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
        >
          <!-- Text side -->
          <div :class="step.layout === 'image-left' ? 'order-1 lg:order-2 lg:col-span-1' : 'lg:col-span-1'">
            <span class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-grass-500 text-white font-black text-2xl mb-4">{{ step.num }}</span>
            <h2 class="text-2xl font-black mb-4 leading-tight">{{ t(step.titleKey) }}</h2>
            <p class="text-base text-forest-900/70 leading-relaxed">{{ t(step.descKey) }}</p>
          </div>
          <!-- Images side -->
          <div :class="[
            step.layout === 'image-left' ? 'order-2 lg:order-1 lg:col-span-4' : 'lg:col-span-4',
            step.images.length > 1 ? 'space-y-6' : ''
          ]">
            <div v-for="img in step.images" :key="img" class="ui-mockup">
              <img :src="img" :alt="t(step.titleKey)" class="w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Roadmap -->
    <section class="bg-forest-950 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-grass-500/5 pointer-events-none"></div>
      <div class="max-w-3xl relative z-10">
        <span class="text-grass-400 font-bold uppercase tracking-widest text-sm">{{ t('lawFirm.roadmapTag') }}</span>
        <h2 class="text-4xl md:text-5xl font-black mt-4 mb-12">{{ t('lawFirm.roadmapTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="space-y-4">
            <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-grass-400 border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path d="M12 7v5l3 3" /></svg>
            </div>
            <h4 class="text-xl font-bold">{{ t('lawFirm.plan1t') }}</h4>
            <p class="text-grass-100/60 text-sm leading-relaxed">{{ t('lawFirm.plan1d') }}</p>
          </div>
          <div class="space-y-4">
            <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-grass-400 border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
            </div>
            <h4 class="text-xl font-bold">{{ t('lawFirm.plan2t') }}</h4>
            <p class="text-grass-100/60 text-sm leading-relaxed">{{ t('lawFirm.plan2d') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Specs -->
    <div class="mt-40 pt-20 border-t border-grass-100">
      <h3 class="text-xl font-bold mb-10">{{ t('lawFirm.techTitle') }}</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12 font-mono text-xs uppercase tracking-widest text-forest-900/40">
        <div>
          <p class="text-grass-800 font-bold mb-4">Core Engine</p>
          <p>.NET 10 (LTS)</p>
          <p>C# Architecture</p>
        </div>
        <div>
          <p class="text-grass-800 font-bold mb-4">Data Persistence</p>
          <p>PostgreSQL</p>
          <p>Supabase Auth</p>
        </div>
        <div>
          <p class="text-grass-800 font-bold mb-4">Front Layer</p>
          <p>React 19</p>
          <p>Tailwind UI</p>
        </div>
        <div>
          <p class="text-grass-800 font-bold mb-4">DevOps</p>
          <p>Docker Swarm</p>
          <p>Nginx Ingress</p>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer CTA -->
  <footer class="bg-white py-20 border-t border-grass-100">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <router-link to="/#contact" class="px-8 py-4 bg-forest-900 text-white rounded-2xl font-bold hover:bg-forest-700 transition-all inline-block mb-10">
        {{ t('lawFirm.footerCta') }}
      </router-link>
      <p class="text-forest-900/40 text-sm font-mono">&copy; 2024 Michał Podralski</p>
    </div>
  </footer>
</template>
