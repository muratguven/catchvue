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
// import { mapState, mapActions } from 'vuex'
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
  computed: {
    userdata() {
      // eslint-disable-next-line
      console.log(this.$store.state.users.user);
      return this.$store.state.users.user;
    }
  },
  methods: {
    onSubmit() {
      let user = {
        username: this.username,
        email: this.email,
        image: this.image,
        roles: this.roles
      };

      this.$store.dispatch("users/registerUser", user).then(() => {
        this.$emit("IsAdded", true);
      });
      // eslint-disable-next-line

      /* Burada bir üst component'e isAdded event 'ı oluşturuyorum. 
      Bir üst component bu event ile modal'ı kapatıp notification gönderecek.
      */

      //let added = this.$store.state.users.added;
      // eslint-disable-next-line
      // console.log("In UserRegister:", this.added);
      // this.$emit("IsAdded");
      // this.clearUserForm();
    },
    clearUserForm() {
      this.username = null;
      this.email = null;
    }
  },
  created() {
    // eslint-disable-next-line
    console.log("created...");
  }
};
</script>
