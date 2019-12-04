<template>
  <div id="Produce">
    <!--  -->
    Produce
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'Produce',
  data () {
    return {
      timer: null,
    }
  },
  computed: {
    wsCode () {
      return this.$route.query.wsCode
    },
  },
  mounted () {
    this.fetchReportData()
  },
  beforeDestroy () {
    this._clear()
  },
  methods: {
    _clear () {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    fetchReportData () {
      this._clear()
      if (!this.wsCode) {
        return void alert('缺少参数wsCode')
      }
      api.get('ProductReport/wsCodeProduct', { wsCode: this.wsCode }).then(data => {
        console.log(data)
        this.timer = setTimeout(this.fetchReportData, 5000)
      })
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
