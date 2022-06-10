/* Cuadrado */

console.group("Cuadrados");


function perimetroCuadrado(lado) {

    return lado * 4;
}

function areaCuadrado(lado) {


    return lado * lado;

}

console.groupEnd();

/* Triangulo */
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {

    return Number(lado1 + lado2 + base);
}


function areaTriangulo(base, altura) {

    return Number(base * altura / 2);

}

console.groupEnd();

/* Circulo */
console.group("Circulos");

/* Radio */


/* Diametro */
function diametroCirculo(radio) {

    return radio * 2;
}

/* PI */
const pi = Math.PI;

/* Circunferencia */
function circuferenciaCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * pi;
}

/* Area */
function areaCirculo(radio) {

    return (radio * radio) * pi;
}


console.groupEnd();

/* HTML */

function calcularPerimetro() {
    const valor = document.getElementById("inputCuadrado").value;
    document.getElementById("resultadoCuadrado").innerHTML = perimetroCuadrado(valor);
}

function calcularArea() {
    const valor = document.getElementById("inputCuadrado").value;
    document.getElementById("resultadoCuadrado").innerHTML = areaCuadrado(valor);
}


function calcularPerimetroTriangulo() {
    const base = Number(document.getElementById("inputTrianguloBase").value);
    const lado1 = Number(document.getElementById("inputTrianguloLado1").value);
    const lado2 = Number(document.getElementById("inputTrianguloLado2").value);

    if (lado1 == lado2 && base != lado1) {
        console.log("Isoceles")
    }
    else if (lado1 != lado2 && base == lado1) {
        console.log("Escaleno")
    } else if (lado1 != lado2 && base == lado2) {
        console.log("Escaleno")
    } else if (lado1 == lado2 && base == lado1) {
        console.log("Equilatero")
    }

    document.getElementById("resultadoTriangulo").innerHTML = perimetroTriangulo(lado1, lado2, base);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("inputTrianguloBase").value;
    const altura = document.getElementById("inputTrianguloAltura").value;
    document.getElementById("resultadoTriangulo").innerHTML = areaTriangulo(base, altura);
}

function calcularDiametroCirculo() {
    const diametro = document.getElementById("inputCirculoDiametro").value;
    document.getElementById("inputCirculoDiametro").innerHTML = diametroCirculo(diametro);
}

function calcularCircunferenciaCirculo() {
    const circuferencia = document.getElementById("inputCirculoCircunferencia").value;
    document.getElementById("resultadoCirculo").innerHTML = circuferenciaCirculo(circuferencia);

}

function calcularRadioCirculo() {
    const radio = document.getElementById("inputCirculoRadio").value;

    document.getElementById("resultadoCirculo").innerHTML = areaCirculo(radio);
}


function showResult() {
    const result = document.getElementById("result");
}
