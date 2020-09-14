const carrito = JSON.parse(localStorage.getItem("productos"))  || []
let cantidadCarrito = JSON.parse(localStorage.getItem("cantidadProductos"))  ||  0
// Declaro un objeto para los productos
function Pruductos(nombre, categoria, cantidad){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.categoria = categoria;
}

// Esperamos a que la paginas se termine de cargar para ejecutar el codigo
window.onload = () =>{
    // Busco el boton de agregar de las impresoras 3D
    const botonMakerColor = document.getElementById("makerColor")
    const botonMakerBlack = document.getElementById("makerBlack")
    

    // Pongo a la escucha a todos los botones
    botonMakerColor.addEventListener("click", agregarCarrito, false)
    botonMakerBlack.addEventListener("click", agregarCarrito, false)
    


}

function agregarCarrito(){

    if(this.id == "makerBlack"){
        console.log("Se preciono makerBlack")
        // Controlo si hay algun elemento en el carrito
        if(carrito.length !=0){
            verificarCarrito("makerBlack")
        }
        else{
            // Creo un objeto y lo agrego al arrey del carro
            carrito.push(new Pruductos("makerBlack", "impresora", 1))    
        }
    }
    else if(this.id == "makerColor"){
        console.log("Se preciono makerColor")
        // Controlo si hay algun elemento en el carrito
        if(carrito.length !=0){
            verificarCarrito("makerColor")
        }
        else{
            // Creo un objeto y lo agrego al arrey del carro
            carrito.push(new Pruductos("makerColor", "impresora", 1))    
        }
    }
    localStorage.setItem("productos", JSON.stringify(carrito))
    cantidadCarrito += 1
    localStorage.setItem("cantidadProductos", JSON.stringify(cantidadCarrito))
}

function verificarCarrito(nombre){
    control = false
    for (let i=0; i < carrito.length; i++){
        if(carrito[i].nombre == nombre){
          carrito[i].cantidad += 1
          control = true
        }
    }
    // Si no encuentro el objeto en el carrito entonces...
    if(control == false){
        // Creo un objeto y lo agrego al arrey del carro
        carrito.push(new Pruductos(nombre, "impresora", 1))    
    }
}


