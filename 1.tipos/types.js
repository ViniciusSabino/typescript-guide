// ------------- Básico
// boolean 
var isThisAGoodDoc = true;
// number
var fightingPower = 9001;
// string
var rocketseat = 'Are you ready for launch?';
// any: aceita qualquer valor. Utilizado quando não queremos fazer a checagem de tipo;
// void: é basicamente o oposto de any, utilizado principalmente para demarcar quando não queremos retornar valores de uma função (mesmo assim, ao utilizar void a função irá retornar undefined,  explicitamente ou implicitamente)
// null: aceita valores do tipo null
// undefined: aceita valores do tipo undefined
// never: não aceita nenhum tipo, utilizada principalmente para funções que nunca devem retornar algo (funções sem retorno retornam undefined, por isso usamos void) como loops infinitos ou excessoes)
// ----------- Avançado
// Arrays 
var educationTeam = ['Vinne', 'Dani', 'Doge'];
var educationTeam2 = ['Vinne', 'Dani', 'Doge'];
// Tuples
/**
 * Utilizado quando queremos trabalhar com arrays que sabemos exatamente quantos elementos ele terá, mas que não serão necessiariamente do mesmo tipo. Exemplo:
 */
var eitaGiovanna = ['O forninho caiu?', true];
// Enums: Utilizado quando queremos dar um nome mais amiguavel a um conjunt de valores. Exemplo:
var Techs;
(function (Techs) {
    Techs[Techs["React"] = 0] = "React";
    Techs[Techs["Angular"] = 1] = "Angular";
    Techs[Techs["Vue"] = 2] = "Vue";
})(Techs || (Techs = {}));
var Status;
(function (Status) {
    Status["waiting"] = "WAITING";
    Status["approved"] = "APPROVED";
})(Status || (Status = {}));
var theBest = Techs.React;
console.log(theBest); // Irá printar o valor de 0 (indice)
var teste = Status.approved;
console.log(Status.approved);
console.log(teste);
