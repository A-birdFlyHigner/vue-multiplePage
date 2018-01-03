<template>
  <div class="hello">
   <div id="header">
    <div class="headerBox">
        <div class="header">
            <div class="logo" onclick="jumpToIndex()">
                <img src="../assets/index-img/logo2.svg" alt="">
                <!--<div class="logoText">-->
                <!--<span class="firstSpan">钱粒科技</span>-->
                <!--<span class="secondSpan">金融服务 触手可及</span>-->
                <!--</div>-->
            </div>
            <ul class="nav">
                <li>
                    <a href="index.html#/index">钱粒科技</a>
                </li>
                <li class="product">
                    <a href="test.html#/">业务体系</a>
                    <ul class="secondNav secondNavProduct">
                        <li>
                            <div class="trangle"></div>
                            <a href="test.html#/test">钱粒账单</a>
                        </li>

                        <li>
                            <a href="yjIntroduce.html">优借</a>
                        </li>
                        <!--<li>
                            <a href="jydIntroduce.html">金壹贷</a>
                        </li>-->
                    </ul>
                </li>
                <li>
                    <a href="news.html">新闻中心</a>
                </li>
                <li class="about">
                    <a href="introduce.html">关于我们</a>
                    <ul class="secondNav secondNavAbout">
                        <li>
                            <div class="trangle"></div>
                            <a href="introduce.html">公司介绍</a>
                        </li>
                        <li>
                            <a href="join.html">加入我们</a>
                        </li>
                        <li>
                            <a href="contact.html">联系我们</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="bannerBox">
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide bannerContent">
                <a href="newsDetail.html?type=1&id=4">
                    <img src="../assets/index-img/grade.jpg" alt="">
                    <div class="bannerText">
                        <p>品牌升级，钱粒出发</p>
                        <p>杭州云兔科技有限公司更名为</p>
                        <p>浙江钱粒科技有限公司</p>
                    </div>
                </a>
            </div>
            <div class="swiper-slide bannerContent">
                <a href="newsDetail.html?type=0&id=18">
                    <img src="../assets/index-img/download@2x.jpg" alt="">
                    <div class="bannerText">
                        <p class="h2">钱粒科技</p>
                        <p class="h2">荣获"2017国家高新技术企业认证"</p>
                        <p>科技驱动 助力新金融未来</p>
                        <!--<p>开启账单管理新时代！</p>-->
                    </div>
                </a>
            </div>
            <div class="swiper-slide bannerContent">
                <a href="newsDetail.html?type=1&id=3">
                    <img src="../assets/index-img/winAward.jpg" alt="">
                    <div class="bannerText">
                        <p>钱粒科技荣获两大奖项</p>
                        <p style="font-size: 40px;">消费金融最具成长价值奖&nbsp;&nbsp;&nbsp;&nbsp;金融科技行业新星奖</p>
                    </div>
                </a>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination bannerPagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white"></div>
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
    </div>
</div>
<div class="contentBox1">
    <div class="content1">
        <h2 class="title">钱粒账单-全方位账单管家</h2>
        <p class="qianliIntroduce">智能化个人综合账单管理工具，便捷高效的管理包括信用卡、车贷、房贷、网贷账单在内的全网账单，是用户管理个人账单、维护良好信用的第一选择。</p>
        <div class="detailContent">
            <div class="detailLeft">
                <img src="../assets/index-img/group1@2x.png" alt="">
            </div>
            <div class="detailRight">
                <ul>
                    <li>
                        <div class="img">
                            <img src="../assets/index-img/notice@2x.png" alt="">
                        </div>
                        <div class="text">
                            <h3>账单管理</h3>
                            <p>
                                账单清晰，操作便捷，到期提醒
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <img src="../assets/index-img/together@2x.png" alt="">
                        </div>
                        <div class="text">
                            <h3>智能分析</h3>
                            <p>
                                历史账单智能分析，半年内账单一目了然
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <img src="../assets/index-img/OvalCopy2@2x.png" alt="">
                        </div>
                        <div class="text">
                            <h3>金融服务</h3>
                            <p>
                                应急还款推荐，征信查询，在线办卡
                            </p>
                        </div>
                    </li>
                </ul>
                <a href="qianliIntroduce.html" class="contentButton1">了解更多</a>
            </div>
        </div>
    </div>
