const v8 = require("v8");

function calcularMemoriaV8() {
  const stats = v8.getHeapStatistics();
  return stats.used_heap_size / (1024 * 1024);
}

function calcularTempo(inicio, fim) {
  return fim - inicio;
}

function calcularMemoria(memoriaInicial, memoriaFinal) {
  return Math.max(0, memoriaFinal - memoriaInicial);
}

function programacaoDinamica(conjunto1, conjunto2) {
  const visitados = new Set();
  for (const elemento of conjunto1) {
    visitados.add(elemento);
  }
  for (const elemento of conjunto2) {
    if (visitados.has(elemento)) {
      return false;
    }
  }
  return true;
}

function testarAlgoritmo(nome, algoritmo, conjunto1, conjunto2) {
  memoriaInicial = calcularMemoriaV8();
  inicio = performance.now();
  const resultado = algoritmo(conjunto1, conjunto2);
  fim = performance.now();
  memoriaFinal = calcularMemoriaV8();

  console.log(
    `${nome}: ${
      resultado ? "Disjuntos" : "Não Disjuntos"
    } | Tempo de execução: ${calcularTempo(inicio, fim).toFixed(
      2
    )} ms | Uso de memória: ${calcularMemoria(
      memoriaInicial,
      memoriaFinal
    ).toFixed(2)} MB\n`
  );
}

const conjuntoPequeno1 = Array.from({ length: 10 }, (_, i) => i + 1);
const conjuntoPequeno2 = Array.from({ length: 10 }, (_, i) => i + 20);

const conjuntoMedio1 = Array.from({ length: 1000 }, (_, i) => i + 1);
const conjuntoMedio2 = Array.from({ length: 1000 }, (_, i) => i + 2000);

const conjuntoGrande1 = Array.from({ length: 100000 }, (_, i) => i + 1);
const conjuntoGrande2 = Array.from({ length: 100000 }, (_, i) => i + 200000);

console.log("Testando os algoritmos com conjuntos pequenos: \n");
testarAlgoritmo(
  "Programação Dinâmica",
  programacaoDinamica,
  conjuntoPequeno1,
  conjuntoPequeno2
);

console.log("Testando os algoritmos com conjuntos médios: \n");
testarAlgoritmo(
  "Programação Dinâmica",
  programacaoDinamica,
  conjuntoMedio1,
  conjuntoMedio2
);

console.log("Testando os algoritmos com conjuntos grandes: \n");
testarAlgoritmo(
  "Programação Dinâmica",
  programacaoDinamica,
  conjuntoGrande1,
  conjuntoGrande2
);
