<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="title is-2">
          <p>
            <strong>Welcome</strong>
            <br />
          </p>
        </div>
        <div v-show="forget == true" class="box bg-warning">
          <p>Typo?</p>
          <p>
            Or did you
            <a href="/forget-credential">forget your credentials</a>?
          </p>
        </div>
        <div class="field">
          <label class="control">Username</label>
          <div class="control" v-if="form.email.length == 0">
            <input class="input" type="text" v-model="form.email" />
          </div>
          <div class="control has-icons-right" v-else-if="form.email == 'sss@sss.sss'">
            <input class="input is-success" type="text" v-model="form.email" />
            <span class="icon is-small is-right">
              <font-awesome-icon :icon="['fas', 'check']" />
            </span>
          </div>
          <div class="control has-icons-right" v-else>
            <input class="input is-danger" type="text" v-model="form.email" />
            <span class="icon is-small is-right">
              <font-awesome-icon :icon="['fas', 'close']" />
            </span>
          </div>
        </div>
        <div class="field">
          <label class="control">Password</label>
          <div class="control" v-if="form.password == 0">
            <input class="input" type="password" v-model="form.password" />
          </div>
          <div class="control has-icons-right" v-else-if="form.password == '123456'">
            <input class="input is-success" type="password" v-model="form.password" />
            <span class="icon is-small is-right">
              <font-awesome-icon :icon="['fas', 'check']" />
            </span>
          </div>
          <div class="control has-icons-right" v-else>
            <input class="input is-danger" type="password" v-model="form.password" />
            <span class="icon is-small is-right">
              <font-awesome-icon :icon="['fas', 'close']" />
            </span>
          </div>
        </div>
        <div class="content">
          <p>
            <a class="has-text-grey" href="/forget-credential">I forget my username or password</a>
          </p>
        </div>
        <nav class="level">
          <div class="level-left"></div>
          <div class="level-right">
            <div class="level-item">
              <a class="button is-success is-rounded" @click="login">Login</a>
            </div>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  name: "login",
  layout: "login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      forget: false
    };
  },
  methods: {
    login() {
      if (this.form.email == "sss@sss.sss" && this.form.password == "123456") {
        console.log("login");
        this.forget = false;
        // this.$router.push('/backend')
      } else {
        this.forget = true;
      }
    }
  }
};
</script>
<style>
.bg-warning {
  background-color: #ecd7888c;
  border: 1px solid #e7abab;
  padding: 2.7%;
  font-size: 85%;
}
.bg-warning p {
  color: #d17646;
}
</style>