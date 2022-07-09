<template>
  <mobile-menu/>
  <site-header/>
  <main>
  <router-view/>
  </main>
  <site-footer/>
</template>

<script>

import SiteHeader from '@/components/SiteHeader.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    MobileMenu,
    SiteFooter
}
}
</script>