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
