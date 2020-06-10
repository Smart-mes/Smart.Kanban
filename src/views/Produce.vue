<template>
  <div id="Produce">
    <h1 class="title">{{ model.title }}</h1>
    <p class="time">{{ time }}</p>
    <v-table
      style="width: 100%;"
      class="main-table"
      :columns="columns"
      :table-data="tableData"
      :show-vertical-border="false"
      is-horizontal-resize
      :vertical-resize-offset="60"
      :multiple-sort="false"
      :min-height="450"
      :title-row-height="80"
      :row-height="80"
    />
  </div>
</template>

<script>
import api from '@/api'
import Produce from '@/models/Produce'

export default {
  name: 'Produce',
  data () {
    return {
      timer: null,
      time: '',
      model: Produce,
      tableData: [],
    }
  },
  computed: {
    wsCode () {
      return this.$route.query.ws
    },
    columns () {
      return this.model.cols.map(col => {
        col.isResize = true
        return col
      })
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
        return void alert('缺少参数ws')
      }
      api.get('ProduceReport', { wsCode: this.wsCode }).then(data => {
        this.tableData = data
        this.timer = setTimeout(this.fetchReportData, 5000)
      })
    },
  },
}
</script>

<style lang="scss">
.title {
  font-size: 48px;
  text-align: center;
}
.main-table {
  margin: 5px auto;
  font-size: 22px;
  .v-table-header-row {
    background-color: #efeeec;
    font-weight: bold;
    & td:first-child > div {
      margin-left: 3px;
    }
  }
}
.v-table-row td:first-child > div {
  margin-left: 3px;
}

#Produce {
  .v-table-title-cell {
    font-size: 26px;
  }
  .v-table-body-cell {
    font-size: 24px;
  }
}
</style>
