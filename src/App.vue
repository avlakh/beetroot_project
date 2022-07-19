<template>
  <site-header/>
  <main>
  <router-view/>
  </main>
  <site-footer/>
</template>

<script>

import SiteHeader from '@/components/common/SiteHeader.vue'
import SiteFooter from '@/components/common/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
}
}
</script>