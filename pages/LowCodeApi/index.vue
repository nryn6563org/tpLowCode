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
      <div class="lowcode-top">
        <div class="left-menu">
          <button class="btn btn-sq-md btn-gray" :class="{ active: activeButton === 'banks' }" @click="scrollToSection('banks')">AI 투자금융 API</button>
          <button class="btn btn-sq-md btn-gray" :class="{ active: activeButton === 'publics' }" @click="scrollToSection('publics')">공공데이터 API</button>
          <button class="btn btn-sq-md btn-gray" :class="{ active: activeButton === 'privates' }" @click="scrollToSection('privates')">민간데이터 API</button>
          <button class="btn btn-sq-md btn-gray" :class="{ active: activeButton === 'ai_api' }" @click="scrollToSection('ai_api')">AI API</button>
        </div>
        <button class="btn btn-sq-md btn-line-default">API 블록스토어 바로가기</button>
      </div>
      <!-- lowcode-top -->

      <div class="api_board">
        <div id="banks" class="board-list" ref="banks">
          <strong>AI 투자금융 API</strong>
          <div v-for="(item, index) in banks" :key="index">
            <LowBox :title="item.title" :content="item.content" :uniqueClass="'banks-' + index" />
          </div>
        </div>
        <!--  -->

        <div class="board-list" id="publics" ref="publics">
          <strong>공공데이터 API</strong>
          <div v-for="(item, index) in publics" :key="index">
            <LowBox :title="item.title" :content="item.content" :uniqueClass="'publics-' + index" />
          </div>
        </div>
        <!-- publics -->

        <div id="privates" class="board-list" ref="privates">
          <strong>민간데이터 API</strong>
          <div v-for="(item, index) in privates" :key="index">
            <LowBox :title="item.title" :content="item.content" :uniqueClass="'privates-' + index" />
          </div>
        </div>
        <!--  -->

        <div id="ai_api" class="board-list" ref="ai_api">
          <strong>AI API</strong>
          <div v-for="(item, index) in ais" :key="index">
            <LowBox :title="item.title" :content="item.content" :uniqueClass="'ais-' + index" />
          </div>
        </div>
        <!--  -->
      </div>
      <!-- bank -->
    </div>
</div>
</template>

<script>
import LowBox from '~/components/Lowcode/LowBox.vue'

