<template>
  <div>
    <div class="author">
      <h2>$('#kelvin')</h2>
      <div class="author-box">
        <h2>Kelvin Oenning</h2>

        <div class="row">
          <div class="col-md-5">
            <img src="static/dev.jpeg" alt="dev">
          </div>
          <div class="col-md-7">
            <h2 class="description">Entusiasta em Desenvolvimento/Tecnologia</h2>
            <h2 class="description">Amante de projetos desafiadores</h2>
            <h2 class="description">Entusiasta em Overclock</h2>
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
  margin-top: 100px;
}
.description{
  margin-top: 45px;
  font-size: 4.5em;
}
img{
  width: 700px;
  max-width: 100%;
}
</style>
