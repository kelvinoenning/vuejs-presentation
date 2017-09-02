<template>
  <div class="custom-navbar">
    <button type="button" class="btn btn-primary btn-sm" v-show="position > 0" @click="back()"> << </button>
    <button type="button" class="btn btn-primary btn-sm" @click="go()"> >> </button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      position: 0
    }
  },
  methods:{
    go(){
      this.position++;
      this.$router.push(this.position.toString());
    },
    back(){
      (this.position > 0) ? this.position-- : this.position = 0;
      this.$router.push(this.position.toString());
    }
  }
}
</script>

<style scoped>
.custom-navbar{
  width: 100%;
  padding-top: 15px;
  position: fixed;
}
.custom-navbar button{
  font-weight: bold;
}
</style>
