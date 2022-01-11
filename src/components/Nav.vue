<template>
  <div class="container">
    <header
      class="
        d-flex
        flex-wrap
        align-items-center
        justify-content-center justify-content-md-between
        py-3
        mb-4
        border-bottom
      "
    >
      <a
        href="/"
        class="
          d-flex
          align-items-center
          col-md-3
          mb-2 mb-md-0
          text-dark text-decoration-none
        "
      >
        <svg
          class="bi me-2"
          width="40"
          height="32"
          role="img"
          aria-label="Bootstrap"
        >
          <use xlink:href="#bootstrap"></use>
        </svg>
      </a>

      <div class="col-md-3 text-end" v-if="!checkUser">
        <button type="button" class="btn btn-outline-primary me-2">
          <router-link to="/login">Login</router-link>
        </button>
        <button type="button" class="btn btn-primary">
          <router-link to="/signup">Sign Up</router-link>
        </button>
      </div>
      <!--Login successful-->
      <div class="col-md-3 text-end" v-if="checkUser">
        <button type="button" class="btn btn-primary">
          <router-link to="/login"> <button @click="logOut">Logout</button></router-link>
        </button>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data(){
    return{
      user:''
    }
  },
   created() {
      this.user = JSON.parse(localStorage.getItem('user'));
   },
  methods: {
    logOut() {
      console.log("this is log out")
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      console.log(localStorage.getItem("user"))
      this.$router.push("/login");
    },
    checkUser(){
      console.log(localStorage.getItem('user')? true: false)
      return localStorage.getItem('user')? true: false;
    }
  }
 }
</script>



