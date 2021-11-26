<template>
  <el-dialog
      id="dialog"
      :title="title"
      :visible="dialogVisible"
      width="25%"
      center
      :close-on-click-modal="false"
      @close="close"
      destroy-on-close
  >
    <el-form ref="form" :model="formData">
      <el-form-item v-if="selectDiffType === 'school'">
        <el-input v-model="formData.schoolName" placeholder="学校名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formData.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formData.phone" placeholder="联系电话"></el-input>
      </el-form-item>
      <el-form-item v-if="selectDiffType === 'service'">
        <el-select v-model="formData.type" placeholder="请选择咨询服务" style="width: 100%">
          <el-option v-for="item in typeList"
                     :label="item.label" :value="item.value"
                     :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-input type="textarea" :rows="4" v-model="formData.message" placeholder="留言"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="btn-send" @click="sendData">提交资料</div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { randomId } from '~/utils'

export default {
  name: "webDialog",
  props: {
    title: {
      type: String,
      default: '生涯规划咨询',
    },
    dialogVisible: {
      type: Boolean,
      default: () => false,
    },
    selectDiffType: {
      type: String,
      default: 'service',
    },
  },
  data () {
    return {
      formData: {
        schoolName: '',
        name: '',
        phone: '',
        content: '',
        type: '',
      },
      typeList: [
        { id: randomId(), label: '求职指导', value: '求职指导' },
        { id: randomId(), label: '高中生辅导', value: '高中生辅导' },
        { id: randomId(), label: '私人定制', value: '私人定制' },
        { id: randomId(), label: '职业规划', value: '职业规划' },
      ],
    }
  },
  methods: {
    resetForm () {
      this.formData = {
        name: '',
        phone: '',
        message: '',
        type: '',
      }
    },
    close () {
      this.resetForm();
      this.$emit('update:dialogVisible', false)
    },
    sendData () {
      this.$emit('sendData', this.formData);
    },
  },
}
</script>

<style scoped lang="less">
.btn-send {
  height: 40px;
  line-height: 40px;
  background: linear-gradient(270deg, #00D8FF 0%, #0077FB 100%);
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #FFFFFF;
  text-align: center;
  cursor: pointer;
}
</style>
