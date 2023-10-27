// Condicionales son el if (si), if else y el switch

// let numero1 =101;
// let numero2 =20;

// if (numero1 > numero2) {
//     console.log('El número : '+ numero1 + ' es mayor que el número '+numero2);
// } else {
//     console.log('El número : '+ numero2 + ' es mayor que el número '+numero1);
// }

// Pedir la edad del usuario, si es mayor de edad siempre y cuando te de un valor mayor a cero

// let edad = prompt('Dame tu edad');

// if (edad > 0) {
//     if (edad >=18) {
//         document.write('Eres de mayor de edad');
//     } else {
//         document.write('Eres menor de edad');-4
//     }
// } else {
//     document.write('Edad no válida');
// }

// 

// let dia = prompt('Dame el día de la semana').toLowerCase();

// switch (dia) {
//     case 'lunes':
//         console.log('El día que seleccionaste es lunes');
//         break;
//     case 'martes':
//         console.log('El día que seleccionaste es martes');
//         break;
//     case 'miércoles':
//         console.log('El día que seleccionaste es miércoles');
//         break;
//     case 'jueves':
//         console.log('El día que seleccionaste es jueves');
//         break;
//     case 'viernes':
//         console.log('El día que seleccionaste es viernes');
//         break;
//     case 'sábado':
//         console.log('El día que seleccionaste es sábado');
//         break;
//     case 'domingo':
//         console.log('El día que seleccionaste es domingo');
//         break;
//     default:
//         console.log('Este no es un día de la semana.');
//         break;
// }

// Operador Ternario: Solo tiene dos respuestas (Si y No) signo de ?

// let numero1 = 25;
// let numero2 = 20;

//                 // condicion ? true : false;

// let valor = (numero1 > numero2) ? 'El número1 es mayor' : 'El número2 es mayor';

// console.log(valor);



// Pedir dos numeros y que el programa nos diga cual es el mayor, cual es el menor y si son iguales.

let numero1 = prompt('Ingrese el primer número:');
let numero2 = prompt('Ingrese el segundo número:');

if (numero1 > numero2) {
    console.log('El número '+numero1+' es mayor que el número '+numero2)
} else if (numero1 < numero2) {
    console.log('El número: '+numero2+' es mayor que el número '+numero1)
} else {
    console.log('Ambos números son iguales');
}


// Pedir un número y me diga si es par o impar en consola o en el número MOD 2 o un número % 2 = Residuo

// let numero = prompt('Ingrese un número:');
// if (numero%2 == 0) {
//     console.log('El número es par');
// } else {
//     console.log('El número es impar');
// }


// Pedir dos numeros enteros y devolver el cociente o sea el resultado de dividir el numero 1 entre el 2, 
// pero si uno de los números es 0 no hacer nada y mandar mensaje de Error

// let numero1 = parseFloat(prompt('Ingrese el primer número:'));
// let numero2 = parseFloat(prompt('Ingrese el segundo número:'));

// if (Number.isInteger(numero1) && Number.isInteger(numero2)) {
//     if (numero1 != 0 && numero2 != 0) {
//         let resultado = numero1 / numero2;
//         console.log('El resultado de la división es: '+resultado);
//     } else {
//         console.log('Error');
//     }
// } else {
//     console.log('Uno o ambos números tienen decimales.');
// }


// Programa que pida dos números y pregunte cuál operación quiere hacer con los números, sumar, restar, multiplicar o dividir.

// let numero1 = parseFloat(prompt('Ingrese el primer número:'));
// let numero2 = parseFloat(prompt('Ingrese el segundo número:'));

// let operacion = prompt('Escriba la operación a realizar (suma, resta, multiplicación o división)')

// switch (operacion) {
//     case 'suma':
//         let resultadoSuma = numero1 + numero2;
//         console.log(`El resultado de la suma de ${numero1} más ${numero2} es igual a: ${resultadoSuma}`);
//         break;
//     case 'resta':
//         let resultadoResta = numero1 - numero2;
//         console.log(`El resultado de la resta de ${numero1} menos ${numero2} es igual a: ${resultadoResta}`);
//         break;
//     case 'multiplicación':
//         let resultadoMultiplicacion = numero1 * numero2;
//         console.log(`El resultado de la multiplicación de ${numero1} por ${numero2} es igual a: ${resultadoMultiplicacion}`);
//         break;
//     case 'división':
//         let resultadoDivision = numero1 / numero2;
//         console.log(`El resultado de la división de ${numero1} entre ${numero2} es igual a: ${resultadoDivision}`);
//         break;
//     default:
//         console.log('Por favor escriba una operación válida.')
//         break;
// }

