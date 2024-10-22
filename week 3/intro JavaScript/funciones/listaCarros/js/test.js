/*function escmul(num){

    for(let i = 1;i <= num ; i++){
    let resultado = num * i;
    }

    console.log(i);
   // return resultado
}

multi = prompt("ingrese valor")
escmul(multi)


function escdiv(resultado){


    return valor
}

valor = prompt("Ingrese un valor")
resultado = escmul(valor)
valor2 = escdiv(resultado)

if (resultado == valor){

}*/
function generarFibonacci(n) {
    let secuencia = [0, 1]; // Los dos primeros números de Fibonacci
  
    for (let i = 2; i < n; i++) {
      secuencia.push(secuencia[i - 1] + secuencia[i - 2]); // Suma de los dos números anteriores
    }
  
    return secuencia;
  }
  
  // Llamada a la función
  let fibonacci = generarFibonacci(10); // Genera los primeros 10 números de Fibonacci
  console.log(fibonacci);