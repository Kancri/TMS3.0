<template>
  <div>
    <nav class="nav_bar">
      <a href="#" class="message"
        ><img src="../assets/images/profile/message.png" alt=""
      /></a>
      <div class="nav">
        <router-link to="/receive" class="order">Order</router-link>
        <router-link to="/profile" class="me">Me</router-link>
      </div>
    </nav>
    <section class="profile">
      <div class="pro_info">
        <div class="pro_avatar">
          <a href="#">
            <img
              src="../assets/images/profile/avatar@2x.png"
              alt=""
              class="avatar"
            />
            <img
              src="../assets/images/profile/edit@2x.png"
              alt=""
              class="edit"
            />
          </a>
        </div>
        <h3>Jeson.H</h3>
        <img src="../assets/images/profile/stars.png" alt="" class="stars" />
        <p>Rider code：123546JH</p>
        <a href="#">More info</a>
      </div>
    </section>
    <div class="class_nav">
      <ul>
        <li>
          <a href="#">
            <img src="../assets/images/profile/HOS@2x.png" alt="" /> HOS</a
          >
        </li>
        <li>
          <a href="#">
            <img src="../assets/images/profile/HOS@2x(1).png" alt="" /> Order
            report</a
          >
        </li>
        <li>
          <a href="#">
            <img src="../assets/images/profile/HOS@2x(5).png" alt="" />
            Cooperative management</a
          >
        </li>
        <li>
          <a href="#">
            <img src="../assets/images/profile/HOS@2x(2).png" alt="" />
            Remuneration settlement</a
          >
        </li>
        <li>
          <a href="#">
            <img src="../assets/images/profile/HOS@2x(3).png" alt="" />
            Remuneration settlement</a
          >
        </li>
        <li>
          <a href="loding.vue">
            <img src="../assets/images/profile/HOS@2x(4).png" alt="" /> Log
            out</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// export default {
//   methods: {
//     click() {
//       this.$router.push({ path: "/profile" });
//     },
//   },
// };
</script>

<style scoped>

.nav_bar .order {
  background-color: #2987fe;
  color: #fff;
}
.nav_bar .me {
  background-color: #fff;
  color: #2987fe;
}
.profile {
  height: 5.813333rem;
  background: url(../assets/images/profile/bg1@2x.png) no-repeat;
  background-size: 100% 5.813333rem;
}
.profile .pro_info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.56rem;
}
.profile .pro_info .pro_avatar {
  position: relative;
}
.profile .pro_info .pro_avatar .avatar {
  width: 1.946667rem;
  height: 1.946667rem;
}
.profile .pro_info .pro_avatar .edit {
  position: absolute;
  bottom: 0;
  right: 0;
  display: inline-block;
  width: 0.56rem;
  height: 0.56rem;
}
.profile .pro_info h3 {
  font-size: 0.426667rem;
  font-weight: 700;
  color: #fff;
  line-height: 0.853333rem;
}
.profile .pro_info .stars {
  width: 2.32rem;
  height: 0.4rem;
  margin: 0.213333rem 0;
}
.profile .pro_info p {
  font-size: 0.373333rem;
  color: #fff;
  margin-bottom: 0.213333rem;
}
.profile .pro_info a {
  width: 1.92rem;
  height: 0.653333rem;
  line-height: 0.653333rem;
  text-align: center;
  color: #fff;
  font-size: 0.32rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.08rem;
}
.class_nav ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0.4rem 0;
}
.class_nav ul li {
  width: 33.33%;
  padding-left: 0.2rem;
  margin-bottom: 0.32rem;
}
.class_nav ul li a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2.88rem;
  height: 2.88rem;
  text-align: center;
  font-size: .373333rem;
  background: #ffffff;
  border-radius: 8px;
  padding: 0 .16rem;
}
.class_nav ul li a img {
  width: 1.066667rem;
  height: 1.066667rem;
  margin-bottom: 0.32rem;
}
</style>