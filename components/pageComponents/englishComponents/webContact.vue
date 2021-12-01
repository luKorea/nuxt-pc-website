<template>
  <div class="english-contact-container">
    <div class="common-title text-center" style="margin-bottom: 60px">——— Contact Us ———</div>
    <el-form ref="form"
             :model="formData"
             :label-width="labelWidth"
             label-position="left"
    >
      <el-form-item label="Email：">
        <el-input v-model="formData.email" placeholder="email"></el-input>
      </el-form-item>
      <el-form-item label="TEL：">
        <el-input v-model="formData.phone" placeholder="tel"></el-input>
      </el-form-item>
      <el-form-item label="Feedback Content：">
        <el-input type='textarea' :rows="4" v-model="formData.content" placeholder="content"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="btn-send" @click="sendData">Submit</div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "webContact",
  data () {
    return {
      labelWidth: '162px',
      formData: {
        email: '',
        phone: '',
        content: '',
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
.english-contact-container {
  padding-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 1024px;

  .btn-send {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: linear-gradient(270deg, #00D8FF 0%, #0077FB 100%);
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #FFFFFF;
    cursor: pointer;
    margin-bottom: 100px;
  }
}
</style>
