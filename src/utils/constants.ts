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