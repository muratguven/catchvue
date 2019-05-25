<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="modal-body">
        <div class="form-group row">
          <div class="col-sm-12">
            <input
              class="form-control form-control-sm"
              type="text"
              placeholder="User Name"
              v-model="username"
            >
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-12">
            <input
              class="form-control form-control-sm"
              type="text"
              placeholder="Email"
              v-model="email"
            >
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-sm btn-primary">Save changes</button>
      </div>
    </form>
  </div>
</template>

<script>
const axios = require("axios");
const API_URL = "http://localhost:3000/Users";
export default {
  props: {
    userId: {
      type: Number,
      required: false,
      default() {
        return 0;
      }
    }
  },
  data() {
    return {
      username: null,
      email: null,
      image: null,
      roles: null
    };
  },
  methods: {
    onSubmit() {
      let user = {
        id: this.userId,
        username: this.username,
        email: this.email,
        image: this.image,
        roles: this.roles
      };
      if (this.userId || this.userId > 0) {
        this.$store.dispatch('users/updateUser',user).then(()=>{
          this.$emit("IsAdded",true);
        });
      } else {
        this.$store.dispatch("users/registerUser", user).then(() => {
          this.$emit("IsAdded", true);
        });
      }
    },
    clearUserForm() {
      this.username = null;
      this.email = null;
    },
    setForUpdate(data) {
      this.username = data.username;
      this.email = data.email;
      this.image = data.image;
      this.roles = data.roles;
    }
  },
  watch: {
    userId: function() {
      let self = this;
      axios.get(API_URL + "?id=" + this.userId).then(function(response) {
        self.setForUpdate(response.data[0]);
      });
    }
  }
};
</script>
