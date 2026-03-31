<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const tourSteps = [
  {
    num: 1,
    titleKey: 'youtubeAnalyzer.tour1t',
    descKey: 'youtubeAnalyzer.tour1d',
    images: ['/ytanalyzer/dashboard.png'],
    browserUrl: 'localhost:5173/dashboard',
    layout: 'image-left',
  },
  {
    num: 2,
    titleKey: 'youtubeAnalyzer.tour2t',
    descKey: 'youtubeAnalyzer.tour2d',
    images: ['/ytanalyzer/prompts.png'],
    browserUrl: 'localhost:5173/prompts',
    layout: 'image-right',
  },
  {
    num: 3,
    titleKey: 'youtubeAnalyzer.tour3t',
    descKey: 'youtubeAnalyzer.tour3d',
    images: ['/ytanalyzer/channel_dashboard.png'],
    browserUrl: 'localhost:5173/channels/1',
    layout: 'image-left',
  },
  {
    num: 4,
    titleKey: 'youtubeAnalyzer.tour4t',
    descKey: 'youtubeAnalyzer.tour4d',
    images: ['/ytanalyzer/video_list.png'],
    browserUrl: 'localhost:5173/channels/1/videos',
    layout: 'image-right',
  },
  {
    num: 5,
    titleKey: 'youtubeAnalyzer.tour5t',
    descKey: 'youtubeAnalyzer.tour5d',
    images: ['/ytanalyzer/analysis_details.png'],
    browserUrl: 'localhost:5173/analysis/42',
    layout: 'image-left',
  },
]
</script>

