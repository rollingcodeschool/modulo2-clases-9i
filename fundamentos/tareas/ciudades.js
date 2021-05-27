/*
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

*/

//arreglo global
//funcion
//retornar el arreglo cuando presione cancelar o "0"

let ciudades = [];

function agregarCiudades(ciudad = prompt("Ingrese una ciudad")) {
  //bucle
  //cuando el usuario presiona cancelar el valor de ciudad es null
  while (ciudad !== null && ciudad !== "0") {
    //usuario ingresa un campo vacio
    if (ciudad !== "") {
      ciudades.push(ciudad);
    }
    ciudad = prompt("Ingrese otra ciudad");
  }

  console.log(ciudades);

  for (let i = 0; i < ciudades.length; i++) {
    console.log(`${i + 1} - ${ciudades[i]}`);
  }

  console.log(`Cantidad de ciudades: ${ciudades.length}`);

  //document.write()
  //0
  //2
  //length-1

  document.write(`Primera Posición: ${ciudades[0]}<br> `);
  document.write(`Tercera Posición: ${ciudades[2]}<br> `);
  document.write(`Última Posición: ${ciudades[ciudades.length - 1]}<br> `);

  ciudades.push("Paris");
  console.log(ciudades);

  document.write(`Segunda Posición: ${ciudades[1]}<br> `);

  ciudades.splice(1, 1, "Barcelona");
  document.write(`Segunda Posición reemplazada: ${ciudades[1]}<br> `);
}
