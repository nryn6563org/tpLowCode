<template>
  <div id="container" class="sub">
    <div class="subVisual">
      <div class="txt">
        <strong><em>Development</em> Academy</strong>
        <span>로우코드 API 개발을 위한 동영상 강의를 제공합니다.</span>
      </div>
      <!-- txt -->
    </div>
    <!-- subVisual -->

    <div class="subContent">
      <div class="development">
        <div class="txt">
          <strong>
            로우코드 개발강의
          </strong>
          <span>백엔드 로우코드 개발, 2시간 내로 학습하고 <br>DB 연결부터 로우코드 및 AI 서비스 활용까지 한 번에 끝낼 수 있습니다.</span>
        </div>
      </div>
      <!-- development -->

      <div class="lecture">
        <div class="list">
          <div class="tit">무료 학습</div>
          <!-- tit -->
          <div class="lec_list">
            <div>
              <strong>인프런</strong>
              <span>인프런에서 무료로 백엔드 노코<br>드 개발을 배워 보세요.</span>
              <button class="btn btn-sm btn-primary">자세히보기</button>
            </div>
            <!--  -->

            <div>
              <strong>싱크트리 스쿨</strong>
              <span>싱크트리 스쿨에서 싱크트리를<br>쉽고 빠르게 학습하세요.</span>
              <button class="btn btn-sm btn-primary">자세히보기</button>
            </div>
            <!--  -->
          </div>
          <!-- lec_list -->
        </div>
        <!-- 무료 -->

        <div class="list">
          <div class="tit">DB 학습</div>
          <!-- tit -->
          <div class="lec_list">
            <div>
              <strong>기존 DB</strong>
              <span>사용하던 DB를 손쉽게 싱크트리<br>와 연결합니다.</span>
              <button class="btn btn-sm btn-primary">자세히보기</button>
            </div>
            <!--  -->

            <div>
              <strong>노코드 DB</strong>
              <span>노코드 DB들도 손쉽게 싱크트리<br>와 연결합니다.</span>
              <button class="btn btn-sm btn-primary">자세히보기</button>
            </div>
            <!--  -->
          </div>
          <!-- lec_list -->
        </div>
        <!-- 유료 -->
      </div>
      <!-- development -->

      <div class="tk_tree">
        <div class="tit">
          <em>모두와 연결하는 싱크트리</em>
          <strong>
            로우코드 자동화 툴? AI 서비스? <br>무엇이든 손쉽게 싱크트리와 연결할 수 있습니다.
          </strong>
        </div>
        <!-- tit -->

        <div class="list">
          <NuxtLink to="/"><img src="~/assets/images/sub/devl1.png" alt="Bubble"><span>노코드 자동화 <br><em>Bubble</em></span></NuxtLink>
          <NuxtLink to="/"><img src="~/assets/images/sub/devl2.png" alt="Airtable"><span>노코드 자동화 <br><em>Airtable</em></span></NuxtLink>
          <NuxtLink to="/"><img src="~/assets/images/sub/devl3.png" alt="Weweb"><span>AI Preset <br><em>Weweb</em></span></NuxtLink>
          <NuxtLink to="/"><img src="~/assets/images/sub/devl4.png" alt="Adalo"><span>AI Preset <br><em>Adalo</em></span></NuxtLink>
          <NuxtLink to="/"><img src="~/assets/images/sub/devl5.png" alt="ChatGPT"><span>AI Preset <br><em>ChatGPT</em></span></NuxtLink>
          <NuxtLink to="/"><img src="~/assets/images/sub/devl5.png" alt="GPT-3"><span>AI Preset <br><em>GPT-3</em></span></NuxtLink>
          <NuxtLink to="/"><img src="~/assets/images/sub/devl5.png" alt="DALL·E 2"><span>AI Preset <br><em>DALL·E 2</em></span></NuxtLink>
          <NuxtLink to="/"><img src="~/assets/images/sub/devl6.png" alt="DeepAI"><span>AI Preset <br><em>DeepAI</em></span></NuxtLink>
        </div>
      </div>
    </div>
    <!-- subContent -->
  </div>
  <!-- container -->
</template>

<script>
</script>

<style scoped>
@import '~/assets/css/sub/development.css';
.subVisual{
  @apply bg-[url('~/assets/images/sub/sub_topimg03.png')] bg-no-repeat bg-[center_top] bg-[#209168]
}
</style>
