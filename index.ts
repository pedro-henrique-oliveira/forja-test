export function soma(number1: number, number2: number) {
    if(typeof number1 !== "number" || typeof number2 !== "number"){
        return "Me envie números!";
    }
    return number1 + number2;
}

export function fibonacci (quantity: number) {
  if(quantity < 0) return "Me envie um número positivo!";
  if(quantity  === 0) return [];
  if(quantity === 1) return [1];
  if(quantity > 50) return "me de um número menor ou igual a 50!";
  if(quantity % 1 ) return "Me envie um número inteiro!";


  const sequencia: number[] = [1, 1];

  while (sequencia.length < quantity) {
    const ultimo = sequencia[sequencia.length - 1];
    const penultimo = sequencia[sequencia.length - 2];

    sequencia.push(ultimo! + penultimo!);
  }

  return sequencia;
}

export function media (a: number, b: number) {
  return (a + b) / 2;
}

export function ehPar(number: number) {
  if(number % 2 === 0){
    return "É par!";
  } 
  return "É impar!";
}

export function maior(numero1: number, numero2: number) {
    if(numero1 > numero2){
      return numero1;
    }
    return numero2;
}

export function menor(numero1: number, numero2: number) {
    if(numero1 < numero2){
      return numero2;
    }
    return numero1;
}

export function aprovado(nota: number) {
  if(nota >= 6 && nota <= 10){
    return "Aprovado!";
  }
  return "Reprovado!";
}

export function categoriaIdade(idade: number) {
    if(idade < 2){
      return "Bebê!";
    }
    if(idade < 12){
      return "criança";
    }
    if(idade < 18){
      return "adolescente";
    }
    if(idade < 60){
        return "adulto";
    }
    if(idade < 110){
        return "velho";
    }
    if(idade >110){
        return "defunto";
    }
    if(idade < 0){
      return "Me dê uma idade positiva"
    }
    if(idade % 1 !== 0){
      return "Me dê uma idade inteira"
    }
}

export function contarCaracteres(texto: string, letra: string) {
    if(letra.length > 1){
      return "Me dê uma letra!";
    }
    let contador = 0;
    for(let i = 0; i < texto.length; i++){
      if(texto[i] === letra){
        contador++;
      }
    }
  
    console.log(contador);
    return contador;
}


export function inverter(texto: string) {
    if(typeof texto !== "string"){
        return "Me dê uma string!";
    }
    let textoInverso = "";
    for(let i = texto.length - 1; i >= 0; i--){
        textoInverso += texto[i];
    }
    return textoInverso;
}

export function contarVogais(texto: string) {
    if(typeof texto !== "string"){
        return "Me dê uma string!";
    }
    let contador = 0;
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === "a" || texto[i] === "e" || texto[i] === "i" || texto[i] === "o" || texto[i] === "u"){
            contador++;
        }
    }
    console.log(contador);
    return contador;
}

export function somatorio(numeros: number[]) {
    if(typeof numeros !== "object" || numeros.length === 0){
        return "Me dê um array!";
    }
    let soma = 0;
    for(let i = 0; i < numeros.length; i++){
        soma += i;
    }
    console.log(soma);
    return soma;
}

export function maiorDaLista(numeros: number[]) {
  if (numeros.length === 0) return "Me dê números";
  return Math.max(...numeros);
}

export function mediaDaLista(numeros: number[]): number {
  return numeros.reduce((acc, n) => acc + n, 0);
}

export function contagemRegressiva(quantidade: number) {
  if (!Number.isInteger(quantidade)) return "Me dê um número inteiro";
  if (quantidade < 0) return "Me dê um número positivo";
  const result = [];
  for (let i = quantidade; i >= 0; i--) result.push(i);
  return result;
}

export function fatorial(numero: number) {
  if (!Number.isInteger(numero)) return "Me dê um número inteiro";
  if (numero < 0) return "Me dê um número maior ou igual a 0";
  if (numero > 170) return "Me dê um número menor ou igual a 170";
  if (numero === 0 || numero === 1) return 1;
  let result = 1;
  for (let i = 2; i <= numero; i++) result *= i;
  return result;
}

export function ehPalindromo(texto: string) {
  if (texto.length === 0) return "Me dê uma palavra para verificar";
  const normalizado = texto.toLowerCase().replace(/\s/g, "");
  return normalizado === normalizado.split("").reverse().join("");
}

export function ehPrimo(numero: number) {
  if (!Number.isInteger(numero)) return "Me dê um número inteiro";
  if (numero < 0) return "Me dê um número maior ou igual a 0";
  if (numero < 2) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

export function removerDuplicados(texto: string) {
  const semEspacos = texto.replace(/\s/g, "");
  if (semEspacos.length === 0) return "Me dê caracteres";
  return semEspacos.split("").filter((c, i, arr) => arr.indexOf(c) === i).join("");
}

export function ordemAlfabetica(texto: string) {
  const semEspacos = texto.replace(/\s/g, "").toLowerCase();
  if (semEspacos.length === 0) return "Me dê caracteres";
  return semEspacos.split("").sort().join("");
}

export function contarPalavras(texto: string) {
  const palavras = texto.trim().split(/\s+/).filter((p) => p.length > 0);
  return palavras.length;
}