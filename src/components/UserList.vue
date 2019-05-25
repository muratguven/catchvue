<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <h5>User List</h5>
      </div>
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
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{user.id}}</td>
              <td>{{user.username}}</td>
              <td>{{user.email}}</td>
              <td> 
                <button class="btn btn-sm btn-outline-info mr-2"  @click="updateUser(user.id)" ><i class="fas fa-user-edit"></i></button>
                <button class="btn btn-sm btn-outline-danger" @click="deleteUser(user.id)"><i class="far fa-trash-alt"></i></button>
               </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-sm-12">
        <button class="btn btn-sm btn-outline-primary float-right" data-toggle="modal" data-target="#userModal">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>

<!-- Modal -->
<div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="userModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="userModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     <UserRegister @IsAdded="userAdded" :userId="userid"/>
    </div>
  </div>
</div>


  </div>
</template>
<script>
import UserRegister from '@/components/UserRegister.vue';
import { mapState } from "vuex";

export default {
  data(){
    return {
      userid:0
    }
  },
  computed: {
    ...mapState({
      users: state => state.users.all,
      error: state => state.users.error
           
    })
  },
  methods:{
    userAdded(added){
      // eslint-disable-next-line
      console.log("added result:", added);
      
      if(added){
        // Modal'ı kapat.
        window.$('#userModal').modal('hide');
        // Success notification
        this.$noty.success("User saved!");
        
      }
    },
    updateUser(id){

      this.userid = id
      window.$('#userModal').modal('show');
       this.$store.dispatch('users/getUser', id);
    },
    deleteUser(id){
      this.$store.dispatch('users/deleteUser',id);
      // window.$('#userModal').modal('show');
      // Success notification
        this.$noty.success("User deleted!");
    }
  },
  created() {
    this.$store.dispatch("users/getAllUsers");
  },
  components:{
    UserRegister
  }
};
</script>
