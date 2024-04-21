<script>
  // Declaramos una variable reactiva
  let count = 0;

  // Función para incrementar el contador
  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicks: {count}
</button>
