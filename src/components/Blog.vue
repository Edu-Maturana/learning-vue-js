<template>
  <section id="content">
    <h2 class="subheader">Blog</h2>
    <h3>Reactividad</h3>
    <input type="text" v-model="nombre" />
    <h4>{{ nombre }}</h4>

    <h2>Directivas condicionales</h2>
    <input type="number" v-model="edad" />
    Mi edad es <strong>{{ edad }}</strong>

    <p class="provisional-green" v-if="edad && edad >= 18 && edad < 65">Eres mayor de edad</p>
    <p class="provisional-green" v-else-if="edad && edad >= 65">Eres tercera edad</p>
    <p class="provisional" v-else>Eres menor de edad</p>

    <h2>Directivas iterativas</h2>
    <ol>
      <li v-for="pelicula in peliculas" :key="pelicula">{{ pelicula }}</li>
    </ol>
  </section>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      nombre: "",
      edad: 18,
      peliculas: ["Batman", "Spiderman", "Superman", "Aquaman"]
    };
  },
};
</script>
