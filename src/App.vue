<template>
  <div class="container-fluid filter">
    <custom-navbar></custom-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'app',
  components:{
    "custom-navbar": Navbar
  }
}
</script>

<style>
html,body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif !important;
  background: url('assets/background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  min-height: 99.99vh;
  font-family: 'Ubuntu';
}

h1,h2,h3, label{
  color: #fff;
}
h1{
  font-size: 6em;
}
h2{
  font-size: 5em;
}
h3{
  font-size: 3em;
}
label{
  font-size: 3em;
}

.filter{
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 99.99vh;
}

.box{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-height: 99.99vh;
}
</style>
