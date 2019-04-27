<template>
  <div id="app" class="container">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>


<script>
let isLogged = true;
const default_layout = "main";
export default {
  computed: {
    layout() {
      if (isLogged) {
        return (this.$route.meta.layout || default_layout)+'-layout';
      } else {
        return "login";
      }
    }
  }
};
</script>