export default {
  components: {
    LowBox
  },
  data() {
    return {
      activeButton: 'banks',
      observers: [], // 옵저버를 저장할 배열
      banks: [
        { title: '실적공시(확정)', content: '' },
        { title: '실적공시(잠정)', content: 'AI가 수집/분석한 잠정 실적공시 분석 데이터' },
        { title: '시세급등락', content: '장중 5% 이상 변동 종목 AI 분석 데이터' },
        { title: '테마특징주', content: '강세 테마와 관련특징주 분석 ' },
        { title: '장중수급동향', content: '외국인, 기관매매 수급 종목 분석' },
        { title: '수주공시 리포트', content: 'AI가 수집/분석한 수주공시 분석 뉴스' },
        { title: '시황뉴스', content: 'AI가 분석/작성한 시황 뉴스' },
        { title: '증권사 리포트', content: '증권사 리포트 요약 정리' },
        { title: '종목별실적공시(확정)', content: 'AI가 수집/분석한 종목별 실적공시(확정)' },
        { title: '종목별실적공시(잠정)', content: 'AI가 수집/분석한 종목별 실적공시(잠정)' },
        { title: '종목별 시세급등락', content: '종목별 장중 5% 이상 변동 시 AI 분석 데이터 제공' },
        { title: '종목별 테마특징주', content: '종목별 연관 강세테마 분석' },
        { title: '종목별 장중수급동향', content: '종목별 외국인, 기관 수급 동향 분석' },
        { title: '종목별 수주공시', content: 'AI가 수집/분석한 종목별 수주공시 분석 뉴스' },
        { title: '종목별 리포트', content: '종목별 증권사 리포트 요약 정리' },
        { title: '종목별 실적공시 DATA(확정)', content: '종목별 실적공식(확정)을 세부 데이터화' },
        { title: '종목별 실적공시 DATA(잠정)', content: '종목별 실적공식(잠정)을 세부 데이터화' },
        { title: '키워드 라이브러리 전체', content: '종목 관련 주요 키워드 최근날자순 조회 (전체)' },
        { title: '종목별 키워드 라이브러리', content: '종목별 키워드 라이브러리 조회 ' },
        { title: '이슈 키워드 전체', content: '투자관련 뉴스에서 추출된 이슈키워드와 관련종목 최근날짜순 조회 (전체)' },
        { title: '종목별 이슈키워드', content: '종목별 이슈키워드 조회' }
      ],
      publics: [
        { title: '교육분야 24건 API통합', content: '' },
        { title: '공공행정분야 25건 API통합', content: '' },
        { title: '식품건강분야 20건 API통합', content: '' },
        { title: '문화관광분야 43건 API통합', content: '' },
        { title: '보건의료분야 22건 API통합', content: '' },
        { title: '환경기상분야 52건 API통합', content: '' }
      ],
      privates: [
        { title: '네이버 검색의 블로그 검색 결과', content: '' },
        { title: '네이버 검색의 뉴스 검색 결과', content: '' },
        { title: '네이버 카페의 공개 게시판 글을 검색한 결과', content: '' },
        { title: '네이버 검색의 지식iN 검색 결과', content: '' },
        { title: '네이버 검색의 웹 문서 검색 결과', content: '' },
        { title: '네이버 검색의 책 검색 결과', content: '' },
        { title: '네이버 검색의 백과사전 검색 결과', content: '' },
        { title: '학술 논문, 리포트, 전문 기관의 보고서 등의 전문 자료 검색 결과', content: '' },
        { title: '네이버 지역 서비스에 등록된 업체 및 기관을 검색한 결과', content: '' },
        { title: '네이버 검색의 이미지 검색 결과', content: '' },
        { title: '네이버 검색의 쇼핑 검색 결과', content: '' }
      ],
      ais: [
        { title: 'KNN 분류 모델 학습 및 저장', content: 'KNN 분류 모델을 적용하여 데이터를 학습하고 학습된 모델을 저장합니다.' },
        { title: 'KNN 회귀 모델 학습 및 저장', content: 'KNN 회귀 모델을 적용하여 데이터를 학습하고 학습된 모델을 저장합니다.' },
        { title: 'Random Forest 분류 모델 학습 및 저장', content: 'Random Forest 분류 모델을 적용하여 데이터를 학습하고 학습된 모델을 저장합니다.' },
        { title: 'Random Forest 회귀 모델 학습 및 저장', content: 'Random Forest 회귀 모델을 적용하여 데이터를 학습하고 학습된 모델을 저장합니다.' },
        { title: 'RNN 분류 모델 학습 및 저장', content: 'RNN 분류 모델을 적용하여 데이터를 학습하고 학습된 모델을 저장합니다.' },
        { title: 'RNN 회귀 모델 학습 및 저장', content: 'RNN 회귀 모델을 적용하여 데이터를 학습하고 학습된 모델을 저장합니다.' },
        { title: 'LSTM 분류 모델 학습 및 저장', content: 'LSTM 분류 모델을 적용하여 데이터를 학습하고 학습된 모델을 저장합니다.' },
        { title: 'LSTM 회귀 모델 학습 및 저장', content: 'LSTM 분류 모델을 적용하여 데이터를 학습하고 학습된 모델을 저장합니다.' },
        { title: '저장된 모델 목록 조회', content: 'LSTM 회귀 모델을 적용하여 데이터를 학습하고 학습된 모델을 저장합니다.' },
        { title: '모델 테스트', content: '학습을 통해 저장된 모델 목록의 정보를 불러옵니다. 요청한 날짜에 학습했던 전체 모델 리스트를 제공합니다.' },
        { title: 'GPT로 텍스트 요약', content: '사용자로부터 입력받은 텍스트를 openAI API를 통해 3줄 이내로 요약합니다.' },
        { title: 'GPT로 텍스트에서 주제어 추출 ', content: 'openAI API를 통해 사용자로부터 입력받은 텍스트에서 3개의 주제어를 추출합니다.' }
      ]
    }
  },
  mounted() {
    // 컴포넌트가 마운트될 때 옵저버 설정
    this.setupObservers()
  },
  beforeDestroy() {
    // 컴포넌트가 파괴되기 전에 옵저버 해제
    this.disconnectObservers()
  },
  methods: {
    scrollToSection(sectionId) {
      // 해당 섹션으로 스크롤 이동 및 activeButton 상태 업데이트
      this.activeButton = sectionId
      this.$nextTick(() => {
        const section = this.$refs[sectionId]
        if (section) {
          // 섹션의 현재 위치를 계산
          const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset
          // -300px 오프셋을 적용하여 목표 위치를 계산
          const targetPosition = sectionPosition - 300
          // 부드럽게 스크롤 이동
          window.scrollTo({ top: targetPosition, behavior: 'smooth' })
        }
      })
    },
    handleIntersect(entries) {
      // 섹션이 뷰포트와 교차할 때 호출되는 메서드
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 섹션이 보이면 activeButton 상태를 업데이트
          this.activeButton = entry.target.id
        }
      })
    },
    setupObservers() {
      // Intersection Observer를 설정하는 메서드
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7 // 섹션이 10% 이상 보일 때 옵저버가 트리거
      }

      // 각 섹션에 대한 옵저버를 생성하고 관찰 시작
      this.observers = ['banks', 'publics', 'privates', 'ai_api'].map((ref) => {
        const observer = new IntersectionObserver(this.handleIntersect, options)
        observer.observe(this.$refs[ref])
        return observer
      })
    },
    disconnectObservers() {
      // 컴포넌트가 파괴될 때 옵저버를 해제하는 메서드
      this.observers.forEach(observer => observer.disconnect())
    }
  }
}
</script>
<style scoped>
@import '~/assets/css/sub/code.css';

.subVisual{
  @apply bg-[url('~/assets/images/sub/sub_topimg01.png')]
  bg-no-repeat bg-[center_top] bg-[#3343ab]
}
</style>