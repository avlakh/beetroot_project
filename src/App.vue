<template>
  <mobile-menu/>
  <site-header/>
  <router-view/>
</template>

<script>

import SiteHeader from '@/components/SiteHeader.vue'
import MobileMenu from '@/components/MobileMenu.vue'

export default {
  components: {
    SiteHeader,
    MobileMenu
}
}
</script>