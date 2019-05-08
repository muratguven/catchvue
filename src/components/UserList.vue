<template>
  <div>
      <div class="row">
          <h5 class="display-4">User List</h5>
      </div>
    <div class="row">
      <div class="col-sm-12 table-responsive">
        <div class="alert alert-danger" role="alert" v-if="error">Ooops ! There is an error.....</div>
        <table class="table table-sm table-striped table-dark">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>User Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.userName}}</td>
                    <td>{{user.email}}</td>
                </tr>
            </tbody>
        </table>


      </div>
    </div>
  </div>
</template>
<script>
import {  mapState } from "vuex";
export default {

  computed:{
      ...mapState({
      users: state => state.users.all,
      error: state => state.users.error
    })
  },
  created() {
    this.$store.dispatch("users/getAllUsers");
  }
};
</script>