</div>
<div class="contentBox2">
    <div class="content2">
        <div class="contentLeft2">
            <h2>优借-用优借，就有钱</h2>
            <p class="youjieIntroduce">智能化移动金融信息服务平台，汇聚上百家金融机构，根据用户需求，为用户提供包括信用贷款和信用卡申办等个性化、智能化的金融产品搜索和推荐服务。
            </p>
            <ul class="youjieSpec">
                <li>
                    <img src="../assets/index-img/CombinedShape@2x.png" alt="">
                    <div class="specText">
                        <span>审核便捷</span>
                        <span>一次认证，全平台机构均可申请贷款</span>
                    </div>
                </li>
                <li>
                    <img src=../assets/index-img/Shape@2x.png" alt=""> 
                    <div class="specText">
                        <span>智能匹配</span>
                        <span>智能匹配贷款需求，精准优选推荐</span>
                    </div>
                </li>
                <li>
                    <img src=../assets/index-img/ShapeCopy@2x.png" alt="">
                    <div class="specText">
                        <span>极速到账</span>
                        <span>全流程机审，最快3分钟放款</span>
                    </div>
                </li>
            </ul>
            <a href="yjIntroduce.html" class="contentButton2">了解更多</a>
        </div>
        <div class="contentRight2">
            <img src="../assets/index-img/group2@2x.png" alt="">
        </div>
    </div>
</div>
<div class="newsBox">
    <div class="news">
        <h2 class="newsTitle">新闻中心</h2>
        <div class="swiper-container newsContainer">
        </div>
    </div>
</div>
<!-- 股东背景& 合作机构 -->
<div class="background">
    <div class="content">
        <div class="stockholderBg">
            <div class="firstTitle">股东背景</div>
            <div class="backgroundDetail">
                <img src="../assets/index-img/22Group1@2x.png" onclick="jump()" alt="">
                <img src="../assets/index-img/1Group12@2x.png" onclick="jump()" alt="">
                <img src="../assets/index-img/Group16@2x.png" onclick="jump()" alt="">
            </div>
        </div>
        <div class="cooperation">
            <div class="firstTitle firstTitleSpec">合作机构</div>
            <div class="cooperationName parent">
                <div class="cooperationItem">
                    <img src="../assets/index-img/kuaidai@2x.png" alt="">
                    <div class="text">快贷</div>
                </div>
                <div class="cooperationItem">
                    <img src="../assets/index-img/yongqianbao@2x.png" alt="">
                    <div class="text">用钱宝</div>
                </div>
                <div class="cooperationItem">
                    <img src="../assets/index-img/yirendai@2x.png" alt="">
                    <div class="text">宜人贷</div>
                </div>
                <div class="cooperationItem">
                    <img src="../assets/index-img/rong360@2x.png" alt="">
                    <div class="text">融360</div>
                </div>
                <div class="cooperationItem">
                    <img src="../assets/index-img/shanyin@2x.png" alt="">
                    <div class="text">闪银</div>
                </div>
                <div class="cooperationItem">
                    <img src="../assets/index-img/pingan@2x.png" alt="">
                    <div class="text">平安普惠-i贷</div>
                </div>
            </div>
            <div class="cooperationName parent">
                <div class="cooperationItem">
                    <img src="../assets/index-img/manzi@2x.png" alt="">
                    <div class="text">百度有钱花</div>
                </div>
                <div class="cooperationItem">
                    <img src="../assets/index-img/dingdang@2x.png" alt="">
                    <div class="text">玖富叮当贷</div>
                </div>
                <div class="cooperationItem">
                    <img src="../assets/index-img/paipai@2x.png" alt="">
                    <div class="text">拍拍贷</div>
                </div>
                <div class="cooperationItem">
                    <img src="../assets/index-img/xinerfu@2x.png" alt="">
                    <div class="text">信而富</div>
                </div>
                <div class="cooperationItem">
                    <img src="../assets/index-img/pufa@2x.png" alt="">
                    <div class="text">浦发青春贷</div>
                </div>
                <div class="cooperationItem">
                    <img src="../assets/index-img/fenqile@2x.png" alt="">
                    <div class="text">分期乐</div>
                </div>
            </div>
        </div>
    </div>

