const carrito = JSON.parse(localStorage.getItem("productos"))  ||  []
let cantidadCarrito = JSON.parse(localStorage.getItem("cantidadProductos"))  ||  0
// Declaro un objeto para los productos
function Pruductos(nombre, categoria, cantidad){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.categoria = categoria;
}


window.onload = () => {
    // Busco el boton de agregar de los filamentos
    const abs = document.getElementById("abs")
    const hips = document.getElementById("hips")
    const pet_g = document.getElementById("pet_g")
    const nylon6 = document.getElementById("nylon6")
    const nylon12 = document.getElementById("nylon12")
    const pla = document.getElementById("pla")
    const pla_boutique = document.getElementById("pla_boutique")
    const pla_nt = document.getElementById("pla_nt")
    const pla_plus = document.getElementById("pla_plus")
    const pva = document.getElementById("pva")
    const simpliflex = document.getElementById("simpliflex")

    // Pongo a la escucha todos los botones
    abs.addEventListener("click", agregarCarrito, false)
    hips.addEventListener("click", agregarCarrito, false)
    pet_g.addEventListener("click", agregarCarrito, false)
    nylon6.addEventListener("click", agregarCarrito, false)
    nylon12.addEventListener("click", agregarCarrito, false)
    pla.addEventListener("click", agregarCarrito, false)
    pla_boutique.addEventListener("click", agregarCarrito, false)
    pla_nt.addEventListener("click", agregarCarrito, false)
    pla_plus.addEventListener("click", agregarCarrito, false)
    pva.addEventListener("click", agregarCarrito, false)
    simpliflex.addEventListener("click", agregarCarrito, false)
}

function agregarCarrito(){
    if(this.id == "abs"){
        // Controlo si hay algun elemento en el carrito
        if(carrito.length !=0){
            verificarCarrito("abs")
        }
        else{
            // Creo un objeto y lo agrego al arrey del carro
            carrito.push(new Pruductos("abs", "filamento", 1))    
        }
    }
    else if(this.id == "hips"){
        if(carrito.length !=0){
            verificarCarrito("hips")
        }
        else{
            carrito.push(new Pruductos("hips", "filamento", 1))    
        }
    }
    else if(this.id == "pet_g"){
        if(carrito.length !=0){
            verificarCarrito("pet_g")
        }
        else{
            carrito.push(new Pruductos("pet_g", "filamento", 1))    
        }
    }
    else if(this.id == "nylon6"){
        if(carrito.length !=0){
            verificarCarrito("nylon6")
        }
        else{
            carrito.push(new Pruductos("nylon6", "filamento", 1))    
        }
    }
    else if(this.id == "nylon12"){
        if(carrito.length !=0){
            verificarCarrito("nylon12")
        }
        else{
            carrito.push(new Pruductos("nylon12", "filamento", 1))    
        }
    }
    else if(this.id == "pla"){
        if(carrito.length !=0){
            verificarCarrito("pla")
        }
        else{
            carrito.push(new Pruductos("pla", "filamento", 1))    
        }
    }
    else if(this.id == "pla_boutique"){
        if(carrito.length !=0){
            verificarCarrito("pla_boutique")
        }
        else{
            carrito.push(new Pruductos("pla_boutique", "filamento", 1))    
        }
    }
    else if(this.id == "pla_nt"){
        if(carrito.length !=0){
            verificarCarrito("pla_nt")
        }
        else{
            carrito.push(new Pruductos("pla_nt", "filamento", 1))    
        }
    }
    else if(this.id == "pla_plus"){
        if(carrito.length !=0){
            verificarCarrito("pla_plus")
        }
        else{
            carrito.push(new Pruductos("pla_plus", "filamento", 1))    
        }
    }
    else if(this.id == "pva"){
        if(carrito.length !=0){
            verificarCarrito("pva")
        }
        else{
            carrito.push(new Pruductos("pva", "filamento", 1))    
        }
    }
    else if(this.id == "simpliflex"){
        if(carrito.length !=0){
            verificarCarrito("simpliflex")
        }
        else{
            carrito.push(new Pruductos("simpliflex", "filamento", 1))    
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
        carrito.push(new Pruductos(nombre, "filamento", 1))    
    }
}

