<template>
  <div class="box">
    <div class="text-center">

      <div class="form-group">
        <input type="text" class="form-control" @keypress.enter="addList()" v-model="control">
      </div>

      <h1 :class="getColor()" v-if="control != 'sumir'">{{control}}</h1>

      <div class="form-group">
        <button class="btn btn-primary btn-lg" @click="addList()">Adicionar</button>
        <ul class="text-left">
          <li v-for="(i, index) of list"> <button class="btn btn-danger" @click="remove(index)">X</button>  <h3>{{i}}</h3></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reactive',
  data () {
    return {
      control: 'Reativo?',
      list: []
    }
  },
  methods:{
    getColor(){
      if(this.control == 'red' || this.control == 'yellow' || this.control == 'blue') return this.control;
      return ''
    },
    addList(){
      this.list.push(this.control);
    },
    remove(index){
      this.list.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.box{
  min-height: 99.9vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1{
  margin-top: 35px;
  font-size: 6em;
}
code{
  font-size: 3em;
}
.form-control{
  font-size: 6em;
  height: 115px;
}
li{
  display: flex;
  padding: 5px;
}
li h3{
  margin-left: 15px;
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
