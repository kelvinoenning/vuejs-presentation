<template>
  <div class="box">
    <div class="text-center">
      <div class="form-group">
        <input type="text" class="form-control" v-model="text">
      </div>
      <h1>{{text}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reactive',
  data () {
    return {
      text: 'Reativo?'
    }
  }
}
</script>

<style scoped>
h1{
  margin-top: 35px;
}
.form-control{
  font-size: 6em;
  height: 115px;
}
</style>
