
const salarios = [
    {
        nombre: "Juan",
        salario: 1000
    },
    {
        nombre: "Pedro",
        salario: 7000
    },
    {
        nombre: "Ana",
        salario: 2000
    },
    {
        nombre: "Maria",
        salario: 4000
    },
    {
        nombre: "Jorge",
        salario: 8000
    },
    {
        nombre: "Luis",
        salario: 6000
    },
    {
        nombre: "Carlos",
        salario: 5000
    }
];



function updateList() {

    const newNombre = document.getElementById("InputNombre").value;
    const newSalario = document.getElementById("InputSalario").value;


    const newPersona = {
        nombre: newNombre,
        salario: Number(newSalario)
    };
    
    salarios.push(newPersona);
    console.log(salarios);


}


