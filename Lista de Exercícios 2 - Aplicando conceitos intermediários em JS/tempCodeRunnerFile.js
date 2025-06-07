const prompt = require("prompt-sync")();

//1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
    return false;
  }

  let date = new Date(ano, mes - 1, dia);
  return (
    date.getFullYear() === ano &&
    date.getMonth() === mes - 1 &&
    date.getDate() === dia
  );
}

// Testes
console.log(ehDataValida(29, 2, 2020)); // true (ano bissexto)
console.log(ehDataValida(29, 2, 2021)); // false (ano não bissexto)
console.log(ehDataValida(31, 12, 2021)); // true (dezembro tem 31 dias)
console.log(ehDataValida(32, 1, 2025)); // false (janeiro tem 31 dias)

//2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

function jogoAdivinhacao() {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let adivinhacaoUsuario;

  while (true) {
    adivinhacaoUsuario = prompt("Adivinhe um número entre 1 a 100: ");

    if (isNaN(adivinhacaoUsuario)) {
      console.log("Digite apenas números!");
      continue;
    }

    adivinhacaoUsuario = parseInt(adivinhacaoUsuario);
    tentativas++;

    if (adivinhacaoUsuario < 1 || adivinhacaoUsuario > 100) {
      console.log("O número deve estar entre 1 e 100!");
      continue;
    }

    if (adivinhacaoUsuario === numeroAleatorio) {
      console.log(
        `Acertou! O número era ${numeroAleatorio}, acertou em ${tentativas} tentativas.`
      );
      break;
    }

    console.log(
      adivinhacaoUsuario < numeroAleatorio ? "Mais alto!" : "Mais baixo!"
    );
  }
}

jogoAdivinhacao();

// 3. Palavras Únicas - Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

function palavrasUnicas(frase = prompt("Insira uma frase: ")) {
  frase = frase.toLowerCase();
  let arrayFrase;
  let arrayPalavras = [];

  arrayFrase = frase.split(" ");

  for (let i = 0; i < arrayFrase.length; i++) {
    if (!arrayPalavras.includes(arrayFrase[i])) {
      arrayPalavras.push(arrayFrase[i]);
    }
  }

  return arrayPalavras;
}

console.log(palavrasUnicas());

//4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.

function fatorial(n) {
  if (n < 0) {
    throw new Error("Não existe fatorial de número negativo.");
  } else if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

function mostrarFatorial(n) {
  console.log(`Fatorial de ${n}: ${fatorial(n)}`);
}

mostrarFatorial(7);

//5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.

function debounce(fn, delay) {
  // 1. Declare uma variável para guardar o ID do timeout
  let timeout = null;
  // 2. Retorne uma nova função que:
  // - Cancela o timeout anterior se existir
  // - Cria um novo timeout
  // - Executa fn quando o timeout acabar

  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fn();
    }, delay);
  };
}

function fazerBusca() {
  const termo = prompt("Digite o termo de busca: ");
  console.log(`Buscando por: ${termo}`);

  const frutas = ["maçã", "banana", "laranja", "uva", "manga"];
  const resultados = frutas.filter((item) =>
    item.toLowerCase().includes(termo.toLowerCase())
  );

  if (resultados.length > 0) {
    console.log("Resultados encontrados: ", resultados);
  } else {
    console.log("Nenhum resultado encontrado.");
  }
}

const buscaComDebounce = debounce(fazerBusca, 5000);

console.log("Iniciando busca em 5 segundos...");
buscaComDebounce();

//6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fastFib = memoize(fibonacci);

setTimeout(() => {
  console.log(fastFib(5));
  console.log(fastFib(10));
  console.log("Do cache (memoization): ", fastFib(5));
}, 5000);

//7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

let arrayProdutos = [
  { nome: "mouse", preco: 70 },
  { nome: "teclado", preco: 200 },
  { nome: "headset", preco: 100 },
  { nome: "monitor", preco: 600 },
];

function ordenarArray(array) {
  let arrayOrdenado = array.slice().sort((a, b) => a.preco - b.preco);
  let produtos = arrayOrdenado.map((produto) => produto.nome);

  console.log("Produtos ordenados: ", produtos);
  return produtos;
}

setTimeout(() => {
  ordenarArray(arrayProdutos);
}, 5000);

//8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

let vendas = [
  { cliente: "Ana", total: 300 },
  { cliente: "Bruno", total: 400 },
  { cliente: "Ana", total: 350 },
  { cliente: "David", total: 510 },
  { cliente: "Elena", total: 450 },
];

function agruparPorCliente(vendas) {
  let vendasAgrupado = vendas.reduce((acumulador, venda) => {
    acumulador[venda.cliente] = (acumulador[venda.cliente] || 0) + venda.total;
    return acumulador;
  }, {});

  console.log("Vendas agrupadas: ", vendasAgrupado);
  return vendasAgrupado;
}

setTimeout(() => {
  agruparPorCliente(vendas)
}, 5000)

//9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

function paresParaObjeto(pares) {
  let obj = {}
  for (let i = 0; i < pares.length; i++) {
    let chave = pares[i][0]
    let valor = pares[i][1]
    obj[chave] = valor
  }
  return obj
}

function objetoParaPares(obj) {
  let pares = [];
  for (let chave in obj) {
    pares.push([chave, obj[chave]])
  }
  return pares;
}

setTimeout(() => {
let pares = [["cor", "azul"], ["tamanho", "grande"]];
let obj = paresParaObjeto(pares);
console.log("Pares para objeto: ", obj);

let paresConvertidos = objetoParaPares(obj);
console.log("Objeto para pares:", paresConvertidos);
}, 5000)