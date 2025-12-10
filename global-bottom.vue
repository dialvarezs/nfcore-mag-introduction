<template>
  <footer v-if="$nav.currentLayout !== 'cover' && $nav.currentLayout !== 'center'" class="absolute bottom-0 left-0 right-0 pointer-events-none" style="z-index: 100;">
    <!-- Colorful bottom bar with gradient -->
    <div class="absolute bottom-0 left-0 right-0 h-1 w-full pointer-events-auto"
      style="background: linear-gradient(to right, #1e7d4a, #2dab67, #3bc97a)">
    </div>

    <!-- Page number -->
    <div class="absolute bottom-2 right-4 text-xs opacity-60 pointer-events-auto">
      {{ $nav.currentPage }} / {{ $nav.total }}
    </div>
  </footer>
</template>
