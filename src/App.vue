<template>
  <site-header/>
  <main>
  <router-view/>
  </main>
  <site-footer/>
</template>

<script>

import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
}
}
</script>