<template>
  <div class="all">
    <div class="from">
      <div style="text-align: center;font-size: 0.4rem">企业需求</div>
    </div>
    <div class="from">
      <p>企业名称 <span>*</span></p>
      <input placeholder="请输入企业名称" v-model="enter_name">
    </div>
    <div class="from">
      <p>联系电话 <span>*</span></p>
      <input placeholder="请输入手机号码(固定电话需填写区号)" v-model="mobile">
    </div>
    <div class="from">
      <p>需求标题 <span>*</span></p>
      <input placeholder="请输入需求标题" v-model="title">
    </div>
    <div class="from">
      <p>需求内容 <span>*</span></p>
      <textarea placeholder="为利于您所提的需求得到及时有效的处理，请务必阐述清楚你的需求。" v-model="content"></textarea>
    </div>
    <div class="from1">
      <p>企业地址</p>

      <!--<yd-cell-group>-->
        <!--<yd-cell-item arrow>-->
          <!--<input slot="right" type="text" @click.stop="show1 = true" v-model="address[0]" class="address1" readonly-->
                 <!--placeholder="请选择省/市/县">-->
        <!--</yd-cell-item>-->
      <!--</yd-cell-group>-->

      <!--<yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>-->

      <input placeholder="请填写详细地址" style="margin-top: 0.1rem" v-model="detailed_address">
    </div>
    <div class="but">
      <button type="submit" @click="submit1">提交</button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {CitySelect} from 'vue-ydui/dist/lib.rem/cityselect';
  /* 使用px：import {CitySelect} from 'vue-ydui/dist/lib.px/cityselect'; */
  import District from 'ydui-district/dist/jd_province_city_area_id';

  Vue.component(CitySelect.name, CitySelect);
  export default {
    name: "Interaction",
    data() {
      return {
        enter_name: '',
        mobile: '',
        address: [],
        detailed_address: '',
        title: '',
        content: '',
        show1: false,
        district: District
      }
    },
    methods: {
      result1(ret) {
        this.address = [];
        this.address.push(ret.itemName1 + ',' + ret.itemName2 + ',' + ret.itemName3);
      },
      submit1() {
        if (this.enter_name == "" || this.mobile == "" || this.title == "" || this.content == "") {
          this.$dialog.toast({
            mes: '必填字段不能为空',
            timeout: 1500,
            icon: 'error'
          });
        } else {
          this.$axios({
            method: "post",
            url: "/api/home/add_problem",
            headers: {
              Accept: "application/vnd.myapp.v1+json"
            },
            data: {
              enter_name: this.enter_name,
              mobile: this.mobile,
              adress: this.address,
              detailed_address: this.detailed_address,
              title: this.title,
              cate_id: 9,
              content: this.content
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
        }
      }

    }
  }
</script>

<style scoped>
  .all {
    padding: 0.4rem;
  }

  .from p {
    font-weight: 500;
    margin: 0.2rem 0;
    font-size: 16px;
  }

  .from1 p {
    font-weight: 600;
    margin: 0.2rem 0;
    font-size: 16px;
  }

  .from span {
    color: #CD2626;
    font-size: 0.18rem;
  }

  .from div {
    padding: 0.2rem;
    font-size: 0.3rem;
  }

  .from textarea {
    background: #f1f1f1;
    padding: 0.2rem;
    font-size: 16px;
    border: 0;
    width: 100%;
    height: 1.8rem;
  }

  .from input {
    background: #f1f1f1;
    padding: 0.2rem;
    font-size: 16px;
    border: 0;
    width: 100%;
  }

  .from1 {
    background: #f1f1f1;
  }

  .from1 span {
    font-size: 0.18rem;
  }

  .from1 input {
    padding: 0 0.4rem;
    background: #f1f1f1;
    padding: 0.2rem;
    font-size: 16px;
    border: 0;
    width: 100%;
    margin-top: 0.1rem;
  }

  .but {
    text-align: center;
    margin: 0.4rem 0 0.2rem 0;
  }

  button {
    background: #1874CD;
    border: 0;
    padding: 0.2rem 0.8rem;
    color: #ffffff;
    border-radius: 0.1rem;
    font-size: 16px;
  }


</style>
<style>
  .yd-cell-item {
    background: #f1f1f1;
  }

  .yd-cell-box {
    margin-bottom: 0;
  }
</style>
