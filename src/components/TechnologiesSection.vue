<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

type Category = 'backend' | 'databases' | 'devops'
const activeCategory = ref<Category>('backend')

const categories: { key: Category; label: string }[] = [
  { key: 'backend', label: 'Backend' },
  { key: 'databases', label: 'Databases' },
  { key: 'devops', label: 'DevOps' },
]

interface TechItem {
  name: string
  logo?: string
}

const techData: Record<Category, TechItem[]> = {
  backend: [
    { name: 'C#', logo: '/Logo_C_sharp.svg' },
    { name: 'ASP.NET' },
    { name: 'SignalR' },
    { name: 'Xunit' },
    { name: 'TestContainers' },
    { name: 'JWT' },
  ],
  databases: [
    { name: 'PostgreSQL', logo: '/Postgresql_elephant.svg' },
    { name: 'SQLite' },
    { name: 'MongoDB' },
  ],
  devops: [
    { name: 'Docker' },
    { name: 'Linux', logo: '/Tux.svg' },
    { name: 'Bruno' },
  ],
}
</script>

<template>
  <section id="technologies">
    <div class="mb-12 text-center">
      <span class="text-grass-600 font-bold uppercase tracking-widest text-xs">Toolkit</span>
      <h2 class="text-4xl md:text-5xl font-extrabold mt-2">{{ t('skills.title') }}</h2>
    </div>

    <!-- Category Buttons -->
    <div class="flex flex-wrap justify-center gap-3 mb-12">
      <button
        v-for="cat in categories"
        :key="cat.key"
        @click="activeCategory = cat.key"
        :class="[
          'px-6 py-2.5 rounded-xl font-bold text-sm transition-all',
          activeCategory === cat.key
            ? 'bg-forest-900 text-white'
            : 'bg-white border-2 border-grass-100 text-forest-900 hover:bg-grass-50',
        ]"
      >
        {{ cat.label }}
      </button>
    </div>

    <!-- Technologies Grid -->
    <div class="max-w-4xl mx-auto mb-32">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div
          v-for="tech in techData[activeCategory]"
          :key="tech.name"
          class="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border-2 border-grass-100 hover:border-grass-500 hover:shadow-lg transition-all h-32"
        >
          <img
            v-if="tech.logo"
            :src="tech.logo"
            :alt="tech.name"
            class="w-12 h-12 mb-3 object-contain"
          />
          <div v-else class="w-12 h-12 mb-3 bg-grass-100 rounded-lg"></div>
          <span class="text-sm font-bold text-center">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
