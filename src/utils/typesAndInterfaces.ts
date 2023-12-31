import { COLORS_READING } from "./constants";

export interface ILiturgia {
  data: string;
  liturgia: string;
  cor: keyof typeof COLORS_READING;
  dia: string;
  oferendas: string;
  comunhao: string;
  primeiraLeitura: {
    referencia: string;
    titulo: string;
    texto: string;
  };
  segundaLeitura?: string | {
    referencia: string;
    titulo: string;
    texto: string;
  };
  salmo: {
    referencia: string;
    refrao: string;
    texto: string;
  };
  evangelho: {
    referencia: string;
    titulo: string;
    texto: string;
  };
}

export interface ISaint {
  name: string;
  isFavorite?: string;
  text?: string;
  summary: string;
  image?: string;
}

export interface IMisteryPrayer {
  title: string;
  prayer: string;
  isTouch: boolean;
}

export interface IOneMistery {
  numberOfMistery: string;
  title: string;
  body: string;
  image: string;
  prayers: IMisteryPrayer[];
}

export interface IMisteryDay {
  titleMistery: string;
  dayOfWeek: string;
  misterys: IOneMistery[];
}