export default {
  // 模型名称
  name: 'Produce',
  // 标题
  title: '车间生产看板',
  // 表格列配置
  cols: [
    { field: 'lineName', title: '线别', width: 80 },
    { field: 'customer', title: '客户', width: 80 },
    { field: 'orderNo', title: '工单', width: 120 },
    { field: 'productName', title: '产品型号', width: 360 },
    { field: 'qty', title: '计划数量', width: 100 },
    { field: 'cpltQty', title: '完成数量', width: 100 },
    { field: 'failQty', title: '不良品', width: 100 },
    { field: 'reach', title: '达成率(%)', width: 100 },
  ],
}
