import { DrawerNavigationOptions } from "@react-navigation/drawer";

export const LITURGIA_URL = "https://liturgia.up.railway.app";

export const SAINT_URL = "https://www.vaticannews.va";

export const COLORS = {
  YELLOW: '#F2A71B',
  WHITE: '#FFFFFF',
  BROWN: '#8C452B',
  GRAY: '#716A6E',
  BLACK: '#0D0D0D'
};

export type ThemeType = {
  colors: typeof COLORS;
};

export const DRAWER_STYLE: DrawerNavigationOptions = {
  headerStyle: {
    backgroundColor: COLORS.BROWN,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  headerTitleStyle: {
    fontWeight: '600'
  },
  headerTitleAlign: 'left',
  headerTintColor: COLORS.WHITE,
  drawerStyle: {
    backgroundColor: COLORS.BROWN,
  },
  drawerActiveBackgroundColor: 'transparent',
  drawerActiveTintColor: COLORS.YELLOW,
  drawerInactiveTintColor: COLORS.BLACK,
  drawerLabelStyle: {
    fontWeight: '800'
  }
};

export const SECOND_NOT_EXIST = 'Não há segunda leitura hoje!';

export type TYPES_RENDER = 'primeiraLeitura' | 'salmo' | 'segundaLeitura' | 'evangelho';

export const COLORS_READING = {
  Verde: '#008000',
  Branco: '#716A6E', 
  Vermelho: '#FF0000', 
  Roxo: '#8B008B', 
  Preto: '#0D0D0D',
  Rosa: '#FFC0CB'
}

export const TYPES_RENDER_LABEL = {
  primeiraLeitura: 'Primeira Leitura',
  salmo: 'Responsório', 
  segundaLeitura: 'Segunda Leitura', 
  evangelho: 'Evangelho', 
}

const aveMaria = {
  title: "Ave-Maria",
  prayer: "Avé Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém",
  isTouch: true
}

const paiNosso = {
  title: "Pai nosso",
  prayer: "Pai Nosso que estais nos Céus, santificado seja o vosso Nome, venha a nós o vosso Reino, seja feita a vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do Mal. Amém",
  isTouch: true
}

const gloriaPai = {
  title: "Glória ao Pai",
  prayer: "Glória ao Pai e ao Filho e ao Espírito Santo. Como era, no princípio, agora e sempre. Amém",
  isTouch: true
}

const jaculatoria = {
  title: "Jaculatória - Ó meu Jesus",
  prayer: "Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o Céu e socorrei principalmente aquelas que mais precisarem de vossa misericórdia. Amém",
  isTouch: true
}

export const agradecimento = {
  title: "Agradecimento",
  prayer: "Infinitas graças vos damos, ó Soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos maternais. Dignai-vos, agora e para sempre tomar-nos debaixo do vosso poderoso amparo e para mais vos agradecer, vos saudamos com uma Salve Rainha...",
  isTouch: false,
}

export const salveRainha = {
  title: "Salve Rainha",
  prayer: "Salve Rainha, Mãe de misericórdia, vida, doçura, esperança nossa, salve! A vós bradamos os degredados filhos de Eva, a vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, Advogada nossa, estes vossos olhos misericordiosos a nós volvei, e depois deste desterro, mostrai-nos Jesus. Bendito é o fruto do vosso ventre, ó clemente, ó piedosa, ó doce e sempre Virgem Maria. Rogai por nós Santa Mãe de Deus. Para que sejamos dignos das promessas de Cristo. Amém",
  isTouch: false,
}

export const creioEmDeus = {
  title: "Creio em Deus Pai todo-poderoso",
  prayer: "Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em Jesus Cristo, seu único Filho, Nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu na Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos; creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém",
  isTouch: true
}

export const introducaoRosario = [
  {
    title: "Sinal da Cruz",
    prayer: "Pelo sinal da santa cruz, livrai-nos, Deus nosso Senhor, dos nossos inimigos. Em nome do Pai, e do Filho e do Espírito Santo. Amém",
    isTouch: true
  },
  {
    title: "Oferecimento",
    prayer: "Divino Jesus, nós Vos oferecemos este terço que vamos rezar, meditando nos mistérios da Vossa Redenção. Concedei-nos, por intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as virtudes que nos são necessárias para bem rezá-lo e a graça de ganharmos as indulgências desta santa devoção. Oferecemos, particularmente, em desagravo dos pecados cometidos contra o Santíssimo Coração de Jesus e o Imaculado Coração de Maria, pela paz do mundo, pela Santa Igreja, pela santificação das famílias, (intenções que se quer incluir no Terço).",
    isTouch: false
  },
  {
    title: "Vinde Espírito Santo",
    prayer: "Vinde Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do Vosso Amor. Enviai o Vosso Espírito e tudo será criado e renovareis a face da terra. Oremos: Ó Deus que instruíste os corações dos vossos fiéis, com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo Espírito e gozemos da sua consolação.Por Cristo Senhor Nosso. Amém",
    isTouch: false
  },
  {
    title: "Oremos",
    prayer: "Ó Deus que instruístes os corações de vossos fiéis com a Luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo espírito e gozemos sempre de sua consolação. Por Cristo, Senhor Nosso. Amém",
    isTouch: true
  },
  paiNosso,
  aveMaria,
  gloriaPai
]

export const misteriosRosario = [
  {
    titleMistery: "Gozosos",
    dayOfWeek: "Segunda e Sábado",
    misterys: [
      {
        numberOfMistery: "1º Mistério Gozoso",
        title: "Anunciação",
        body: `Contemplamos a anunciação do anjo Gabriel à Nossa Senhora e a encarnação do verbo de Deus em seu ventre. "Eis aqui a serva do Senhor, faça-se em mim segundo a vossa palavra" - aqui vemos em Maria o despojamento, a humildade, o amor a Deus e a entrega de si mesma.`,
        image: "https://drive.google.com/uc?export=view&id=1JwGj7hzgU_K2KYfe3L2OMuhAYdZgilmj",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "2º Mistério Gozoso",
        title: "Anuncio da Boa-Nova",
        body: `Contemplamos a visitação de Nossa Senhora à Santa Isabel. "E partindo às pressas foi às montanhas ficar com sua prima que já de idade avançada estava grávida".... Isabel a saúda: Tu és bendita.. como posso merecer que a MÃE do meu Senhor venha me visitar, quando adentrastes pela porta a criança saltou em meu ventre. Maria responde: "Minha Alma glorifica o Senhor... Meu espírito exulta em Deus Meu Salvador!"`,
        image: "https://drive.google.com/uc?export=view&id=16l5Y9ylcUSCLX4RGdKkM46JMOs3wnAyt",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "3º Mistério Gozoso",
        title: "Jesus nasce em um gruta, em Belém",
        body: "Contemplamos o nascimento de Nosso Senhor Jesus Cristo em Belém. Um Deus tão grande e poderoso vem até nós... o verbo de Deus se faz carne, sai da sua divindade e se torna um pobre mortal semelhante a nós em tudo, menos no pecado.",
        image: "https://drive.google.com/uc?export=view&id=1weNRiRLflDIRQUqOaduJSw2gaxMPi7fM",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "4º Mistério Gozoso",
        title: "Apresentação de Jesus ao Templo",
        body: "Contemplamos a apresentação do Menino Jesus no Templo e a Purificação de Nossa Senhora. Uma espada de dor transpassará o vosso Coração.",
        image: "https://drive.google.com/uc?export=view&id=1U617zX0lUmYyyMxzrCuIWCTGsOC9wUTE",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "5º Mistério Gozoso",
        title: "A perda e o reencontro de Jesus",
        body: "Contemplamos a perda e o reencontro de Jesus no templo de Jerusalém. Maria e José perderam Jesus ainda menino aos 12 anos em Jerusalém e após três dias de dor e sofrimento o encontram no templo no meio de doutores da lei ensinando a doutrina do Pai.",
        image: "https://drive.google.com/uc?export=view&id=1XjBtA8_71JdcX08F8nm-A56VDqHkYXWo",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      }
    ]
  },
  {
    titleMistery: "Dolorosos",
    dayOfWeek: "Terça e Sexta",
    misterys: [
      {
        numberOfMistery: "1º Mistério Doloroso",
        title: "A agonia de Jesus",
        body: `Contemplamos a agonia Mortal de Nosso Senhor, quando suou sangue no Horto das Oliveiras. "Minha alma está triste a ponto de morrer, ficai aqui e vigiai. "Vigiai e orai para não cairdes em tentação, o espírito está pronto, mas a carne é fraca.".`,
        image: "https://drive.google.com/uc?export=view&id=1kVByMTpTA-e61802DwFrYmr_lgGNDD_s",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "2º Mistério Doloroso",
        title: "A flagelação de Jesus",
        body: "Contemplamos a flagelação de Nosso Senhor. O sofrimento – a humilhação o escárnio- a violência de um inocente.",
        image: "https://drive.google.com/uc?export=view&id=11jibZr-ghNKG0Q2P2OToclDJj9NCqK_Y",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "3º Mistério Doloroso",
        title: "A coroação de espinhos",
        body: "Contemplamos a coroação de espinhos de Nosso Senhor Jesus Cristo. Cada ponta de espinho... um pecado – em cada gota de sangue derramado o perdão.",
        image: "https://drive.google.com/uc?export=view&id=1ImTLRWfh0XZ9JfuyuEUsbD4xKQs2XO2e",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "4º Mistério Doloroso",
        title: "Jesus carrega a Cruz até o Calvário",
        body: "Contemplamos a subida dolorosa de Jesus carregando a Cruz para o Calvário. O peso dos pecados do mundo nos ombros abriram chagas que chegavam até os ossos.",
        image: "https://drive.google.com/uc?export=view&id=10WZI93NUZUo3-o6houNMglIb0d2akBQt",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "5º Mistério Doloroso",
        title: "Jesus morre na cruz",
        body: "Contemplamos a crucificação e morte de Nosso Senhor Jesus Cristo. Cruz, escândalo para os judeus, loucura para os gentios, consolo e sinal de fé para os cristãos.",
        image: "https://drive.google.com/uc?export=view&id=1R2wYqRBTnS8L_K9G-_w8Fyi4QNf2aqX6",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      }
    ]
  },
  {
    titleMistery: "Gloriosos",
    dayOfWeek: "Quarta e Domingo",
    misterys: [
      {
        numberOfMistery: "1º Mistério Glorioso",
        title: "A ressureição de Jesus",
        body: `Contemplamos a ressurreição de Jesus. A morte não é o fim para aqueles que crêem em Jesus. A vitória sobre a morte, a esperança na vida eterna, o envio a anunciar a boa-nova, a remissão dos pecados. A paz de Jesus àqueles que O seguem.`,
        image: "https://drive.google.com/uc?export=view&id=1yZKj-uRs6U6dAy_x_Yvz7eZXpjsTX_jW",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "2º Mistério Glorioso",
        title: "A ascenção do Senhor",
        body: "Contemplamos a ascensão de Nosso Senhor Jesus Cristo ao Céu. A volta ao Pai para preparar–nos um lugar e para cuidar de cada um de nós intercedendo junto a Deus pelo perdão de nossos pecados.",
        image: "https://drive.google.com/uc?export=view&id=162JsBGvUJAUrmsQ5AJMkClDAl5sQmfBV",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "3º Mistério Glorioso",
        title: "A descida do Espírito Santo sobre os Apóstolos",
        body: "Contemplamos a vinda do Espírito Santo sobre os apóstolos reunidos com a Virgem Maria em Jerusalém. A vinda do Prometido, o Espírito Santo Paráclito: o advogado-defensor.",
        image: "https://drive.google.com/uc?export=view&id=1636GAzZyzwRK7ndKQsutgNB1dnncnlv2",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "4º Mistério Glorioso",
        title: "A assunção de Maria ao céu",
        body: "Contemplamos a assunção de Nossa Senhora ao Céu: o encontro da Mãe com o Filho no céu. Concebida sem pecado Virgem Santa merecedora de todas as graças.",
        image: "https://drive.google.com/uc?export=view&id=1MDOWsAkB8b8pVHKBA8EZqRLlhlGtyiHP",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "5º Mistério Glorioso",
        title: "A coroação de Maria por Jesus e os anjos",
        body: "Contemplamos a coroação de Nossa Senhora como Rainha de todos os anjos e santos.",
        image: "https://drive.google.com/uc?export=view&id=14FrzO4uxt2yPqy0kyuIg8kR6Jm3Beg15",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      }
    ]
  },
  {
    titleMistery: "Luminosos",
    dayOfWeek: "Quinta",
    misterys: [
      {
        numberOfMistery: "1º Mistério Luminoso",
        title: "O Batismo de Jesus",
        body: `Contemplamos o Batismo de Jesus Cristo no rio Jordão. Com atitude humilde ele nos mostra o caminho inicial da Salvação: a aceitação de Deus como nosso único Senhor.`,
        image: "https://drive.google.com/uc?export=view&id=17G72BQJ3b24xLpKe140e8taIkshjI7hz",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "2º Mistério Luminoso",
        title: "A auto-revelação de Jesus nas Bodas de Caná",
        body: "Contemplamos sua auto-revelação nas bodas de Caná, quando transformou água em vinho. Atendendo o pedido de Maria, Jesus inicia seu caminho em direção à Salvação dos Homens fazendo seu primeiro milagre.",
        image: "https://drive.google.com/uc?export=view&id=1dRPLqV82GPv7PJvNdb7BhOCvygkPCDxf",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "3º Mistério Luminoso",
        title: "O anúncio do reino de Deus",
        body: "Contemplamos o anúncio do Reino de Deus com o convite à conversão. Jesus nos convida a nos convertermos plenamente às leis de Deus em busca da felicidade eterna. O anúncio da Boa-Nova traz a esperança de um mundo melhor para todos os homens.",
        image: "https://drive.google.com/uc?export=view&id=16x1HTa2U3D8SX_P6xhfaW2P9OhcmQpmY",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "4º Mistério Luminoso",
        title: "A transfiguração",
        body: "Contemplamos a transfiguração de Nosso Senhor Jesus Cristo. Assim Ele mostra aos Apóstolos e a todos os seres humanos a Sua verdadeira essência divina. Sua Luz nos orienta a seguir os caminhos do bem.",
        image: "https://drive.google.com/uc?export=view&id=1a9LUuh2dYhmq5WTLrZ_4R9WGZWQ-y5JU",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      },
      {
        numberOfMistery: "5º Mistério Luminoso",
        title: "A instituição da Eucaristia",
        body: "Contemplamos a instituição da Eucaristia. Jesus nos dá seu próprio corpo e sangue como alimento espiritual para nossas almas. É a entrega total e a maior prova de Seu Amor por toda a humanidade. Mesmo sabendo que ia ser traído e entregue ao sacrifício Ele nos deu uma mostra suprema de Sua divindade.",
        image: "https://drive.google.com/uc?export=view&id=1OUPg20EWhHgtZcTZ3E-7t9BVXm9-ySP4",
        prayers: [
          paiNosso,
          aveMaria,
          gloriaPai,
          jaculatoria
        ]
      }
    ]
  },
]

export const tercoMisericordia = [
  paiNosso,
  aveMaria,
  creioEmDeus
]

export const eternoPai = 'Eterno Pai, eu Vos ofereço o Corpo e Sangue, a Alma e Divindade de Vosso diletíssimo Filho, Nosso Senhor Jesus Cristo, em expiação dos nossos pecados e do mundo inteiro.'

export const dolorosaPaixao = 'Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro.'

export const santoDeus = 'Deus Santo, Deus Forte, Deus Imortal, tende piedade de nós e do mundo inteiro.'

export const oracaoConclusiva = 'Deus, Pai Misericordioso, que revelou Teu amor em Teu Filho Jesus Cristo, e o derramou sobre nós no Espírito Santo, confiamos-Te hoje o destino do mundo e de cada homem. Dobre-se sobre nós pecadores, cure nossa fraqueza, vença todo o mal, deixe que todos os habitantes da Terra experimentem a Tua misericórdia, para que em Ti, o Deus Trino, possam sempre encontrar a fonte da esperança. Pai Eterno, pela dolorosa Paixão e Ressurreição de Teu Filho, tende piedade de nós e do mundo inteiro. Amém'