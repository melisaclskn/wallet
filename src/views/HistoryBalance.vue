<template>
  <div>
    <p></p>
    <h1 v-if="user">
      Hello <br />
      
     <table class="table">
  <thead>
    <tr>
      <th scope="col">receiver email</th>
      <th scope="col">amount</th>
      <th scope="col">balance</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="object in objects" :key=object>
      <td>{{object.receiver.email}}</td>
      <td>{{object.amount}}</td>
      <td>{{object.balance}}</td>
      <td>{{object.created_at}}</td>
    </tr>
  </tbody>
  </table>
    </h1>
    <h1 v-if="!user">you are not logged in</h1>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HistoryBalance",
  data() {
    return {
      user: "",
      received_user_email: "",
      amount: 0,
      objects:[]
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getHistoryInfo();
    //console.log("user",this.user);
  },

  methods: {
   
    getHistoryInfo() {
      var token = localStorage.getItem("token");
      const headers = {
        Authorization: "Bearer " + token,
      };

      var res = axios
        .get("http://192.168.10.70:8000/api/historyBalance", { headers })
        .then((res) => this.objects=res.data);
         //this.objects=res.data
        console.log(objects.received_user_email)
    },
  },
};
</script>
<style scoped>
.money {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  margin: 0px 0px 30px 30px;
}
</style>