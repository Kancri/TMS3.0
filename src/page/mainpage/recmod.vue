<template>
  <div>
     
    <div class="receive">
        <div class="time"> Delivered within 40 minutes</div>
        <div class="rec_bd">
            <div class="time_line">
                <div class="line"></div>
            </div>
            <div class="rec_content">
                <div class="start">
                    <h3>AAA商家(订单起点)</h3>
                    <p>位置信息</p>
                    <i class="distance">12min  <span>20 miles</span> </i>
                </div>
                <div class="end">
                    <h3>订单终点</h3>
                    <p>位置信息</p>
                    <i class="distance">12min  <span>20 miles</span> </i>
                </div>
            </div>
        </div>
        <button type="submit" style="cursor: pointer;">Receive</button>
    </div>
    <div class="receive">
        <div class="time"> Delivered within 40 minutes</div>
        <div class="rec_bd">
            <div class="time_line">
                <div class="line"></div>
            </div>
            <div class="rec_content">
                <div class="start">
                    <h3>AAA商家(订单起点)</h3>
                    <p>位置信息</p>
                    <i class="distance">12min  <span>20 miles</span> </i>
                </div>
                <div class="end">
                    <h3>订单终点</h3>
                    <p>位置信息</p>
                    <i class="distance">12min  <span>20 miles</span> </i>
                </div>
            </div>
        </div>
        <button type="submit" style="cursor: pointer;">Receive</button>
    </div>
    <div class="receive">
        <div class="time"> Delivered within 40 minutes</div>
        <div class="rec_bd">
            <div class="time_line">
                <div class="line"></div>
            </div>
            <div class="rec_content">
                <div class="start">
                    <h3>AAA商家(订单起点)</h3>
                    <p>位置信息</p>
                    <i class="distance">12min  <span>20 miles</span> </i>
                </div>
                <div class="end">
                    <h3>订单终点</h3>
                    <p>位置信息</p>
                    <i class="distance">12min  <span>20 miles</span> </i>
                </div>
            </div>
        </div>
        <button type="submit" style="cursor: pointer;">Receive</button>
    </div>
    
    
  </div>
</template>

<script>


export default {
  name: "App",
  
};
</script>

<style scoped>


.receive {
  width: 9.2rem;
  border-radius: 8px 8px 0 0;
  background-color: #fff;
  padding: 0.32rem;
  padding-bottom: 0;
  margin: 0.3rem auto;
}
.receive .time {
  font-size: 0.32rem;
  color: #FF872A;
}
.receive .time::before {
  content: "";
  display: inline-block;
  width: 0.426667rem;
  height: 0.426667rem;
  background: url(../../assets/images/receive/time@2x.png) no-repeat;
  background-size: 0.426667rem;
  vertical-align: middle;
  margin-right: 0.213333rem;
}
.receive .rec_bd {
  display: flex;
  margin-top: 0.32rem;
}
.receive   .time_line {
  flex: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.receive   .time_line .line {
  width: 1px;
  height: 1.3rem;
  background-color: #ccc;
  margin: 0.133333rem 0;
}
.receive   .time_line::before {
  content: "";
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border: 3px solid #42C555;
  border-radius: 50%;
}
.receive  .time_line::after {
  content: "";
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border: 3px solid #FF872A;
  border-radius: 50%;
}
.receive   .rec_content {
  flex: 9.4;
  display: flex;
  flex-direction: column;
}
.receive   .start,
.receive   .end {
  position: relative;
  margin-bottom: 0.48rem;
  margin-left: 0.266667rem;
}
.receive   .start h3,
.receive   .end h3 {
  font-size: 0.426667rem;
  font-weight: normal;
  color: #4B4B4B;
}
.receive   .start p,
.receive   .end p {
  font-size: 0.32rem;
  color: #666;
  padding: 0.213333rem 0;
}
.receive   .start i,
.receive   .end i {
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
.receive  .start i span,
.receive  .end i span {
  font-size: 0.32rem;
  color: #666;
  margin-top: 0.213333rem;
}
.receive  .end {
  margin-bottom: 0.3rem;
}
.receive button {
  width: 9.2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  border-radius: 0 0 8px 8px;
  background-color: #2987FE;
  color: #fff;
  font-size: 0.426667rem;
  border: 0;
  margin-left: -0.32rem;
}


</style>