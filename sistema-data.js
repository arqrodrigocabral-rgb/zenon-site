/* ============================================================
   SISTEMA-DATA.JS
   Camada de dados real (Notion + Drive) — usado por todas as
   páginas de detalhe (projeto, cliente, proposta).
   ============================================================ */

(function (root) {
  'use strict';

  /* ---------- 1. CLIENTES (Notion DB CLIENTES) ---------- */
  const CLIENTES = {
    'CLI-1': {
      id: 'CLI-1',
      nome: 'CT Darkhouse',
      tipo: 'PJ',
      doc: '40.392.753/0001-04',
      email: 'jakson.nantes@darkhousect.com',
      telefone: '—',
      endereco: 'R. Florianópolis 385, Vila Bertioga, SP, 03185-050',
      origem: 'Cliente antigo',
      tags: ['XL', 'Comercial'],
      projetos: ['P-03'],
      propostas: ['PRO-1'],
      financeiros: ['FIN-02'],
      obs: 'Regularização de alvará e as built do galpão SP.'
    },
    'CLI-3': {
      id: 'CLI-3',
      nome: 'Bruna e Thiago',
      tipo: 'PF',
      doc: '—',
      email: '—',
      telefone: '—',
      endereco: '—',
      origem: '—',
      tags: ['L', 'Residencial'],
      projetos: ['P-08'],
      propostas: [],
      financeiros: [],
      obs: 'Apartamento residencial entregue em 14/04/2026 (Place Santana SP).'
    },
    'CLI-4': {
      id: 'CLI-4',
      nome: 'Rafael Monici',
      tipo: 'PJ',
      doc: '39.157.685/0001-10',
      email: 'ECCO.endoscopia@gmail.com',
      telefone: '(11) 99274-2494',
      endereco: 'R. Hilário Furlan 107, Brooklin Novo, SP, 04571-180',
      origem: 'Indicação',
      tags: ['M', 'Saúde · Clínica', 'VIP'],
      projetos: ['P-01'],
      propostas: [],
      financeiros: ['FIN-01'],
      obs: 'Cliente da Clínica ECCO — obra em andamento, entrega 20/05/2026.'
    },
    'CLI-5': {
      id: 'CLI-5',
      nome: 'Tiago',
      tipo: 'PF',
      doc: '—',
      email: '—',
      telefone: '—',
      endereco: 'Av. Sen. César Lacerda Vergueiro 71, Ponta da Praia, Santos, 11030-220',
      origem: '—',
      tags: ['M', 'Residencial'],
      projetos: ['P-02'],
      propostas: [],
      financeiros: [],
      obs: 'APT Terrazzas — projeto travado aguardando cliente.'
    },
    'CLI-6': {
      id: 'CLI-6',
      nome: 'Eliana',
      tipo: 'PF',
      doc: '—',
      email: '—',
      telefone: '—',
      endereco: 'Estrada do Jaguari 9475, Represa do Jaguari, SJC, 12214-012',
      origem: '—',
      tags: ['M', 'Rural'],
      projetos: ['P-06'],
      propostas: [],
      financeiros: [],
      obs: 'Consultoria Exterior Jaguari — fase de levantamento.'
    },
    'CLI-7': {
      id: 'CLI-7',
      nome: 'Juliana e Felipe',
      tipo: 'PF',
      doc: '—',
      email: '—',
      telefone: '—',
      endereco: '—',
      origem: 'VIP',
      tags: ['L', 'A consolidar'],
      projetos: ['P-07'],
      propostas: ['PRO-5'],
      financeiros: [],
      obs: 'Possível duplicado de CLI-9 — a consolidar no Notion.'
    },
    'CLI-8': {
      id: 'CLI-8',
      nome: 'Cleber e Tamara',
      tipo: 'PF',
      doc: '—',
      email: '—',
      telefone: '—',
      endereco: 'R. Carlos Escobar 141, São Paulo, 02013-050',
      origem: '—',
      tags: ['M', 'Residencial'],
      projetos: ['P-05'],
      propostas: [],
      financeiros: [],
      obs: 'Place Santana — em fase de briefing.'
    },
    'CLI-9': {
      id: 'CLI-9',
      nome: 'Juliana e Felipe Vasconcellos',
      tipo: 'PF',
      doc: '—',
      email: 'arq.rodrigocabral@gmail.com (contato)',
      telefone: '(13) 99701-1158',
      endereco: 'Av. Bartolomeu de Gusmão 116, Aparecida, Santos, 11045-401',
      origem: 'VIP',
      tags: ['L', 'Residencial', 'VIP'],
      projetos: ['P-07'],
      propostas: ['PRO-5'],
      financeiros: [],
      obs: 'Edifício Navegantes — proposta PRO-5 em rascunho.'
    }
  };

  /* ---------- 2. PROJETOS (Notion DB PROJETOS YVYRA) ---------- */
  const PROJETOS = {
    'P-01': {
      id: 'P-01',
      ref: '02/2025',
      titulo: 'Clínica ECCO',
      destaque: 'ECCO',
      cliente: 'CLI-4',
      clienteNome: 'Rafael Monici',
      tipo: 'Saúde · Clínica',
      porte: 'M (50–150 m²)',
      metragem: '125 m²',
      endereco: 'Centro Médico Berrini — R. Hilário Furlan 107, Brooklin Novo, SP',
      bairro: 'Brooklin Novo · SP',
      complexidade: 'Crítica',
      status: 'Em obra',
      fase: 'Acabamentos',
      tags: ['Em obra', 'Acabamentos', 'Sem atraso'],
      progresso: 78,
      etapas: '11 / 13',
      prazoInicio: '16 / 01 / 2026',
      prazoFinal: '20 / 05 / 2026',
      rrt: 'RRT CAU 20260104',
      obs: 'Obra em ritmo, sem atrasos. Marcenaria Movelaria em instalação.',
      restanteDias: 31,
      obraId: 'OBRA-01',
      financeiroId: 'FIN-01',
      propostaId: null,
      horasMes: '88 h',
      equipeResumo: 'Rodrigo, Luana, Breno, Anderson',
      honorarios: 39453,
      honorariosPagos: 21463,
      honorariosARecever: 17990,
      proxParcela: '25 / 04 · R$ 5.996,76',
      orcamentoObra: 260000,
      gastoObra: 95000,
      drive: '14a36gYjP5Ta9VESaZs3BO_2KocVS9ZSd',
      fases: [
        { st:'done', t:'Briefing · diagnóstico', d:'Reunião com Rafael, levantamento do imóvel, programa de necessidades da clínica.', q:'16 / 01' },
        { st:'done', t:'Estudo preliminar · layout clínico', d:'Fluxo paciente, sala de exames, recepção, áreas técnicas.', q:'28 / 01' },
        { st:'done', t:'Projeto executivo + RRT CAU', d:'Plantas executivas, cortes e detalhamentos. RRT CAU 20260104.', q:'12 / 02' },
        { st:'done', t:'Projetos complementares', d:'Elétrica, hidráulica, ar-condicionado e gases medicinais por Breno.', q:'25 / 02' },
        { st:'now',  t:'Obra em execução · acabamentos', d:'Pisos concluídos · marcenaria Movelaria em instalação.', q:'Em curso' },
        { st:'',     t:'Entrega técnica + vistoria sanitária', d:'Vistoria final e apoio no alvará sanitário.', q:'20 / 05' },
        { st:'',     t:'Pós-entrega · 180 d', d:'Visitas em 30, 90 e 180 dias após operação.', q:'Nov / 26' }
      ],
      decisoes: [
        { t:'Posição da sinalização de emergência', d:'Exigência sanitária · 2 opções enviadas em 15/04' },
        { t:'Modelo final dos puxadores do balcão', d:'Inox escovado · 3 amostras Movelaria' },
        { t:'Cobogó da parede de separação da recepção', d:'Cerâmico branco vs cimentício natural' }
      ],
      arquivos: [
        { ic:'DWG', nm:'Executivo ECCO v3', mt:'02 / 04' },
        { ic:'DWG', nm:'Marcenaria Movelaria', mt:'02 / 04' },
        { ic:'PDF', nm:'Memorial descritivo', mt:'12 / 02' },
        { ic:'PDF', nm:'Elétrica', mt:'25 / 02' },
        { ic:'PDF', nm:'Hidráulica', mt:'25 / 02' },
        { ic:'PDF', nm:'Ar-condicionado', mt:'25 / 02' },
        { ic:'PDF', nm:'RRT CAU 20260104', mt:'16 / 01' },
        { ic:'PNG', nm:'Moodboard Clínica ECCO', mt:'12 / 02' }
      ],
      equipe: [
        { i:'R', n:'Rodrigo',  r:'Gestão · arquitetura titular · CAU A148704-5', h:'32 h' },
        { i:'L', n:'Luana',    r:'Interiores · marcenaria · acompanhamento obra', h:'28 h' },
        { i:'B', n:'Breno',    r:'Projetos complementares · compliance sanitário', h:'18 h' },
        { i:'A', n:'Anderson', r:'Gestão de obra em campo · Brooklin', h:'10 h' }
      ],
      atividade: [
        { q:'17 / 04', p:'<b>Rodrigo</b> agendou instalação do balcão Movelaria para 24/04.' },
        { q:'15 / 04', p:'<b>Luana</b> anexou 3 amostras de puxador inox ao projeto.' },
        { q:'20 / 04', p:'<b>Rodrigo</b> registrou pagamento parcela 4/7.' },
        { q:'12 / 04', p:'<b>Anderson</b> finalizou relatório semanal da obra.' },
        { q:'02 / 04', p:'<b>Luana</b> aprovou cor final da marcenaria com Rafael.' }
      ]
    },

    'P-02': {
      id: 'P-02',
      ref: '04/2025',
      titulo: 'APT Terrazzas',
      destaque: 'Terrazzas',
      cliente: 'CLI-5',
      clienteNome: 'Tiago',
      tipo: 'Residencial',
      porte: 'M (50–150 m²)',
      metragem: '—',
      endereco: 'Residencial Terrazzas — Av. Sen. César Lacerda Vergueiro 71, Ponta da Praia, Santos, 11030-220',
      bairro: 'Ponta da Praia · Santos',
      complexidade: 'Média',
      status: 'Travado',
      fase: 'Executivo / detalhamento',
      tags: ['Travado', 'Aguardando cliente', 'Urgente'],
      progresso: 48,
      etapas: '5 / 12',
      prazoInicio: '—',
      prazoFinal: '—',
      rrt: null,
      obs: 'TRAVADO — aguardando retorno do cliente para aprovar executivo. Urgente retomar contato.',
      restanteDias: null,
      obraId: null,
      financeiroId: null,
      propostaId: null,
      horasMes: '—',
      equipeResumo: 'Rodrigo, Luana',
      honorarios: 0,
      honorariosPagos: 0,
      honorariosARecever: 0,
      proxParcela: '—',
      orcamentoObra: 0,
      gastoObra: 0,
      drive: null,
      fases: [
        { st:'done', t:'Briefing', d:'Reunião com Tiago, pré-programa da reforma do APT.', q:'—' },
        { st:'done', t:'Levantamento do imóvel', d:'Medição completa e diagnóstico de instalações.', q:'—' },
        { st:'now',  t:'Executivo / detalhamento', d:'<b>Travado:</b> aguardando aprovação do cliente para seguir.', q:'Travado' },
        { st:'',     t:'Projetos complementares', d:'A iniciar após liberação.', q:'—' },
        { st:'',     t:'Obra', d:'A iniciar.', q:'—' }
      ],
      decisoes: [
        { t:'Aprovação do executivo', d:'Cliente precisa retornar com decisão sobre layout final' },
        { t:'Definição de fornecedor de marcenaria', d:'2 cotações em aberto' }
      ],
      arquivos: [
        { ic:'DWG', nm:'Levantamento APT Terrazzas', mt:'—' },
        { ic:'PDF', nm:'Pré-briefing Tiago', mt:'—' }
      ],
      equipe: [
        { i:'R', n:'Rodrigo', r:'Arquitetura titular', h:'—' },
        { i:'L', n:'Luana',   r:'Interiores',          h:'—' }
      ],
      atividade: [
        { q:'—', p:'Projeto marcado como <b>TRAVADO</b> · aguardando retorno do cliente.' }
      ]
    },

    'P-03': {
      id: 'P-03',
      ref: '04/2026',
      titulo: 'CT Darkhouse — Regularização',
      destaque: 'Darkhouse',
      cliente: 'CLI-1',
      clienteNome: 'CT Darkhouse',
      tipo: 'Regularização + Comercial',
      porte: 'XL (>500 m²)',
      metragem: '> 500 m²',
      endereco: 'Dark House SP — R. Florianópolis 385, Água Rasa, SP, 03185-050',
      bairro: 'Água Rasa · SP',
      complexidade: 'Alta',
      status: 'Em andamento',
      fase: 'ALVARÁ + AS BUILT',
      tags: ['Legal / Condomínio', 'Regularização'],
      progresso: 55,
      etapas: '6 / 11',
      prazoInicio: '27 / 02 / 2026',
      prazoFinal: '10 / 05 / 2026',
      rrt: null,
      obs: 'Regularização em andamento. Tratativa com prefeitura para alvará.',
      restanteDias: 20,
      obraId: null,
      financeiroId: 'FIN-02',
      propostaId: 'PRO-1',
      horasMes: '24 h',
      equipeResumo: 'Rodrigo, Breno',
      honorarios: 19800,
      honorariosPagos: 11880,
      honorariosARecever: 7920,
      proxParcela: '06 / 05 · R$ 7.920',
      orcamentoObra: 0,
      gastoObra: 0,
      drive: null,
      fases: [
        { st:'done', t:'Levantamento técnico', d:'Vistoria completa do galpão e mapeamento das pendências.', q:'27 / 02' },
        { st:'done', t:'Consultoria/impugnação IPTU', d:'Análise tributária e desenquadramento.', q:'15 / 03' },
        { st:'now',  t:'Gestão de licenciamento · ALF', d:'Em tratativa com prefeitura. Prazo previsto 10/05.', q:'Em curso' },
        { st:'',     t:'AS BUILT', d:'Documentação técnica final do imóvel regularizado.', q:'—' },
        { st:'',     t:'Encerramento', d:'Entrega do alvará e arquivamento.', q:'—' }
      ],
      decisoes: [
        { t:'Resposta do condomínio sobre estacionamento', d:'Pendência levantada na vistoria' }
      ],
      arquivos: [
        { ic:'PDF', nm:'Proposta PRO-1 (R$ 75.400)', mt:'27 / 02' },
        { ic:'PDF', nm:'Levantamento Darkhouse',     mt:'05 / 03' },
        { ic:'PDF', nm:'Impugnação IPTU',            mt:'15 / 03' }
      ],
      equipe: [
        { i:'R', n:'Rodrigo', r:'Arquiteto titular · CAU A148704-5', h:'14 h' },
        { i:'B', n:'Breno',   r:'Compliance + documentação',          h:'10 h' }
      ],
      atividade: [
        { q:'05 / 04', p:'<b>Rodrigo</b> registrou recebimento da 2ª parcela (R$ 10.000).' },
        { q:'24 / 03', p:'<b>Rodrigo</b> registrou recebimento da 1ª entrada (R$ 1.880).' },
        { q:'27 / 02', p:'Proposta PRO-1 aprovada.' }
      ]
    },

    'P-04': {
      id: 'P-04',
      ref: '05/2026',
      titulo: 'CREMILDA — Regularização',
      destaque: 'CREMILDA',
      cliente: null,
      clienteNome: 'Cremilda',
      tipo: 'Rural · cortesia',
      porte: 'Rural',
      metragem: '—',
      endereco: '—',
      bairro: '—',
      complexidade: 'Baixa',
      status: 'Aguardando cliente',
      fase: 'Documentação pendente',
      tags: ['Aguardando cliente', '🎁 Gratuito'],
      progresso: 5,
      etapas: '0 / 6',
      prazoInicio: '—',
      prazoFinal: '—',
      rrt: null,
      obs: '🎁 Serviço gratuito (sem proposta). Aguardando documentação do imóvel rural.',
      restanteDias: null,
      obraId: null,
      financeiroId: null,
      propostaId: null,
      horasMes: '—',
      equipeResumo: 'Rodrigo',
      honorarios: 0,
      honorariosPagos: 0,
      honorariosARecever: 0,
      proxParcela: '— (cortesia)',
      orcamentoObra: 0,
      gastoObra: 0,
      drive: null,
      fases: [
        { st:'now', t:'Documentação pendente', d:'Aguardando documentação completa do imóvel rural.', q:'Aguardando' },
        { st:'',    t:'Análise técnica', d:'A iniciar após documentação.', q:'—' },
        { st:'',    t:'Regularização', d:'A iniciar.', q:'—' }
      ],
      decisoes: [
        { t:'Receber documentação do imóvel rural', d:'Pendente com a cliente' }
      ],
      arquivos: [],
      equipe: [
        { i:'R', n:'Rodrigo', r:'Arquiteto titular', h:'—' }
      ],
      atividade: [
        { q:'—', p:'Projeto marcado como cortesia, aguardando documentação.' }
      ]
    },

    'P-05': {
      id: 'P-05',
      ref: '06/2026',
      titulo: 'APT Place Santana',
      destaque: 'Place Santana',
      cliente: 'CLI-8',
      clienteNome: 'Cleber e Tamara',
      tipo: 'Residencial',
      porte: 'M (50–150 m²)',
      metragem: '—',
      endereco: 'Place Santana SP — R. Carlos Escobar 141, São Paulo, 02013-050',
      bairro: 'Santana · SP',
      complexidade: 'Média',
      status: 'Briefing',
      fase: 'Entrada / Briefing',
      tags: ['Briefing', 'Residencial'],
      progresso: 10,
      etapas: '1 / 12',
      prazoInicio: '—',
      prazoFinal: '—',
      rrt: null,
      obs: 'Em fase de briefing. Pendente: agendar visita técnica ao apartamento.',
      restanteDias: null,
      obraId: null,
      financeiroId: null,
      propostaId: null,
      horasMes: '—',
      equipeResumo: 'Rodrigo',
      honorarios: 0,
      honorariosPagos: 0,
      honorariosARecever: 0,
      proxParcela: '—',
      orcamentoObra: 0,
      gastoObra: 0,
      drive: null,
      fases: [
        { st:'now', t:'Entrada / Briefing', d:'Coleta inicial de necessidades.', q:'Em curso' },
        { st:'',    t:'Levantamento', d:'A iniciar.', q:'—' },
        { st:'',    t:'Estudo preliminar', d:'A iniciar.', q:'—' }
      ],
      decisoes: [
        { t:'Agendar visita ao APT', d:'Pendente com Cleber' }
      ],
      arquivos: [],
      equipe: [
        { i:'R', n:'Rodrigo', r:'Arquiteto titular', h:'—' }
      ],
      atividade: [
        { q:'—', p:'Projeto cadastrado em fase de briefing.' }
      ]
    },

    'P-06': {
      id: 'P-06',
      ref: '07/2026',
      titulo: 'Consultoria Exterior Jaguari',
      destaque: 'Jaguari',
      cliente: 'CLI-6',
      clienteNome: 'Eliana',
      tipo: 'Consultoria · Rural',
      porte: 'M (50–150 m²)',
      metragem: '—',
      endereco: 'Estrada do Jaguari 9475, Represa do Jaguari, SJC, 12214-012',
      bairro: 'Represa do Jaguari · SJC',
      complexidade: 'Média',
      status: 'Levantamento',
      fase: 'Levantamento / Criação',
      tags: ['Levantamento', 'Rural', 'Consultoria'],
      progresso: 22,
      etapas: '2 / 9',
      prazoInicio: '—',
      prazoFinal: '—',
      rrt: null,
      obs: 'Consultoria de paisagismo e exterior para propriedade rural na Represa do Jaguari.',
      restanteDias: null,
      obraId: null,
      financeiroId: null,
      propostaId: null,
      horasMes: '—',
      equipeResumo: 'Rodrigo, Luana',
      honorarios: 0,
      honorariosPagos: 0,
      honorariosARecever: 0,
      proxParcela: '—',
      orcamentoObra: 0,
      gastoObra: 0,
      drive: null,
      fases: [
        { st:'done', t:'Briefing inicial', d:'Reunião com Eliana sobre paisagismo e exterior.', q:'—' },
        { st:'now',  t:'Levantamento / Criação', d:'Análise do terreno e estudos preliminares.', q:'Em curso' },
        { st:'',     t:'Anteprojeto', d:'A iniciar.', q:'—' }
      ],
      decisoes: [
        { t:'Definir escopo de paisagismo', d:'Aguardando alinhamento com cliente' }
      ],
      arquivos: [],
      equipe: [
        { i:'R', n:'Rodrigo', r:'Arquiteto titular', h:'—' },
        { i:'L', n:'Luana',   r:'Interiores / Paisagismo', h:'—' }
      ],
      atividade: [
        { q:'—', p:'Projeto em fase de levantamento técnico.' }
      ]
    },

    'P-07': {
      id: 'P-07',
      ref: '08/2026',
      titulo: 'APT Navegantes',
      destaque: 'Navegantes',
      cliente: 'CLI-9',
      clienteNome: 'Juliana e Felipe Vasconcellos',
      tipo: 'Residencial · Alta complexidade',
      porte: 'L (150–500 m²)',
      metragem: '—',
      endereco: 'Edifício Residencial Navegantes — Av. Bartolomeu de Gusmão 116, Aparecida, Santos, 11045-401',
      bairro: 'Aparecida · Santos',
      complexidade: 'Alta',
      status: 'Briefing',
      fase: 'Entrada / Briefing',
      tags: ['Briefing', 'VIP'],
      progresso: 12,
      etapas: '1 / 12',
      prazoInicio: '17 / 04 / 2026',
      prazoFinal: '—',
      rrt: null,
      obs: 'Cliente VIP. Proposta PRO-5 (R$ 32.800) enviada em 17/04, aguardando assinatura até 17/05.',
      restanteDias: null,
      obraId: null,
      financeiroId: null,
      propostaId: 'PRO-5',
      horasMes: '—',
      equipeResumo: 'Rodrigo, Luana',
      honorarios: 32800,
      honorariosPagos: 0,
      honorariosARecever: 32800,
      proxParcela: 'aguarda assinatura PRO-5',
      orcamentoObra: 0,
      gastoObra: 0,
      drive: null,
      fases: [
        { st:'now', t:'Entrada / Briefing', d:'Coleta de necessidades e alinhamento de proposta.', q:'Em curso' },
        { st:'',    t:'Aprovação proposta PRO-5', d:'R$ 32.800 · validade 17/05/2026.', q:'—' },
        { st:'',    t:'Executivo', d:'A iniciar após assinatura.', q:'—' }
      ],
      decisoes: [
        { t:'Aprovação da proposta PRO-5', d:'R$ 32.800 enviada em 17/04 · validade 17/05' }
      ],
      arquivos: [
        { ic:'PDF', nm:'Proposta PRO-5 (rascunho)', mt:'17 / 04' }
      ],
      equipe: [
        { i:'R', n:'Rodrigo', r:'Arquiteto titular', h:'—' },
        { i:'L', n:'Luana',   r:'Interiores',         h:'—' }
      ],
      atividade: [
        { q:'17 / 04', p:'<b>Rodrigo</b> emitiu proposta PRO-5 em rascunho.' }
      ]
    },

    'P-08': {
      id: 'P-08',
      ref: '12/2026',
      titulo: 'APT Place Santana — entregue',
      destaque: 'Place Santana',
      cliente: 'CLI-3',
      clienteNome: 'Bruna e Thiago',
      tipo: 'Residencial',
      porte: 'L (150–500 m²)',
      metragem: '—',
      endereco: 'Place Santana SP',
      bairro: 'Santana · SP',
      complexidade: 'Média',
      status: 'Concluído',
      fase: 'Pós-entrega',
      tags: ['Concluído', 'Residencial'],
      progresso: 100,
      etapas: '12 / 12',
      prazoInicio: '03 / 03 / 2025',
      prazoFinal: '14 / 04 / 2026 (entregue)',
      rrt: null,
      obs: 'Projeto entregue. Pós-entrega ativo: visitas de assistência nos primeiros 180 dias.',
      restanteDias: 0,
      obraId: null,
      financeiroId: null,
      propostaId: null,
      horasMes: '—',
      equipeResumo: 'Rodrigo, Luana',
      honorarios: 0,
      honorariosPagos: 0,
      honorariosARecever: 0,
      proxParcela: '—',
      orcamentoObra: 0,
      gastoObra: 0,
      drive: null,
      fases: [
        { st:'done', t:'Briefing', d:'—', q:'03 / 03' },
        { st:'done', t:'Executivo', d:'—', q:'—' },
        { st:'done', t:'Obra', d:'—', q:'—' },
        { st:'done', t:'Entrega', d:'Apartamento entregue à família.', q:'14 / 04' },
        { st:'now',  t:'Pós-entrega ativo', d:'Visitas de assistência em curso.', q:'180 d' }
      ],
      decisoes: [],
      arquivos: [
        { ic:'PDF', nm:'Memorial entrega', mt:'14 / 04' }
      ],
      equipe: [
        { i:'R', n:'Rodrigo', r:'Arquiteto titular', h:'—' },
        { i:'L', n:'Luana',   r:'Interiores',         h:'—' }
      ],
      atividade: [
        { q:'14 / 04', p:'<b>Rodrigo</b> registrou entrega final do apartamento.' }
      ]
    }
  };

  /* ---------- 3. PROPOSTAS (Notion DB PROPOSTAS) ---------- */
  const PROPOSTAS = {
    'PRO-1': {
      id: 'PRO-1',
      titulo: 'Consultoria Técnica Alvará — CT Darkhouse',
      cliente: 'CLI-1',
      clienteNome: 'CT Darkhouse',
      projetoId: 'P-03',
      financeiroId: 'FIN-02',
      status: 'Aprovada',
      statusBadge: 'ok',
      data: '27 / 02 / 2026',
      validade: '—',
      valorTotal: 75400,
      itens: [
        { categoria: 'Serviço', descricao: 'Levantamento técnico', valor: 7500 },
        { categoria: 'Serviço', descricao: 'Consultoria / Impugnação IPTU', valor: 4500 },
        { categoria: 'Serviço', descricao: 'Gestão de licenciamento', valor: 5900 },
        { categoria: 'Produto', descricao: 'Estimativa custo de obra', valor: 52000 },
        { categoria: 'Produto', descricao: 'Taxas de processo', valor: 5500 }
      ],
      parcelas: [
        { n: '1ª', desc: 'Assinatura — 60%', venc: '27 / 02', valor: 45240, status: 'Recebido' },
        { n: '2ª', desc: 'Após ALF — 40%',  venc: '10 / 05', valor: 30160, status: 'Aguardando ALF' }
      ],
      meio: 'PIX arq.rodrigocabral@gmail.com',
      obs: 'Proposta enviada e aprovada — execução em andamento via P-03.'
    },
    'PRO-5': {
      id: 'PRO-5',
      titulo: 'Projeto Arquitetura — APT Navegantes',
      cliente: 'CLI-9',
      clienteNome: 'Juliana e Felipe Vasconcellos',
      projetoId: 'P-07',
      financeiroId: null,
      status: 'Rascunho',
      statusBadge: 'warn',
      data: '17 / 04 / 2026',
      validade: '17 / 05 / 2026',
      valorTotal: 32800,
      itens: [
        { categoria: 'Serviço', descricao: 'Projeto de arquitetura completo', valor: 34000 },
        { categoria: 'Serviço', descricao: 'RRT CAU',                          valor: 900 },
        { categoria: 'Desconto', descricao: 'Desconto VIP',                     valor: -2100 }
      ],
      parcelas: [],
      meio: 'a definir',
      obs: 'Rascunho enviado em 17/04 · aguardando assinatura do cliente.'
    }
  };

  /* ---------- 4. OBRAS ---------- */
  /* Modelo de fornecedor:
     {
       id, categoria, fornecedor, descricao, orcado, forma, pix, celular,
       parcelas: [
         { n, desc, venc, valor,
           status: 'A pagar' | 'Aguardando confirmação' | 'Pago' | 'Pendente aprovação',
           clienteMarcouEm, confirmadoEm }
       ],
       // derivados via _recomputeAggregates('obra', id):
       realizado, aPagar, aguardando, status
     }
     Fluxo:
     - 'Pendente aprovação'  (admin ainda não liberou orçamento)
       → admin aprova → vira 'A pagar'
     - 'A pagar'             (cliente vê no portal, botão "Já paguei")
       → cliente marca → 'Aguardando confirmação'
     - 'Aguardando confirmação' (admin vê fila no sistema)
       → admin confirma → 'Pago'
       → admin rejeita → volta pra 'A pagar'
  */
  const OBRAS = {
    'OBRA-01': {
      id: 'OBRA-01',
      projetoId: 'P-01',
      cliente: 'CLI-4',
      titulo: 'Clínica ECCO',
      endereco: 'Centro Médico Berrini, R. Hilário Furlan, 107 — Itaim Bibi, SP',
      responsavel: 'Rodrigo',
      status: 'Em andamento (canteiro)',
      fase: 'Acabamentos',
      metragem: '125 m²',
      orcado: 260000,
      realizado: 95000,
      pendente: 165000,
      executadoPct: 37,
      prazoFinal: '20 / 05 / 2026',
      /* Fonte: Notion OBRA YVYRA · CLINICA ECCO - RAFAEL MONICI
         https://www.notion.so/dc38445e964a8246b2d381d34157a262
         4 fornecedores cadastrados no Notion: João Silva, Eletro SP, Hidra Obras, Movelaria.
         Ar Condicionado ainda sem fornecedor atribuído (R$ 18k pendente de contratação). */
      fornecedores: [
        {
          id: 'FOR-01', categoria: 'Civil', fornecedor: 'João Silva', descricao: 'Demolir / Construir (mão de obra civil)',
          orcado: 45000, pago: 45000, forma: 'PIX', pix: 'a confirmar', celular: 'a confirmar',
          parcelas: [
            { n: 1, desc: 'Entrada — 50%', venc: '15/01/2026', valor: 22500, status: 'Pago', confirmadoEm: '14/01/2026' },
            { n: 2, desc: 'Conclusão — 50%', venc: '20/02/2026', valor: 22500, status: 'Pago', confirmadoEm: '18/02/2026' }
          ]
        },
        {
          id: 'FOR-02', categoria: 'Elétrica', fornecedor: 'Eletro SP', descricao: 'Infra elétrica + quadros',
          orcado: 12000, pago: 12000, forma: 'PIX', pix: 'a confirmar', celular: 'a confirmar',
          parcelas: [
            { n: 1, desc: 'Pagamento único', venc: '05/02/2026', valor: 12000, status: 'Pago', confirmadoEm: '05/02/2026' }
          ]
        },
        {
          id: 'FOR-03', categoria: 'Hidráulica', fornecedor: 'Hidra Obras', descricao: 'Instalação hidráulica',
          orcado: 8000, pago: 8000, forma: 'PIX', pix: 'a confirmar', celular: 'a confirmar',
          parcelas: [
            { n: 1, desc: 'Pagamento único', venc: '18/02/2026', valor: 8000, status: 'Pago', confirmadoEm: '18/02/2026' }
          ]
        },
        {
          id: 'FOR-04', categoria: 'Marcenaria', fornecedor: 'Movelaria', descricao: 'Marcenaria geral (balcões, recepção, armários)',
          orcado: 65000, pago: 30000, forma: 'PIX', pix: 'a confirmar', celular: 'a confirmar',
          parcelas: [
            { n: 1, desc: 'Parcial executada', venc: '10/03/2026', valor: 30000, status: 'Pago', confirmadoEm: '10/03/2026' },
            { n: 2, desc: 'Saldo — entrega lote 1', venc: '20/05/2026', valor: 35000, status: 'A pagar' }
          ]
        },
        {
          id: 'FOR-05', categoria: 'Ar Condicionado', fornecedor: 'a contratar', descricao: 'Instalação de ar-condicionado (após marcenaria)',
          orcado: 18000, pago: 0, forma: 'PIX', pix: 'a confirmar', celular: 'a confirmar',
          parcelas: [
            { n: 1, desc: 'Pagamento a definir', venc: '20/05/2026', valor: 18000, status: 'Pendente aprovação' }
          ]
        }
      ]
    }
  };

  /* ---------- 5. FINANCEIRO ---------- */
  const FINANCEIRO = {
    'FIN-01': {
      id: 'FIN-01',
      titulo: 'ECCO gerenciamento',
      clienteNome: 'Rafael Monici',
      cliente: 'CLI-4',
      projetoId: 'P-01',
      unidade: 'Yvyra Lab',
      receita: 'Projeto Autoral',
      forma: 'PIX',
      nf: 'Não necessário',
      total: 39453.16,
      recebido: 21462.89,
      aReceber: 17990.28,
      portal: 'portal.zenonco.com.br/rafael-monici',
      parcelas: [
        { n: 1, desc: 'Orçamento e contratação de MO', venc: '18/12/2025', valor: 4341.00,  status: 'Recebido' },
        { n: 2, desc: 'Início de obra',                 venc: '29/01/2026', valor: 4995.82,  status: 'Recebido' },
        { n: 3, desc: 'Infra / Instalações',            venc: '20/02/2026', valor: 4960.66,  status: 'Recebido' },
        { n: 4, desc: 'Início de acabamento',           venc: '17/03/2026', valor: 7165.41,  status: 'Recebido' },
        { n: 5, desc: 'Finalização do acabamento',      venc: '16/04/2026', valor: 5996.76,  status: 'Pendente' },
        { n: 6, desc: 'Finalização da obra',            venc: '15/05/2026', valor: 5996.76,  status: 'Pendente' },
        { n: 7, desc: 'Pós-obra',                       venc: '13/06/2026', valor: 5996.76,  status: 'Pendente' }
      ]
    },
    'FIN-02': {
      id: 'FIN-02',
      titulo: 'ALVARÁ CT + AS BUILT',
      clienteNome: 'CT Darkhouse',
      cliente: 'CLI-1',
      projetoId: 'P-03',
      unidade: 'Yvyra Lab',
      receita: 'Consultoria',
      forma: 'Boleto',
      nf: 'Emitida e enviada',
      total: 19800.00,
      recebido: 11880.00,
      aReceber: 7920.00,
      portal: 'portal.zenonco.com.br/ct-darkhouse',
      parcelas: [
        { n: 1, desc: '1ª entrada', venc: '24/03/2026', valor: 1880.00,  status: 'Recebido' },
        { n: 2, desc: '2ª parcela', venc: '05/04/2026', valor: 10000.00, status: 'Recebido' },
        { n: 3, desc: '3ª parcela', venc: '06/05/2026', valor: 7920.00,  status: 'Pendente' }
      ]
    }
  };

  /* ---------- 6. STORE: localStorage overrides ----------
     Toda edição inline é persistida em localStorage (zenon_sistema_overrides_v2)
     e mesclada nos registros base no carregamento. Reset apaga e recarrega.
     v2: bump após limpar fornecedores-fantasma (FOR-02 Leandro Xavier, FOR-05 IDL,
         FOR-06 Movelaria saldo) que não existiam no Notion. Zera overrides do v1
         pra evitar re-contaminação. */
  const STORE_KEY = 'zenon_sistema_overrides_v2';
  /* tenta apagar a versão antiga pra não ocupar o localStorage com lixo */
  try { if (typeof localStorage !== 'undefined') localStorage.removeItem('zenon_sistema_overrides_v1'); } catch (e) {}

  function _loadOv() {
    try {
      const raw = (typeof localStorage !== 'undefined') ? localStorage.getItem(STORE_KEY) : null;
      return raw ? JSON.parse(raw) : { CLIENTES:{}, PROJETOS:{}, PROPOSTAS:{}, OBRAS:{}, FINANCEIRO:{} };
    } catch (e) {
      return { CLIENTES:{}, PROJETOS:{}, PROPOSTAS:{}, OBRAS:{}, FINANCEIRO:{} };
    }
  }
  function _saveOv(o) {
    try { if (typeof localStorage !== 'undefined') localStorage.setItem(STORE_KEY, JSON.stringify(o)); } catch (e) {}
  }
  const _ov = _loadOv();
  ['CLIENTES','PROJETOS','PROPOSTAS','OBRAS','FINANCEIRO'].forEach(k => { if (!_ov[k]) _ov[k] = {}; });

  function _bucket(tipo) {
    return tipo === 'cliente'    ? CLIENTES
         : tipo === 'projeto'    ? PROJETOS
         : tipo === 'proposta'   ? PROPOSTAS
         : tipo === 'obra'       ? OBRAS
         : tipo === 'financeiro' ? FINANCEIRO
         : null;
  }
  function _ovBucket(tipo) {
    return tipo === 'cliente'    ? _ov.CLIENTES
         : tipo === 'projeto'    ? _ov.PROJETOS
         : tipo === 'proposta'   ? _ov.PROPOSTAS
         : tipo === 'obra'       ? _ov.OBRAS
         : tipo === 'financeiro' ? _ov.FINANCEIRO
         : null;
  }

  function _deepMerge(target, src) {
    if (!src) return target;
    Object.keys(src).forEach(k => {
      const v = src[k];
      if (v && typeof v === 'object' && !Array.isArray(v) && target[k] && typeof target[k] === 'object' && !Array.isArray(target[k])) {
        _deepMerge(target[k], v);
      } else {
        target[k] = v; // arrays e primitivos sobrepõem
      }
    });
    return target;
  }

  function _setPath(obj, path, value) {
    const segs = String(path).split('.');
    let cur = obj;
    for (let i = 0; i < segs.length - 1; i++) {
      const s = segs[i];
      const isIdx = /^\d+$/.test(s);
      const key = isIdx ? parseInt(s, 10) : s;
      if (cur[key] == null) {
        const next = segs[i + 1];
        cur[key] = /^\d+$/.test(next) ? [] : {};
      }
      cur = cur[key];
    }
    const last = segs[segs.length - 1];
    const lastIdx = /^\d+$/.test(last);
    cur[lastIdx ? parseInt(last, 10) : last] = value;
  }

  function _applyAllOv() {
    ['cliente','projeto','proposta','obra','financeiro'].forEach(t => {
      const base = _bucket(t);
      const ov = _ovBucket(t);
      Object.keys(ov || {}).forEach(id => {
        if (base[id]) {
          _deepMerge(base[id], ov[id]);
        } else {
          // registro novo criado via override (lead de briefing, proposta rascunho etc.)
          base[id] = JSON.parse(JSON.stringify(ov[id]));
        }
      });
    });
  }
  _applyAllOv();

  function update(tipo, id, path, value) {
    const base = _bucket(tipo);
    const ov = _ovBucket(tipo);
    if (!base || !base[id]) return false;
    _setPath(base[id], path, value);
    if (!ov[id]) ov[id] = {};
    // Se o caminho cruza um array (ex.: itens.0.valor), armazena o ARRAY PAI
    // completo no override — senão o deep-merge na recarga truncaria a lista.
    const segs = String(path).split('.');
    let overridePath = path;
    let overrideValue = value;
    for (let i = 0; i < segs.length; i++) {
      if (/^\d+$/.test(segs[i])) {
        overridePath = segs.slice(0, i).join('.');
        let arr = base[id];
        for (let j = 0; j < i; j++) {
          const k = /^\d+$/.test(segs[j]) ? parseInt(segs[j], 10) : segs[j];
          arr = arr[k];
        }
        overrideValue = JSON.parse(JSON.stringify(arr));
        break;
      }
    }
    _setPath(ov[id], overridePath, overrideValue);
    _saveOv(_ov);
    // recompute simple aggregates for known types
    _recomputeAggregates(tipo, id);
    return true;
  }

  function _recomputeAggregates(tipo, id) {
    const rec = (_bucket(tipo) || {})[id];
    if (!rec) return;
    if (tipo === 'proposta' && Array.isArray(rec.itens)) {
      const total = rec.itens.reduce((s, it) => s + (Number(it.valor) || 0), 0);
      // só recompute se o usuário não marcou explicitamente um valorTotal divergente recente
      rec.valorTotal = total;
      const ov = _ovBucket('proposta')[id] || {};
      if (!ov) return;
      ov.valorTotal = total;
      _saveOv(_ov);
    }
    if (tipo === 'financeiro' && Array.isArray(rec.parcelas)) {
      rec.recebido = rec.parcelas.filter(p => p.status === 'Recebido').reduce((s,p)=> s + (Number(p.valor)||0), 0);
      rec.aReceber = rec.parcelas.filter(p => p.status !== 'Recebido').reduce((s,p)=> s + (Number(p.valor)||0), 0);
      rec.total = rec.recebido + rec.aReceber;
      const ov = _ovBucket('financeiro')[id];
      if (ov) {
        ov.recebido = rec.recebido; ov.aReceber = rec.aReceber; ov.total = rec.total;
        _saveOv(_ov);
      }
    }
    if (tipo === 'obra' && Array.isArray(rec.fornecedores)) {
      let totalOrcado = 0, totalRealizado = 0, totalAPagar = 0, totalAguardando = 0, totalPendApr = 0;
      rec.fornecedores.forEach(f => {
        if (!Array.isArray(f.parcelas)) f.parcelas = [];
        let realizado = 0, aPagar = 0, aguardando = 0, pendApr = 0;
        f.parcelas.forEach(p => {
          const v = Number(p.valor) || 0;
          if      (p.status === 'Pago')                    realizado  += v;
          else if (p.status === 'Aguardando confirmação')  aguardando += v;
          else if (p.status === 'Pendente aprovação')      pendApr    += v;
          else                                             aPagar     += v;
        });
        f.realizado  = realizado;
        f.aPagar     = aPagar;
        f.aguardando = aguardando;
        f.pendenteAprovacao = pendApr;
        // status derivado do fornecedor
        if (pendApr > 0 && realizado === 0 && aPagar === 0 && aguardando === 0) f.status = 'Pendente aprovação';
        else if (aguardando > 0 && aPagar === 0)                                f.status = 'Aguardando confirmação';
        else if (realizado > 0 && (aPagar + aguardando + pendApr) === 0)        f.status = 'Pago';
        else if (realizado > 0)                                                 f.status = 'Parcial';
        else                                                                    f.status = 'A pagar';
        totalOrcado    += (Number(f.orcado)||0);
        totalRealizado += realizado;
        totalAPagar    += aPagar;
        totalAguardando += aguardando;
        totalPendApr   += pendApr;
      });
      rec.orcado      = totalOrcado;
      rec.realizado   = totalRealizado;
      rec.aPagar      = totalAPagar;
      rec.aguardando  = totalAguardando;
      rec.pendenteAprovacao = totalPendApr;
      rec.pendente    = totalAPagar + totalAguardando + totalPendApr;
      rec.executadoPct = totalOrcado ? Math.round(totalRealizado / totalOrcado * 100) : 0;
      const ov = _ovBucket('obra')[id];
      if (ov) {
        ov.orcado = rec.orcado; ov.realizado = rec.realizado; ov.pendente = rec.pendente;
        ov.aPagar = rec.aPagar; ov.aguardando = rec.aguardando; ov.pendenteAprovacao = rec.pendenteAprovacao;
        ov.executadoPct = rec.executadoPct;
        _saveOv(_ov);
      }
    }
  }

  /* ---------- Fluxo de pagamento de fornecedor ---------- */
  function _todayStr() {
    const d = new Date();
    const dd = String(d.getDate()).padStart(2,'0');
    const mm = String(d.getMonth()+1).padStart(2,'0');
    const yy = d.getFullYear();
    return dd + '/' + mm + '/' + yy;
  }

  /* Cliente aperta "Já paguei" no portal: 'A pagar' → 'Aguardando confirmação' */
  function clienteMarcouPago(obraId, fornecedorIdx, parcelaIdx) {
    const obra = OBRAS[obraId]; if (!obra) return false;
    const forn = obra.fornecedores && obra.fornecedores[fornecedorIdx]; if (!forn) return false;
    const parc = forn.parcelas && forn.parcelas[parcelaIdx]; if (!parc) return false;
    if (parc.status !== 'A pagar') return false;
    update('obra', obraId, 'fornecedores.' + fornecedorIdx + '.parcelas.' + parcelaIdx + '.status', 'Aguardando confirmação');
    update('obra', obraId, 'fornecedores.' + fornecedorIdx + '.parcelas.' + parcelaIdx + '.clienteMarcouEm', _todayStr());
    return true;
  }

  /* Admin confirma pagamento: 'Aguardando confirmação' → 'Pago' */
  function confirmarPagamento(obraId, fornecedorIdx, parcelaIdx) {
    const obra = OBRAS[obraId]; if (!obra) return false;
    const forn = obra.fornecedores && obra.fornecedores[fornecedorIdx]; if (!forn) return false;
    const parc = forn.parcelas && forn.parcelas[parcelaIdx]; if (!parc) return false;
    if (parc.status !== 'Aguardando confirmação') return false;
    update('obra', obraId, 'fornecedores.' + fornecedorIdx + '.parcelas.' + parcelaIdx + '.status', 'Pago');
    update('obra', obraId, 'fornecedores.' + fornecedorIdx + '.parcelas.' + parcelaIdx + '.confirmadoEm', _todayStr());
    return true;
  }

  /* Admin rejeita pagamento: 'Aguardando confirmação' → 'A pagar' */
  function rejeitarPagamento(obraId, fornecedorIdx, parcelaIdx) {
    const obra = OBRAS[obraId]; if (!obra) return false;
    const forn = obra.fornecedores && obra.fornecedores[fornecedorIdx]; if (!forn) return false;
    const parc = forn.parcelas && forn.parcelas[parcelaIdx]; if (!parc) return false;
    if (parc.status !== 'Aguardando confirmação') return false;
    update('obra', obraId, 'fornecedores.' + fornecedorIdx + '.parcelas.' + parcelaIdx + '.status', 'A pagar');
    update('obra', obraId, 'fornecedores.' + fornecedorIdx + '.parcelas.' + parcelaIdx + '.clienteMarcouEm', '');
    return true;
  }

  /* Admin aprova orçamento interno: 'Pendente aprovação' → 'A pagar' */
  function aprovarOrcamento(obraId, fornecedorIdx, parcelaIdx) {
    const obra = OBRAS[obraId]; if (!obra) return false;
    const forn = obra.fornecedores && obra.fornecedores[fornecedorIdx]; if (!forn) return false;
    const parc = forn.parcelas && forn.parcelas[parcelaIdx]; if (!parc) return false;
    if (parc.status !== 'Pendente aprovação') return false;
    update('obra', obraId, 'fornecedores.' + fornecedorIdx + '.parcelas.' + parcelaIdx + '.status', 'A pagar');
    return true;
  }

  /* ---------- Briefing → Lead + Rascunho de proposta ---------- */
  function _nextId(bucket, prefix) {
    let n = Object.keys(bucket).length + 1;
    while (bucket[prefix + n]) n++;
    return prefix + n;
  }

  /* Gera um CLIENTE novo com status 'Lead' a partir dos dados do briefing */
  function criarLeadDeBriefing(dados) {
    dados = dados || {};
    const id = _nextId(CLIENTES, 'CLI-');
    const nome = (dados.nome || '').trim() || 'Lead sem nome';
    const tagsBase = ['Lead'];
    if (dados.tipo) tagsBase.push(String(dados.tipo));
    const lead = {
      id: id,
      nome: nome,
      tipo: 'PF',
      doc: '—',
      email: (dados.email || '').trim() || '—',
      telefone: (dados.whats || '').trim() || '—',
      endereco: (dados.local || '').trim() || '—',
      origem: 'Briefing online',
      tags: tagsBase,
      projetos: [],
      propostas: [],
      financeiros: [],
      obs: 'Lead gerado automaticamente pelo briefing em ' + _todayStr() + '.',
      status: 'Lead',
      criadoEm: _todayStr(),
      briefing: {
        tipo: dados.tipo || null,
        local: dados.local || null,
        metragem: dados.metragem || null,
        prazo: dados.prazo || null,
        investimento: dados.investimento || null,
        historia: dados.historia || null,
        estilo: dados.estilo || null,
        material: dados.material || null,
        paleta: dados.paleta || null,
        mood: dados.mood || null,
        refs: (dados.refs || []).slice(),
        imagens: (dados.images || []).length
      }
    };
    CLIENTES[id] = lead;
    _ov.CLIENTES[id] = JSON.parse(JSON.stringify(lead));
    _saveOv(_ov);
    return id;
  }

  /* Gera uma PROPOSTA em status 'Rascunho' ligada ao cliente lead */
  function criarRascunhoProposta(clienteId, dados) {
    dados = dados || {};
    const cli = CLIENTES[clienteId];
    if (!cli) return null;
    const id = _nextId(PROPOSTAS, 'PRO-');
    const tituloTipo = dados.tipo ? (' · ' + String(dados.tipo)) : '';
    const prop = {
      id: id,
      titulo: 'Rascunho — ' + cli.nome + tituloTipo,
      cliente: clienteId,
      clienteNome: cli.nome,
      projetoId: null,
      financeiroId: null,
      status: 'Rascunho',
      statusBadge: 'warn',
      data: _todayStr(),
      validade: '—',
      valorTotal: 0,
      itens: [],
      parcelas: [],
      meio: 'a definir',
      origem: 'briefing',
      obs: 'Rascunho automático do briefing em ' + _todayStr() + '. Preencher escopo e valor antes de enviar.',
      escopoBriefing: {
        local: dados.local || null,
        metragem: dados.metragem || null,
        prazo: dados.prazo || null,
        investimento: dados.investimento || null,
        historia: dados.historia || null
      }
    };
    PROPOSTAS[id] = prop;
    _ov.PROPOSTAS[id] = JSON.parse(JSON.stringify(prop));
    // conecta cliente ↔ proposta
    if (!Array.isArray(cli.propostas)) cli.propostas = [];
    cli.propostas.push(id);
    if (!_ov.CLIENTES[clienteId]) _ov.CLIENTES[clienteId] = {};
    _ov.CLIENTES[clienteId].propostas = cli.propostas.slice();
    _saveOv(_ov);
    return id;
  }

  /* Lista de leads (clientes com status 'Lead') + propostas rascunho */
  function listarLeads() {
    const leads = [];
    Object.keys(CLIENTES).forEach(id => {
      const c = CLIENTES[id];
      if (c.status === 'Lead') {
        const rasc = (c.propostas || [])
          .map(pid => PROPOSTAS[pid])
          .filter(p => p && p.status === 'Rascunho');
        leads.push({ cliente: c, rascunhos: rasc });
      }
    });
    // mais recente primeiro (pelo id numérico)
    leads.sort((a, b) => {
      const na = parseInt((a.cliente.id || 'CLI-0').replace(/\D/g, ''), 10) || 0;
      const nb = parseInt((b.cliente.id || 'CLI-0').replace(/\D/g, ''), 10) || 0;
      return nb - na;
    });
    return leads;
  }

  /* Helpers de consulta para o portal cliente e admin */
  function fornecedoresPorCliente(clienteId) {
    const out = [];
    Object.keys(OBRAS).forEach(obraId => {
      const o = OBRAS[obraId];
      if (o.cliente !== clienteId) return;
      (o.fornecedores||[]).forEach((f, idx) => {
        out.push({ obraId: obraId, obraTitulo: o.titulo, fornecedorIdx: idx, fornecedor: f });
      });
    });
    return out;
  }

  function parcelasAguardandoConfirmacao() {
    const out = [];
    Object.keys(OBRAS).forEach(obraId => {
      const o = OBRAS[obraId];
      (o.fornecedores||[]).forEach((f, fIdx) => {
        (f.parcelas||[]).forEach((p, pIdx) => {
          if (p.status === 'Aguardando confirmação') {
            out.push({ obraId, obraTitulo: o.titulo, cliente: o.cliente, fornecedorIdx: fIdx, fornecedor: f, parcelaIdx: pIdx, parcela: p });
          }
        });
      });
    });
    return out;
  }

  function pushArray(tipo, id, path, item) {
    const rec = (_bucket(tipo) || {})[id];
    if (!rec) return false;
    const segs = String(path).split('.');
    let cur = rec;
    for (let i = 0; i < segs.length; i++) {
      const k = /^\d+$/.test(segs[i]) ? parseInt(segs[i],10) : segs[i];
      if (cur[k] == null) cur[k] = [];
      cur = cur[k];
    }
    cur.push(item);
    // espelha array completo no override
    const ov = _ovBucket(tipo);
    if (!ov[id]) ov[id] = {};
    _setPath(ov[id], path, JSON.parse(JSON.stringify(cur)));
    _saveOv(_ov);
    _recomputeAggregates(tipo, id);
    return true;
  }

  function spliceArray(tipo, id, path, index) {
    const rec = (_bucket(tipo) || {})[id];
    if (!rec) return false;
    const segs = String(path).split('.');
    let cur = rec;
    for (let i = 0; i < segs.length; i++) {
      const k = /^\d+$/.test(segs[i]) ? parseInt(segs[i],10) : segs[i];
      cur = cur[k];
      if (!cur) return false;
    }
    if (index < 0 || index >= cur.length) return false;
    cur.splice(index, 1);
    const ov = _ovBucket(tipo);
    if (!ov[id]) ov[id] = {};
    _setPath(ov[id], path, JSON.parse(JSON.stringify(cur)));
    _saveOv(_ov);
    _recomputeAggregates(tipo, id);
    return true;
  }

  function resetRecord(tipo, id) {
    const ov = _ovBucket(tipo);
    if (ov && ov[id]) {
      delete ov[id];
      _saveOv(_ov);
      if (typeof location !== 'undefined') location.reload();
    }
  }
  function resetAll() {
    try { if (typeof localStorage !== 'undefined') localStorage.removeItem(STORE_KEY); } catch (e) {}
    if (typeof location !== 'undefined') location.reload();
  }
  function hasOverride(tipo, id) {
    const ov = _ovBucket(tipo);
    return !!(ov && ov[id] && Object.keys(ov[id]).length);
  }
  function listOverrides() {
    const out = {};
    ['cliente','projeto','proposta','obra','financeiro'].forEach(t => {
      const ov = _ovBucket(t) || {};
      Object.keys(ov).forEach(id => {
        if (Object.keys(ov[id]).length) {
          out[t + ':' + id] = Object.keys(ov[id]);
        }
      });
    });
    return out;
  }

  /* ---------- API helpers ---------- */
  function fmtBRL(n) {
    if (n == null || isNaN(n)) return '—';
    return 'R$ ' + n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function fmtBRLshort(n) {
    if (n == null || isNaN(n)) return '—';
    if (n === 0) return 'R$ 0';
    if (Math.abs(n) >= 1000) {
      const k = (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1);
      return 'R$ ' + k.replace('.', ',') + 'k';
    }
    return 'R$ ' + n.toLocaleString('pt-BR');
  }
  function getParam(name, fallback) {
    const m = new URLSearchParams(window.location.search);
    return m.get(name) || fallback || null;
  }
  function el(tag, attrs, html) {
    const e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(k => e.setAttribute(k, attrs[k]));
    if (html != null) e.innerHTML = html;
    return e;
  }

  root.SistemaData = {
    CLIENTES: CLIENTES,
    PROJETOS: PROJETOS,
    PROPOSTAS: PROPOSTAS,
    OBRAS: OBRAS,
    FINANCEIRO: FINANCEIRO,
    fmtBRL: fmtBRL,
    fmtBRLshort: fmtBRLshort,
    getParam: getParam,
    el: el,
    getCliente: function (id) { return CLIENTES[id] || null; },
    getProjeto: function (id) { return PROJETOS[id] || null; },
    getProposta: function (id) { return PROPOSTAS[id] || null; },
    getObra: function (id) { return OBRAS[id] || null; },
    getFinanceiro: function (id) { return FINANCEIRO[id] || null; },
    /* persistência local (overrides em localStorage) */
    update: update,
    pushArray: pushArray,
    spliceArray: spliceArray,
    resetRecord: resetRecord,
    resetAll: resetAll,
    hasOverride: hasOverride,
    listOverrides: listOverrides,
    /* fluxo de pagamento de fornecedores */
    clienteMarcouPago: clienteMarcouPago,
    confirmarPagamento: confirmarPagamento,
    rejeitarPagamento: rejeitarPagamento,
    aprovarOrcamento: aprovarOrcamento,
    fornecedoresPorCliente: fornecedoresPorCliente,
    parcelasAguardandoConfirmacao: parcelasAguardandoConfirmacao,
    /* briefing → lead + rascunho */
    criarLeadDeBriefing: criarLeadDeBriefing,
    criarRascunhoProposta: criarRascunhoProposta,
    listarLeads: listarLeads
  };
})(typeof window !== 'undefined' ? window : globalThis);
