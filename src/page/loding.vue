<template>
  <div id="app_loding">
    <header class="header">
      <h3>Welcome to Rider’APP</h3>
      <img src="../assets/images/loading/avatar_r@2x.png" alt="" />
    </header>
    <div class="info">
      <div class="user">
        <img src="../assets/images/loading/phone@2x.png" alt="" />
        <input type="text" value="Username" />
      </div>
      <div class="pw">
        <img src="../assets/images/loading/pw.png" alt="" />
        <input type="password" value="Password" />
      </div>
      <div class="forget">
        <p class="checkbox">Remember the password</p>
        <p class="fp">Forgot Password?</p>
      </div>
      <button type="submit" style="cursor:pointer" @click="receive" >log in</button>
    </div>
    <i>No account?<span>register</span></i>
    <div class="footer">
      <div class="line"></div>
      <div class="quick">Quick login</div>
      <a href="#"><img src="../assets/images/loading/wechat.png" alt="" /></a>
      <a href="#"><img src="../assets/images/loading/facebook.png" alt="" /></a>
      <a href="#"><img src="../assets/images/loading/google.png" alt="" /></a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    receive() {
      this.$router.push({ path: '/receive' });
    },
  },
};
</script>

<style scoped>
#app_loding{
    position: absolute;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    overflow-y: auto;
    background-color: #fff;
  }
header {
  position: relative;
  width: 10rem;
  height: 7.2rem;
  line-height: 7.2rem;
  text-align: center;
  background: url(../assets/images/loading/top_bg@2x.png) no-repeat;
  background-size: 100% 7.2rem;
  margin: 0 auto;
}
header img {
  position: absolute;
  top: 5.5rem;
  left: 50%;
  margin-left: -1.64rem;
  width: 3.28rem;
  height: 3.28rem;
}
header h3 {
  color: #fff;
  font-size: 0.48rem;
  font-weight: 700;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}
.info .user,
.info .pw {
display: flex;
align-items: center;
  width: 8.64rem;
  height: 1.173333rem;
  border: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 0.56rem;
  padding-left: 24px;
}
.info .user img,
.info .pw img {
  display: inline-block;
  width: 0.533333rem;
  height: 0.533333rem;
  vertical-align: middle;
}
.info .user input,
.info .pw input {
  color: #999;
  font-size: 0.373333rem;
  margin-left: 0.4rem;
}
.info .forget {
  display: flex;
  justify-content: space-between;
  font-size: 0.32rem;
}
.info .forget .fp {
  margin-left: 2.3rem;
  color: #2987FE;
}
.info button {
  width: 9.36rem;
  height: 1.306667rem;
  background-color: #2987FE;
  border-radius: 0.106667rem;
  color: #fff;
  font-size: 0.48rem;
  border: none;
  margin: 0.32rem auto;
}
i {
  float: right;
  font-style: normal;
  font-size: 0.32rem;
  margin-right: 0.32rem;
}
i span {
  color: #2987FE;
  margin-left: 0.2rem;
}
.footer {
  display: flex;
  position: relative;
  margin-top: 0.8rem;
}
.footer .line {
  position: absolute;
  top: 0.3rem;
  left: 0.32rem;
  width: 9.36rem;
  height: 1px;
  background-color: #ccc;
  margin: 0 auto;
}
.footer .quick {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -1.5rem;
  width: 3rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  background-color: #fff;
  color: #333;
  font-size: 0.266667rem;
  font-weight: 700;
  z-index: 999;
}
.footer a {
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.footer a img {
  width: 1.2rem;
  height: 1.2rem;
}

</style>