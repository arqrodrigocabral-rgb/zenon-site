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
      driveLinks: [
        { label: '🎨 Renders',         url: 'https://drive.google.com/drive/folders/1RNqpz3TJzdutMCmu-x7Ui6a6RiyInpq-' },
        { label: '📄 Documentos',      url: 'https://drive.google.com/drive/folders/1gJE_mf7l2_BBLubMCDwTD1kgwJ388D5O' },
        { label: '📐 Executivo',       url: 'https://drive.google.com/drive/folders/1VFGLt2DyVgI16yaJa_pQw6LdOGw0b4NS' },
        { label: '📁 Pasta do Projeto',url: 'https://drive.google.com/drive/folders/14a36gYjP5Ta9VESaZs3BO_2KocVS9ZSd' },
        { label: '📊 Planilha de Obra',url: 'https://docs.google.com/spreadsheets/d/1Bu1JAf-6CujV8cyWhIDe4KAPuojctQOX/edit' },
        { label: '📅 Estimativas',     url: 'https://drive.google.com/drive/folders/1RvEjDDsPSQBVItdG51AeisKUwcaIs9ha' }
      ],
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
      clienteNome: 'Beth e Tiago',
      tipo: 'Residencial',
      porte: 'M (50–150 m²)',
      metragem: '—',
      endereco: 'Residencial Terrazzas — Av. Sen. César Lacerda Vergueiro 71, Ponta da Praia, Santos, 11030-220',
      bairro: 'Ponta da Praia · Santos',
      complexidade: 'Média',
      status: 'Aguardando cliente',
      fase: 'Executivo / Detalhamento',
      tags: ['Aguardando cliente', 'Urgente / Travado', 'Projeto Executivo'],
      progresso: 87,
      etapas: '7 / 8',
      prazoInicio: '—',
      prazoFinal: '—',
      rrt: null,
      obs: 'Executivo concluído, aguardando cliente liberar entrega final. Pendente: seguir Proposta 2.',
      restanteDias: null,
      obraId: null,
      financeiroId: null,
      propostaId: null,
      horasMes: '—',
      equipeResumo: 'Rodrigo, Breno, Luana',
      honorarios: 0,
      honorariosPagos: 0,
      honorariosARecever: 0,
      proxParcela: '—',
      orcamentoObra: 0,
      gastoObra: 0,
      drive: '1xJTRnfhPRzKZlJvUVfVtYnzj6bzH64t_',
      driveLinks: [
        { label: '🎨 Renders',         url: 'https://drive.google.com/drive/folders/1F22tmjQSAb3P8rxaKEvuS0ZnJBAaODrU' },
        { label: '📄 Documentos',      url: 'https://drive.google.com/drive/folders/1hReQzLMsP5ZA2tFKc3Q0cEafQTm0WVK0' },
        { label: '📐 Executivo',       url: 'https://drive.google.com/drive/folders/16PwwokWLDlCOXeZhHjnH3Ut2QbuOk0Oc' },
        { label: '📁 Pasta do Projeto',url: 'https://drive.google.com/drive/folders/1xJTRnfhPRzKZlJvUVfVtYnzj6bzH64t_' },
        { label: '📊 Planilha de Obra',url: 'https://drive.google.com/drive/folders/1Mlrjtl80yXaJ-1dkP5ACZ3ZEr2UpfCT1' },
        { label: '📅 Estimativas',     url: 'https://drive.google.com/drive/folders/1TMbLkzP53CkSNgnoqRf30yMxcok91-Pn' }
      ],
      fases: [
        { st:'done', t:'Setup / Arquivos',          d:'Pasta do projeto criada e arquivos organizados no Drive.', q:'—' },
        { st:'done', t:'Base CAD / SketchUp',        d:'Levantamento do imóvel e base para modelagem.', q:'—' },
        { st:'done', t:'3D Inicial (volumetria)',    d:'Volumetria aprovada internamente.', q:'—' },
        { st:'done', t:'Materiais e Iluminação',     d:'Paleta de materiais e iluminação definida.', q:'—' },
        { st:'done', t:'Render Final',               d:'Renders finalizados — exceto quarto das meninas.', q:'02 / 04' },
        { st:'done', t:'Executivo / Detalhamento',   d:'Executivo concluído. Breno gerou planta demolir/construir com legendas.', q:'01 / 04' },
        { st:'now',  t:'Revisão Técnica',            d:'Aguardando cliente retornar para liberar entrega. Seguir Proposta 2.', q:'Aguardando' },
        { st:'',     t:'Finalização / Entrega',      d:'A entregar após aprovação do cliente.', q:'—' }
      ],
      decisoes: [
        { t:'Aprovação do executivo', d:'Cliente precisa retornar com decisão sobre layout final — Proposta 2 confirmada internamente' },
        { t:'Entrega das renders', d:'Imagens finalizadas exceto quarto das meninas — aguarda retorno' }
      ],
      arquivos: [
        { ic:'DWG', nm:'Executivo + Planta Demolir/Construir', mt:'01 / 04' },
        { ic:'IMG', nm:'Renders — Sala e Cozinha',             mt:'02 / 04' },
        { ic:'IMG', nm:'Renders — Quartos',                    mt:'02 / 04' }
      ],
      equipe: [
        { i:'R', n:'Rodrigo', r:'Arquiteto titular', h:'—' },
        { i:'B', n:'Breno',   r:'CAD / Executivo',   h:'—' },
        { i:'L', n:'Luana',   r:'Interiores / Renders', h:'—' }
      ],
      atividade: [
        { q:'02 / 04', p:'<b>Rodrigo</b>: Imagens finalizadas para enviar ao cliente — exceto quarto das meninas.' },
        { q:'01 / 04', p:'<b>Rodrigo</b>: Confirmado — seguir Proposta 2.' },
        { q:'01 / 04', p:'<b>Breno</b>: Tarefa CAD — gerar planta demolir/construir com legendas, indicações de remoção de piso e lareira.' },
        { q:'30 / 03', p:'<b>Rodrigo</b>: Projeto atualizado, aguardando follow-up do cliente.' }
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
      status: 'Legal / Aprovações',
      fase: 'ART/RRT + Protocolo Prefeitura',
      tags: ['Legal / Condomínio', 'Órgão Público', 'Regularização'],
      progresso: 45,
      etapas: '5 / 11',
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
      driveLinks: [
        { label: '🎨 Renders',         url: 'https://drive.google.com/drive/folders/1ORwGn_RuBgPUfDypZtl-m2aW0IOhwwqc' },
        { label: '📄 Documentos',      url: 'https://drive.google.com/drive/folders/1NcQ0zBuuU_tOrlApJJbHJnttZIpt8Xcc' },
        { label: '📐 Executivo',       url: 'https://drive.google.com/drive/folders/1bQ6BzNU3dgJOr5_aoyH4HetzVHtBmvmU' },
        { label: '📁 Pasta do Projeto',url: 'https://drive.google.com/drive/folders/1HWdGkng9VZowipENKNMvL7vF1CHzqPUk' },
        { label: '📊 Planilha de Obra',url: 'https://drive.google.com/drive/folders/1OtXE6EMSCaYEb8XmiDPk4heXSha6VFQS' },
        { label: '📅 Estimativas',     url: 'https://drive.google.com/drive/folders/1OshM2fUtx-Mw3CC74An57YBVKtbRr8OF' }
      ],
      fases: [
        { st:'done', t:'Setup / Arquivos',               d:'Pasta do projeto criada e arquivos organizados.', q:'—' },
        { st:'done', t:'Levantamento Técnico',            d:'Visita ao galpão, medições e mapeamento das pendências de regularização.', q:'27 / 02' },
        { st:'done', t:'Elaboração do Projeto Legal',     d:'Plantas, cortes e memorial descritivo elaborados.', q:'15 / 03' },
        { st:'done', t:'Coleta de Documentação',          d:'Matrícula, IPTU e habite-se anterior coletados.', q:'—' },
        { st:'done', t:'Montagem do Dossiê para Protocolo', d:'Dossiê montado e pronto para protocolo.', q:'—' },
        { st:'now',  t:'ART / RRT + Revisão Técnica',    d:'Registro de Responsabilidade Técnica em elaboração. Revisão técnica interna em andamento.', q:'Em curso' },
        { st:'',     t:'Protocolo na Prefeitura',         d:'SEI / Portal SP Obras — previsto após aprovação interna.', q:'28 / 04' },
        { st:'',     t:'Acompanhamento da Análise',       d:'Monitoramento do processo junto à prefeitura.', q:'—' },
        { st:'',     t:'Resposta a Exigências',           d:'A responder se houver exigências da prefeitura.', q:'—' },
        { st:'',     t:'Aprovação / Emissão do Alvará',   d:'Meta: emitir alvará até 10/05.', q:'10 / 05' },
        { st:'',     t:'Entrega Final ao Cliente',        d:'Entrega do alvará e documentação completa.', q:'—' }
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
        { q:'30 / 03', p:'<b>Rodrigo</b> → <b>Breno</b>: Projeto sendo ajustado — Breno acionado.' },
        { q:'05 / 04', p:'<b>Rodrigo</b> registrou recebimento da 2ª parcela (R$ 10.000).' },
        { q:'24 / 03', p:'<b>Rodrigo</b> registrou recebimento da 1ª entrada (R$ 1.880).' },
        { q:'27 / 02', p:'Proposta PRO-1 aprovada. Projeto iniciado.' }
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
      status: 'Levantamento / Criação',
      fase: 'Materiais e Iluminação',
      tags: ['Aguardando cliente', 'Residencial'],
      progresso: 37,
      etapas: '3 / 8',
      prazoInicio: '—',
      prazoFinal: '22 / 05 / 2026',
      rrt: null,
      obs: 'APT Place Santana — levantamento concluído, aguardando cliente avançar na fase de materiais.',
      restanteDias: 28,
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
      drive: '1rJg-EtfMbFG97rMQzOeps33QKhQlT7QP',
      driveLinks: [
        { label: '🎨 Renders',         url: 'https://drive.google.com/drive/folders/1GTH36yDlccNOzcBB6Zm3SuWM1q4gJLBa' },
        { label: '📄 Documentos',      url: 'https://drive.google.com/drive/folders/1GuZg9nbpi5WkDEIR0DiGzejwQtEVfqug' },
        { label: '📐 Executivo',       url: 'https://drive.google.com/drive/folders/1YM-qDgU00mMCMvkeboEWHBWxHtddSbEJ' },
        { label: '📁 Pasta do Projeto',url: 'https://drive.google.com/drive/folders/1rJg-EtfMbFG97rMQzOeps33QKhQlT7QP' },
        { label: '📊 Planilha de Obra',url: 'https://drive.google.com/drive/folders/19k3BzkiGi916UmwYUK4cpS56t1bzQnDL' },
        { label: '📅 Estimativas',     url: 'https://docs.google.com/spreadsheets/d/1FJoKpdmYjp1YlSojuSwE85FjqzxqVRPu/edit' }
      ],
      fases: [
        { st:'done', t:'Setup / Arquivos',        d:'Pasta do projeto criada no Drive, arquivos organizados.', q:'—' },
        { st:'done', t:'Base CAD / SketchUp',     d:'Base técnica do apartamento Place Santana levantada.', q:'—' },
        { st:'done', t:'3D Inicial (volumetria)', d:'Volumetria inicial modelada.', q:'—' },
        { st:'now',  t:'Materiais e Iluminação',  d:'Aguardando cliente: definir paleta e acabamentos.', q:'Aguardando' },
        { st:'',     t:'Render Final',            d:'A realizar após aprovação de materiais.', q:'—' },
        { st:'',     t:'Executivo / Detalhamento',d:'A iniciar após renders aprovados.', q:'—' },
        { st:'',     t:'Revisão Técnica',         d:'A realizar.', q:'—' },
        { st:'',     t:'Finalização / Entrega',   d:'Prazo previsto: 22/05/2026.', q:'22 / 05' }
      ],
      decisoes: [
        { t:'Definir paleta de materiais e acabamentos', d:'Aguardando retorno de Cleber e Tamara' }
      ],
      arquivos: [],
      equipe: [
        { i:'R', n:'Rodrigo', r:'Arquiteto titular', h:'—' },
        { i:'L', n:'Luana',   r:'Interiores',        h:'—' }
      ],
      atividade: [
        { q:'22 / 04', p:'Projeto cadastrado — aguardando cliente para avançar na fase de materiais.' }
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
      complexidade: 'Baixa',
      status: 'Levantamento / Criação',
      fase: '3D / Render em andamento',
      tags: ['Projeto Andando', 'Rural', 'Consultoria'],
      progresso: 37,
      etapas: '3 / 8',
      prazoInicio: '—',
      prazoFinal: '29 / 04 / 2026',
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
      drive: '10M5hO8xq3rOmuErpcYEru1u2O35i8Fhq',
      driveLinks: [
        { label: '🎨 Renders',         url: 'https://drive.google.com/drive/folders/11-EZhRnj-fCUhE4DMO9nW-Y_2rjFKi8U' },
        { label: '📄 Documentos',      url: 'https://drive.google.com/drive/folders/1-uXdP5E7jgwLP1h1vIbUxzt9CGJfm8N-' },
        { label: '📐 Executivo',       url: 'https://drive.google.com/drive/folders/11N4I7drxYOeLvtNUeJkdJbu0Tdy4ctCH' },
        { label: '📁 Pasta do Projeto',url: 'https://drive.google.com/drive/folders/10M5hO8xq3rOmuErpcYEru1u2O35i8Fhq' },
        { label: '📊 Planilha de Obra',url: 'https://drive.google.com/drive/folders/1VGaMOzC9aqdTYrLM4uDsWisBr5b2N7Vx' },
        { label: '📅 Estimativas',     url: 'https://docs.google.com/spreadsheets/d/1de4tXXjGS4FVCwSMYmym9Kf6WRbdrU_1/edit' }
      ],
      fases: [
        { st:'done', t:'Setup / Arquivos',        d:'Pasta do projeto criada, arquivos organizados.', q:'—' },
        { st:'done', t:'Base CAD / SketchUp',     d:'Base técnica do exterior da Represa do Jaguari levantada.', q:'—' },
        { st:'done', t:'3D Inicial (volumetria)', d:'Volumetria externa modelada.', q:'—' },
        { st:'now',  t:'Materiais e Iluminação',  d:'Definição de materiais e vegetação para consultoria exterior.', q:'Em curso' },
        { st:'',     t:'Render Final',            d:'A realizar. Prazo: 29/04/2026.', q:'29 / 04' },
        { st:'',     t:'Executivo / Detalhamento',d:'A iniciar.', q:'—' },
        { st:'',     t:'Revisão Técnica',         d:'A realizar.', q:'—' },
        { st:'',     t:'Finalização / Entrega',   d:'A entregar.', q:'—' }
      ],
      decisoes: [
        { t:'Render final — prazo 29/04', d:'Projeto andando, render previsto para data limite' }
      ],
      arquivos: [],
      equipe: [
        { i:'R', n:'Rodrigo', r:'Arquiteto titular · Exterior', h:'—' },
        { i:'B', n:'Breno',   r:'CAD / SketchUp',               h:'—' }
      ],
      atividade: [
        { q:'24 / 04', p:'Projeto em andamento — fase de materiais e iluminação.' }
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
      drive: '1tw_HTSwk5e0UFjGvF18HE8stjsNmjI7H',
      driveLinks: [
        { label: '🎨 Renders',         url: 'https://drive.google.com/drive/folders/1KpQgY4xj12Xk5k9MrM-_nBGFadZ7ETlk' },
        { label: '📄 Documentos',      url: 'https://drive.google.com/drive/folders/1wQZuZdjNbHyMWuEFKgmajcyUfPC3DpNL' },
        { label: '📐 Executivo',       url: 'https://drive.google.com/drive/folders/1NYxruBeHfHnZ1EW6PsR-Ah8HFSLHbLA1' },
        { label: '📁 Pasta do Projeto',url: 'https://drive.google.com/drive/folders/1tw_HTSwk5e0UFjGvF18HE8stjsNmjI7H' },
        { label: '📊 Planilha de Obra',url: 'https://drive.google.com/drive/folders/13DhVPqlYaTt36slHON4Nx9Y5ZBE5O-tz' },
        { label: '📅 Estimativas',     url: 'https://docs.google.com/spreadsheets/d/1iOHA436_Lh-iznuHS1z9E7DcyfQqWbq4/edit' }
      ],
      fases: [
        { st:'now', t:'Entrada / Briefing',      d:'Coleta de necessidades, alinhamento inicial e envio de proposta PRO-5.', q:'Em curso' },
        { st:'',    t:'Setup / Arquivos',         d:'A iniciar após assinatura da proposta.', q:'—' },
        { st:'',    t:'Base CAD / SketchUp',      d:'Planta do Edifício Navegantes — tipo 2.', q:'—' },
        { st:'',    t:'3D Inicial (volumetria)',   d:'A iniciar.', q:'—' },
        { st:'',    t:'Materiais e Iluminação',    d:'A definir com clientes.', q:'—' },
        { st:'',    t:'Render Final',              d:'A realizar.', q:'—' },
        { st:'',    t:'Executivo / Detalhamento',  d:'A iniciar.', q:'—' },
        { st:'',    t:'Finalização / Entrega',     d:'A entregar.', q:'—' }
      ],
      decisoes: [
        { t:'Aprovação da proposta PRO-5', d:'R$ 32.800 enviada em 17/04 · validade 17/05/2026' }
      ],
      arquivos: [
        { ic:'PDF', nm:'Planta Tipo 2 — Edifício Navegantes', mt:'Referência' },
        { ic:'PDF', nm:'Proposta PRO-5 (rascunho)', mt:'17 / 04' }
      ],
      equipe: [
        { i:'R', n:'Rodrigo', r:'Arquiteto titular', h:'—' },
        { i:'L', n:'Luana',   r:'Interiores',        h:'—' }
      ],
      atividade: [
        { q:'17 / 04', p:'<b>Rodrigo</b> emitiu proposta PRO-5 — R$ 32.800. Aguardando assinatura até 17/05.' }
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
      endereco: 'Place Santana SP — R. Carlos Escobar 141, Santana, SP, 02013-050',
      bairro: 'Santana · SP',
      complexidade: 'Média',
      status: 'Entregue / Concluído',
      fase: 'Pós-entrega (180 dias)',
      tags: ['Concluído', 'Residencial'],
      progresso: 100,
      etapas: '9 / 9',
      prazoInicio: '03 / 03 / 2026',
      prazoFinal: '14 / 04 / 2026',
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
      drive: '1yOLc6hI9yV6iGJevkLh_nhMc6U4nOqC4',
      driveLinks: [
        { label: '🎨 Renders',         url: 'https://drive.google.com/drive/folders/1t0ngBhElBpB7FIDKWBqNnxGEx1QDmAnM' },
        { label: '📄 Documentos',      url: 'https://drive.google.com/drive/folders/1wDmNu-o39e572WiWQgU_ompM-bijKZz2' },
        { label: '📐 Executivo',       url: 'https://drive.google.com/drive/folders/1fWGTVtYEheq1ZjoZI3x_OWZMht6bsKiE' },
        { label: '📁 Pasta do Projeto',url: 'https://drive.google.com/drive/folders/1yOLc6hI9yV6iGJevkLh_nhMc6U4nOqC4' },
        { label: '📊 Planilha de Obra',url: 'https://drive.google.com/drive/folders/1UtNqjirGhsdbheJwAbPkWKgyXLN4bWTY' },
        { label: '📅 Estimativas',     url: 'https://drive.google.com/drive/folders/1ZpDKd5CxjlkNBtC1gT88fKvhsFXryAoY' }
      ],
      fases: [
        { st:'done', t:'Setup / Arquivos',           d:'Pasta do projeto criada, arquivos organizados.', q:'03 / 03' },
        { st:'done', t:'Base CAD / SketchUp',        d:'Base técnica do APT Place Santana levantada.', q:'—' },
        { st:'done', t:'3D Inicial (volumetria)',     d:'Volumetria aprovada.', q:'—' },
        { st:'done', t:'Materiais e Iluminação',      d:'Paleta final aprovada com clientes.', q:'—' },
        { st:'done', t:'Render Final',                d:'Renders finalizados e entregues.', q:'02 / 04' },
        { st:'done', t:'Executivo / Detalhamento',   d:'Executivo concluído, planta demolir/construir gerada com legendas.', q:'01 / 04' },
        { st:'done', t:'Detalhamento Marcenaria',    d:'Marcenaria detalhada e enviada ao fornecedor.', q:'—' },
        { st:'done', t:'Revisão Técnica',             d:'Revisão final concluída.', q:'—' },
        { st:'done', t:'Finalização / Entrega',       d:'Projeto entregue à família Bruna e Thiago. Pós-entrega ativo (180 dias).', q:'14 / 04' }
      ],
      decisoes: [],
      arquivos: [
        { ic:'IMG', nm:'Renders — Sala, Cozinha, Quartos', mt:'02 / 04' },
        { ic:'DWG', nm:'Executivo + Detalhamento Marcenaria', mt:'01 / 04' },
        { ic:'PDF', nm:'Memorial descritivo de entrega', mt:'14 / 04' }
      ],
      equipe: [
        { i:'R', n:'Rodrigo', r:'Arquiteto titular', h:'—' },
        { i:'L', n:'Luana',   r:'Interiores / Renders', h:'—' },
        { i:'B', n:'Breno',   r:'CAD / Executivo', h:'—' }
      ],
      atividade: [
        { q:'14 / 04', p:'<b>Rodrigo</b> registrou entrega final do apartamento a Bruna e Thiago.' },
        { q:'02 / 04', p:'<b>Rodrigo</b>: Imagens finalizadas para envio ao cliente — exceto quarto das meninas.' },
        { q:'01 / 04', p:'<b>Breno</b>: Planta demolir/construir gerada com legendas e indicações de remoção.' },
        { q:'30 / 03', p:'<b>Rodrigo</b>: Projeto atualizado, aguardando follow-up do cliente.' }
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
    },
    'FIN-03': {
      id: 'FIN-03',
      titulo: 'Consultoria exterior',
      clienteNome: 'Eliana',
      cliente: 'CLI-6',
      projetoId: 'P-06',
      unidade: 'Yvyra Lab',
      receita: 'Consultoria',
      forma: 'PIX',
      nf: 'Não necessário',
      total: 2660.00,
      recebido: 1596.00,
      aReceber: 1330.00,
      parcelas: [
        { n: 1, desc: '1ª parcela', venc: '06/04/2026', valor: 1596.00, status: 'Recebido' },
        { n: 2, desc: '2ª parcela', venc: '25/04/2026', valor: 1330.00, status: 'Pendente' }
      ]
    },
    'FIN-04': {
      id: 'FIN-04',
      titulo: 'RT marcenaria',
      clienteNome: 'Rafael Monici',
      cliente: 'CLI-4',
      projetoId: 'P-01',
      unidade: 'Yvyra Lab',
      receita: 'RT Responsabilidade Técnica',
      forma: 'PIX',
      nf: 'Não necessário',
      total: 2650.00,
      recebido: 1325.00,
      aReceber: 1325.00,
      parcelas: [
        { n: 1, desc: '1ª parcela — Entrada', venc: '28/01/2026', valor: 1325.00, status: 'Recebido' },
        { n: 2, desc: '2ª parcela',            venc: '01/05/2026', valor: 1325.00, status: 'Pendente' }
      ]
    },
    'FIN-05': {
      id: 'FIN-05',
      titulo: 'RT marcenaria (complemento)',
      clienteNome: 'Rafael Monici',
      cliente: 'CLI-4',
      projetoId: 'P-01',
      unidade: 'Yvyra Lab',
      receita: 'RT Responsabilidade Técnica',
      forma: 'PIX',
      nf: 'Não necessário',
      total: 380.00,
      recebido: 0,
      aReceber: 380.00,
      parcelas: [
        { n: 1, desc: '1ª parcela', venc: '30/04/2026', valor: 190.00, status: 'Pendente' }
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
