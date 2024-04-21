import { reactive, watchEffect } from 'vue'; // Importa watchEffect de 'vue'

// Creamos una función para manejar la información del usuario
const useUser = () => {
  // Creamos un objeto reactivo para almacenar la información del usuario
  const user = reactive({
    name: 'Madeline Trejos',
    age: 20,
    email: 'madeine.trejos@alumnos.uneatlantico.es'
  });

  // Función para actualizar la información del usuario
  const updateUser = () => {
    user.name = 'Leo Trejos';
    user.age = 55;
    user.email = 'trejos@gmail.com';
  };

  return { user, updateUser };
};

// Componente de ejemplo usando reactive
export default {
  setup() {
    // Obtenemos el usuario y la función para actualizar desde useUser
    const { user, updateUser } = useUser();

    // Observador para imprimir los cambios en el usuario
    watchEffect(() => {
      console.log('User updated:', user);
    });

    return {
      user,
      updateUser
    };
  }
};
