<template>
    <div>
      <p>Nombre: {{ nombre }}</p>
      <input v-model="nuevoNombre" type="text">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: 'Madeline',
        nuevoNombre: ''
      };
    },
    watch: {
      nuevoNombre(nuevoValor) {
        this.nombre = nuevoValor;
      }
    }
  };
  </script>
  