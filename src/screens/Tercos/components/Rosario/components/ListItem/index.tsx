import { Text } from "@components/Text";
import { COLORS } from "@utils/constants";
import { TouchableOpacity } from "react-native";

type TItem = {
  title: string;
  prayer: string;
  isTouch: boolean;
}

interface IItem {
  item: TItem,
  onTapShowModal: (itemToShow: TItem) => void,
  isBlack?: boolean,
  showQuantity?: boolean,
}

export function ListItem(props: IItem) {
  const { item, onTapShowModal, isBlack, showQuantity } = props

  return (
    <TouchableOpacity
      style={{ alignItems: 'center' }}
      disabled={!item.isTouch}
      onPress={() => onTapShowModal(item)}>
        <Text size={18} weight={700} color={isBlack ? COLORS.BLACK : COLORS.GRAY}>
          {item.title === 'Ave-Maria' && showQuantity && '10 '}{item.title}{item.title === 'Ave-Maria' && showQuantity && 's'}{item.isTouch && '...'}
        </Text>
        {!item.isTouch && <Text 
            size={15} 
            style={{ textAlign: 'justify' }}>
              {item.prayer}
          </Text>}
    </TouchableOpacity>
  )
}