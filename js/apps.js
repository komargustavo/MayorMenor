// Permitir al usuario ingresar 3 números dentro de la plataforma. 
// Mostrar (por consola) una vez terminado el proceso cual es el mayor y cual el menor.

// variables
const numero_1 = document.querySelector('#numero_1');
const numero_2 = document.querySelector('#numero_2');
const numero_3 = document.querySelector('#numero_3');
const m_mayor = document.querySelector('#hmayor');
const m_menor = document.querySelector('#hmenor');


// Funciones
function carga() {
    numero1 = prompt('Ingrese el primer número a comparar: ');
    numero2 = prompt('Ingrese el segundo número a comparar: ');
    numero3 = prompt('Ingrese el tercer número a comparar: ');
    var lista = [numero1, numero2, numero3];

    numero_1.innerHTML = (numero1);
    numero_2.innerHTML = (numero2);
    numero_3.innerHTML = (numero3);
    console.log(lista);
    // maximo = Math.max(numero1, numero2, numero3);
    // minimo = Math.min(numero1, numero2, numero3);

    minimo = 999999;
    maximo = 0;
    for (var i = 0, len = lista.length; i < len; i++) {
        console.log(len);
        if (minimo > lista[i]) {
            minimo = lista[i];
        }
    }

    for (var i = 0, len = lista.length; i < len; i++) {
        console.log(len);
        if (maximo < lista[i]) {
            maximo = lista[i];
        }
    }

    console.log(minimo);
    console.log(maximo);
    m_mayor.innerHTML = (`El número mayor es: ${maximo}`);
    m_menor.innerHTML = (`El número menor es: ${minimo}`);

}
