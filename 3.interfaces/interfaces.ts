//---- Interfaces: Lembra que falamos que representar um objeto como object não é legal? 
//É ai que as interfaces entram e nos ajudam (bastante). Exemplo:

interface EveryExampleInOne {
  str: string;
  num: number;
  bool: boolean;
  func(arg1: string): void;
  arr: string[]
}

//------ Optional Properties 
// Uma possibilidade interessante nas interfaces é definir uma propriedade como opcional. Exemplo:

interface Dob {
  name: string;
  owner?: string;
}

// Onde temos que o nome do cachorro é obrigatório, mas o nome do dono é opcional

// -------Dynamic Properties 
// Além disso, outro caso interessante é quando além das propriedades que declaramos, queremos deixar em aberto que novas propriedades de um certo tipo sejam adicionadas. Exemplo:

interface User {
  name: string;
  email: string;
  [propName: string]: string;
}

/**
 * Onde temos uma interface User na qual, além das 2 propriedades que definimos, 
 * deixamos em aberto a possibilidade de N novas propriedades de (propName) string 
 * cujo valor também é do tipo string. Poderiamos implementar algo do tipo
 */

 const doge: User = {
   name: 'Vinícius Rocha',
   email: "doge@rocketseat.com.br",
   nickname: 'Dogim',
   address: 'Dogeland'
 }


// ---- Readonly Properties 
// Além disso, podemos também definir que uma propriedade é apenas para leitura, pode atribuir um valor a ela apenas uma vez. 
//Segue o exemplo:

interface Avengers {
  readonly thanos: string 
}

let theEnd: Avengers = { thanos: "I'm inevitable" }
theEnd.thanos = "I'm not inevitable" // erro - Cannot assign to 'thanos' because it is a read-only property.ts(2540)

// --------- Implements 
// Utilizando conceitos já comuns em linguagens tipadas como C# e Java, 
// temos a possibilidade de reforçar que uma classe (ou uma função) atenda os critérios definidos
// em uma interface. 
// Exemplo:

interface BalanceInterface {
  increment(income: number): void;
  decrement(outcome: number): void;
}

class Balance implements BalanceInterface {
  private balance: number;

  constructor() {
    this.balance = 0;
  }

  increment(income: number): void {
    this.balance += income
  }
  decrement(outcome: number): void {
    this.balance -= outcome
  }
}

// Lembrando que ao utilizar o implements para que a interface force a classe a seguir os padrões impostos, só conseguimos referenciar o lado publico (public) da classe

// --------- Extends
// Outro conceito importante já apresentado nessas linguagens é a possibilidade de uma interface herdar propriedades de outra interface. Exemplo:

interface Aircraft {
  speed: number;
}

interface Fighter extends Aircraft {
  hasMissiles: boolean;
  missiles?: number;
}

const f22: Fighter = {
  speed: 2000,
  hasMissiles: true,
  missiles: 4
}
