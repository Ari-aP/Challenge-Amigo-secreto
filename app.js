// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array donde se almacenarán los nombres
let amigos = [];
const input = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Atajo: Enter para añadir
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        agregarAmigo();
    }
});

// Función para añadir amigos
function agregarAmigo() {
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }
     // Validación de duplicados (case-insensitive)
    const existe = amigos.some(a => a.toLowerCase() === nombre.toLowerCase());
    if (existe) {
        alert("Ese nombre ya fue agregado.");
        return;
    }
        
    amigos.push(nombre); // Agregamos al array
    input.value = ""; // Limpiamos el campo
    input.focus();

    // Si había un resultado de sorteo anterior, lo limpiamos al empezar una nueva lista
    resultado.innerHTML = "";

    mostrarLista();
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    // 1. Obtener el elemento <ul>
    const lista = document.getElementById("listaAmigos");

    // 2. Limpiar lista
    lista.innerHTML = "";

    // 3. Recorrer el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // 4. Crear un <li> y asignarle el nombre
        const li = document.createElement("li");
        li.textContent = amigos[i];

        // Agregar <li> al <ul>
        lista.appendChild(li);
    }
}



function sortearAmigo() {
    // 1. Validar que haya al menos 2 amigos
    if (amigos.length < 2) {
        alert("Debes agregar al menos 2 amigos para sortear.");
        return;
    }

    // 2. Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado en pantalla
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: 
        <span style="color:green; font-weight:bold;">${amigoSorteado}</span></li>`;

    // (Opcional) Limpiar lista para reiniciar el juego
    document.getElementById("listaAmigos").innerHTML = "";
    amigos = [];
}

