// Obtener el elemento span donde se mostrará el valor del contador
const valorContador = document.getElementById('valorContador');

// Inicializar el contador en 0
let contador = 0;

// Función para incrementar el contador
function incrementar() {
    contador++;
    valorContador.textContent = contador;
}

// Función para decrementar el contador
function decrementar() {
    contador--;
    valorContador.textContent = contador;
}

// Función para resetear el contador a 0
function resetear() {
    contador = 0;
    valorContador.textContent = contador;
}