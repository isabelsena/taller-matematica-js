// [1,2,3,4]
function calcularPromedio(lista) {
    //sumar todos los elementos del array / cantidad de elementos .lenght sabemos la cantidad de elementos que hay en un areglo

    let sumaLista = 0;

    for (let i = 0;
         i < lista.length; 
         i++) {
             sumaLista = sumaLista + lista[i];

    }
    
    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}

//ejemplo con arrow function y el metodo reduce

const lista = [200,100,300,500]//275


const ejemplo = (a,b) => a + b;//segundo ejemplo de la arrow function

const sumarTodosElementos =
 (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
 const sumaLista = lista.reduce(sumarTodosElementos);

const sumalista = lista.reduce((a,b) => a + b);


const promedio2 = sumaLista / lista.length;
console.log(promedio2);//275

