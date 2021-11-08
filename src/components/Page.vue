<template>
  <section id="content">
    <h2 class="subheader">Pagina</h2>
    <h3>{{id_desde_url}}</h3>
    <h4>{{nombre}}</h4>
    <button @click=updateNombre()>Cambiar nombre</button>
  </section>
</template>

<script>
export default {
  name: "Pagina",
  created() {
    console.log("Pagina created");
  },
  mounted() {
    // Esto viene desde el parametro opcional q definimos en el router
    this.id_desde_url = this.$route.params.id; 
  },
  updated() {
    console.log("Pagina updated");
  },
  unmounted() {
    console.log("Pagina unmounted");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: 'Edu'
    };
  },
  methods: {
    updateNombre() {
      this.nombre = 'Eduardo Maturana';
    }
  }
};
</script>
