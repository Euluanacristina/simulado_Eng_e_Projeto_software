window.STUDY_DATA = (() => {
  const refs = {
    esA1: "Aula 01 - Engenharia de Software, seção Texto da Aula",
    esA2: "Aula 02 - Engenharia de Software, seção Processo de Software",
    esA3: "Aula 03 - Diversidade na Engenharia de Software",
    rev: "Revisão Engenharia de Software e Projeto de Software.pdf",
    psA1: "Aula 01 - Projeto de Software",
    psA2: "Aula 02 - Projeto de Software com Metodologias Ágeis",
    psA3: "Aula 03 - Conceito de Projeto",
    psA4: "Aula 04 - Metodologia Ágil",
    psA5: "Aula 05 - Exercícios sobre Metodologia Ágil e Manifesto Ágil"
  };

  const review = {
    engenharia: [
      {
        topic: "Engenharia de Software",
        body: "Disciplina de engenharia focada em todos os aspectos da produção de software: especificação, desenvolvimento, validação, manutenção e evolução.",
        remember: "Não é só programação. Também envolve requisitos, qualidade, custos, prazos, ferramentas, métodos e manutenção.",
        example: "Um sistema pode ter código funcionando e ainda falhar se não atender ao cliente ou se for caro demais para manter."
      },
      {
        topic: "Processo de Software",
        body: "Sequência organizada de atividades que conduz à produção de um produto de software.",
        remember: "Memorize E-D-V-E: Especificação, Desenvolvimento, Validação e Evolução.",
        example: "Primeiro define o que o sistema deve fazer, depois constrói, testa se atende ao pedido e evolui com correções e melhorias."
      },
      {
        topic: "Atributos de Qualidade",
        body: "Um bom software precisa ser manutenível, confiável/protegido, eficiente e aceitável para seus usuários.",
        remember: "Qualidade não é só funcionar uma vez. Precisa ser seguro, utilizável, econômico e possível de modificar.",
        example: "Um app rápido, mas impossível de entender, falha em aceitabilidade."
      },
      {
        topic: "Ciência da Computação x Engenharia de Software x Engenharia de Sistemas",
        body: "Ciência da Computação foca fundamentos teóricos; Engenharia de Software aplica métodos para produzir software; Engenharia de Sistemas envolve o sistema completo, inclusive hardware e processos.",
        remember: "Computação = teoria; Software = produção do programa; Sistemas = conjunto completo funcionando.",
        example: "Um carro inteligente envolve software, sensores, hardware e processos: isso se aproxima de Engenharia de Sistemas."
      },
      {
        topic: "Tipos de Sistemas",
        body: "Os materiais citam stand-alone, transacionais, embarcados, processamento em lote, entretenimento, modelagem/simulação, coleta de dados e sistemas de sistemas.",
        remember: "O tipo de sistema influencia o processo, o rigor de testes e a prioridade do projeto.",
        example: "Um sistema embarcado automotivo exige validação rigorosa porque uma falha pode causar danos reais."
      },
      {
        topic: "Desafios",
        body: "A revisão destaca heterogeneidade, mudanças nos negócios/sociedade e segurança/confiança.",
        remember: "Software precisa se adaptar a plataformas diferentes, mudanças de necessidade e ameaças de segurança.",
        example: "Um sistema usado em vários dispositivos enfrenta heterogeneidade."
      }
    ],
    projeto: [
      {
        topic: "Projeto de Software",
        body: "Etapa que transforma requisitos em um plano estruturado de construção do sistema, definindo arquitetura, dados, interfaces e componentes.",
        remember: "Projeto vem antes do código final: resolve o problema lógico antes de programar.",
        example: "Antes de criar telas, define-se como módulos, dados e regras vão se relacionar."
      },
      {
        topic: "Conceito de Projeto",
        body: "Projeto é um empreendimento temporário para criar produto, serviço ou resultado único, com início, fim, objetivo, prazo, custo e escopo.",
        remember: "Projeto não é só uma ideia; é uma ideia organizada em plano executável.",
        example: "Treinamento corporativo, infraestrutura e desenvolvimento de produto podem ser projetos."
      },
      {
        topic: "Abstração, Encapsulamento, Modularidade e Ocultamento",
        body: "Abstração foca no essencial; encapsulamento controla acesso; modularidade divide o sistema; ocultamento evita dependência de detalhes internos.",
        remember: "Abstrair é simplificar; modularizar é dividir; encapsular/ocultar é proteger detalhes.",
        example: "Em uma biblioteca, Livro pode começar com título, autor e disponibilidade, sem detalhes físicos irrelevantes."
      },
      {
        topic: "Cascata x Ágil",
        body: "Cascata é sequencial e rígido. Ágil é iterativo, incremental e adaptável, favorecendo entregas frequentes e mudanças controladas.",
        remember: "Cascata combina melhor com requisitos estáveis; Ágil ajuda quando há mudança e feedback constante.",
        example: "Se o cliente muda uma função no meio, o ágil reorganiza prioridades; no cascata o impacto tende a ser maior."
      },
      {
        topic: "Manifesto Ágil",
        body: "Criado em 2001 por 17 desenvolvedores, valoriza indivíduos, software funcionando, colaboração com o cliente e resposta a mudanças.",
        remember: "O lado direito dos valores não é inútil; apenas tem menor prioridade.",
        example: "Ágil não elimina documentação, mas evita documentação excessiva sem valor."
      },
      {
        topic: "Scrum, Kanban, XP e Lean",
        body: "Scrum organiza Sprints; Kanban usa quadro visual; XP foca qualidade técnica, testes e pares; Lean elimina desperdícios.",
        remember: "Scrum = ciclos; Kanban = fluxo visual; XP = práticas técnicas; Lean = valor sem desperdício.",
        example: "Um quadro A Fazer, Em Andamento e Concluído é exemplo de Kanban."
      }
    ]
  };

  const esConcepts = [
    ["Engenharia de Software", "disciplina que organiza todos os aspectos da produção, manutenção e evolução de software com métodos, ferramentas e qualidade", "tratar software apenas como escrita de código", "esA1"],
    ["Disciplina de Engenharia", "uso seletivo de teorias, métodos, ferramentas e técnicas para fazer soluções funcionarem dentro de restrições", "aplicar sempre um método fixo sem avaliar o problema", "esA1"],
    ["Especificação de Software", "definição dos serviços, funções, requisitos e restrições que o software deve cumprir", "a etapa em que o código final já está sendo entregue", "rev"],
    ["Processo de Software", "sequência organizada de atividades que leva à produção de um produto de software", "um documento isolado sem relação com desenvolvimento e manutenção", "esA2"],
    ["Especificação", "atividade em que clientes e engenheiros definem o que será produzido e suas necessidades", "atividade de corrigir versões antigas depois da entrega", "esA2"],
    ["Desenvolvimento", "atividade em que o projeto passa a ser construído, incluindo projeto, modelagem e programação", "atividade que apenas confirma se o usuário gostou da interface", "esA2"],
    ["Validação", "verificação e testes para saber se o software atende aos requisitos e necessidades do cliente", "troca de tecnologia por preferência da equipe sem testar requisitos", "esA2"],
    ["Evolução", "modificações, versionamento e melhorias depois que o software está pronto ou em uso", "levantamento inicial das necessidades antes de qualquer entrega", "esA2"],
    ["Manutenibilidade", "facilidade de corrigir, atualizar e modificar o software sem tornar mudanças caras ou difíceis", "capacidade de executar mais rápido usando qualquer quantidade de recurso", "esA2"],
    ["Confiança e proteção", "capacidade de o sistema ser confiável, seguro e proteger informações contra perdas ou ameaças", "capacidade de agradar visualmente qualquer usuário", "esA2"],
    ["Eficiência", "funcionamento adequado sem desperdício de recursos, lentidão ou travamentos desnecessários", "existência de documentação extensa em todas as fases", "esA2"],
    ["Aceitabilidade", "adequação do software aos usuários, com facilidade de uso e utilidade para quem precisa dele", "capacidade de impedir qualquer mudança depois da entrega", "esA2"],
    ["Engenharia de Sistemas", "área mais ampla que envolve sistema completo: software, hardware, pessoas, processos e integração", "sinônimo exato de Ciência da Computação", "esA2"],
    ["Heterogeneidade", "desafio de fazer o software funcionar em diferentes plataformas, dispositivos, redes e sistemas existentes", "decisão de manter todos os usuários com a mesma senha", "rev"],
    ["Sistemas embarcados", "softwares integrados a dispositivos de hardware para controlar funções mecânicas ou eletrônicas", "sistemas usados apenas para entretenimento offline", "esA3"]
  ];

  const psConcepts = [
    ["Projeto de Software", "etapa que transforma requisitos em plano estruturado com arquitetura, dados, interfaces e componentes", "atividade de escrever código sem planejar a solução", "psA1"],
    ["Arquitetura", "organização geral do sistema e de como seus blocos ou partes se relacionam", "lista de senhas e permissões dos usuários finais", "psA1"],
    ["Dados", "informações utilizadas, processadas e armazenadas pelo software", "reuniões diárias para remover impedimentos", "psA1"],
    ["Interface", "forma pela qual o usuário ou outro sistema interage com o software", "motor interno que executa cálculos sem entrada ou saída", "psA1"],
    ["Componentes", "módulos que realizam funções específicas dentro do sistema", "custos e prazos do contrato administrativo", "psA1"],
    ["Abstração", "concentrar-se nas características essenciais e deixar detalhes irrelevantes de lado", "copiar todos os detalhes reais sem selecionar o que importa", "psA1"],
    ["Conceito de Projeto", "empreendimento temporário para criar produto, serviço ou resultado único com objetivo definido", "rotina permanente repetida sem entrega única", "psA3"],
    ["Prazo e orçamento", "meios de controlar tempo, recursos, pessoas, materiais e custos do projeto", "garantia automática de sucesso mesmo sem objetivo atendido", "psA3"],
    ["Escopo", "conjunto do que será entregue e dos limites do projeto", "velocidade de execução do computador do usuário", "rev"],
    ["Encapsulamento", "organizar dados e operações controlando o acesso aos detalhes internos", "dividir o sistema em etapas sequenciais obrigatórias", "rev"],
    ["Modularidade", "dividir o sistema em partes menores e organizadas", "remover toda comunicação entre equipe e cliente", "rev"],
    ["Ocultamento de informação", "evitar que detalhes internos de um módulo sejam acessados desnecessariamente por outras partes", "documentar todo detalhe técnico para todos os usuários finais", "rev"],
    ["Modelo Cascata", "modelo sequencial e mais rígido, em que uma etapa normalmente termina antes da próxima", "modelo com Sprints curtas e replanejamento contínuo", "psA2"],
    ["Metodologia Ágil", "forma flexível e adaptável de conduzir projetos com entregas frequentes e resposta a mudanças", "método que proíbe mudanças depois do planejamento inicial", "psA4"],
    ["Manifesto Ágil", "conjunto de valores criado em 2001 por 17 desenvolvedores para tornar o desenvolvimento mais leve e colaborativo", "manual de arquitetura física de data centers", "psA4"],
    ["Scrum", "framework ágil que organiza o trabalho em Sprints, revisão, retrospectiva e acompanhamento contínuo", "prática focada apenas em programação em pares", "psA2"],
    ["Kanban", "abordagem visual para acompanhar tarefas e fluxo de trabalho", "modelo que exige concluir toda documentação antes de iniciar qualquer etapa", "rev"],
    ["XP", "metodologia ágil com foco em qualidade técnica, testes frequentes, refatoração, padrões e programação em pares", "técnica exclusiva de orçamento de infraestrutura", "psA2"],
    ["Lean", "abordagem que busca eliminar desperdícios e valorizar o que gera valor ao cliente", "processo para aumentar documentação sem ligação com entrega", "rev"],
    ["Resposta a mudanças", "capacidade de adaptar o planejamento quando surgem novas necessidades, informações ou feedbacks", "cumprir o plano inicial mesmo quando ele deixa de atender ao cliente", "psA5"]
  ];

  const letters = ["a", "b", "c", "d", "e"];
  const makeOptions = (correct, wrong, pool, seed) => {
    const options = [
      { id: "a", text: correct },
      { id: "b", text: wrong },
      { id: "c", text: pool[(seed + 1) % pool.length][1] },
      { id: "d", text: pool[(seed + 3) % pool.length][2] },
      { id: "e", text: pool[(seed + 5) % pool.length][1] }
    ];
    const seen = new Set();
    return options.map((op, i) => {
      let text = op.text;
      if (seen.has(text)) text = `${text} em outro contexto do material`;
      seen.add(text);
      return { id: letters[i], text };
    });
  };

  const buildQuestions = (discipline, prefix, concepts, extraTopics) => {
    const questions = [];
    concepts.forEach((c, index) => {
      const [topic, correct, wrong, refKey] = c;
      const next = concepts[(index + 2) % concepts.length];
      const hard = index % 3 === 0;
      const medium = index % 3 === 1;
      const base = {
        discipline,
        topic,
        reference: refs[refKey],
        source: refs[refKey],
        explanation: `${topic}: ${correct}. A confusão comum é aproximar esse conceito de "${wrong}", mas isso não corresponde ao material estudado.`,
        remember: `Para a prova, relacione ${topic} com: ${correct}.`
      };

      questions.push({
        ...base,
        id: `${prefix}-${String(index + 1).padStart(2, "0")}-conceito`,
        difficulty: medium ? "Média" : "Difícil",
        prompt: `Em uma situação de prova, qual alternativa descreve melhor "${topic}" conforme os materiais?`,
        options: makeOptions(correct, wrong, concepts, index),
        correctOptionId: "a"
      });

      questions.push({
        ...base,
        id: `${prefix}-${String(index + 1).padStart(2, "0")}-cenario`,
        difficulty: hard ? "Difícil" : "Média",
        prompt: `Um aluno confundiu "${topic}" com "${next[0]}". Qual interpretação corrige melhor essa confusão?`,
        options: makeOptions(
          `${topic} está ligado a ${correct}, enquanto ${next[0]} trata de ${next[1]}.`,
          `${topic} e ${next[0]} são sempre o mesmo conceito, apenas com nomes diferentes.`,
          concepts,
          index + 4
        ),
        correctOptionId: "a",
        explanation: `A diferença principal é que ${topic} significa ${correct}. ${next[0]} tem outro foco: ${next[1]}.`,
        remember: `Compare conceitos próximos pelo objetivo de cada um, não apenas pelo nome.`
      });

      questions.push({
        ...base,
        id: `${prefix}-${String(index + 1).padStart(2, "0")}-afirmacoes`,
        difficulty: "Difícil",
        prompt: `Analise as afirmações sobre ${topic}: I. Relaciona-se a ${correct}. II. Pode ser entendido como ${wrong}. III. Deve ser interpretado conforme o contexto do projeto ou sistema. Quais estão corretas?`,
        options: [
          { id: "a", text: "Apenas I e III." },
          { id: "b", text: "Apenas I e II." },
          { id: "c", text: "Apenas II e III." },
          { id: "d", text: "I, II e III." },
          { id: "e", text: "Apenas II." }
        ],
        correctOptionId: "a",
        explanation: `A afirmação I está alinhada ao material e a III reforça a importância do contexto. A II usa uma confusão plausível, mas incorreta.`,
        remember: `Em questões I, II e III, cuidado com afirmações que trocam a definição por um conceito parecido.`
      });
    });

    extraTopics.forEach((q, i) => {
      questions.push({
        discipline,
        id: `${prefix}-extra-${String(i + 1).padStart(2, "0")}`,
        topic: q.topic,
        difficulty: q.difficulty || "Média",
        prompt: q.prompt,
        options: q.options.map((text, idx) => ({ id: letters[idx], text })),
        correctOptionId: "a",
        explanation: q.explanation,
        remember: q.remember,
        reference: q.reference,
        source: q.reference
      });
    });

    return questions;
  };

  const engineeringExtra = [
    {
      topic: "Processo de Software",
      prompt: "Uma equipe definiu requisitos, construiu o sistema, testou com o cliente e depois criou uma versão com melhorias. Qual sequência do material aparece nessa situação?",
      options: ["Especificação, desenvolvimento, validação e evolução.", "Validação, especificação, evolução e desenvolvimento.", "Arquitetura, dados, interfaces e componentes.", "Scrum, Kanban, XP e Lean.", "Heterogeneidade, segurança, simulação e lote."],
      explanation: "A sequência corresponde às quatro atividades fundamentais do processo de software.",
      remember: "E-D-V-E: Especificar, desenvolver, validar e evoluir.",
      reference: refs.esA2
    },
    {
      topic: "Tipos de Sistemas",
      prompt: "Um sistema de folha de pagamento processa milhares de registros automaticamente no fim do mês, quase sem intervenção humana. Qual tipo se aproxima mais desse caso?",
      options: ["Processamento em lote.", "Sistema de entretenimento.", "Sistema stand-alone gráfico.", "Prototipação de interface.", "Sistema de sistemas sem objetivo comum."],
      explanation: "Processamento em lote lida com grandes quantidades de dados de forma automatizada.",
      remember: "Batch/lote costuma aparecer em processamento periódico e automatizado.",
      reference: refs.rev
    },
    {
      topic: "Sistemas de Sistemas",
      prompt: "Vários sistemas independentes são integrados para atingir um objetivo maior. Qual conceito da revisão descreve isso?",
      options: ["Sistema de sistemas.", "Sistema stand-alone.", "Sistema de entretenimento.", "Processo de especificação.", "Aceitabilidade."],
      explanation: "Sistema de sistemas integra diferentes sistemas para um objetivo maior.",
      remember: "Integração de sistemas diferentes com objetivo comum indica sistema de sistemas.",
      reference: refs.rev
    },
    {
      topic: "Segurança e Confiança",
      prompt: "Em um sistema bancário, perda de dados e acesso indevido são riscos centrais. Qual atributo recebe maior destaque?",
      options: ["Confiança e proteção.", "Aceitabilidade visual.", "Entretenimento.", "Modelagem meteorológica.", "Documentação abrangente."],
      explanation: "Confiança e proteção envolvem segurança, confiabilidade e proteção das informações.",
      remember: "Segurança e confiabilidade fazem parte de confiança e proteção.",
      reference: refs.esA2
    }
  ];

  const projectExtra = [
    {
      topic: "Manifesto Ágil",
      prompt: "Uma equipe ágil reduziu documentos longos, mas manteve registros úteis para orientar o trabalho. Qual interpretação está correta?",
      options: ["Ágil prioriza software funcionando, sem eliminar documentação útil.", "Ágil proíbe qualquer documentação.", "Ágil exige documentação antes de qualquer software.", "Ágil troca colaboração por contrato fixo.", "Ágil só funciona sem cliente."],
      explanation: "O Manifesto valoriza software funcionando acima de documentação abrangente, mas não elimina documentação.",
      remember: "O lado direito dos valores continua existindo; apenas não é a prioridade maior.",
      reference: refs.psA5
    },
    {
      topic: "Scrum",
      prompt: "Uma equipe organiza entregas em ciclos curtos, faz revisão e retrospectiva ao fim de cada ciclo. Qual prática está mais evidente?",
      options: ["Scrum com Sprints.", "Modelo Cascata puro.", "Processamento em lote.", "Ocultamento de informação.", "Engenharia de Sistemas."],
      explanation: "Scrum trabalha com Sprints e eventos de revisão/retrospectiva.",
      remember: "Scrum = Sprints + acompanhamento contínuo.",
      reference: refs.psA2
    },
    {
      topic: "Kanban",
      prompt: "Um quadro mostra tarefas em 'A fazer', 'Em andamento' e 'Concluído'. Qual abordagem o material associa a essa visualização?",
      options: ["Kanban.", "XP.", "Cascata.", "Abstração.", "Especificação de software."],
      explanation: "Kanban usa quadro visual para acompanhar o fluxo de trabalho.",
      remember: "Kanban ajuda a enxergar o fluxo e identificar gargalos.",
      reference: refs.rev
    },
    {
      topic: "Lean",
      prompt: "A equipe remove etapas que não geram valor para o cliente e simplifica o fluxo. Qual ideia está sendo aplicada?",
      options: ["Lean Software Development.", "Documentação abrangente acima de entrega.", "Cascata resistente a mudanças.", "Sistema embarcado.", "Apenas modelagem de dados."],
      explanation: "Lean busca eliminar desperdícios e valorizar o que gera valor.",
      remember: "Lean = eliminar desperdícios.",
      reference: refs.rev
    }
  ];

  const subjects = {
    engenharia: {
      id: "engenharia",
      name: "Engenharia de Software",
      shortName: "Engenharia",
      description: "Produção, processos, qualidade, tipos de sistemas e desafios da Engenharia de Software.",
      questions: buildQuestions("Engenharia de Software", "ES", esConcepts, engineeringExtra),
      review: review.engenharia
    },
    projeto: {
      id: "projeto",
      name: "Projeto de Software",
      shortName: "Projeto",
      description: "Projeto, abstração, arquitetura, metodologias ágeis, Manifesto, Scrum, Kanban, XP e Lean.",
      questions: buildQuestions("Projeto de Software", "PS", psConcepts, projectExtra),
      review: review.projeto
    }
  };

  return {
    version: "2026.09.25.1",
    sources: Object.values(refs),
    subjects
  };
})();
