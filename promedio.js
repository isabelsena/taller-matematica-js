//como calcular promedio primer ejemplo
function calcularPromedio (numeros){
    let suma = 0;
    const cantidad = numeros.length;

    for (
        let i = 0; i < cantidad; i++ ) {
        suma += numeros[i];
    }

    const promedio = suma / cantidad;
    return promedio;
}
//ejemplo de uso 
let conjuntoNumeros =[ 600,200,300,800];//475
let promedioResultado = calcularPromedio(conjuntoNumeros);
console.log("El promedio es: " + promedioResultado);

//como calcular promedio 2 ejemplo
function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
}


const lista = [200,100,300,500]//275
 const sumaLista = lista.reduce(sumarTodosElementos);
 const promedio2 = sumaLista / lista.length;
 console.log(promedio2);
