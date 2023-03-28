<template>
  <div v-if="message.length > 0" class="alert alert-success" role="alert">
    <h5 class="alert-heading">You've successfully applied for Inbank Small loan</h5>
    {{message}}
  </div>
</template>

<script>
export default {
  name: "AlertPositiveDecisionMessage.vue",
  props: {
    message: {}
  }
}
</script>

<style scoped>

</style>