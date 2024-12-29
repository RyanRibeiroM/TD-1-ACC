## Problema Escolhido

### 8. **Problema de Conjuntos Disjuntos (Disjoint Set Problem)**

**Descrição**:  
Dado dois conjuntos, determine se eles são disjuntos, ou seja, se não possuem elementos em comum.

**Objetivo**:  
Verificar se dois conjuntos não compartilham nenhum elemento. Caso compartilhem, identifique os elementos em comum (se necessário).

---

## Descrição de Aplicabilidade Prática do Problema

O **Problema de Conjuntos Disjuntos** tem uma ampla aplicabilidade em diversas áreas do conhecimento e aplicações práticas. Abaixo estão exemplos detalhados de como essa problemática pode ser utilizada:

### **1. Sistemas de Banco de Dados**

Em bancos de dados, o problema de conjuntos disjuntos pode ser utilizado para:

- **Verificação de Integridade Referencial**:  
  Garantir que dois conjuntos de dados (como tabelas ou colunas) não possuam elementos repetidos, assegurando a consistência dos dados.  
  _Exemplo_:
  - Verificar que registros de uma tabela de produtos expirados não estão presentes em uma tabela de produtos ativos.
- **Normalização de Dados**:  
  Identificar redundâncias em dados duplicados, separando grupos de informações que devem ser tratados de maneira independente.

---

### **2. Redes de Computadores**

No campo das redes, o problema pode ser usado para:

- **Roteamento e Redundância**:  
  Verificar se rotas disponíveis para pacotes de dados são disjuntas. Isso é essencial para criar redundância em redes, garantindo que falhas em uma rota não afetem outra.  
  _Exemplo_:
  - Garantir que rotas de backup para um servidor crítico não compartilhem links físicos com as rotas principais, prevenindo falhas simultâneas.

---

### **3. Sistemas de Informação Geográfica (GIS)**

- **Planejamento Territorial**:  
  Garantir que áreas designadas para diferentes usos (residenciais, industriais, preservação ambiental) não se sobreponham.  
  _Exemplo_:
  - Identificar que reservas ambientais não possuem interseções com zonas de mineração ou expansão urbana.

---

### **4. Jogos e Simulações**

- **Divisão de Recursos**:  
  Garantir que conjuntos de recursos utilizados por diferentes entidades em um jogo ou simulação não entrem em conflito.  
  _Exemplo_:
  - Verificar que dois jogadores em um jogo multiplayer não estão tentando acessar o mesmo recurso de maneira simultânea.

---

## Implementação dos três algoritmos

### **Força Bruta**

```js
function forcaBruta(conjunto1, conjunto2) {
  for (const elemento1 of conjunto1) {
    for (const elemento2 of conjunto2) {
      if (elemento1 === elemento2) {
        return false;
      }
    }
  }
  return true;
}
```

---

### **Divisão e Conquista**

```js
function divisaoConquista(conjunto1, conjunto2) {
  if (conjunto1.length === 0 || conjunto2.length === 0) {
    return true;
  }

  const sorted1 = [...conjunto1].sort((a, b) => a - b);
  const sorted2 = [...conjunto2].sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < sorted1.length && j < sorted2.length) {
    if (sorted1[i] === sorted2[j]) {
      return false;
    } else if (sorted1[i] < sorted2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return true;
}
```

---

### **Programação Dinamica**

```js
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
```

---

### Algoritmo Guloso

```js
function algoritmoGuloso(conjunto1, conjunto2) {
  const visitados = new Set(conjunto1);
  for (const elemento of conjunto2) {
    if (visitados.has(elemento)) {
      return false;
    }
  }
  return true;
}
```

---

## Casos práticos e a comparação de desempenho de tempo de cada algoritmo.

![Link do PDF](https://github.com/RyanRibeiroM/TD-1-ACC/blob/main/relatorioDesempenhoACC.pdf)
