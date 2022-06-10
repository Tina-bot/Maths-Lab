function porcent(list) {
    let suma = 0;
    list.forEach(function (num) {
        suma += num;
    })
    let promedio = suma / list.length;
    return promedio;
}

function calcularPromedio() {
    const valor = document.getElementById("InputNumber").value;
    const lista = valor.split(",");
    const sumaList = lista.reduce(
        function (valorAcumulado, nuevoElemento) {
            return valorAcumulado + Number(nuevoElemento);
        }, 0);
    console.log("sumalist al salir:" + sumaList);
    const promedio = sumaList / lista.length;
    document.getElementById("result").innerHTML = promedio;
}