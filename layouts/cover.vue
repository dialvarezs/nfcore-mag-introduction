<script setup lang="ts">
const props = defineProps({
  // Main logo (nf-core mag)
  logo: {
    type: String,
    default: './images/mag_logo_mascot_light.png'
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
    <!-- Radial gradient overlays for depth -->
    <div class="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" :style="{ background: `radial-gradient(circle, ${accentColor}, transparent)` }"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl" :style="{ background: `radial-gradient(circle, ${accentColor}, transparent)` }"></div>
    
    <!-- Subtle geometric pattern -->
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0); background-size: 40px 40px;"></div>
    
    <!-- Accent corner elements -->
    <div class="absolute top-0 left-0 w-32 h-32 opacity-30">
      <div class="absolute top-0 left-0 w-full h-1" :style="{ background: `linear-gradient(to right, ${accentColor}, transparent)` }"></div>
      <div class="absolute top-0 left-0 w-1 h-full" :style="{ background: `linear-gradient(to bottom, ${accentColor}, transparent)` }"></div>
    </div>
    <div class="absolute bottom-0 right-0 w-32 h-32 opacity-30">
      <div class="absolute bottom-0 right-0 w-full h-1" :style="{ background: `linear-gradient(to left, ${accentColor}, transparent)` }"></div>
      <div class="absolute bottom-0 right-0 w-1 h-full" :style="{ background: `linear-gradient(to top, ${accentColor}, transparent)` }"></div>
    </div>
    
    <!-- Main Content -->
    <div class="relative h-full flex flex-col items-center justify-between py-10 z-10 px-8">
      
      <!-- Top: Title -->
      <div class="text-3xl text-gray-400 font-light tracking-wide drop-shadow-md">
        Introduction to
      </div>

      <div class="flex-grow flex items-center justify-center">
         <img :src="logo" class="h-56 object-contain filter drop-shadow-xl" alt="Project logo" />
      </div>

      <!-- Bottom: Content Box (Author/Date) - Less rounded -->
      <div class="relative backdrop-blur-sm bg-gray-900/60 mt-4 p-2 rounded-lg border border-white/10 shadow-2xl max-w-2xl w-full text-center">
        <!-- Top accent line -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-1/3 rounded-b-full shadow-[0_0_15px_rgba(36,148,89,0.8)]" :style="{ background: accentColor }"></div>
        
        <div class="space-y-4">
          <slot />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
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
