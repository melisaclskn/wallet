<template>
<div>
   <p></p>
    <h1 v-if="user">
       Hello {{user.name}} <br>
       Balance: {{user.balance}}
    </h1>
    <h1 v-if="!user">
       you are not logged in
    </h1>
</div>
</template>
<script>

export default {
   name:'Home',
   data(){
      return {
         user: ''
      }
   },
   created() {
      this.user = JSON.parse(localStorage.getItem('user'));
      console.log(this.user);
   }

}


</script>
