<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LangSwitcher from './LangSwitcher.vue'

const { t } = useI18n()
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-grass-100">
    <div class="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
      <div class="text-2xl font-extrabold tracking-tighter flex items-center gap-2">
        <router-link to="/" class="flex items-center gap-2">
          <span class="w-8 h-8 bg-grass-500 rounded-lg flex items-center justify-center text-white text-base">MP</span>
          <span class="font-mono text-lg text-grass-800">podral.dev</span>
        </router-link>
      </div>

      <div class="flex items-center space-x-4 md:space-x-8">
        <div class="hidden md:flex items-center space-x-8 font-semibold text-sm text-forest-900/70">
          <router-link to="/#projects" class="nav-link hover:text-grass-600 transition-colors">{{ t('nav.projects') }}</router-link>
          <router-link to="/#academic" class="nav-link hover:text-grass-600 transition-colors">{{ t('nav.academic') }}</router-link>
          <router-link to="/#circle" class="nav-link hover:text-grass-600 transition-colors">{{ t('nav.circle') }}</router-link>
        </div>

        <LangSwitcher />

        <router-link
          to="/#contact"
          class="hidden sm:block px-5 py-2.5 bg-forest-900 text-white rounded-xl hover:bg-grass-700 transition-all shadow-lg shadow-grass-900/10 text-sm font-bold"
        >
          {{ t('nav.contact') }}
        </router-link>
      </div>
    </div>
  </nav>
</template>
