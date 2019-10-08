<template>
  <div class="box" style="width:25%">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <h3>Hi , Username</h3>
          <br />
          <p class="has-text-grey">Wow, great username!</p>
        </div>
        <!-- lock -->
        <div class="padlock" v-if="form.password.length == 0"></div>
        <div class="warningpadlock" v-else-if="form.password.length <=5 "></div>
        <div class="successpadlock unlock" v-else-if="form.password.length >5 ">
          <div class="keyhole checkmark"></div>
        </div>

        <!-- password -->
        <div class="field">
          <label class="control">New Password</label>
          <div class="control">
            <input
              :class="form.password.length >5? 'input is-success' : 'input'"
              type="password"
              v-model="form.password"
            />
          </div>
        </div>
        <div class="field">
          <label class="control">Repeat Password</label>
          <div class="control has-icons-right" v-if="form.re_password.length == 0">
            <input
              class="input"
              type="password"
              v-model="form.re_password"
            />
          </div>
          <div class="control has-icons-right" v-else-if="form.password===form.re_password && form.password.length!=0">
            <input
              class="input is-success"
              type="password"
              v-model="form.re_password"
            />
            <span class="icon is-small is-right">
              <font-awesome-icon :icon="['fas', 'check']" />
            </span>
          </div>
          <div class="control has-icons-right" v-else>
            <input
              class="input is-danger"
              type="password"
              v-model="form.re_password"
            />
            <span class="icon is-small is-right">
              <font-awesome-icon :icon="['fas', 'close']" />
            </span>
          </div>
        </div>
        <nav class="level">
          <div class="level-item">
            <a href="/" class="button is-success" style="margin-top:10%">Save</a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>
<script>
import Vue from "vue";
import CircularCountDownTimer from "vue-circular-count-down-timer";
Vue.use(CircularCountDownTimer);
export default {
  name: "login",
  layout: "login",
  data() {
    return {
      form: {
        re_password: "",
        password: ""
      }
    };
  },
  methods: {}
};
</script>
<style scoped>
.padlock {
  position: relative;
  width: 91px;
  height: 70px;
  background-image: linear-gradient(to bottom right, red 30%, red 8%);
  border-radius: 16px 20px 20px 20px;
  cursor: pointer;
  margin-top: 27% !important;
  margin-left: 30%;
  margin-bottom: 10%;
}

.successpadlock.unlock::before {
  transform: translate(1%, 14%);
}

.padlock.unlock::after {
  transform: translate(-50%, calc(-50% - 15px)) rotate(90deg);
}

.padlock[data-v-e210ae24]::before {
  content: "";
  position: absolute;
  left: 12%;
  top: -73%;
  width: 63px;
  height: 79px;
  border-radius: 38px;
  border: 13px solid red;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 65%,
    50% 65%,
    50% 57%,
    22% 57%,
    22% 51%,
    15% 51%,
    14% 52%,
    14% 53%,
    15% 54%,
    22% 54%,
    18% 57%,
    2% 57%,
    0% 55%
  );
}

.warningpadlock {
  position: relative;
  width: 91px;
  height: 70px;
  background-image: linear-gradient(
    to bottom right,
    rgb(236, 187, 141) 30%,
    rgb(236, 187, 141) 8%
  );
  border-radius: 16px 20px 20px 20px;
  cursor: pointer;
  margin-top: 27% !important;
  margin-left: 30%;
  margin-bottom: 10%;
}
.warningpadlock[data-v-e210ae24]::before {
  content: "";
  position: absolute;
  left: 12%;
  top: -73%;
  width: 63px;
  height: 79px;
  border-radius: 38px;
  border: 13px solid rgb(236, 187, 141);
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 65%,
    50% 65%,
    50% 57%,
    22% 57%,
    22% 51%,
    15% 51%,
    14% 52%,
    14% 53%,
    15% 54%,
    22% 54%,
    18% 57%,
    2% 57%,
    0% 55%
  );
}
.successpadlock {
  position: relative;
  width: 91px;
  height: 70px;
  background-image: linear-gradient(
    to bottom right,
    rgb(125, 223, 166) 30%,
    rgb(125, 223, 166) 8%
  );
  border-radius: 16px 20px 20px 20px;
  cursor: pointer;
  margin-top: 27% !important;
  margin-left: 30%;
  margin-bottom: 10%;
}
.successpadlock[data-v-e210ae24]::before {
  content: "";
  position: absolute;
  left: 12%;
  top: -73%;
  width: 63px;
  height: 79px;
  border-radius: 38px;
  border: 13px solid rgb(125, 223, 166);
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 65%,
    50% 65%,
    50% 57%,
    22% 57%,
    22% 51%,
    15% 51%,
    14% 52%,
    14% 53%,
    15% 54%,
    22% 54%,
    18% 57%,
    2% 57%,
    0% 55%
  );
}
.checkmark {
  display: inline-block;
  content: "";
  display: block;
  width: 10px;
  height: 25px;
  border: solid green;
  border-width: 0 4px 4px 0;
  transform: rotate(45deg);
}
.keyhole {
  position: absolute;
  top: 25%;
  left: 45%;
}
</style>