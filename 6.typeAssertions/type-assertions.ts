// Type assertions

/** As vezes, você pode saber mais de um tipo do que o próprio TypeScript, principalmente
ao trabalho com tipos como any ou object. Por isso, é possível atribuir manualmente
um tipo utilizando Type assertions. Exemplo:
 */

 const bestDog: any = "Doge";

 const dogLenght: number = (bestDog as string).length
// Onde atribuimos manualmente o tipo 'string' a variável bestDog utilizando o 'as' 
// (anteriormente do tipo 'any')

