import { Text } from "@components/Text";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { ContainerActionsButton } from "../Rosario/styles";
import { COLORS, dolorosaPaixao, eternoPai, oracaoConclusiva, tercoMisericordia } from "@utils/constants";
import { ListItem } from "../Rosario/components/ListItem";
import { useState } from "react";
import { TModalPrayer } from "../Rosario";
import { ModalPrayer } from "../Rosario/components/ModalPrayer";

interface IMisericordia {
  goBack: () => void;
}


export function Misericordia(props: IMisericordia) {
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

  return (<ScrollView contentContainerStyle={{ padding: 20, alignItems: 'center' }} showsVerticalScrollIndicator={false}>

    <View style={{ alignItems: 'center' }}>
        <Text size={20} weight={700} color={COLORS.BLACK}>
          Terço a Divina Misericórdia
        </Text>

        <Text size={18} style={{ textAlign: 'justify', marginVertical: 20 }}>
          Em nome do Pai, do Filho e do Espírito Santo. Amém
        </Text>

        {tercoMisericordia.map(prayer => <ListItem isBlack item={prayer} onTapShowModal={onTapShowModal} />)}

        <Text size={20} weight={700} color={COLORS.BLACK} style={{ textAlign: 'justify', marginVertical: 20 }}>
          Nas contas grandes:
        </Text>

        <Text size={18} style={{ textAlign: 'justify' }}>
          {eternoPai}
        </Text>

        <Text size={20} weight={700} color={COLORS.BLACK} style={{ textAlign: 'justify', marginVertical: 20 }}>
          No fim do terço:
        </Text>

        <Text size={18} style={{ textAlign: 'justify' }}>
          {dolorosaPaixao}
        </Text>

        <Text size={20} weight={700} color={COLORS.BLACK} style={{ textAlign: 'justify', marginVertical: 20 }}>
          Oração conclusiva:
        </Text>

        <Text size={18} style={{ textAlign: 'justify' }}>
          {oracaoConclusiva}
        </Text>
    
    </View>

    <ContainerActionsButton style={{ marginTop: 20 }}>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name="arrow-back-circle-sharp" size={35} color={COLORS.BLACK} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name="arrow-forward-circle-sharp" size={35} color={COLORS.BLACK} />
      </TouchableOpacity>
    </ContainerActionsButton>
    <ModalPrayer visible={modalVisible} close={onTapCloseModal} item={prayerItemModal} />
  </ScrollView>)
}