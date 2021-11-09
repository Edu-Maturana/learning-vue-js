<template>
  <section id="content">
    <h2 class="subheader">Peliculas</h2>

    <!--Listado articulos-->
    <div id="articles">
      <div :key="pelicula.id" v-for="pelicula in peliculas">
        <Pelicula :pelicula="pelicula" />
      </div>
      <!--AÑADIR ARTICULOS VIA JS-->
    </div>
  </section>
</template>

<script>
import Pelicula from "../components/Pelicula.vue";
export default {
  name: "Peliculas",
  components: {
    Pelicula,
  },
  data() {
    return {
      peliculas: [
        {
          id: 1,
          titulo: "Star wars",
          year: 2017,
          imagen:
            "https://i1.wp.com/hipertextual.com/wp-content/uploads/2020/05/hipertextual-star-wars-celebra-may-the-4th-be-with-you-con-extraordinario-video-que-rinde-homenaje-toda-saga-2020581511.jpg?fit=1920%2C1080&ssl=1",
        },
        {
          id: 2,
          titulo: "Black widow",
          year: 2019,
          imagen:
            "https://ca-times.brightspotcdn.com/dims4/default/a4c7991/2147483647/strip/true/crop/2506x1670+747+0/resize/2000x1333!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fbf%2F52%2F126190d94252ac33cdfb09597113%2Fla-ca-black-widow-movie-033.JPG",
        },
        {
          id: 3,
          titulo: "Spiderman",
          year: 2018,
          imagen:
            "https://as01.epimg.net/meristation/imagenes/2021/11/08/noticias/1636368945_398535_1636368978_noticia_normal.jpg",
        },
        {
          id: 4,
          titulo: "Leo Messi",
          year: 2019,
          imagen:
            "https://www.futbolred.com/files/article_main/files/crop/uploads/2021/10/29/617c5c491feff.r_1635540113147.0-0-3480-1744.jpeg",
        },
      ],
    };
  },
};
</script>
