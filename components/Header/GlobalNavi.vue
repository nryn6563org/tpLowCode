<template>
<div class="globalMenu">
    <NuxtLink to="/LowCodeApi">로우코드API</NuxtLink>
    <NuxtLink to="/LowSolution">로우코드솔루션</NuxtLink>
    <NuxtLink to="/BlockStore">API블록스토어</NuxtLink>
    <NuxtLink to="/DevLecture">개발강의</NuxtLink>
    <a href="#">싱커톤</a>
  </div>
  <!--   globalMenu   -->
</template>
<script>
</script>
<style scoped>
.nuxt-link-active{
  @apply text-[#3190FF] font-bold !important
}
</style>