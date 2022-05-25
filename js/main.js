// //mensaje de alerta
// alert("Hola soy un mensaje");

// //Confirmación
// confirm("¿Estás de acuerdo?")

// //Pregunta
// prompt("¿Cuál es tu nombre?")
// let chilaquiles = confirm("Te gustan los chilaquiles?");
// let mensaje = (chilaquiles)? "Felicidades!!": "deberias de probarlos";
// alert(mensaje);


// let enchiladas = prompt("¿Qué Enchiladas te gustan?", "Verdes, rojas, mole, potosinas");
// switch (enchiladas) {
//     case "verdes":
//         alert ("felicidades!!");
//         break;
//     case "rojas":
//         alert ("Rojas están deliciosas!!");
//         break;
//     case "mole":
//         alert ("Mole!!");
//         break;
//     case "potosinas":
//         alert ("Son deliciosas!!");
//         break;
    

//     default:
//         alert("Deberías de probarlas");
//         break;
// }

// -------Operadores de comparación--------

// Solicitar 3 numeros entre 1 y 100, y definir cual es el mayor

// let n1 = rangoMayor();
// let n2 = prompt("Dame el segundo número");
//     if(1>n1<100){
//         alert("número aceptado");
//     }else{
//         alert("Ese no es un número válido");
//     }
// let n3 = prompt("Dame el tercer número");
//     if(1>n1<100){
//         alert("número aceptado");
//     }else{
//         alert("Ese no es un número válido");
//     }

// if (n1>n2){
//     if (n1>n3){
//         alert("El mayor es "+n1);
//     }else{
//         alert("El mayor es "+n3);
//     }
// }else{
//     if (n2>n3){
//         alert("El mayor es "+n2);
//     }else{
//         alert("El mayor es "+n3);
//     }
// }

// //Solicitar 3 números u definir cual es el menor
// let n4 = prompt("Dame el primero número");
//     if(1>n1<100){
//         alert("número aceptado");
//     }else{
//         alert("Ese no es un número válido");
//     }
// let n5 = prompt("Dame el segundo número");
//     if(1>n1<100){
//         alert("número aceptado");
//     }else{
//         alert("Ese no es un número válido");
//     }
// let n6 = prompt("Dame el tercer número");
//     if(1>n1<100){
//         alert("número aceptado");
//     }else{
//         alert("Ese no es un número válido");
//     }

// if (n4<n5){
//     if (n4<n6){
//         alert("El menor es "+n4);
//     }else{
//         alert("El menor es "+n6);
//     }
// }else{
//     if (n5<n6){
//         alert("El menor es "+n5);
//     }else{
//         alert("El menor es "+n6);
//     }
// }

// function rangoMayor(a=prompt("Dame el primero número")){
    
//     if(1>a<100){
//         return a;
//     }else{
//         alert("El número debe ser entre 1 y 100")
//         return 0;
//     }
// }

// function rangoMenor(a){
//     if(1>a<100){
//         return a;
//     }else{
//         alert("El número debe ser entre 1 y 100")
//         return 100;
//     }
// }



let n1=parseFloat (comprobarRango());
console.log(n1);
let n2=parseFloat (comprobarRango());
console.log(n2);
let n3=parseFloat (comprobarRango());
console.log(n3);
comprobarMayor(n1,n2,n3);
comprobarMenor(n1,n2,n3);

function comprobarRango(a=prompt("Dame el valor del 1 al 100")){
    if (a>=1 && a<=100){
        return a;
    }else{
        alert("El número debe ser un valor entre 1 y 100");
       return 0
    }
}

function comprobarMayor(a,b,c){
    if(a>b){
        if (a>c){
            console.log("el mayor es " + a);
        }else{
            console.log("el mayor es " + c);
        }
    }else{
        if(b>c){
            console.log("el mayor es " + b)
        }else{
            console.log("el mayor es " + c);
        }
    }
}

function comprobarMenor(a,b,c){
    if(a<b){
        if (a<c){
            console.log("el menor es " + a);
        }else{
            console.log("el menor es " + c);
        }
    }else{
        if(b<c){
            console.log("el menor es " + b)
        }else{
            console.log("el menor es " + c);
        }
    }
}

//Solicitar un entero entre 100 y 200 y determinar si es múltiplo de 3


// let problema4= comprobarRangoEntreCienDoscientos();
// console.log(problema4);
// multiploTres(problema4);

// function comprobarRangoEntreCienDoscientos(a=parseFloat (prompt("Dame el valor del 100 al 200 que sea entero"))){
//     if(Number.isInteger(a)){
//         if (a>=100 && a<=200){
//             return a;
//         }else{
//             alert("Debe ser entero");
//            return 0
//         }
//     }
    
// }
// function multiploTres(a){
//     if((parseInt(a)%3)==0){
//         console.log("el valor" + " es múltiplo de 3");
        
//     }else{
//         console.log("No es múltiplo de 3")
//         console.log(parseInt(a)%3);
//     }

// }



// Uno es la suma de los otros 2

// let a = parseFloat(prompt("Dame el valor 1"));
// let b = parseFloat(prompt("Dame el valor 2"));
// let c = parseFloat(prompt("Dame el valor 3"));

// console.log(a);
// console.log(b);
// console.log(c);
// comprobacionSuma(a,b,c);

// function comprobacionSuma(a,b,c){
//     if (a==(b+c)){
//         console.log(a+" es la suma de " + b + " + " + c);
//     }
//     if (b==(a+c)){
//         console.log(b+" es la suma de " + a + " + " + c);
//     }
//     if (c==(b+a)){
//         console.log(c+" es la suma de " + b + " + " + a);
//     }else{
//         console.log("Ninguno es la suma del otro");
//     }
// }


//determinar si es par o impar


// let a= parseFloat(prompt("Dame el valor"));
// esPar(a);

// function esPar(a){
//     if (a%2==0){
//         console.log("El número es par")
//     }else{
//         console.log("El número es impar");
//     }

// }