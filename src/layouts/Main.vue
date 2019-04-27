<template>
  <div id="main-layout">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/work">Work</router-link>
    </div>
    <div class="container">
        <router-view />
    </div>
  </div>
</template>
<script>

export default {


};
</script>
