<template>
  <div class="login_wrap">
    <div class="login_form_wrap">
      <div class="login_head">
        <img src="./logo_index.png"
             alt="头条新闻">
      </div>

      <div class="login_form">
        <el-form :model="form">
          <el-form-item>
            <el-input v-model="form.mobile"
                      placeholder="手机号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-col :span='10'>
              <el-input v-model="form.code"
                        placeholder="验证码"></el-input>
            </el-col>
            <el-col :span='10'
                    :offset='2'>
              <el-button @click="handleSendCode">获取验证码</el-button>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button class="btn_login"
                       type="primary"
                       @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import '@/vendor/gt' // gt.js 会向全局 window 暴露一个函数 initGeetest

export default {
  name: 'Applogin',
  data () {
    return {
      form: {
        mobile: '19801118660',
        code: '',
        captchaObj: null // 通过 initGeetest 得到极验验证码对象
      }
    }
  },
  methods: {
    handleSendCode () {
      console.log('1')
      const { mobile } = this.form

      if (this.captchaObj) {
        return this.captchaObj.verify()
      }
      // this.$http()
      axios({
        method: 'GET',
        url: `http://ttapi.research.itcast.cn/mp/v1_0/captchas/${mobile}`
      })
        .then(res => {
          // console.log(res)
          const data = res.data.data
          window.initGeetest({
            gt: data.gt,
            challenge: data.challenge,
            offline: !data.success,
            new_captcha: data.new_captcha,
            product: 'bind'
          }, (captchaObj) => {
            this.captchaObj = captchaObj
            // 这里可以调用验证实例 captchObj 的实例方法
            captchaObj.onReady(function () {
              // 只有 ready 了才能显示验证码
              captchaObj.verify()
            }).onSuccess(function () {
              console.log('验证成功了')
            })
          })
        })
    },

    onSubmit () {
      console.log('onSubmit')
    }
  }
}
</script>

<style lang="less" scoped>
.login_wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;

  .login_form_wrap {
    padding: 50px;
    border-radius: 10px;
    background-color: #fff;

    .login_head {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;

      img {
        width: 200px;
      }
    }

    .login_form {
      .btn_login {
        width: 100%;
      }
    }
  }
}
</style>