<template>
  <main class="max-w-6xl mx-auto px-6 pt-32 pb-20">
    <router-link to="/" class="inline-flex items-center gap-2 text-sky-600 font-bold mb-12 group">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m15 18-6-6 6-6" /></svg>
      <span>{{ t('youtubeAnalyzer.backToPortfolio') }}</span>
    </router-link>

    <!-- Header -->
    <div class="mb-24">
      <span class="text-sky-600 font-bold uppercase tracking-widest text-sm">{{ t('youtubeAnalyzer.category') }}</span>
      <h1 class="text-6xl font-black mt-4 mb-8 leading-tight max-w-4xl">{{ t('youtubeAnalyzer.title') }}</h1>
      <p class="text-2xl text-forest-900/60 leading-relaxed max-w-3xl">{{ t('youtubeAnalyzer.description') }}</p>
      <a
        href="https://github.com/podral3/YoutubeAnalyzer"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-sky-600 text-white rounded-2xl font-bold hover:bg-sky-700 transition-colors group"
      >
        <span>{{ t('youtubeAnalyzer.checkItOut') }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </a>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
      <div class="p-8 bg-white rounded-3xl border border-sky-100 feature-card">
        <div class="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
        </div>
        <h3 class="text-xl font-bold mb-3">{{ t('youtubeAnalyzer.f1t') }}</h3>
        <p class="text-forest-900/60 text-sm leading-relaxed">{{ t('youtubeAnalyzer.f1d') }}</p>
      </div>
      <div class="p-8 bg-white rounded-3xl border border-sky-100 feature-card">
        <div class="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
        </div>
        <h3 class="text-xl font-bold mb-3">{{ t('youtubeAnalyzer.f2t') }}</h3>
        <p class="text-forest-900/60 text-sm leading-relaxed">{{ t('youtubeAnalyzer.f2d') }}</p>
      </div>
      <div class="p-8 bg-white rounded-3xl border border-sky-100 feature-card">
        <div class="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
        </div>
        <h3 class="text-xl font-bold mb-3">{{ t('youtubeAnalyzer.f3t') }}</h3>
        <p class="text-forest-900/60 text-sm leading-relaxed">{{ t('youtubeAnalyzer.f3d') }}</p>
      </div>
    </div>

    <!-- Product Tour -->
    <div class="mb-40">
      <div class="text-center mb-20">
        <span class="text-sky-600 font-bold uppercase tracking-widest text-sm">{{ t('youtubeAnalyzer.tourTag') }}</span>
        <h2 class="text-5xl font-black mt-4 mb-6">{{ t('youtubeAnalyzer.tourTitle') }}</h2>
        <p class="text-xl text-forest-900/60 max-w-2xl mx-auto">{{ t('youtubeAnalyzer.tourSubtitle') }}</p>
      </div>

      <div class="space-y-32 max-w-full">
        <div
          v-for="step in tourSteps"
          :key="step.num"
          class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
        >
          <!-- Text side -->
          <div :class="step.layout === 'image-left' ? 'order-1 lg:order-2 lg:col-span-1' : 'lg:col-span-1'">
            <span class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sky-500 text-white font-black text-2xl mb-4">{{ step.num }}</span>
            <h2 class="text-2xl font-black mb-4 leading-tight">{{ t(step.titleKey) }}</h2>
            <p class="text-base text-forest-900/70 leading-relaxed">{{ t(step.descKey) }}</p>
          </div>
          <!-- Images side -->
          <div :class="[
            step.layout === 'image-left' ? 'order-2 lg:order-1 lg:col-span-4' : 'lg:col-span-4',
            step.images.length > 1 ? 'space-y-6' : ''
          ]">
            <div v-for="img in step.images" :key="img" class="ui-mockup">
              <!-- Browser chrome -->
              <div class="flex items-center gap-3 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
                <div class="flex gap-1.5">
                  <span class="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#FEBC2E]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#28C840]"></span>
                </div>
                <div class="flex-1 flex justify-center">
                  <div class="bg-white rounded-md px-4 py-1 text-xs text-gray-400 font-mono min-w-[40%] text-center border border-gray-200">
                    {{ step.browserUrl }}
                  </div>
                </div>
                <div class="w-[54px]"></div>
              </div>
              <img :src="img" :alt="t(step.titleKey)" class="max-w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Roadmap -->
    <section class="bg-forest-950 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-sky-500/5 pointer-events-none"></div>
      <div class="max-w-3xl relative z-10">
        <span class="text-sky-400 font-bold uppercase tracking-widest text-sm">{{ t('youtubeAnalyzer.roadmapTag') }}</span>
        <h2 class="text-4xl md:text-5xl font-black mt-4 mb-12">{{ t('youtubeAnalyzer.roadmapTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="space-y-4">
            <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-sky-400 border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            </div>
            <h4 class="text-xl font-bold">{{ t('youtubeAnalyzer.plan1t') }}</h4>
            <p class="text-sky-100/60 text-sm leading-relaxed">{{ t('youtubeAnalyzer.plan1d') }}</p>
          </div>
          <div class="space-y-4">
            <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-sky-400 border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path d="M12 7v5l3 3" /></svg>
            </div>
            <h4 class="text-xl font-bold">{{ t('youtubeAnalyzer.plan2t') }}</h4>
            <p class="text-sky-100/60 text-sm leading-relaxed">{{ t('youtubeAnalyzer.plan2d') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Specs -->
    <div class="mt-40 pt-20 border-t border-sky-100">
      <h3 class="text-xl font-bold mb-10">{{ t('youtubeAnalyzer.techTitle') }}</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12 font-mono text-xs uppercase tracking-widest text-forest-900/40">
        <div>
          <p class="text-sky-800 font-bold mb-4">Backend</p>
          <p>Python 3.12</p>
          <p>Flask</p>
        </div>
        <div>
          <p class="text-sky-800 font-bold mb-4">Data Layer</p>
          <p>SQLite</p>
          <p>SQLAlchemy</p>
        </div>
        <div>
          <p class="text-sky-800 font-bold mb-4">Front Layer</p>
          <p>Vue.js 3</p>
          <p>Tailwind CSS</p>
        </div>
        <div>
          <p class="text-sky-800 font-bold mb-4">APIs & DevOps</p>
          <p>YouTube Data API</p>
          <p>Docker</p>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer CTA -->
  <footer class="bg-white py-20 border-t border-sky-100">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <router-link to="/#contact" class="px-8 py-4 bg-forest-900 text-white rounded-2xl font-bold hover:bg-forest-700 transition-all inline-block mb-10">
        {{ t('youtubeAnalyzer.footerCta') }}
      </router-link>
      <p class="text-forest-900/40 text-sm font-mono">&copy; 2026 Michał Podralski</p>
    </div>
  </footer>
</template>
