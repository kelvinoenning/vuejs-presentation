<template>
  <div>
    <div class="author">
      <h2>$('#kelvin')</h2>
      <div class="author-box">
        <h2>Kelvin Oenning</h2>

        <div class="row">
          <div class="col-md-6">
            <img src="static/dev.jpeg" alt="dev">
          </div>
          <div class="col-md-6">
            <h3 class="description">Entusiasta em Desenvolvimento/Tecnologia</h3>
            <h3 class="description">Amante de projetos desafiadores</h3>
            <h3 class="description">Entusiasta em Overclock</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'one',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.author{
  padding: 30px;
}
.author-box{
    margin-top: 35px;
}
.author-box > h2{
  text-align: center;
}
.row{
  margin-top: 45px;
}
.description{
  margin-top: 45px;
}
img{
  max-width: 700px;
}
</style>
