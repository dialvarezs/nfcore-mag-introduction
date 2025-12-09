<template>
  <footer v-if="$nav.currentLayout !== 'cover' && $nav.currentLayout !== 'center'" class="absolute bottom-0 left-0 right-0 top-0 pointer-events-none">
    <!-- Colorful bottom bar with gradient -->
    <div class="absolute bottom-0 left-0 right-0 h-1 w-full pointer-events-auto"
      style="background: linear-gradient(to right, #1e7d4a, #2daa66, #3bc97a)">
    </div>

    <!-- Page number -->
    <div class="absolute bottom-2 right-4 text-xs opacity-60 pointer-events-auto">
      {{ $nav.currentPage }} / {{ $nav.total }}
    </div>
  </footer>
</template>
