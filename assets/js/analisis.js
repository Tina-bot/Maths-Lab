function calcularSalario() {

    const salariosTotal = salarios.map(
        function (persona) {
            return persona.salario;
        }
    );

    console.log(salariosTotal);
    const sortedSueldos = salariosTotal.sort(
        function (a, b) {
            return a - b;
        }
    );

    //min y max
    const salarioMinimo = sortedSueldos[0];
    const salarioMaximo = sortedSueldos[sortedSueldos.length - 1];
    document.getElementById("salarioMinimo").innerHTML = salarioMinimo;
    document.getElementById("salarioMaximo").innerHTML = salarioMaximo;

    // promedio
    const promedio = salariosTotal.reduce(
        function (total, salario) {
            return total + salario;
        }
    ) / salariosTotal.length;

    document.getElementById("resultPromedio").innerHTML = Math.round(promedio);

    // moda
    const listaCount = {};

    for (let i = 0; i < sortedSueldos.length; i++) {
        if (listaCount[sortedSueldos[i]]) {
            listaCount[sortedSueldos[i]]++;
        } else {
            listaCount[sortedSueldos[i]] = 1;
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

    // mediana
    if (sortedSueldos.length % 2 === 0) {
        const arrayMidIndex = sortedSueldos.length / 2;
        const mediana = (sortedSueldos[arrayMidIndex] + sortedSueldos[arrayMidIndex - 1]) / 2;
        document.getElementById("resultMediana").innerHTML = mediana;
    }
    else {
        const arrayMidIndex = (sortedSueldos.length - 1) / 2;
        const mediana = sortedSueldos[arrayMidIndex];
        document.getElementById("resultMediana").innerHTML = mediana;
    }

    //suma total de salarios
    const sumaTotal = salariosTotal.reduce(
        function (total, salario) {
            return total + salario;
        }
    );

    document.getElementById("resultSumaTotal").innerHTML = sumaTotal;


    //mostrar lista de empleados
    const listaEmpleados = document.getElementById("listaEmpleados");
    listaEmpleados.innerHTML = "";
    const ul = document.createElement("ul");
    listaEmpleados.appendChild(ul);

    for (let i = 0; i < salarios.length; i++) {
        const persona = salarios[i];
        const li = document.createElement("li");
        li.innerHTML = `${persona.nombre} - ${persona.salario}`;
        ul.appendChild(li);
    }
}

calcularSalario();