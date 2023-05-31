function esPar(lista) {
    return !(lista.length % 2);
}

function esImpar(lista) {
    return lista.length % 2;
}

function calcularMediana(lista) {
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
      const indexMitad1Listapar = (lista.length / 2) - 1;
        const indexMitad2Listapar = lista.length / 2;
       //1 const Mitad1ListaPar = lista[(lista.length / 2) - 1];
        //1const Mitad2Listapar = lista[lista.length / 2];
        

        //lista[indexMitad1ListaPar]
        //lista[indexMitads2ListaPar]
        //[lista[indexMitad1ListaPar], lista[indexMitad2ListaPar]]
        //1const listaMitades = [Mitad1ListaPar, Mitad2Listapar];

    //si usmos el index # 2
    const listaMitades = [];
    listaMitades.push(lista[indexMitad1Listapar]);
    listaMitades.push(lista[indexMitad2Listapar]);
     const medianaListapar = calcularPromedio(listaMitades);
     return medianaListapar;

    } else {
        //acar mediana
       // const medianaImpar = Math.floor(lista.length / 2) + 1;

       //encontar la mediana de una lista impar encontrar  el elemento de un array que este en toda la mitad de un elemento impar primero encontrar el indice y luego
       const indexmitadListaImpar = Math.floor(lista.length / 2);
       const medianaListaImpar = lista[indexmitadListaImpar];

       console.log(indexmitadListaImpar);
       console.log(medianaListaImpar);

       return medianaListaImpar

        
    }
    
    //calcularMediana([10,20,30]);1,20,20


}
//segundo ejemplocalcular mediana impar
function calcularMedianaImpar(numeros) {
    var longitud = numeros.length;
    var indiceMediana = Math.floor(longitud / 2);
    var mediana = numeros[indiceMediana];
    return mediana;
  }
  
  // Ejemplo de uso
  var numerosImpares = [1, 3, 5, 7, 9];
  var medianaResultado = calcularMedianaImpar(numerosImpares);
  console.log("La mediana es:", medianaResultado);

  //calcular mediana de una lista inpar
  function calcularMedianaImpar(lista) {
      //ordena la lista de forma ascendente
      lista.sort(function(a,b) {
          return a - b;
      });
      //encuentra el indice central
      var indiceCentral = Math.floor(lista.length / 2);

      //devuelve el valor en el indice central
      return lista[indiceCentral]

  }

  //ejemplo de uso
  var listaNumeros = [7,2,9,1,6];

  var medianaResultado = calcularMedianaImpar(listaNumeros);
  console.log("LA MEDIANA ES: " + medianaResultado);//la mediana es 6
   

  //ejemplo calcular mediana de una lista par
  function calcularMedianaListaPar(lista) {
       //ordena la lista de forma ascendente
       lista.sort(function(a,b) {
        return a - b;
    });

     //encuentra los dos indices centrales
     var indiceCentral1 = Math.floor((lista.length -1) / 2);
     var indiceCentral2 = Math.ceil((lista.length -1) / 2);

     //calcula el promedio de los valores en los indices centrales
     var medianaPar = (lista[indiceCentral1] + lista[indiceCentral2]) / 2;

     //devuelvo la mediana
     return medianaPar;
  }

  //Ejemplo de uso
  var listaNumeros = [500,100,900,450,700,600];
  var medianaResultado = calcularMedianaListaPar(listaNumeros);
  console.log("la mediana es : ' " + medianaResultado);//la mediana es 550