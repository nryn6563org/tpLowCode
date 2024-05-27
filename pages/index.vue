<template>
  <div id="container" class="main">
    <MainVisual />
    <Section01 />
    <Section02 />
    <Section03 />
    <Section04 />
    <Section05 />
  </div>
</template>
<script>
import MainVisual from '@/components/Main/MainVisual.vue'
import Section01 from '@/components/Main/MainSection01.vue'
import Section02 from '@/components/Main/MainSection02.vue'
import Section03 from '@/components/Main/MainSection03.vue'
import Section04 from '@/components/Main/MainSection04.vue'
import Section05 from '@/components/Main/MainSection05.vue'

export default {
  name: 'Index',
  components: {
    MainVisual,
    Section01,
    Section02,
    Section03,
    Section04,
    Section05
  }
}
</script>