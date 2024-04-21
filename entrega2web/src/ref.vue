import { ref } from 'vue';

// Creamos una función para usar el contador
const useCounter = () => { 
  // Creamos una referencia reactiva para el contador
  const count = ref(0);

  
  const increment = () => {
    count.value++;
  };

  return { count, increment };
};


export default {
  setup() {
    // Obtenemos el contador y la función de incremento desde useCounter
    const { count, increment } = useCounter();

    return {
      count,
      increment
    };
  }
};