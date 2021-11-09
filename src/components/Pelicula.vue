<template>
  <article
   
    class="article-item"
    id="article-template"
  >
    <div class="image-wrap">
      <img :src="pelicula.imagen" :title="pelicula.titulo" />
    </div>

    <h2>{{ pelicula.titulo }}</h2>
    <span
      class="date"
      :class="{
        green: pelicula.year >= 2018,
        red: pelicula.year < 2018,
      }"
    >
      {{ pelicula.year }}
    </span>
    <a href="#">Leer más</a>

    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "Pelicula",
  props: ["pelicula"]
};
</script>
