import { Text } from "@components/Text";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity, View } from "react-native";
import {
  COLORS,
  dolorosaPaixao,
  eternoPai,
  oracaoConclusiva,
  tercoMisericordia
} from "@utils/constants";
import { ListItem } from "../Rosario/components/ListItem";
import { useState } from "react";
import { TModalPrayer } from "../Rosario";
import { ModalPrayer } from "../Rosario/components/ModalPrayer";
import { ContainerActionsButton } from "./styles";

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

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        alignItems: 'center'
      }}
      showsVerticalScrollIndicator={false}>

      <View style={{ alignItems: 'center' }}>
        <Text size={18} weight={700} color={COLORS.BLACK}>
          Terço a Divina Misericórdia
        </Text>

        <Text size={15} style={{ textAlign: 'justify', marginVertical: 20 }}>
          Em nome do Pai, do Filho e do Espírito Santo. Amém
        </Text>

        {tercoMisericordia.map(prayer => <ListItem key={prayer.title} isBlack item={prayer} onTapShowModal={onTapShowModal} />)}

        <Text size={18} weight={700} color={COLORS.BLACK} style={{ textAlign: 'justify', marginTop: 20 }}>
          Nas contas grandes:
        </Text>

        <Text size={15} style={{ textAlign: 'justify' }}>
          {eternoPai}
        </Text>

        <Text size={18} weight={700} color={COLORS.BLACK} style={{ textAlign: 'justify', marginTop: 20 }}>
          Nas contas pequenas:
        </Text>

        <Text size={15} style={{ textAlign: 'justify' }}>
          {dolorosaPaixao}
        </Text>

        <Text size={18} weight={700} color={COLORS.BLACK} style={{ textAlign: 'justify', marginTop: 20 }}>
          Ao fim de cada dezena:
        </Text>

        <Text size={15} style={{ textAlign: 'justify' }}>
          <Text weight={700} color={COLORS.BLACK} size={15} style={{ textAlign: 'justify' }}>3x </Text>
          Deus Santo, Deus Forte, Deus Imortal, tende piedade de nós e do mundo inteiro.
          {'\n\n'}
          Ó Sangue e Água que jorraste do coração de Jesus como fonte de misericórdia para nós, nós confiamos em vós.
        </Text>

        <Text size={18} weight={700} color={COLORS.BLACK} style={{ textAlign: 'justify', marginTop: 20 }}>
          Oração conclusiva:
        </Text>

        <Text size={15} style={{ textAlign: 'justify', marginBottom: 20 }}>
          {oracaoConclusiva}
        </Text>

      </View>

      <ContainerActionsButton>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="close-circle-sharp" size={35} color={COLORS.BLACK} />
        </TouchableOpacity>
      </ContainerActionsButton>
      <ModalPrayer visible={modalVisible} close={onTapCloseModal} item={prayerItemModal} />
    </ScrollView>
  )
}