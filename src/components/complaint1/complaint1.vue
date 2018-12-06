<template>
  <div class="all">
    <div class="center1">
      <div class="center_top1">
        投诉与建议
      </div>
      <div class="center_top11">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您好！如果您遇到有关单位（个人）侵权行为或者涉企单位服务不力，对我县营商环境有什么意见和建议，请您务必认真填写以下内容进行反馈，以便使您的投诉和意见（建议）得到及时回复和处理。谢谢！
      </div>
      <div class="center_top22">
        <div><label>*</label>企业名称/姓名：</div>
        <input placeholder="请输入企业名称/姓名" v-model="nickname"/>
      </div>
      <div class="center_top44">
        <div><label>*</label>联系电话</div>
        <input placeholder="请输入您的联系电话" v-model="mobile" maxlength="11"/>
      </div>
      <div class="center_top33">
        <div style="margin-left: 15px">E-mail</div>
        <input placeholder="请输入您的e-mail" v-model="email"/>
      </div>
      <div class="center_top44">
        <div style="margin-left: 15px">地址</div>
        <input placeholder="请输入您的地址" v-model="address"/>
      </div>
      <div class="center_top44">
        <div><label>*</label>标题</div>
        <input placeholder="请输入您的标题" v-model="title"/>
      </div>
      <div class="center_top33">
        <div><label>*</label>内容</div>
        <textarea placeholder="请输入您的内容" v-model="content"/>
      </div>


      <div class="center_bottom1">
        <div class="but">
          <button @click="submission()">提交</button>
          <button @click="again">重置信息</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radio1: 1,
        title: '',
        mobile: '',
        email: '',
        content: '',
        address: '',
        nickname: ''
      }
    },
    methods: {
      submission() {
        this.$axios({
          method: "post",
          url: "/api/home/proposal_Complaint",
          headers: {
            Accept: "application/vnd.myapp.v1+json"
          },
          data: {
            title: this.title,
            mobile: this.mobile,
            email: this.email,
            content: this.content,
            address: this.address,
            nickname: this.nickname
          }
        })
          .then(res => {
            if (res.data.status == 1) {
              this.$dialog.toast({
                mes: res.data.message,
                timeout: 1500,
                icon: 'success'
              });
            } else {
              this.$dialog.toast({
                mes: res.data.message,
                timeout: 1500,
                icon: "error"
              })
            }
          })
      },
      again() {
        this.title = "";
        this.mobile = "";
        this.email = "";
        this.address = "";
        this.nickname = "";
        this.content = "";
      }
    }
  }
</script>

<style scoped>
  .center1 div {
    margin-top: 10px;
    /*font-weight: 500;*/
  }

  .center1 label {
    color: red;
    font-size: 20px;
    padding-right: 5px;
  }

  input {
    border: 0;
    width: 100%;
    height: 35px;
    padding: 0 10px;
    background: #f5f5f5;
  }

  textarea {
    border: 0;
    background:#f5f5f5;
    width: 100%;
    height: 100px;
    padding: 10px 10px;
  }

  .center1 {
    padding: 20px 20px;
    background: #ffffff;
    font-size: 16px;
  }

  .center_top1 {
    text-align: center;
    font-size: 22px;
    margin-top: 10px;
  }

  .center_top11 {
    line-height: 20px;
    font-size: 12px;
  }

  .center_bottom1 button {
    margin-bottom: 20px;
    width: 100px;
    height: 40px;
    border: 0;
    background: #0064bb;
    color: #fff;
    border-radius: 4px;
  }

  .center_bottom1 button:nth-child(1) {
    margin-right: 20px;
  }

  .center_bottom1 button:nth-child(2) {
    margin-left: 20px;
  }

  .center_bottom1 {
    text-align: center;
    padding: 10px 0;
    width: 100%;
  }
</style>
