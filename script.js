const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No caminho para casa, você vê uma notícia sobre uma IA que consegue compor músicas inteiras idênticas às de artistas famosos e criar videoclipes sozinha. Qual a sua primeira reação?",
        alternativas: [
            {
                texto: "Acho perigoso para os artistas reais.",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Acho incrível as novas possibilidades!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Empolgado com o tema, seu professor de história pede um trabalho focado em como a tecnologia mudou a sociedade. Ele sugere que a pesquisa use ferramentas modernas. O que você decide fazer?",
        alternativas: [
            {
                texto: "Usa um assistente de IA para resumir pontos históricos complexos e organizar os tópicos do seu texto mais rápido.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Prefere pesquisar em livros digitais e sites confiáveis por conta própria para montar o argumento com suas palavras.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Durante a apresentação dos trabalhos, a turma começa a debater um dilema: o avanço das ferramentas de IA pode acabar com as profissões tradicionais ou vai apenas criar novos cargos no mercado de trabalho? Como você opina?",
        alternativas: [
            {
                texto: "Acredito que ela vai automatizar tarefas chatas e abrir espaço para profissões mais criativas e técnicas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Preocupo-me com o desemprego tecnológico e acho que os governos deveriam criar leis para proteger os trabalhadores humanos.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Para ilustrar o slide final da sua apresentação, você precisa de uma imagem conceitual que represente a união entre humanos e tecnologia. Como você resolve isso?",
        alternativas: [
            {
                texto: "Desenha uma colagem digital usando softwares básicos de edição geométrica e vetores.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Digita comandos detalhados em um gerador de imagens por IA para criar uma arte inédita.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Na semana seguinte, em um projeto de geografia, um colega entrega a parte dele feita inteiramente por IA. O texto está perfeito gramaticalmente, mas cita dados falsos que a IA inventou (alucinação). O que você faz?",
        alternativas: [
            {
                texto: "Defende que, como a IA escreveu bonito, o grupo deve entregar assim mesmo para economizar tempo.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Explica que a IA comete erros e que o grupo precisa checar as fontes e reescrever o trecho com análises críticas próprias.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();