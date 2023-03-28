<template>
  <div class="nav">
    <img v-on:click="$router.push('/')"   class="logo" src="..//assets/inbank-logo.png">
  </div>
</template>

<style>
.logo{
  height: 60px;
}
.nav{
  overflow: hidden;
  font-size: 14px;
  height: 65px;
  align-content: center;
  margin-bottom: 10px;

}

.nav a {
  padding: 10px 1px;
  color: #413C3C ;
  text-align: center;
  font-size: 14px;
  text-decoration: none;
  margin-right: 14px;
}
</style>