<template>
  <div id="app" class="text-center" cz-shortcut-listen="true">
    <main class="form-signin" @submit.prevent="login()">
      <form>
       
        <h1 class="h3 mb-3 fw-normal">Login</h1>
        <!-- <div class="alert alert-danger" v-if="error">{{error}} </div> -->

        <div class="form-floating">
          <input
            type="email"
            v-model="data.email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            v-model="data.password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Login
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",

  data() {
    return {
      data: {
        email: "",
        password: "",
        
        //error':'
      },
    };
  },
  methods: {
    async login() {
      const response = await axios
        .post("http://192.168.10.70:8000/api/login", {
          email: this.data.email,
          password: this.data.password,
        })
        .then((response) => {
          this.user = response.data.user;
          if(response.data) {
            localStorage.setItem("token", response.data.token); 
            localStorage.setItem('user', JSON.stringify(response.data.user));
            
            this.$root.$emit('logged-in')
            this.$router.push("/home");
          }
        });
    },
  },
};
</script>

<style scoped>
#app {
  background: rgb(236, 248, 248);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
.form-signin {
  max-width: 330px;
  margin: auto;
}
</style>
