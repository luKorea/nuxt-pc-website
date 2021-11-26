<template>
  <div class="system-form-container">
    <div class="common-title text-center">预约使用</div>
    <div class="content">
      <web-map map-height="400px" map-width="400px"></web-map>
      <div class="form-wrap">
        <el-form ref="form" :model="formData">
          <el-form-item>
            <el-input v-model="formData.schoolName" placeholder="学校名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formData.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formData.phone" placeholder="联系电话"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="textarea" :rows="4" v-model="formData.message" placeholder="留言"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="btn-send" @click="sendData">提交资料</div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import WebMap from '~/components/webMap'

export default {
  name: "webForm",
  components: {
    WebMap,
  },
  data () {
    return {
      formData: {
        name: '',
        phone: '',
        message: '',
        type: '预约使用',
      },
    }
  },
  methods: {
    sendData () {
      this.$emit('sendData', this.formData)
    },
  },
}
</script>

<style scoped lang="less">
.system-form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding-top: 80px;

  .content {
    width: 90%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
     .form-wrap {
      margin-left: 50px;
      .el-input {
        width: 400px;
      }
    }
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
  }
}
</style>
