// ----Union Types
// Em alguns casos, queremos que uma variável/propriedade aceite mais de um tipo. Para esses casos, utilzizamos os Union Types. Exemplo:

let age: number | string = 30;
age = "30";
age = false; // erro - Type 'boolean' is not assignable to type 'string | number'.ts(2322)
