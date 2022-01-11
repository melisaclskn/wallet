<template>
  <div id="app" class="text-center" cz-shortcut-listen="true">
    <main class="form-signin">
      <form @submit.prevent="signUp()">
      
        <h1 class="h3 mb-3 fw-normal">Sign in</h1>

        <div class="form-floating">
          <input
            type="text"
            v-model="data.name"
            class="form-control"
            id="floatingInput"
            placeholder="Name"
          />
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating">
          <input
            type="email"
            v-model="data.email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email</label>
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
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign Up
        </button>
        <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import "../axios";
export default {
  name: "SignUp",
  data() {
    return {
      data: {
        name: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async signUp() {
      const response = await axios
        .post(
          "http://192.168.10.70:8000/api/users",
          {
            name: this.data.name,
            email: this.data.email,
            password: this.data.password,
          },
          
        );
      //.then((res) => console.log(res)).catch(error => {console.log(error)});

      this.$router.push("/login");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
