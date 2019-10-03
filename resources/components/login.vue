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
        <div class="field">
          <label class="control">Username</label>
          <div class="control">
            <input
              :class="form.email == 'sss@sss.sss'? 'input is-success' : 'input'"
              type="text"
              v-model="form.email"
            />
          </div>
        </div>
        <div class="field">
          <label class="control">Password</label>
          <div class="control">
            <input
              :class="form.password == '123456'? 'input is-success' : 'input'"
              type="password"
              v-model="form.password"
            />
          </div>
        </div>
        <div class="content">
          <p>
            <a class="has-text-grey">I forget my username or password</a>
          </p>
        </div>
        <nav class="level">
          <div class="level-left"></div>
          <div class="level-right">
            <div class="level-item">
              <a class="button is-success is-rounded">Login</a>
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
      }
    };
  }
};
</script>