<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const { locale } = useI18n()

function setLanguage(lang: string) {
  locale.value = lang
  localStorage.setItem('preferred-lang', lang)
  document.documentElement.lang = lang
}
</script>

<template>
  <div class="flex items-center gap-2 px-2 py-1.5 bg-slate-100/50 backdrop-blur rounded-full border border-slate-200 shadow-sm">
    <button
      @click="setLanguage('en')"
      class="lang-flag"
      :class="{ active: locale === 'en' }"
      title="English"
    >
      <svg class="flag-icon" viewBox="0 0 480 480">
        <clipPath id="circle-en"><circle cx="240" cy="240" r="240" /></clipPath>
        <g clip-path="url(#circle-en)">
          <path fill="#012169" d="M0 0h480v480H0z" />
          <path fill="#FFF" d="m56 0 183 136L421 0h59v47L300 181l180 133v46h-60L240 226 61 360H0v-45l179-134L0 48V0h56z" />
          <path fill="#C8102E" d="m318 211 162 119v30L277 211h41zM169 149 0 24v31l132 94h37zM31 360l174-128h45L31 360zm449-306L310 181h-43L480 30v24z" />
          <path fill="#FFF" d="M181 0v480h120V0H181zM0 120v120h480V120H0z" />
          <path fill="#C8102E" d="M211 0v480h60V0h-60zM0 150v60h480v-60H0z" />
        </g>
      </svg>
    </button>
    <button
      @click="setLanguage('pl')"
      class="lang-flag"
      :class="{ active: locale === 'pl' }"
      title="Polski"
    >
      <svg class="flag-icon" viewBox="0 0 480 480">
        <clipPath id="circle-pl"><circle cx="240" cy="240" r="240" /></clipPath>
        <g clip-path="url(#circle-pl)">
          <rect width="480" height="480" fill="#fff" />
          <rect width="480" height="240" y="240" fill="#dc143c" />
        </g>
      </svg>
    </button>
  </div>
</template>
