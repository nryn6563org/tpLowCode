<template>
  <div id="container" class="sub">
    <div class="subVisual">
      <div class="txt">
        <strong><em>Low-code</em> API</strong>
        <span
          >빠르고 쉬운 백앤드 로우코드 개발 솔루션을 웹에서 제공합니다.</span
        >
      </div>
      <!-- txt -->
    </div>
    <!-- subVisual -->

    <div class="subContent">
      <div class="api-w">
        <div class="title">
          <strong>AI 투자금융 API</strong>
          <button class="btn btn-sq-md btn-line-default">
            API 블록스토어 바로가기
          </button>
        </div>
        <!-- title -->

        <div class="detailContent">
          <div class="title">
            <strong>키워드 라이브러리(국내)</strong>
            <span>특정 투자 대상 별 동적인 주요 키워드 조회 상품입니다.</span>
          </div>
          <!-- title -->

          <div class="table-w">
            <table width="100%" class="defaultTable">
              <colgroup>
                <col width="300" />
                <col width="*" />
                <col width="200" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">제공 API</th>
                  <th scope="col">제공 정보</th>
                  <th scope="col">제공 기관</th>
                </tr>
              </thead>
              <tbody v-for="(cont, index) in conts" :key="index">
                <TableTd :apiName="cont.name" :apiInfo="cont.info" />
              </tbody>
            </table>
            <!-- table -->

            <div class="tbl-btn">
              <button class="btn btn-sq-md btn-long btn-dark-gray">
                리스트 페이지
              </button>
            </div>
            <!-- tbl-btn -->
          </div>
          <!-- table-w -->

          <div class="priceList">
            <strong>이용요금</strong>
            <div class="personal">
              <div class="title">개인고객 구독 신청</div>

              <div class="price">
                <strong><em>＄</em>0.3</strong>
                <span>per 1call</span>
              </div>

              <div class="txt">제 3자 데이터 공유 배포 금지</div>

              <a href="#" class="btn btn-lg btn-person" target="_blank">
                API 블록스토어 바로가기
              </a>
            </div>
            <div class="corporate">
              <div class="title">기업고객 구독 신청</div>

              <div class="price">
                <strong>협의</strong>
              </div>

              <div class="txt">
                사용량에 따라 <br />
                다양한 조직 규모와 상황에 맞게 <br />
                협의할 수 있습니다.
              </div>

              <button class="btn btn-lg">문의하기 1666-6300</button>
            </div>
          </div>
        </div>
        <!-- detailContent -->
      </div>
      <!-- api-w -->

      <div class="h-100"></div>
    </div>
    <!-- subContent -->
  </div>
</template>
<script>
import TableTd from '~/components/Table/ApiTableTd.vue'
import lowcode from '~/static/lowcode.json'

export default {
  components: {
    TableTd
  },
  async asyncData({ params }) {
    const id = params.id

    // 예시 비동기 작업: API 호출
    let data
    try {
      const response = await fetch(`http://localhost:3000/tpLowCode/LowCodeAPi/${id}`)
      data = await response.json()
    } catch (error) {
      // console.error('데이터를 가져오는 중 오류 발생:', error)
      // 기본 데이터 설정
      data = lowcode.banks[id] || lowcode.publics[id] || lowcode.privates[id] || lowcode.ais[id]
    }

    return data
  },
  data() {
    return {
      conts: []
    }
  }
}
</script>

<style scoped>
@import "~/assets/css/sub/code.css";

.subVisual {
  @apply bg-[url('~/assets/images/sub/sub_topimg01.png')]
  bg-no-repeat bg-[center_top] bg-[#3343ab];
}
</style>
