<template>
  <div id="container" class="sub">
    <div class="subVisual">
      <div class="txt">
        <strong><em>Low-code</em> Solution</strong>
        <span>빠르고 쉬운 백앤드 로우코드 개발 솔루션을 웹에서 제공합니다.</span>
      </div>
      <!-- txt -->
    </div>
    <!-- subVisual -->

    <div class="subContent">
      <div class="solution">
        <div class="txt">
          <strong>
            서비스를 만들고 싶은데 <br><em>백엔드</em>가 고민인가요?
          </strong>
          <span>싱크트리는 로우코드 블록으로 간편하게 백엔드를 개발할 수 있는 솔루션 입니다.</span>

          <button class="btn btn-primary btn-lg">로우코드 솔루션 무료로 시작하기</button>
        </div>
      </div>
      <!-- solution -->

      <div class="techtree">
        <div class="title">
          <em>백엔드 로우코드 개발솔루션 싱크트리</em>
          <span>다음과 같은 진보적인 기능을 제공합니다. </span>
        </div>
        <!-- title -->

        <SectionList />
        <!-- section list -->
      </div>
      <!-- tech tree -->
    </div>
    <!-- subContent -->
  </div>
  <!-- container -->
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
@import '~/assets/css/sub/solution.css';
.subVisual{
  @apply bg-[url('~/assets/images/sub/sub_topimg02.png')] bg-no-repeat bg-[center_top] bg-[#2c7eb5]
}
</style>
