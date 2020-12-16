// -- Generics 
// -- Vimos diversas formas até agora de como realizar a tipagem como Typescript, até mesmo em casos mais complexos como funções e objetos
// mas e se, por exemplo, não soubermos, durante o desenvolvimento, qual tipo o argumento e o retorno de uma função devem receber? 
// Para sso utilizamos os Generics. Exemplo:

const mibr: Array<string> = ["Fallen", "Fer", "Taco", "Kng", "Trk"];

// Nesse simples exemplo utilizamos um generic do próprio Typescript, o Array, 
// em que o tipo informado dentro de <> representa o tipo dos valores do array. É o equivalente de string[]. Agora vamos a um exemplo mais complexo:


function example<T>(arg: T): T {
	return arg;
}

// Nesse caso, declaramos uma função **example** que recebe um argumento do tipo `T` e retorna um valor do tipo `T`. Então:

const value = example<string>("rocketseat");
console.log(value) // Irá printar o valor "rocketseat"
