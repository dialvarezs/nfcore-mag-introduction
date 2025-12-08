<template>
  <footer v-if="$nav.currentLayout !== 'cover' && $nav.currentLayout !== 'center'" class="absolute bottom-0 left-0 right-0 top-0 pointer-events-none">
    <!-- Colorful bottom bar -->
    <div class="absolute bottom-0 left-0 right-0 h-1 w-full pointer-events-auto"
      style="background: linear-gradient(to right, #ee273f 0%, #ee273f 22%, #1889c6 28%, #1889c6 47%, #0aa55f 53%, #0aa55f 72%, #f8a216 78%, #f8a216 100%)">
    </div>

    <!-- Page number -->
    <div class="absolute bottom-2 right-4 text-xs opacity-60 pointer-events-auto">
      {{ $nav.currentPage }} / {{ $nav.total }}
    </div>
  </footer>
</template>
