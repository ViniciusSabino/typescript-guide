// ------------- Básico

//---- boolean 

const isThisAGoodDoc: boolean = true;

//---- number

const fightingPower: number = 9001;

//---- string

const rocketseat: string = 'Are you ready for launch?';

// any: aceita qualquer valor. Utilizado quando não queremos fazer a checagem de tipo;
// void: é basicamente o oposto de any, utilizado principalmente para demarcar quando não queremos retornar valores de uma função (mesmo assim, ao utilizar void a função irá retornar undefined,  explicitamente ou implicitamente)
// null: aceita valores do tipo null
// undefined: aceita valores do tipo undefined
// never: não aceita nenhum tipo, utilizada principalmente para funções que nunca devem retornar algo (funções sem retorno retornam undefined, por isso usamos void) como loops infinitos ou excessoes)

// ----------- Avançado

//----- Arrays 

const educationTeam: string[] = ['Vinne', 'Dani', 'Doge'];
const educationTeam2: Array<string> = ['Vinne', 'Dani', 'Doge'];

// -----Tuples

/**
 * Utilizado quando queremos trabalhar com arrays que sabemos exatamente quantos elementos ele terá, 
 * mas que não serão necessiariamente do mesmo tipo. Exemplo: 
 */

const eitaGiovanna: [string, boolean] = ['O forninho caiu?', true];

//------ Enums: Utilizado quando queremos dar um nome mais amiguavel a um conjunto de valores. Exemplo:

enum Techs {
  React, 
  Angular, 
  Vue
}

enum Status {
  waiting = 'WAITING',
  approved = 'APPROVED'
}

const theBest: Techs = Techs.React
console.log(theBest) // Irá printar o valor de 0 (indice)

const teste: Status = Status.approved;

console.log(Status.approved) // APPROVED
console.log(teste) // APPROVED

//---- Objetos: Apesar de ser possivel descrever um objeto utilizando sisplemente o objet, não é recomendado pois dessa forma não conseguimos definir os campos, a sua forma (shape)
