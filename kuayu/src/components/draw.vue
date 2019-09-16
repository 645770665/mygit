<template>
  <div>
    <div class="draw" ref="draw">
      <canvas
        @transitionend="ccc"
        :id="canvasId"
        :width="clientWidth"
        :height="clientWidth"
        :style="{transform:`rotate(${rotate}deg)`}"
      ></canvas>
      <!-- 中心你们自己写啦 -->
      <div>
        <div class="point"></div>
      </div>
      <div v-for="(item, index) in list" :key="index">
        <div :style="{transform:`rotate(${360/list.length*index + rotate}deg)`}">
          <img src="" alt>
          <span>奖品{{index}}</span>
        </div>
      </div>
    </div>
    <input v-model="num" type="text" placeholder="中哪个？">
    <button @click="rotating" type="button">开始</button>
    <button @click="end" type="button">停止</button>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  props: {
    list: {
      type: Array,
      default: function() {
        return new Array(18);
      }
    },
    canvasId: {
      type: String,
      default: "none"
    }
  },
  data() {
    return {
      fontSize: 0,
      maxWidth: document.body.clientWidth,
      clientWidth: 0,
      num: '',//要中的下标
      rotate: 0,
      range: 0,
      startRange: 0,
    };
  },
  created() {
    this.fontSize = (16 / (375 / this.maxWidth)).toFixed(2);//不要在意这个缩放的
  },
  mounted() {
    this.clientWidth = this.$refs.draw.clientWidth;//也是缩放相关的懒得删了
    // console.log(document.querySelector('[vf]').querySelector(this.canvasId));
    // return;
    this.$nextTick().then(this.canvasDraw);
  },
  methods: {
    ccc() {
      // setTimeout(()=>{alert('你中了啥')},1500);
    },
    goAnswer() {
      this.first_show = false;
      this.$emit("go-answer");
    },
    showAlert() {
      this.$emit("draw");
    },
    rotating() {
      this.flag = true;
      this.time = setInterval(() => {
        if (this.flag) {
          this.run(-360);
        } else {
          clearInterval(this.time);
        }
      }, 990);
    },
    run(x) {
      this.rotate += x;
    },
    end() {
      this.flag = false;
      var x = this.num;
      x =
        this.startRange - x * this.range - parseInt(Math.random() * this.range);
      this.run(x);
    },
    canvasDraw() {
      var center = this.clientWidth / 2;

      var canvas = document.getElementById(this.canvasId);
      var pi = canvas.getContext("2d");
      const length = this.list.length;
      this.range = 360 / length;
      this.startRange = this.range / 2;
      var degs = new Array(length + 1);
      var range = 2 / length;
      var deg = 1.5 - 2 / length / 2;
      for (let index = 0; index < length; index++) {
        degs[index] = deg + index * range;
        if (degs[index] > 2) {
          degs[index] = degs[index] - 2;
        }
      }
      degs[length] = degs[0];
      pi.lineWidth = 2;
      pi.strokeStyle = "yellow";
      for (let index = 0; index < length; index++) {
        if (index % 2) {
          pi.fillStyle = "#f99708";
        } else {
          pi.fillStyle = "#fff1ad";
        }
        pi.beginPath();
        pi.moveTo(center, center);
        pi.arc(
          center,
          center,
          center,
          degs[index] * Math.PI,
          degs[index + 1] * Math.PI,
          false
        );
        pi.closePath();
        pi.fill();
      }
    }
  }
};
</script>

<style lang="less">
// @function em($px) {
//   @return $px * 0.0625em;
// }
.draw {//可以通过父组件改
  width: 500px;
  height: 500px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  display: flex;
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    transition: 1s linear;
  }
  > div {
    position: absolute;
    transition: 1s;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      transition: 1s linear;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 60px;
        height: 60px;
      }
      span {
        font-size: 12px;
      }
    }
  }
  .point{
    width: 2px;
    flex: .5;
    background-color: red;
  }
}
</style>


