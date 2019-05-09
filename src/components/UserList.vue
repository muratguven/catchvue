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
      <div class="col-sm-12">
        <button class="btn btn-sm btn-light float-right" data-toggle="modal" data-target="#userModal">
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
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
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
