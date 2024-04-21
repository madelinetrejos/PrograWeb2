// Importamos las funciones necesarias desde Vue
import { reactive, watchEffect } from 'vue';

// Creamos una función para manejar la información del usuario
const useUser = () => {
  // Creamos un objeto reactivo para almacenar la información del usuario
  const user = reactive({
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
  });

  // Función para actualizar la información del usuario
  const updateUser = () => {
    user.name = 'Jane Smith';
    user.age = 35;
    user.email = 'jane@example.com';
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
