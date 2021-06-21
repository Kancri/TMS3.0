<template>
  <div>
     <nav class="nav_bar">
        <a href="#" class="message"><img src="../assets/images/profile/message.png" alt=""></a>
        <div class="nav">
        <router-link to="/receive" class="order">Order</router-link>
        <router-link to="/profile" class="me">Me</router-link>    
        </div>
        <a href="#" class="map"><img src="../assets/images/receive/map@2x.png" alt=""></a>
    </nav>
    <div class="tab_bar">
        <a href="javascript:;" v-for="(item,index) in arr" :key="index" @click="page(index)" :class="active === index && 'active'">{{item}}</a>
    </div>
    <section>
        <recmod v-show="active === 0"></recmod>
        <picmod v-show="active === 1"></picmod>
        <delmod v-show="active === 2"></delmod>
    </section>
    <div class="start_btn">
      <img src="../assets/images/receive/stop@2x.png" alt="" />
    </div>
    
  </div>
</template>

<script>
import delmod from './mainpage/delmod.vue';
import picmod from './mainpage/picmod.vue';
import recmod from './mainpage/recmod.vue';

export default {
  name: "App",
  data(){
      return {
          arr: ['Receive','Pickup','Delivery'],
          active: 0,
      }
  },
  components: {
    recmod,
    picmod,
    delmod
    
  },
  methods: {
    page(val){
        this.active = val
    },
    // click() {
    //   this.$router.push({ path: "/profile" });
    // },
    
    // loding(){
    //     this.$router.push({ path: "/loding" });
    // }
  },
};
</script>

<style scoped>

.nav_bar .order {
  background-color: #fff;
  color: #2987FE;
}
.nav_bar .me {
  background-color: #2987FE;
  color: #fff;
}
.tab_bar {
    display: flex;
    height: 72px;
    line-height: 72px;
    text-align: center;
    font-size: .426667rem;
    /* align-items: center; */
    background-color: #fff;
}

.tab_bar a {
    flex: 1;
    color: #333;
}

.tab_bar .active {
    color: #2987fe;
    border-bottom: 3px solid #2987fe;
}
.start_btn img {
  position: fixed;
  bottom: 0.32rem;
  right: 0.4rem;
  width: 2.8rem;
  height: 2.8rem;
}


</style>