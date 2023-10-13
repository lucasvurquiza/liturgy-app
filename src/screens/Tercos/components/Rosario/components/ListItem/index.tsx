import { Text } from "@components/Text";
import { TouchableOpacity } from "react-native";

type TItem = {
  title: string;
  prayer: string;
  isTouch: boolean;
}

interface IItem {
  item: TItem,
  onTapShowModal: (itemToShow: TItem) => void
}

export function ListItem(props: IItem) {
  const { item, onTapShowModal } = props

  return (
    <TouchableOpacity
      style={{ alignItems: 'center' }}
      disabled={!item.isTouch}
      onPress={() => onTapShowModal(item)}>
        <Text size={18} weight={700}>
          {item.title}{item.isTouch && '...'}
        </Text>
        {!item.isTouch && <Text 
            size={15} 
            style={{ textAlign: 'justify' }}>
              {item.prayer}
          </Text>}
    </TouchableOpacity>
  )
}