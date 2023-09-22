const lista = [];
lista.push(new Producto("Mix de Pasturas", "Timothy", 4500));
lista.push(new Producto("Alfalfa", "Timothy", 3200));
lista.push(new Producto("Prochin", "Hands Rabbit", 1500));
lista.push(new Producto("Heno de Avena", "Hands Rabit", 800));

function mostrarProductos(mensaje,lista, total,mostrar) {
    const misProductos = lista.map((productos) =>  (`${productos.nombre} $${productos.precio}`));
    if(mostrar)
        alert(`${mensaje}:\n${misProductos.join("\n")}\nTotal: $${total}`)
    else
        alert(`${mensaje}:\n${misProductos.join("\n")}`)

}