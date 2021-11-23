<template>
  <div class="customer-container">
    <div class="common-title">添加客服了解更多信息</div>
    <div class="img">
      <img :src="qrcode" alt="">
    </div>
    <div class="btn-customer">微信号：Careerto</div>
  </div>
</template>

<script>
import { companyInfo } from '~/utils'

export default {
  name: "customer",
  data () {
    return {
      qrcode: companyInfo.serviceQrcode,
    }
  },
}
</script>

<style scoped lang="less">
.customer-container {
  width: 100%;
  height: 648px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
    }
  }

  .btn-customer {
    font-size: 18px;
    font-family: MicrosoftYaHeiSemibold;
    color: #333333;
    width: 192px;
    height: 60px;
    line-height: 60px;
    border-radius: 30px;
    border: 1px solid #979797;
    text-align: center;
  }
}
</style>
