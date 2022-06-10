function precioConDescuento(precio, descuento) {
    return precio - (precio * (descuento / 100));
}

final = precioConDescuento(200, 15);

console.log({
    "Precio + descuento": final,
    "Precio sin descuento": 200,
    "Descuento": 15
});

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice").value;
    const inputDiscount = document.getElementById("InputDiscount").value;
    document.getElementById("result").innerHTML = `$${precioConDescuento(inputPrice, inputDiscount)}`;
}