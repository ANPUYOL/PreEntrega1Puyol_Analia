alert("Mi cobaya te da la bienvenida");
let continuar = prompt("Desea comprar algo").toLowerCase().trim();
const carrito = [];
let total;
let mostrar = false;


function confirmacion(continuar) {
    verificacion(continuar);
}

function verificacion(continuar) {
    while(continuar !="si" && continuar != "no") {
        continuar = prompt('ingrese "si" o "no" para continuar').toLowerCase().trim();
    }
    if (continuar == "si") {
        mostrarProductos("Productos para tu coby",lista,total,false);
        comprar(lista);
    }
    else if (continuar == "no" && carrito.length != 0){
        mostrar = true;
        mostrarProductos("Productos añadidos a tu carrito ",carrito, total,true); 
        alert("Muchas gracias por tu compra");
    }
    else{
        alert("Muchas gracias por tu compra");
    }
}

function comprar(lista) {
    let pedido = prompt("¿Que producto buscas?").toLowerCase().trim();
    let mensaje = ("Producto no disponible en este momento");
    const result = lista.find((ele) => ele.nombre == pedido);
    if (result != undefined  ) {
        carrito.push(new Producto(result.nombre, result.marca, result.precio));
        total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        alert("Tu producto se añadio al carrito");
        continuar = prompt("¿Te gustaria algun otro producto para tu cobaya?").toLowerCase().trim();
        verificacion(continuar);
    }
    else{
        alert ( mensaje);
        continuar = prompt("¿Le gustaria otro producto?").toLowerCase().trim();
        verificacion(continuar);
    }
}
confirmacion(continuar);