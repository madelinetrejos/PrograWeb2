<template>
    <div>
      <input v-model="num1" type="number">
      <input v-model="num2" type="number">
      <p>La suma es: {{ suma }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        num1: 0,
        num2: 0
      };
    },
    computed: {
      suma() {
        return this.num1 + this.num2;
      }
    }
  };
  </script>
  