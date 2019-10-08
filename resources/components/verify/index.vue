<template>
  <div class="box" style="width:25%">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <h3>We send the code to your email</h3>
          <br />
          <p class="has-text-grey">Please fill it in below.</p>
        </div>
        <div class="field">
          <label class="control">Verification code</label>
          <div class="columns">
            <div class="column">
              <input class="input" max="9" min="1" required type="number" maxlength="1" size="1" />
            </div>
            <div class="column">
              <input class="input" max="9" min="1" required type="number" />
            </div>
            <div class="column">
              <input class="input" max="9" min="1" required type="number" />
            </div>
            <div class="column">
              <input class="input" max="9" min="1" required type="number" />
            </div>
          </div>
        </div>
        <div style="margin-top:10%">
          <circular-count-down-timer :initial-value="60" :steps="60" :size="100" :second-label="''"></circular-count-down-timer>
        </div>
        <nav class="level">
          <div class="level-item">
            <a href="/new_password" class="button is-success" style="margin-top:10%; color:black">Verify</a>
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
        email: ""
      }
    };
  },
  methods: {}
};
</script>