<template>
<div>
  <div id="nav">
    <nav-bar :user="user"/>
     
  </div>
  <router-view :user="user" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Nav from './components/Nav.vue'
import axios from 'axios'
export default{
  components:{
    navBar: Nav
  },
   data(){
       return{
         user:null
       }
    },
    async created(){
      // const response= await axios.get('http://192.168.10.70:8000/api/users',{
      //   header:{
      //     Authorization:'Bearer'+localStorage.getItem('token')
      //   }
      // })
      // console.log(response)

      // this.user=response.user
      // console.log(this.user);
    }
  
}
</script>