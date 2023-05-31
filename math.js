//calcular el perimetro del cuadrado
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;//el perimetro al cuadrado es 20.
const areaCuadrado = ladoCuadrado * ladoCuadrado;//25

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

//calcular area del triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1,lado2,base,altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) /2,
    };
}
console.group('triangulo');

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    };
}

console.groupEnd("cuadrado");

console.group('alturatriangulo');
function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) { 
        console.warn('este no es un triangulo isosceles');

    }else {
        //h = raizcuadrada(lado1**2 - (b**2) /4)
        return Math.sqrt( (lado1 ** 2) - (( base ** 2) )/4);
    }
}
console.groupEnd('alturatriangulo'); 

console.group('trianguloEscaleno');

function calcularAlturaTriangulo(base, ladoA, ladoB) {
    // Calculamos el semiperímetro del triángulo
    const  semiperimetro = (base + ladoA + ladoB) / 2;
  
    // Calculamos el área del triángulo usando la fórmula de Herón
    const  area = Math.sqrt(semiperimetro * (semiperimetro - base) * (semiperimetro - ladoA) * (semiperimetro - ladoB));
  
    // Calculamos la altura dividiendo el área por la longitud de la base
    const  altura = (2 * area) / base;
  
    return altura;
  }
  
  // Ejemplo de uso
  const base = 5;
  const ladoA = 7;
  const  ladoB = 9;
  
  const  altura = calcularAlturaTriangulo(base, ladoA, ladoB);
  console.log("La altura del triángulo es: " + altura);
  

console.groupEnd('trianguloEscaleno');

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
})

//calcular area de un circulo
console.group('circle')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;//  **2 es ala potencia **3 es al cubo

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
});

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio,2);

return {
    circunferencia: diametro * Math.PI,
    area: radioAlCuadrado * Math.PI//.tofixed le decimos que tantos decimales nos aparecen 3ejemplo
}
}


console.groupEnd('circle')