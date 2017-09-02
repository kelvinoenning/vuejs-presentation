<template>
  <div class="box">
    <div class="text-center">
      <div class="form-group">
        <input type="text" class="form-control" v-model="text">
      </div>
      <h1 :class="getColor()">{{text}}</h1>
      <div>
        <pre class="line-numbers language-markup">
            <code>
              {{example}}
            </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reactive',
  data () {
    return {
      text: 'Reativo?',
      example:
      `
            <input type="text" v-model="text">
            <h1 :class="getColor()">{{text}}</h1>
      `
    }
  },
  mounted(){
    Prism.highlightAll();
  },
  methods:{
    getColor(){
      if(this.text == 'red' || this.text == 'yellow' || this.text == 'blue') return this.text;
      return ''
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

.red{
  color: red !important;
}
.yellow{
  color: yellow;
}
.blue{
  color: blue;
}
</style>