</div>
<div id="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.headerBox{
    width:100%;
    height:99px;
    /*background:#b2b2b2;*/
    position: fixed;
    z-index:20;
    border-bottom: solid 1px rgba(255,255,255,0.3);
    color:#fff;
    transition: linear .6s;
    -moz-transition: linear .6s; /* Firefox 4 */
    -webkit-transition: linear .6s; /* Safari 和 Chrome */
    -o-transition: linear .6s; /* Opera */
}
.headerBoxChange{
    border-bottom:solid 1px #eee;
    color:rgb(66,66,66);
}

.header{
    width:990px;
    padding:26px 0;
    margin:0 auto;
}
.header .logo{
    float:left;
    cursor: pointer;
}
.header .logo img{
    display: block;
    width:auto;
    height:50px;
    float:left;
    /*margin:15px 0;*/
}
.header .logo .logoText{
    margin-left:11px;
    float:left;
}
.header .logo .logoText span{
    display: block;
    font-size:24px;
    text-align:left;
}
.header .logo .logoText .secondSpan{
    font-size:11.5px;
}
.nav{
    margin-left:368px;
    float:left;

}
.nav li{
    float:left;
    text-align: center;

    position:relative;
    padding: 14px 0;
}
.headerBox .nav li a{
    font-size:14px;
    color:#ffffff;
    text-align:center;
    padding:0 22px;
    border-right: solid 1px rgba(255,255,255,0.20);
}
.headerBox .nav li:last-child a {
    border-right:none;
}
.headerBoxChange .nav li a{
    border-right:solid 1px #eee;
}
.headerBoxChange .nav li a {
    color:rgb(90,90,90);
}

.secondNav{
    display: none;
    width:130px;
    /*height:150px;*/
    background:#ffffff;
    position:absolute;
    left:50%;
    margin-left:-65px;
    top:45px;
    z-index:11;
    border:solid 1px #eee;
}
.headerBoxChange .secondNav{
    /*background:rgb(243,241,241);*/

}


.secondNav li{
    float:none;
    border-right:none;
    position: relative;
    padding:20px 0 0;
    /*line-height:50px;*/
}
.secondNav li:last-child{
    padding:20px 0 20px;
}
.headerBox .secondNav li .trangle{
    position:absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
    top:-8px;
    left:50%;
    margin-left:-4px;
}
.headerBoxChange .secondNav li .trangle{
    position:absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid rgb(243,241,241);
    top:-8px;
    left:50%;
    margin-left:-4px;
}
.headerBoxChange .secondNav li a,.headerBox .secondNav li a{
    font-size:14px;
    color:#4a4a4a;
    border:none;
}
.secondNav li a:hover{
    color:#e2002b;
}
/*html,body{*/
    /*font-family:PingFangSC-Regular,'Microsoft YaHei';*/
/*}*/
.bannerBox{
    width:100%;
    /*background:rebeccapurple;*/
}
.banner{
    min-width:990px;
    height:669px;
    margin:0 auto;
}
.swiper-wrapper{
    height:669px;
}
.contentBox1{
    width:100%;

}
.bannerContent img{
    display: block;
    width:100%;
    height:100%;
}
.bannerContent{
    position: relative;
}
.bannerContent .bannerText{
   position: absolute;
    top:240px;
    text-align: center;
    width:990px;
    left:50%;
    margin-left:-495px;
}
.bannerContent .bannerText p{
    font-size:50px;
    color:#ffffff;
    margin-bottom:25px;
    text-align:center;
    font-weight: 200;
    font-family:PingFangSC-Light,'Microsoft YaHei';
}
.bannerContent .bannerText .h2{
    font-size:50px;
    color:#ffffff;
    text-align:center;
    width:990px;
    margin:0 auto;
    font-family: 'PingFangSC-Semibold','Microsoft YaHei';
}
.bannerContent .bannerText .h2 b{
    font-weight:600;
}

/*.content1{*/
    /*width:990px;*/
    /*!*height:*!*/
    /*margin:0 auto;*/
    /*overflow: hidden;*/
    /*clear: both;*/
    /*padding-bottom: 112px;*/
/*}*/
.content1{
    width:990px;
    margin:0 auto;
    overflow: hidden;
    clear: both;
}
.content1 .previewImg{
    display: block;
    width:160px;
    height:160px;
    margin:125px auto 0;
}
.content1 .previewTitle{
    font-size:32px;
    margin:70px auto 0;
    text-align: center;
    color:rgb(74,74,74);
    /*font-family:PingFangSC-Light,'Microsoft YaHei';*/
}
.content1 .previewText{
    font-size:22px;
    color:rgb(74,74,74);
    text-align: center;
    /*margin:25px auto 0;*/
    line-height: 40px;
    font-family:PingFangSC-Light,'Microsoft YaHei';
}

