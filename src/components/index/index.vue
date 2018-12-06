<template>
  <div>
    <div class="box1">
      <div class="box_title">
        <h4 class="box_title_text">关于我们</h4>
      </div>
      <div class="box_context">
        <img src="/../../../static/image/c0.png" class="box_img_1">
        <h1>中小企业局</h1>
        <p class="box_context_text">
        <p>主要职责</p>
        <p style="text-indent: 25px;">
          （一）贯彻落实《中华人民共和国中小企业促进法》、《中华人民共和国乡镇企业法》和国家有关发展中小企业（包括民营企业、乡镇企业下同）方针政策法规，研究提出扶持中小企业发展的政策措施，负责对本县行政区域内的中小企业进行综合、协调、指导和服务。</p>
        <p style="text-indent: 25px;">（二）制定全县中小企业的发展战略、中长期发展规划并组织实施，指导和推进中小企业产业结构、组织结构和产品结构的调整。促进农村二三产业发展、富余劳动力转移和中小企业向小城镇集中。</p>
        <p style="text-indent: 25px;">（三）监测、分析中小企业一、二、三产业运行态势，拟定并落实中小企业发展预期调控目标和措施。</p>
        <p style="text-indent: 25px;">（四）指导和推进中小企业改革与发展，指导中小企业开展科学进步、新产品开发和技术改造工作。指导资源节约和综合利用，组织协调工业环境保护和环保工业发展工作。</p>
        <p style="text-indent: 25px;">（五）指导中小企业服务体系建设，开展职工业务培训工作，指导、规范为中小企业提供服务的各类中介组织的工作。</p>
        <p style="text-indent: 25px;">（六）促进金融机构建立与中小企业的融资渠道；负责中小企业扶持资金的有关监管工作。</p>
        <p style="text-indent: 25px;"> （七）指导中小企业开展国外经济技术交流与合作，指导中小企业对外贸易工作。</p>
        <p style="text-indent: 25px;">（八）承担中小企业分类，信息收集和统计上报工作。</p>
        <p style="text-indent: 25px;"> （九）加强企业文化建设，总结推广中小企业发展经验，做好评先评优工作。</p>
        <p style="text-indent: 25px;">（十）承办县人民政府及市中小企业局交办的其他事项。</p>
        <div id="carousel">
          <div id="div4">
            <div id="carousel_div">
              <img src="/../../../static/image/c1.jpeg"/>
              <img src="/../../../static/image/c2.jpeg"/>
              <img src="/../../../static/image/c3.jpeg"/>
              <img src="/../../../static/image/c4.jpeg"/>
            </div>
            <div id="carousel_empty"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="box2">
      <div class="box_title1">
        <h4 class="box_title_text">联系我们</h4>
      </div>
      <div class="box_context">
        <p class="box_context_text">电话：0913-6715420</p>
        <p class="box_context_text">地址：澄城县中小企业局</p>
      </div>
    </div>

  </div>


</template>

<script>
  export default {
    name: "index",
    mounted() {
      this.$nextTick(() => {
        window.onload=function(){
          var v1=document.getElementById('carousel');
          var v2=document.getElementById('carousel_div');
          var v3=document.getElementById('carousel_empty');

          v3.innerHTML= v2.innerHTML;
          function fun(){
            if(v1.scrollLeft>=document.getElementById("carousel_div").offsetWidth){
              v1.scrollLeft=0;
            }else{
              v1.scrollLeft++;
            }
          }

          var fun1=setInterval(fun,10);

          v1.onmouseover = function() {
            clearInterval(fun1)
          };
          v1.onmouseout = function() {
            fun1 = setInterval(fun, 10)
          };
        }
      })
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
  }

  .box_context {
    /*background-color: #F9F9F9;*/
  }

  .box2 {
    /*background: #efeff4;*/
  }
  h1{text-align: center;
  margin-top: 0.4rem;
  font-size: 0.36rem;}


  .box_img_1 {
    width: 100%;
  }

  .box_title {
    background-color: #FFF;
  }

  .box_title_text {
    text-align: center;
    line-height: 1rem;
  }

  .box_context {
    padding: 20px;
    font-size: 0.28rem;
  }

  .box1 .box_context_text {
    margin: 0.4rem 0;
    line-height: 0.6rem;
    color: #333;
  }

  .box2 .box_context_text {
    line-height: 0.6rem;
    color: #333;
  }

  .box2 .box_context {
    padding: 0.4rem;
  }

  .carousel-inner > .item {
    -webkit-transition: -webkit-transform 2s ease-in-out;
    -o-transition: -o-transform 2s ease-in-out;
    transition: transform 2s ease-in-out;
  }

  #carousel img {
    float: left;
    width:3.5rem;
    height: 2.7rem;
  }

  #carousel {
    width: 100%;
    height: 2.7rem;
    overflow: hidden;
  }

  #carousel_div, #carousel_empty {
    float: left;
  }

  #div4 {
    width: 500%;
    float: left;
  }

</style>
