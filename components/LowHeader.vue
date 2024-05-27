<template>
  <header>
    <div id="header">
      <TPLogo />
      <GlobalNavi />
      <InfoMenu />
    </div>
  </header>
</template>
<script>
import TPLogo from '@/components/Header/TPLogo.vue'
import GlobalNavi from '@/components/Header/GlobalNavi.vue'
import InfoMenu from '@/components/Header/InfoMenu.vue'

export default {
  name: 'LowHeader',
  components: {
    TPLogo,
    GlobalNavi,
    InfoMenu
  }
}
</script>
<style scoped>
@import '~/assets/css/header/header.css';
</style>