<script setup lang="ts">
const props = defineProps({
  accentColor: {
    type: String,
    default: '#2dab67'
  }
})
</script>

<template>
  <div class="slidev-layout section w-full h-full flex flex-col justify-center items-center text-center p-8 relative overflow-hidden">
    <!-- Subtle dot pattern background -->
    <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 32px 32px;" :style="{ color: accentColor }"></div>
    
    <!-- Decorative horizontal lines -->
    <div class="absolute top-1/3 left-0 w-full h-px opacity-10" :style="{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }"></div>
    <div class="absolute bottom-1/3 left-0 w-full h-px opacity-10" :style="{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }"></div>
    
    
    
    <!-- Content -->
    <div class="my-auto relative z-10 max-w-4xl section-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* Enhanced content styling with more visual flair */
.section-content :deep(h1) {
  font-size: 3rem;
  font-weight: 300;
  color: v-bind(accentColor);
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 2px 30px v-bind(accentColor + '20');
}

.section-content :deep(h1)::after {
  content: '';
  position: absolute;
  bottom: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 2px;
  background: v-bind(accentColor);
  opacity: 70%;
  border-radius: 2px;
  box-shadow: 0 0 20px v-bind(accentColor + '80');
}

.section-content :deep(h2) {
  font-size: 2.5rem;
  font-weight: 600;
  color: v-bind(accentColor);
  margin-top: 1rem;
}

.section-content :deep(p) {
  font-size: 1.25rem;
  color: #4a5568;
  line-height: 1.8;
  margin-top: 0;
}

.dark .section-content :deep(p) {
  color: #cbd5e0;
}
</style>
