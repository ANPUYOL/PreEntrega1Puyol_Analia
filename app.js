const SI = 'si';
const NO = 'no';
let nombreUsuario;
let nombreProducto;
let precio;
let total = 0;
let cantidad;
let continuar;
let ticket = 'nombre     Marca     precio      cantidad        subtotal \n';
 



alert('Bienvenido a Todo para tu Cobaya!!')

function cargaProducto() {
    nombreProducto = prompt('Ingrese nombre del producto: ');
    precio = +prompt('Ingrese precio: ');
    precio = validacionPrecio(precio);
    cantidad = +prompt('Ingrese cantidad; ');
}

function generarDetalle(nombreProducto, precio, cantidad) {
  let detalle = `${nombreProducto}      ${Marca}        ${precio}      ${cantidad}     ${precio*cantidad}\n`;
  ticket = ticket + detalle;
}

function validacionPrecio(price){
    while (price < 0) {
        price = prompt('precio incorrecto, vuelva a ingresarlo: ');
        
    }
    return price;
}

nombreUsuario = prompt('Bienvenido a tu carrito de compras! \n Ingrese su nombre');
do {
    cargaProducto();
    continuar = prompt('Desea ingresar otro producto? si/no');
    while (continuar !== SI && continuar !== NO) {
        continuar = prompt('respuesta inavlida, por favor vuelva a ingresar si desea continuar o no: ');
  }
  generarDetalle(nombreProducto, precio, cantidad);
  total = total + precio * cantidad; 
 
}while(continuar == SI);

ticket = ticket + `total: ${total}`;
alert(ticket);