.content1 .preview{
    font-size:28px;
    margin:50px auto 0;
    text-align: center;
    color:rgb(74,74,74);

}
.content1 .title{
    margin-top:90px;
    font-size:32px;
    color:#4a4a4a;
    text-align:center;
}
.qianliIntroduce{
    font-size:20px;
    color:#4a4a4a;
    line-height:30px;
    text-align:center;
    width:719px;
    margin:16px auto 0;
}
.detailContent{
    overflow: hidden;
    margin-top:48px;
}
.detailContent .detailLeft{
    width: 533px;
    height: 671px;
    /*border:solid 1px #ddd;*/
    float:left;
}
.detailContent .detailLeft img{
    display: block;
    width:100%;
    height:100%;
}
.detailContent .detailRight{
    float:left;
    margin-left:50px;
    margin-top:96px;
    width:390px;
}
.detailRight .img{
    width:60px;
    height:60px;
    float: left;
    margin-right:20px;
}
.detailRight .img img{
    display: block;
    width:100%;
    height:100%;
}
.detailRight ul{
    margin-bottom:66px;
}
.detailRight ul li{
    margin-bottom:57px;
}
.detailRight .text h3{
    font-size:20px;
    color:#4a4a4a;
    text-align:left;
}
.detailRight .text p{
    font-size:16px;
    color:#4a4a4a;
    text-align:left;
    margin-top:10px;
}
.contentButton1{
    border:1px solid #da292c;
    width:178px;
    height:48px;
    display: block;
    background:none;
    font-size:18px;
    color:#e2002b;
    text-align:center;
    line-height: 48px;
    margin-top:10px;
}
.contentBox2{
    width:100%;
    background: rgb(224,54,57);
}
.content2,.content3{
    width: 990px;
    margin: 0 auto;
    /* margin: 52px 0 62px; */
    height: 685px;
    color: #fff;
    position: relative;
    clear: both;
    overflow: hidden;
}
.contentRight2{
    width:748px;
    height:693px;
    float: left;
    position:absolute;
    right:0;
    z-index:0;
}
.contentRight2 img{
    display: block;
    width:100%;
    height:100%;
}
.content2 h2{
    font-size:28px;
    font-weight: normal;
    font-family:PingFangSC-Light,'Microsoft YaHei';
}
.contentLeft2{
    padding-top:103px;
    width:400px;
    float: left;
    position: absolute;
    z-index:1;
}
.youjieIntroduce{
    width:386px;
    font-size:16px;
    color:#ffffff;
    text-align:left;
    line-height: 27px;
    margin-top:10px;
    font-family:PingFangSC-Light,'Microsoft YaHei';
}
.youjieSpec{
    clear: both;
    margin-top:30px;
    margin-bottom:48px;
}
.youjieSpec li{
    margin-top:20px;
    font-family:PingFangSC-Light,'Microsoft YaHei';
}
.youjieSpec img{
    display: block;
    float:left;
    /*width:40px;*/
    height:55px;
}
.specText{
    font-family:PingFangSC-Light,'Microsoft YaHei';
}
.specText span{
    display: block;
    color:#ffffff;
    text-align:left;
}

.specText :first-child{
    font-size:20px;
    line-height: 28px;
}
.specText :last-child{
    font-size:16px;
    margin-top:6px;
}
.contentButton2,.contentButton3{
    border:1px solid #ffffff;
    width:178px;
    height:48px;
    color:#fff;
    display: block;
    background:none;
    font-size:18px;
    text-align:center;
    line-height: 48px;
}
.contentButton3{
    border:1px solid #ff8600;
    color:#ff8600;
}
.content3{
    padding:110px 0 50px;
}
.contentLeft3{
    width:584px;
    height:725px;
    float: left;
}
.contentLeft3 img{
    display: block;
    width:100%;
    height:100%;
}
.contentRight3{
    float:left;
    width:355px;
    padding-top:119px;
    padding-left:30px;
}
.contentRight3 h2{
    font-size:28px;
    color:#4a4a4a;
    text-align:left;
}
.contentRight3 p{
    font-size:16px;
    color:#4a4a4a;
    line-height:27px;
    text-align:left;
    width:353px;
    margin-top:13px;
    margin-bottom:43px;
}

