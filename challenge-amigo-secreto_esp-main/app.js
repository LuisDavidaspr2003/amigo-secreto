let guardarAmigos = [];

function agregarAmigo() {
  let añado = document.getElementById('amigo').value.trim(); // quitamos espacios extra

  if (añado === '') {
    alert('Escribe un nombre');
  } else {
    guardarAmigos.push(añado);
    console.log(guardarAmigos);
    limpiarCaja();
  }
}

function limpiarCaja() {
  document.getElementById('amigo').value = '';
}

function sortearAmigo() {
  if (guardarAmigos.length === 0) {
    alert('No has ingresado ningún nombre');
  } else {
    // Generar índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * guardarAmigos.length);

    // Obtener el nombre sorteado
    let nombreSorteado = guardarAmigos[indiceAleatorio];

    // Mostrar resultado en la página
    document.getElementById('resultado').innerHTML = 
      `🎉 El amigo secreto es: <b> ${nombreSorteado}</b>`;

    console.log("Amigo secreto:", nombreSorteado);
  }
}
