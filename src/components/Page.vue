<template>
  <section id="content">
    <h2 class="subheader">Pagina</h2>
    <h3>{{id_desde_url}}</h3>
  </section>
</template>

<script>
export default {
  name: "Pagina",
  mounted() {
    // Esto viene desde el parametro opcional q definimos en el router
    this.id_desde_url = this.$route.params.id; 
  },
  data() {
    return {
      id_desde_url: null
    };
  },
};
</script>
