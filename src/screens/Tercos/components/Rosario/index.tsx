import { Text } from "@components/Text";
import { COLORS, introducaoRosario } from "@utils/constants";
import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ModalPrayer } from "./components/ModalPrayer";
import { Ionicons } from '@expo/vector-icons'; 

interface IRosario {
  goBack: () => void;
}

interface TModalPrayer {
  title: string;
  prayer: string;
  isTouch: boolean;
}

export function Rosario(props: IRosario) {
  const { goBack } = props
  const [modalVisible, setModalVisible] = useState(false)
  const [prayerItemModal, setPrayerItemModal] = useState<null | TModalPrayer>(null)

  function onTapShowModal(itemToShow: TModalPrayer) {
    setModalVisible(true)
    setPrayerItemModal(itemToShow)
  }

  function onTapCloseModal() {
    setModalVisible(false)
    setPrayerItemModal(null)
  }

  return (
    // <View style={{ flex: 1 }}>
    <>
      <FlatList
        data={introducaoRosario}
        contentContainerStyle={{ padding: 20, gap: 20 }}
        renderItem={({ item }) => <TouchableOpacity
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
        </TouchableOpacity>}
        ListFooterComponent={<TouchableOpacity onPress={goBack}>
          <Ionicons name="arrow-back-circle-sharp" size={35} color={COLORS.BLACK} />
        </TouchableOpacity>}
      />
      <ModalPrayer visible={modalVisible} close={onTapCloseModal} item={prayerItemModal}/>
    </>
  )
}