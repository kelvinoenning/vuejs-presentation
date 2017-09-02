

<template>
  <div>
    <div class="form-group">
      <input type="text" class="form-control" v-model="text">
    </div>
    <h1 :class="getColor()">{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: 'reactive',
  data () {
    return {
      text: 'Reativo?'
    }
  },
  methods:{
    getColor(){
      if(this.text == 'red' || this.text == 'yellow' || this.text == 'blue') return this.text;
      return ''
    }
  }
}
</script>

<style scoped> ... </style>
