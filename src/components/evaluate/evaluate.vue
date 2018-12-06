<template>
  <div class="all">
    <yd-tab v-model="tab1" border-color="#0064bb" active-color="#0064bb">
      <yd-tab-panel label="店小二服务评价">
        <div class="center">
          <div class="center_top">
            “店小二”服务满意度评价
          </div>
          <div class="center_top1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您好！为了优化营商环境，促进县域中小企业健康发展,请对各涉企部门(单位)的服务情况作出客观、公正的评价。
          </div>
          <div style="overflow: auto;height: 510px">
            <div class="center_1" style="clear: both;padding: 15px 0 35px 0 ;"
                 v-for="(val,idx) in data" :key="idx">
              <div style="float: left;margin-left: 10px;width: 50px">{{val.title}}</div>
              <yd-radio-group v-model="radio1[idx]['state']" style="float: right">
                <yd-radio val="0">满意</yd-radio>
                <yd-radio val="1">一般</yd-radio>
                <yd-radio val="2">不满意</yd-radio>
              </yd-radio-group>
            </div>
          </div>
          <div class="center_bottom">
            <div class="but">
              <button @click="butBusmit">提交</button>
            </div>
          </div>
        </div>
      </yd-tab-panel>
      <yd-tab-panel label="投诉与建议">
        <div class="center1">
          <div class="center_top2">
            投诉与建议
          </div>
          <div class="center_top11">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您好！如果您遇到有关单位（个人）侵权行为或者涉企单位服务不力，对我县营商环境有什么意见和建议，请您务必认真填写以下内容进行反馈，以便使您的投诉和意见（建议）得到及时回复和处理。谢谢！
          </div>
          <div class="center_top22">
            <div style="margin-left: 15px">企业名称/姓名：</div>
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
      </yd-tab-panel>
    </yd-tab>

  </div>
</template>
<script>
  export default {
    name: "evaluate",
    data() {
      return {
        tab1: 0,
        radio1: [],
        data: [],
        title: '',
        mobile: '',
        email: '',
        content: '',
        address: '',
        nickname: ''
      }
    },
    created() {
      this.getData()

    },
    methods: {
      getData() {
        const vm = this
        this.$axios({
          method: "get",
          url: "/api/home/eval_List",
          headers: {
            Accept: "application/vnd.myapp.v1+json"
          }
        })
          .then(res => {
            vm.radio1 = []
            this.data = res.data.evaluate
            res.data.evaluate.map(itm => {
              vm.radio1.push({
                evaluate_id: itm.id,
                state: ''
              })
            })
          })
      },
      butBusmit() {
        let params = this.radio1.filter(itm => itm.state != '')
        if (params.length > 0) {
          this.$axios({
            method: "post",
            url: "/api/home/proposal_Evaluate",
            headers: {
              Accept: "application/vnd.myapp.v1+json"
            },
            data: {
              evaluate: params
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
        } else {
          this.$dialog.toast({
            mes: '请勾选你的满意度',
            timeout: 1500,
            icon: "error"
          })
        }
      },
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
  .center {
    padding: 20px 10px;
    background: #ffffff;
    text-align: center;
    font-size: 15px;
  }

  .center_top {
    font-size: 20px;
    margin-top: 10px;
    font-weight: 600;
  }

  .center_top1 {
    margin: 15px 0;
    line-height: 30px;
    text-align: left;
  }

  .center_1 .yd-radio:nth-child(1) {
    margin-right: 10px;
  }

  .center_1 .yd-radio:nth-child(2) {
    margin-right: 10px;
  }

  .center_1:nth-last-child(1) {
    margin-bottom: 50px;
  }

  .center_bottom button {
    margin-top: 10px;
    width: 100px;
    height: 40px;
    border: 0;
    background: #0064bb;
    color: #fff;
    border-radius: 4px;
  }

  .center_bottom {
    height: 50px;
    background: #ffffff;
    z-index: 10;
    width: 100%;
    position: fixed;
    bottom: 0;
  }

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
    background: #f5f5f5;
    width: 100%;
    height: 100px;
    padding: 10px 10px;
  }

  .center1 {
    padding: 20px 20px;
    background: #ffffff;
    font-size: 16px;
  }

  .center_top2 {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }

  .center_top11 {
    line-height: 20px;
    font-size: 14px;
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
<style>
  /*.yd-radio-icon{*/
  /*border: 1px solid #ccc;*/
  /*border-radius: 50%;*/
  /*display: inline-block;*/
  /*position: relative;*/
  /*z-index: 10;*/
  /*vertical-align: bottom;*/
  /*pointer-events: none;*/
  /*width: 15px !important;*/
  /*height: 15px !important;*/
  /*line-height: 15px !important;*/
  /*}*/
  .yd-radio-text {
    color: #333;
    font-weight: 400;
  }
</style>
