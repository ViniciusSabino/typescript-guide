//----- Funções: No caso das funções, precisamos defini a tipagem dos argumentos e do retorno. Exemplos:
const overKillConsoleLog = (arg1: string, arg2: number): void => {
  console.log(arg1, arg2)
}

const anotherCallbackExample = (callback: (arg: number) => string): string => {
  return callback(9)
}
