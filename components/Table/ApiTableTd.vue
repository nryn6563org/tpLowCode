<template>
  <tr>
    <td>{{ apiName }}</td>
    <td>{{ apiInfo }}</td>
    <td>씽크풀</td>
  </tr>
</template>
<script>
export default {
  props: {
    apiName: {
      type: String,
      required: true
    },
    apiInfo: {
      type: String,
      required: true
    }
  }
}
</script>
