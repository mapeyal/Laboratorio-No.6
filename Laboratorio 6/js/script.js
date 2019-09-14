/* Obtenemos la acción de nuestros botones */
document.getElementById("generar").addEventListener("click", generar);
document.getElementById("limpiar").addEventListener("click", limpiar);

function generar() {
  var cantidadNumeros = 14; //Designamos la cantidad de números que tendrá nuestro arreglo
  var myArray = []; //Declaramos nuestro arreglo
  var maximo = 0; //Asignamos el valor inicial para realizar la comparación con el número mayor
  var minimo = 100; //Asignamos el valor inicial para realizar la comparación con el número mayor

  //Minetras la longitud de nuestro arreglo sea menor a la cantidad de número que asignamos
  while (myArray.length < cantidadNumeros) {
    var numeroAleatorio = Math.round(Math.random() * 100); //Variable que almacena el número aleatorio creado con la función math.random
    myArray[myArray.length] = numeroAleatorio; // Almacenamos los números aleatorios en cada espacio de nuestro arreglo
  }
  //Mostramos en la consola del navegador el resultado
  console.log("números aleatorios : " + myArray);

  const bubbleSort = myArray => {
    const l = myArray.length;
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l - 1 - i; j++) {
        if (myArray[j] > myArray[j + 1]) {
          [myArray[j], myArray[j + 1]] = [myArray[j + 1], myArray[j]];
        }

        if (maximo < myArray[j]) {
          maximo = myArray[j];
        }
        if (minimo > myArray[j]) {
          minimo = myArray[j];
        }
      }
    }
    //Mostramos en la consola del navegador el resultado
    console.log("Numero mayor: " + maximo);
    //Mostramos en la consola del navegador el resultado
    console.log("Numero menor: " + minimo);
    //Imprimimos dentro del body de HTML el resultado del número mayor del arreglo
    document.getElementById("Mayor").innerHTML=maximo;
    //Imprimimos dentro del body de HTML el resultado del número menor del arreglo
    document.getElementById("Menor").innerHTML=minimo;
    return myArray;
    return minimo, maximo;
    
  };
  //Creamos el canvas para poder graficar el arreglo en 2D
  var canvas = document.getElementById("canvas1");
  var ctx = canvas.getContext("2d");

  var width = 50;
  var X = 2;
  //Recorre el arreglo para poder graficarlo
  for (i = 0; i < myArray.length; i++) {
    ctx.fillStyle = '#008080';
    var h = myArray[i];
    ctx.fillRect(X, canvas.height - h, width, h);

    X += width + 15;

    ctx.fillStyle = '#4da6ff';
    ctx.fillText(myArray[i], X - 50, canvas.height - h - 10);
  }
  const result = bubbleSort(myArray);
//Mostramos el resultado en la consola del navegador
  console.log("números ordenados : " + result);

//Creamos el canvas para poder graficar el arreglo ordenado de menor a mayor en 2D
  var canvas = document.getElementById("canvas2");
  var ctx = canvas.getContext("2d");

  var width = 50;
  var X = 2;

  //Recorre el arreglo para poder graficarlo
  for (i = 0; i < myArray.length; i++) {
    ctx.fillStyle = '#008080';
    var h = myArray[i];
    ctx.fillRect(X, canvas.height - h, width, h);

    X += width + 15;

    ctx.fillStyle = '#4da6ff';
    ctx.fillText(myArray[i], X - 50, canvas.height - h - 10);
  }
}
/* Función que borra los resultado en pantalla*/ 
function limpiar() {
  //Accede al primer canvas y coloca sus valores en 0
  var canvas = document.getElementById('canvas1');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //Accede al segundo canvas y coloca sus valores en 0
  var canvas = document.getElementById('canvas2');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //Borra el resultado de los números mayor y menor impresos en el body
  document.getElementById("Mayor").innerHTML="";
  document.getElementById("Menor").innerHTML="";
}