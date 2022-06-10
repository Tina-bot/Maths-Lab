function calcularMediana() {
    const valor = document.getElementById("InputNumber2").value;
    const listaSplit = valor.split(",");
    const listaSort = listaSplit.sort();

    if (listaSort.length % 2 == 0) {
        const sumaList = listaSort.reduce(
            function (valorAcumulado, nuevoElemento) {
                return valorAcumulado + Number(nuevoElemento);
            }, 0);
        console.log("sumalist al salir:" + sumaList);
        const promedio = sumaList / listaSort.length;
        document.getElementById("resultMediana").innerHTML = promedio;
    } else {
        const mediana = listaSort[Math.floor(listaSort.length / 2)];
        document.getElementById("resultMediana").innerHTML = mediana;
    }
}