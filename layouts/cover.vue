<script setup lang="ts">
const props = defineProps({
  // Main logo (nf-core mag)
  logo: {
    type: String,
    default: './images/mag_logo_mascot_light.png'
  },
  // Institutional logos (top right)
  institutionalLogos: {
    type: Array as () => string[],
    default: () => []
  },
  // Accent color for highlights
  accentColor: {
    type: String,
    default: '#6366f1' // Indigo
  }
})
</script>

<template>
  <div class="slidev-layout cover relative h-full w-full overflow-hidden bg-gray-950">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div class="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </div>

    <!-- Institutional Logos - Top Right -->
    <div v-if="institutionalLogos.length > 0" class="absolute top-6 right-8 flex gap-4 items-center z-10">
      <img
        v-for="(logoUrl, index) in institutionalLogos"
        :key="index"
        :src="logoUrl"
        class="h-14 object-contain opacity-80"
        alt="Institutional logo"
      />
    </div>

    <!-- Main Content -->
    <div class="relative h-full flex items-center justify-center">
      <div class="grid grid-cols-[30%_70%] gap-8 w-full items-center">
        <!-- Left: Main Logo with subtle rotation -->
        <div class="flex items-center justify-end">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
            <img :src="logo" class="relative max-h-80 w-full object-contain filter drop-shadow-2xl" alt="Project logo" />
          </div>
        </div>

        <!-- Right: Content with modern card -->
        <div class="flex flex-col justify-center space-y-8 pl-8">
          <div class="relative text-white">
            <!-- Accent bar -->
            <div class="absolute top-0 bottom-0 w-1.5 rounded-full" :style="{ background: accentColor }"></div>

            <div>
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom decorative wave -->
    <div class="absolute bottom-0 left-0 right-0 h-1 opacity-60" :style="{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }"></div>
  </div>
</template>

<style scoped>
/* Animated blobs */
@keyframes blob {
  0%, 100% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Text styling - Always dark mode with deep selectors */
.slidev-layout.cover :deep(h1) {
  @apply text-5xl font-bold mb-6 leading-tight;
  color: #f1f5f9 !important;
}

.slidev-layout.cover :deep(strong) {
  @apply text-xl font-medium block mb-1;
  color: v-bind(accentColor) !important;
  line-height: 1.3;
  font-weight: 500 !important;
}

.slidev-layout.cover :deep(span) {
  @apply block mt-1;
  color: #d1d5db !important;
}

.slidev-layout.cover :deep(p) {
  @apply text-sm font-medium;
  color: #9ca3af !important;
}

/* Date styling */
.slidev-layout.cover :deep(div) {
  color: #9ca3af !important;
}

/* Fallback - force all text to be light */
.slidev-layout.cover :deep(*) {
  color: inherit;
}
</style>
