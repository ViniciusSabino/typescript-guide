// TIPOS GERAIS

// - Number, String, Boolean, SymbolEObject 

// WHRONG 
const reverse = (s: String): String;

// OK
const reverse = (s: string): string;


// GENÉRICOS

// - any

/**
 * Não use 'any' como um tipo, a menos que você esteja no processo de migração 
 * de um projeto JavaScript para o TypeScript. O compilador trata efetivamente
 * any como “por favor, desligue a verificação de tipo para esta coisa”. 
 * É semelhante a colocar um @ts-ignore comentário em torno de cada uso da variável. 
 * Isso pode ser muito útil quando você está migrando pela primeira vez um projeto 
 * JavaScript para o TypeScript, pois pode definir o tipo de coisas que ainda não foram migradas any, 
 * mas em um projeto TypeScript completo, você está desabilitando a verificação de tipo para qualquer parte do programa que usa isto.

Nos casos em que você não sabe que tipo deseja aceitar, 
ou quando deseja aceitar alguma coisa porque estará passando cegamente sem interagir com isso, 
você pode usar unknown.
 */

 // TIPOS DE RETORNO DE CHAMADA

 // - Tipos de retorno de chamadas
