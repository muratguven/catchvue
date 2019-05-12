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

export default {
  props:{
    userId:{
      type:Number,
      required:false,
      default(){
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
        username: this.username,
        email: this.email,
        image: this.image,
        roles: this.roles
      };
      this.$store.dispatch("users/registerUser", user);
      /* Burada bir üst component'e isAdded event 'ı oluşturuyorum. 
      Bir üst component bu event ile modal'ı kapatıp notification gönderecek.
      */ 
     let added = this.$store.state.users.added;
     // eslint-disable-next-line
     console.log(added);
      this.$emit('IsAdded', added);
      // this.clearUserForm();
    },
    clearUserForm(){
      this.username = null;
      this.email=null;
    }
  },
  created(){
    if(this.userId>0){

    }
  }
};
</script>
