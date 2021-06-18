<template>
  <div>
    <div class="receive">
      <div class="time">20 minutes remaining to pick up</div>
      <div class="rec_bd">
        <div class="time_line">
          <div class="line"></div>
        </div>
        <div class="rec_content">
          <div class="start">
            <h3>AAA商家(订单起点)</h3>
            <p>位置信息</p>
            <i class="distance">12min <span>20 miles</span> </i>
          </div>
          <div class="end">
            <h3>订单终点</h3>
            <p>位置信息</p>
            <i class="distance">12min <span>20 miles</span> </i>
          </div>
        </div>
      </div>
      <button type="submit" style="cursor: pointer">Pick up</button>
    </div>
    <div class="pickup">
      <div class="time">25 minutes remaining to pick up</div>
      <div class="rec_bd">
        <div class="time_line">
          <div class="line"></div>
          <div class="line1"></div>
          <div class="line2"></div>
        </div>
        <div class="rec_content">
          <div class="start">
            <h3>AAA商家(订单起点)</h3>
            <p>位置信息</p>
            <i class="distance">12min <span>20 miles</span> </i>
          </div>
          <div class="start">
            <h3>First order</h3>
            <p>位置信息</p>
            <i class="distance">12min <span>20 miles</span> </i>
          </div>
          <div class="start">
            <h3>Second order</h3>
            <p>位置信息</p>
            <i class="distance">12min <span>20 miles</span> </i>
          </div>
          <div class="end">
            <h3>Third order</h3>
            <p>位置信息</p>
            <i class="distance">12min <span>20 miles</span> </i>
          </div>
        </div>
      </div>
      <button type="submit" style="cursor: pointer">Pick up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.receive,
.pickup {
  width: 9.2rem;
  border-radius: 8px 8px 0 0;
  background-color: #fff;
  padding: 0.32rem;
  padding-bottom: 0;
  margin: 0.3rem auto;
}
.receive .time,
.pickup .time {
  font-size: 0.32rem;
  color: #ff872a;
}
.receive .time::before,
.pickup .time::before {
  content: "";
  display: inline-block;
  width: 0.426667rem;
  height: 0.426667rem;
  background: url(../../assets/images/receive/time@2x.png) no-repeat;
  background-size: 0.426667rem;
  vertical-align: middle;
  margin-right: 0.213333rem;
}
.receive .rec_bd,
.pickup .rec_bd {
  display: flex;
  margin-top: 0.32rem;
}
.receive  .time_line,
.pickup  .time_line {
  flex: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.receive .line,
.pickup  .line,
.pickup  .line1,
.pickup  .line2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 1px;
  height: 1.5rem;
  background-color: #ccc;
  margin: 0.133333rem 0;
}
.receive .time_line::before,
.pickup  .line::after,
.pickup  .line1::after,
.pickup  .line2::after ,
.pickup  .time_line::before {
  content: "";
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border: 3px solid #42c555;
  border-radius: 50%;
}
.pickup  .line::after,
.pickup  .line1::after,
.pickup  .line2::after {
position: absolute;
bottom: -0.3rem;
border: 3px solid #ff872a;
}
.receive  .time_line::after{
  content: "";
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border: 3px solid #ff872a;
  border-radius: 50%;
}
.receive .rec_content,
.pickup .rec_content {
  flex: 9.4;
  display: flex;
  flex-direction: column;
}
.receive  .start,
.pickup .start,
.receive  .end,
.pickup .end {
  position: relative;
  margin-bottom: 0.48rem;
  margin-left: 0.266667rem;
}
.receive .start h3,
.pickup  .start h3,
.receive  .end h3,
.pickup .end h3 {
  font-size: 0.426667rem;
  font-weight: normal;
  color: #4b4b4b;
}
.receive  .start p,
.pickup  .start p,
.receive  .end p,
.pickup  .end p {
  font-size: 0.32rem;
  color: #666;
  padding: 0.213333rem 0;
}
.receive  .start i,
.pickup  .start i,
.receive  .end i,
.pickup  .end i {
  display: flex;
  flex-direction: column;
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
  font-style: normal;
  font-size: 0.426667rem;
  color: #4b4b4b;
}
.receive  .start i span,
.pickup  .start i span,
.receive  .end i span,
.pickup  .end i span {
  font-size: 0.32rem;
  color: #666;
  margin-top: 0.213333rem;
}
.receive  .end,
.pickup  .end {
  margin-bottom: 0.3rem;
}
.receive button,
.pickup button {
  width: 9.2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  border-radius: 0 0 8px 8px;
  color: #fff;
  font-size: 0.426667rem;
  border: 0;
  margin-left: -0.32rem;
  background-color: #2987FE;
}
</style>