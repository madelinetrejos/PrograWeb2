<script>
    // Declaramos una variable reactiva para el color
    let color = 'red';
  
    // Función para cambiar el color
    function changeColor() {
      color = color === 'red' ? 'blue' : 'red';
    }
  </script>
  
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: color;
    }
  </style>
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="box" on:click={changeColor}></div>
  