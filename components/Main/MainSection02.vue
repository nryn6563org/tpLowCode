<template>
  <section class="sec02">
    <div class="txt">
      <strong>
        API 로우코드 개발플랫폼 <br>
        <em>SyncTree</em> 연계
      </strong>
      <span>빠르고 쉬운 백앤드 로우코드 개발 솔루션을 <br>웹으로 제공합니다.</span>
    </div>
    <SectionList />
</section>
</template>
<script>
import SectionList from '~/components/Main/Section02List.vue'

export default {
  components: {
    SectionList
  }
}
</script>
<style scoped>
@import '~/assets/css/main/section02.css';
</style>