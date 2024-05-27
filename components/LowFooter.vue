<template>
  <footer>
    <div id="footer">
      <div class="fnb">
        <NuxtLink to="/">서비스 약관/정책</NuxtLink>
        <NuxtLink to="/">개인정보 처리방침</NuxtLink>
        <NuxtLink to="/">원격지원</NuxtLink>
        <NuxtLink to="/">고객센터</NuxtLink>
        <NuxtLink to="/">공지사항</NuxtLink>
        <NuxtLink to="/">기업씽크풀</NuxtLink>
        <NuxtLink to="/">AI 바우처</NuxtLink>
      </div>

      <address>
        (주)씽크풀 서울시 영등포구 국제금융로 70, 15층(여의도동, 미원빌딩) <br>
        고객센터 : 1899-9858 / 02-2174-6380 사업자등록번호 : 116-81-54775 대표 : 김동진<br>
        <br>
        Copyright &copy; Thinkpool Co.,Ltd. All Rights Reserved
      </address>

      <div class="familySite">
        <button @click="familyOpen">
          <span>패밀리사이트</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
            <path d="M0 0L3.75 4.75L7.5 0H0Z" fill="white" />
          </svg>
        </button>
        <div v-if="isOpen" class="familyList animate__animated animate__fadeIn animate__faster">
          <NuxtLink to="/">로그인도용방지</NuxtLink>
          <NuxtLink to="/">라씨로</NuxtLink>
          <NuxtLink to="/">씽크풀 공식블로그</NuxtLink>
          <NuxtLink to="/">라씨매매신호</NuxtLink>
          <NuxtLink to="/">오픈API지원</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'LowFooter',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    familyOpen() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style scoped>
@import '~/assets/css/footer/footer.css';
</style>