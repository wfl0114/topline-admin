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
              <el-button>获取验证码</el-button>
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
export default {
  name: 'Applogin',
  data () {
    return {
      form: {
        mobile: '19801118660',
        code: '123456'
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('1')
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
