<template>
  <div class="pagination-wrap">
    <span class="btn-pagination">首页</span>
    <el-pagination
        background
        :current-page.sync="currentPage"
        :page-sizes="pageSizes"
        :page-size.sync="pageSize"
        :layout="layout"
        :total="total"
        :pager-count="pagerCount"
        v-bind="$attrs"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    >
    </el-pagination>
    <span class="btn-pagination">尾页</span>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    hidden: { // 控制 分页是否出现，这里一般设置total小于等于0的时候，将分页组件隐藏。
      type: Boolean,
      default: false
    },
    total: { // 数据总条数
      required: true,
      type: Number
    },
    page: {
      //当前页
      type: Number,
      default: 0
    },
    limit: {
      //每页显示条目个数， 限制 每页多少条数据
      type: Number,
      default: 10
    },
    pageSizes: { // 每页显示个数选择器的选项设置,下拉选择框的选项值
      type: Array,
      default() {
        return [10, 20, 30, 50];
      }
    },
    layout: { // 组件布局
      type: String,
      default: "prev, pager, next"
    },
    background: { // 是否为分页按钮添加背景色，默认有背景，数字在蓝色的小框内的样式
      type: Boolean,
      default: true
    },
    pagerCount: {  //页码按钮的数量， 默认显示7个数，当总页数超过该值时会折叠,注意这里：它必须是 大于等于 5 且小于等于 21 的奇数
      type: Number,
      default: 7
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    currentPage: {  // 计算属性返回当前页 （会改变）
      get(val) {
        return this.page;
      },
      set(val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: { // 返回每页的限制条数，如每页30条，支持 .sync 修饰符实现同步更改
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit('update:limit', val)
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("handleSizeChange", val);
    },
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val - 1);
    },
  }
}
</script>

<style lang="less">

.pagination-wrap {
  width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-bottom: 88px;

  .btn-pagination {
    width: 84px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border: 1px solid #DDDDDD;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #999999;
    cursor: pointer;
  }

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background: linear-gradient(270deg, #00D8FF 0%, #0077FB 100%);
  }
  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev,
  .el-pagination.is-background .el-pager li {
    border: 1px solid #DDDDDD;
    background-color: #FFFFFF;
    color: #999999;
  }
}

</style>
