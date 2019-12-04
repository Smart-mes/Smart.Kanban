<template>
  <div id="Produce">
    <!--  -->
    Produce
  </div>
</template>

<script>
export default {
  name: 'Produce',
  computed: {
    wsCode () {
      return this.$route.query.wsCode
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
