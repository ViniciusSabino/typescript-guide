/**
 * Muitas vezes, em uma mesma aplicação acabamos gerando interfaces que possuem 
 * muitas semelhanças mas que não são necessariamente iguais. Isso, além de 
 * causar um código mais verboso, também é mais trabalhoso e suscetível a erros. 
 * Por isso, o Typescript disponibiliza os Utility Types. Eles vêm com a missão 
 * de evitar esses problemas e gerar rapidamente interfaces a partir de outras 
 * pre-existentes. Nessa seção iremos falar de dois exemplos apenas, mas fique 
 * a vontade para olhar o restante aqui.
 * 
 * https://www.typescriptlang.org/docs/handbook/utility-types.html
 */

 // Pick<T, K>

// Utilizado quando queremos pegar apenas algumas propriedades (K) de uma outra 
// interface (T)
// Exemplo:

interface Video {
  title: string;
  description: string;
  fps: number;
  duration: number;
}

type Image = Pick<Video, 'title' | 'description'>

const picture: Image = {
  title: 'Profile',
  description: "Picture taken for my driver's license"
}

// Omit<T, K>

// Utilizando quando queremos excluir apenas algumas propriedades (K) de uma 
// outra interface (T). Exemplo:

interface Video {
  title: string;
  description: string;
  fps: number;
  duration: number;
}

type Image = Omit<Video, 'fps' | 'duration'>;

const picure: Image = {
  title: 'Profile',
  description: "Picure taken for my driver's license"
}
