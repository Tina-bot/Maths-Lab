function calcularModa() {

    const valor = document.getElementById("InputNumber3").value;
    const listaSplit = valor.split(",");

    const listaCount = {};

    for (let i = 0; i < listaSplit.length; i++) {
        if (listaCount[listaSplit[i]]) {
            listaCount[listaSplit[i]]++;
        } else {
            listaCount[listaSplit[i]] = 1;
        }
    }

    let moda = 0;
    let max = 0;

    for (let i in listaCount) {
        if (listaCount[i] > max) {
            max = listaCount[i];
            moda = i;
        }
    }

    document.getElementById("resultModa").innerHTML = moda;
}