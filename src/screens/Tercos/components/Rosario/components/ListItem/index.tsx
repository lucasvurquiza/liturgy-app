import { Text } from "@components/Text";
import { COLORS } from "@utils/constants";
import { useState } from "react";
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
  isThree?: boolean
}

export function ListItem(props: IItem) {
  const { item, onTapShowModal, isBlack, showQuantity, isThree } = props

  const checkName = (name: string, isTouch: boolean) => {
    if (name === 'Ave-Maria') {
      if (showQuantity) return (`10 Ave-Marias${isTouch ? '...' : ''}`)
      else if (isThree) return (`3 Ave-Marias${isTouch ? '...' : ''}`)
      else return (`Ave-Maria${isTouch ? '...' : ''}`)
    } else return (`${name}${isTouch ? '...' : ''}`)
  }

  return (
    <TouchableOpacity
      style={{ alignItems: 'center' }}
      disabled={!item.isTouch}
      onPress={() => onTapShowModal(item)}>
      <Text size={18} weight={700} color={isBlack ? COLORS.BLACK : COLORS.GRAY}>
        {checkName(item.title, item.isTouch)}
      </Text>
      {!item.isTouch && <Text
        size={15}
        style={{ textAlign: 'justify' }}>
        {item.prayer}
      </Text>}
    </TouchableOpacity>
  )
}