<template>
  <div>
    <strong>{{ title }}</strong>
    <span>{{ content }}</span>
    <button
      class="btn btn-sm btn-primary"
      :class="uniqueClass"
      @click="navigateToDetail"
    >
      자세히보기
    </button>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    uniqueClass: {
      type: String,
      required: true
    }
  },
  methods: {
    navigateToDetail() {
      this.$router.push({
        name: 'DetailPage',
        params: { id: this.uniqueClass }
      })
    }
  }
}
</script>
