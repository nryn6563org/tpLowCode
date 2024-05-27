<template>
  <div id="wrap">
    <LowHeader />
    <Nuxt />
    <LowFooter />
  </div>
</template>
<script>
import LowHeader from '~/components/LowHeader.vue'
import LowFooter from '~/components/LowFooter.vue'

export default {
  name: 'DefaultLayout',
  components: {
    LowHeader,
    LowFooter
  }
}
</script>
<style>
@import '~/assets/css/button.css';
@import "~/assets/css/table.css";
</style>