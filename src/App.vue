<template>
  <div id="app">
    <!--  <nav class="col-3">-->
    <!--    <router-link to="/"><button type="button" class="btn btn-success">HOME</button></router-link> |-->
    <!--    <router-link to="/about"><button type="button" class="btn btn-success">ABOUT</button></router-link>-->
    <!--  </nav>-->
    <router-view/>


  </div>
</template>

<style>
@import "@/assets/Mystyle.css";


nav {
  padding: 7px;
}

nav a {
  font-weight: bold;
  color: #1DB954;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>export default {
  components: {}
}
</script>