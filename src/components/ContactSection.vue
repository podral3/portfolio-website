<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="text-center">
    <h2 class="text-5xl md:text-6xl font-extrabold mb-10">
      {{ t('cta.title') }} <span class="text-grass-600">{{ t('cta.highlight') }}</span>.
    </h2>
    <div class="flex flex-col sm:flex-row justify-center items-center gap-6">
      <a href="mailto:podral3@gmail.com" class="w-full sm:w-auto px-10 py-5 bg-forest-900 text-white rounded-2xl font-bold text-lg hover:bg-forest-700 transition-all flex items-center justify-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
        <span>{{ t('cta.mail') }}</span>
      </a>
    </div>
  </section>
</template>
