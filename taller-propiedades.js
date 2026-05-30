// EJERCICIO 1: Libro (Objeto básico + if)

function Libro(titulo, autor) {
    this.titulo = titulo;
    this.titulo = autor;
    this.prestado = false;
    this.prestar = function () {
        if (this.prestado === false) {
            this.prestado = true;
            console.log("Libro prestado");
        }else {
            console.log ("Libro no disponible: el libro ya está prestado.")
    
        }
        }
    }

let libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez");

libro1.prestar();
libro1.prestar();


// EJERCICIO 2: Lista de Compras (Array + for)

function listaCompras(){
    this.productos = [];

    this.agregar = function(producto) {
        this.productos.push(producto);
    };

    this.mostrar = function() {
        for (let i = 0; i < this.productos.length; i++) {
            console.log(`${i + 1}. ${this.productos[i]}`);

        }
    }
}

let lista = new listaCompras();

lista.agregar("Leche");
lista.agregar("Pan");
lista.agregar("Huevos");

lista.mostrar();

//EJERCICIO 3: Reproductor de Música


function Reproductor() {
    this.estado = "detenido";

    this.play = function () {
        if(this.estado === "detenido" || this.estado === "pausado") {
            this.estado = "reproduciendo";
            console.log("Reproduciendo musica...");
        }else {
            console.log("Ya se esta reproduciendo musica");
        }        
    };

    this.pausar = function () {
        if (this.estado === "reproduciendo") {
            this.estado = "pausado";
            console.log("Musica pausada");
        } else {
            console.log("No hay musica reproduciendose");
        }
    };

    this.detener = function () {
        this.estado = "detenido";
        console.log("Musica detenida");
    };
}

let musica = new Reproductor();

musica.play();
musica.play();
musica.pausar();
musica.play();
musica.detener();

// EJERCICIO 4: Carrito de Compras con Descuentos 

function Carrito() {
    this.productos = [];
    this.total = 0;

    this.agregarProducto = function (nombre,precio) {
        this.productos.push(nombre);
        this.total += precio;
    };

    this.calcularDescuento = function () {

        if (this.total > 100){
            let totalDescuento = this.total - (this.total * 0.10);
            console.log("Descuento del 10%");
            console.log("Total a pagar: $" + totalDescuento);

        } else if (this.total > 50 && this.total <= 100){
            let totalDescuento = this.total - (this.total * 0.05);
            console.log("Descuento del 5%");
            console.log("Total a pagar: $" + totalDescuento);

        }else {
            console.log("No aplica descuento");
            console.log("Total a pagar: $" + this.total);
        }

    };

}

let carrito = new Carrito();

carrito.agregarProducto("Camisa",10);
carrito.agregarProducto("Pantalon",40);
carrito.agregarProducto("Zapatos",55);
carrito.calcularDescuento();

