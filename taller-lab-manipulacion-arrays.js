

//EJERCICIO 1: CALCULADORA DE PROPINAS

function calcularPropina(total, porcentaje){
    let propina = total * (porcentaje / 100);
    let totalFinal = total + propina;
    return totalFinal;

}
let resultado = calcularPropina(1500000,10)
console.log("Total a pagar: ", resultado);

//EJERCICIO 2: VALIDAR CONTRASEÑA

function validarContrasena(contrasena) {
    let tieneNumero = false;
    let tieneMayuscula = false; 
    
    for (let i = 0; i < contrasena.length; i++) {

        let caracter = contrasena[i];

        if (caracter >= '0' && caracter <= '9') {
            tieneNumero = true;
        }

        if (caracter >= 'A' && caracter <= 'Z'){
            tieneMayuscula = true;
        }
    }
if(
    contrasena.length >= 8 && tieneNumero && tieneMayuscula
) {
    return true;
} else {
    return false;
}
}

console.log(validarContrasena("hola123")); // false
console.log(validarContrasena("Hola1234")); //true

//EJERCICIO 3: BUSCAR PRODUCTO EN INVENTARIO


const inventario = [
    { nombre: "Camisa", precio: 80000 },
    { nombre: "Zapatos", precio: 170000 }
];

function buscarProducto(nombre, inventario){
    
    for (let i = 0; i < inventario.length; i++){
        if (inventario[i].nombre === nombre) {
            return inventario[i];
        }
    }
    return null;
}
console.log(buscarProducto("Zapatos", inventario));
console.log(buscarProducto("Pantalon", inventario));

// EJERCICIO 4: CALCULAR PROMEDIO DE NOTAS

const prompt = require("prompt-sync")();

function calcularPromedio(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++){
        suma = suma + Number(notas[i]);
    }

    let promedio = suma / notas.length;

    return promedio.toFixed(2);

}

let notasUsuario = prompt("Ingrese las notas separadas por comas:");

let notas = notasUsuario.split(",");

console.log("Promedio:", calcularPromedio(notas));



// EJERCICIO 5: FILTRAR  USUARIOS POR EDAD


const usuarios = [
    {nombre: "Jenny", edad: 39 },
    {nombre: "Eduardo", edad: 34 },
    {nombre: "Giovanny", edad: 37 },
    {nombre: "Valentina", edad: 18 },
    {nombre: "Yasmin", edad: 22}

]
function filtrarUsuarios(usuarios,edadMinima) {

    let encontrado = false;

        for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].edad >= edadMinima) {
            if(encontrado === false){
                console.log("Estos usuarios cumplen con la edad mínima:" );
                encontrado = true;
            }

                console.log(usuarios[i].nombre, "-", usuarios[i].edad);

            }
    } if (encontrado === false){
        console.log("No se encontraron usuarios con esa edad");
    }
}

let edadMinima = parseInt(prompt("Ingresa la edad minima: "));

filtrarUsuarios(usuarios, edadMinima);

// EJERCICIO 6: CONTADOR DE PALABRAS

function contarPalabras(texto) {
    let palabras = texto.split("");

    return palabras.length
}

let texto = prompt("Ingrese un texto: ")

console.log("Cantidad de palabra:", contarPalabras(texto));


// EJERCICIO 7: SIMULADOR DE CAJERO AUTOMATICO Simulador de Cajero Automático


console.log (`
    
     ¡BIENVENIDO A SU CAJERO!
     `);
function retirarDinero(saldo, monto) {

    if (monto <= saldo){
        let nuevoSaldo = saldo - monto;

        console.log("Retiro exitoso");
        console.log("Nuevo saldo:", nuevoSaldo);

    } else {
        console.log("Fondos insuficientes");
    }
}
let saldo = parseFloat(prompt("Ingrese su saldo actual: "));
let monto = parseFloat(prompt("Ingrese el monto a retirar: "));

retirarDinero(saldo, monto);

console.log("Gracias por utilizar nuestro cajero");

// EJERCICIO 8: CAMBIO DE MONEDA

console.log(`
    
    CONVERSOR DE MONEDAS

    `);

function convertirMoneda(monto1, monedaDestino) {

    let tasaUSD = 4000;
    let tasaEUR = 4500;

    if(monedaDestino === "USD") {
            
        let resultado = monto1 / tasaUSD;

        console.log("Equivale a: ", resultado.toFixed(2), "USD");
    }

    else if (monedaDestino === "EUR") {
        
        let resultado= monto1 / tasaEUR;

        console.log ("Equivale a: ", resultado.toFixed(2), "EUR");
        }

    else {
        console.log("Moneda no valida");
        }
    }

let monto1 = parseInt(prompt("Ingrese el monto en COP: "));
let monedaDestino = prompt("Ingrese la moneda (USD o EUR): ").toUpperCase();

convertirMoneda(monto1, monedaDestino);


