<template>
  <div>
    <div class="delivery">
      <div class="rec_bd">
        <div class="time_line">
          <div class="line"></div>
          <div class="line1"></div>
          <div class="line2"></div>
        </div>
        <div class="rec_content">
          <div class="start">
            <h3>AAA商家(订单起点)</h3>
            <p>112 W San Bernardino Rd.</p>
            <p>Arrival time: 10:20</p>
            <i class="distance">12min <span>20 miles</span> </i>
          </div>
          <div class="start">
            <h3>First order</h3>
            <p>124 W San Bernardino Rd.</p>
            <p>Arrival time: 10:20</p>
            <i class="distance">12min <span>20 miles</span> </i>
          </div>
          <div class="start">
            <h3>Second order</h3>
            <p>138 W San Bernardino Rd.</p>
            <p>Delivery time： 12:20-15:00</p>
            <i class="distance">12min <span>20 miles</span> </i>
          </div>
          <div class="end">
            <h3>Third order</h3>
            <p>158 W San Bernardino Rd.</p>
            <p>Delivery time： 12:20-15:00</p>
            <i class="distance">12min <span>20 miles</span> </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "App",
  
  
};
</script>

<style scoped>

.delivery {
  width: 9.2rem;
  border-radius: 8px;
  background-color: #fff;
  padding: 0.32rem;
  padding-bottom: 0;
  margin: 0.213333rem auto;
}
.delivery .rec_bd {
  display: flex;
  margin-top: 0.32rem;
}
.delivery .rec_bd .time_line {
  flex: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.delivery  .line,
.delivery  .line1,
.delivery  .line2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 1px;
  height: 1.6rem;
  background-color: #ccc;
  margin: 0.3rem 0;
}
.delivery  .line::after,
.delivery  .line1::after,
.delivery  .line2::after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border: 3px solid #FF872A;
  border-radius: 50%;
}
.delivery  .time_line::before {
  content: "";
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border: 3px solid #42C555;
  border-radius: 50%;
}

.delivery .rec_bd .rec_content {
  flex: 9.4;
  display: flex;
  flex-direction: column;
}
.delivery   .start,
.delivery   .end {
  position: relative;
  margin-bottom: 0.48rem;
  margin-left: 0.266667rem;
}
.delivery  .start h3,
.delivery  .end h3 {
  font-size: 0.426667rem;
  font-weight: normal;
  color: #4B4B4B;
}
.delivery   .start p,
.delivery   .end p {
  font-size: 0.32rem;
  color: #666;
  padding-top: 0.213333rem;
}
.delivery   .start i,
.delivery   .end i {
  display: flex;
  flex-direction: column;
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
  font-style: normal;
  font-size: 0.426667rem;
  color: #4B4B4B;
}
.delivery   .start i span,
.delivery   .end i span {
  font-size: 0.32rem;
  color: #666;
  margin-top: 0.213333rem;
}
.delivery .rec_bd .rec_content .end {
  margin-bottom: 0.3rem;
}
.delivery button {
  width: 9.2rem;
  height: 0.96rem;
  line-height: 0.96rem;
  text-align: center;
  border-radius: 0 0 8px 8px;
  background-color: #2987FE;
  color: #fff;
  font-size: 0.426667rem;
  border: 0;
  margin-left: -0.32rem;
}


</style>