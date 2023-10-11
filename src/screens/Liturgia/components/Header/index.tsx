import { TYPES_RENDER } from "@utils/constants";
import { Container, Item, Label } from "./styles";

type TProps = {
  arrayOfReading: string[];
  onTap: (item: TYPES_RENDER) => void;
  itemPressed: TYPES_RENDER;
}

export function Header(props: TProps) {
  const { arrayOfReading, onTap, itemPressed } = props

  return (
    arrayOfReading.length !== 0 && <Container>
      {arrayOfReading.includes('primeiraLeitura')
        && <Item onPress={() => onTap('primeiraLeitura')}>
          <Label selected={itemPressed === 'primeiraLeitura'}>1ª Leitura</Label>
        </Item>}
      {arrayOfReading.includes('salmo')
        && <Item onPress={() => onTap('salmo')}>
          <Label selected={itemPressed === 'salmo'}>Salmo</Label>
        </Item>}
      {arrayOfReading.includes('segundaLeitura')
        && <Item onPress={() => onTap('segundaLeitura')}>
          <Label selected={itemPressed === 'segundaLeitura'}>2ª Leitura</Label>
        </Item>}
      {arrayOfReading.includes('evangelho')
        && <Item onPress={() => onTap('evangelho')}>
          <Label selected={itemPressed === 'evangelho'}>Evangelho</Label>
        </Item>}
    </Container>
  )
}