.specilityBox{
    width:100%;
}
.specility{
    width:990px;
    height:440px;
    margin:0 auto;
}
.specility ul li{
    float:left;
    margin-right:112px;
    text-align: center;
}
.specility ul img{
    display: block;
    width:206px;
    height:206px;
    margin:0 auto;
}
.specility ul h2{
    margin-top:24px;
    font-size:20px;
    color:#4a4a4a;
}
.specility ul p{
    margin:8px auto 0;
    width:175px;
    font-size:16px;
    color:#4a4a4a;
    line-height:26px;
    text-align:center;
}
/*新闻中心*/
.newsBox{
    background:rgb(243,243,243);
}
.news{
    width:990px;
    height:700px;
    margin:0 auto;
}
.newsTitle{
    font-size:34px;
    text-align: center;
    padding-top:80px;
    color:rgb(74,74,74);
}
.newsContainer{
    /*width:990px;*/
    height:505px;
    margin:35px auto 0;
}
.newsItem ul li{
    width:300px;
    float:left;
    margin-right:35px;
}
.newsItem ul li .newsImg{
    display: block;
    width:300px;
    height:210px;
    position: relative;
}
.newsItem ul li .newsImg .newsImgContent{
    display: block;
    width:100%;
    height:100%;
}
.newsItem ul li .imgShadow{
    position: absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.4);
    top:0;
    z-index:8;
    text-align: center;
    line-height: 210px;
    font-size:14px;
    color:#fff;
    display: none;
}
.newsItem ul li .imgShadow img{
    width:6px;
    height:11px;
    margin-left:6px;
}
.newsItem ul li .newsImg:hover .imgShadow{
    display: block;
}

.newsItem h2{
    font-size:16px;
    color:#4a4a4a;
    margin-top:30px;
    text-align:left;
}
.newsItem p {
  font-size: 14px;
  color: #8c8c8c;
  margin-top: 26px;
}

/* 股东背景 & 合作结构 */
.background{
  width: 100%;
}
.background .content{
  width: 953px;
    margin:0 auto;
  /*text-align: center;*/
  /*padding-left: 15%;*/
  padding-bottom: 150px;
}
.background .content .stockholderBg{
  /*background: red;*/
  padding-top: 80px;
  text-align: center;
}
.background .content .stockholderBg .backgroundDetail{
  display: inline-block;
  width: 990px;
    margin:0 auto;
  height: 250px;
  /*border: 1px solid black;*/
}
.background .content .stockholderBg .backgroundDetail img{
    display: block;
    float:left;
    width:318px;
    height:250px;
    margin-right:16px;
    cursor: pointer;
    transition: .3s linear;
    -moz-transition: .3s linear;/* Firefox 4 */
    -webkit-transition: .3s linear; /* Safari 和 Chrome */
    -o-transition: .3s linear; /* O*/
}

.background .content .stockholderBg .backgroundDetail img:last-child{
    margin-right:0;
}
.background .content .stockholderBg .backgroundDetail img:hover{
    box-shadow:0px 10px 40px rgba(74,74,74,0.2);
    display: block;
    float:left;
    width:318px;
    height:250px;
    margin-right:16px;
}
.background .content .stockholderBg .backgroundDetail img:last-child:hover{
    margin-right:0;
}
.background .content .firstTitle{
  font-size: 32px;
  color: #4a4a4a;
  margin-bottom: 60px;
}
/*.background .content .firstTitleSpec{*/
    /*margin-bottom: 60px;*/
/*}*/
.background .content .cooperation{
  padding-top: 80px;
  text-align: center;
  /*margin-bottom: 32px;*/
}
.background .content .cooperation .cooperationName .cooperationItem{
  display: inline;
  margin-right: 25px;
  margin-left: 25px;
  margin-bottom: 40px;
}
.background .content .cooperation .cooperationName .cooperationItem .text{
  margin-top: 8px;
  font-size: 16px;
  color: #4a4a4a;
}
.background .content .cooperation .cooperationName .cooperationItem img{
  display: inline-block;
  width: 110px;
  height: 110px;
  /*border: 1px solid black;*/
}

.parent{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.swiper-pagination-bullet-active{
    background:#e2002b !important;
}
.background .content .cooperation .cooperationName:last-child .cooperationItem{
    margin-bottom:0;
}

</style>
<link rel="stylesheet" href="../css/swiper-3.4.2.min.css">

