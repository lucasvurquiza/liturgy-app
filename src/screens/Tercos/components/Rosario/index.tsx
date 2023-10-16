import { Text } from "@components/Text";
import { COLORS, agradecimento, introducaoRosario, misteriosRosario, salveRainha } from "@utils/constants";
import { useState } from "react";
import { FlatList, Image, ScrollView, TouchableOpacity, View } from "react-native";
import { ModalPrayer } from "./components/ModalPrayer";
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from "./components/ListItem";
import { ListMisterys } from "./components/ListMisterys";
import { IOneMistery } from "@utils/typesAndInterfaces";
import { ActivityIndicator } from "react-native";
import { ButtonMisterys, ContainerActionsButton, ContainerMisterys, ContainerPrayers } from "./styles";

interface IRosario {
  goBack: () => void;
}

export interface TModalPrayer {
  title: string;
  prayer: string;
  isTouch: boolean;
}

export function Rosario(props: IRosario) {
  const { goBack } = props
  const [modalVisible, setModalVisible] = useState(false)
  const [prayerItemModal, setPrayerItemModal] = useState<null | TModalPrayer>(null)
  const [misteryPressed, setMisteryPressed] = useState(false)
  const [misterySelected, setMisterySelected] = useState<null | IOneMistery[]>(null)
  const [moreMistery, setMoreMistery] = useState(0)
  const [isLoadingImage, setIsLoadingImage] = useState(false)

  function onTapShowModal(itemToShow: TModalPrayer) {
    setModalVisible(true)
    setPrayerItemModal(itemToShow)
  }

  function onTapCloseModal() {
    setModalVisible(false)
    setPrayerItemModal(null)
  }

  function onAddMoreMistery() {
    setIsLoadingImage(false)
    if (moreMistery <= 4) setMoreMistery(moreMistery + 1)
    else return
  }

  function onRemoveMoreMistery() {
    setIsLoadingImage(false)
    if (moreMistery > 0) setMoreMistery(moreMistery - 1)
    else setMisterySelected(null)
  }

  function onEndRosario() {
    setModalVisible(false)
    setPrayerItemModal(null)
    setMisteryPressed(false)
    setMisterySelected(null)
    setMoreMistery(0)
    setIsLoadingImage(false)
    goBack()
  }

  return (
    <>
      {!misterySelected ?
        !misteryPressed ? <>
          <FlatList
            data={introducaoRosario}
            contentContainerStyle={{ padding: 20, gap: 20 }}
            renderItem={({ item }) => <ListItem isBlack item={item} onTapShowModal={onTapShowModal} />}
            ListFooterComponent={<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={goBack}>
                <Ionicons name="arrow-back-circle-sharp" size={35} color={COLORS.BLACK} />
              </TouchableOpacity>
              <ButtonMisterys onPress={() => setMisteryPressed(true)}>
                <Text size={15} weight={500} color={COLORS.BLACK}>Mistérios do dia</Text>
              </ButtonMisterys>
            </View>}
          />
          <ModalPrayer visible={modalVisible} close={onTapCloseModal} item={prayerItemModal} />
        </> : <ContainerMisterys>
          <Text color={COLORS.BLACK} weight={800}>Mistérios</Text>
          {misteriosRosario.map(item => <ListMisterys key={item.titleMistery} item={item} selectMistery={setMisterySelected} />)}
          <TouchableOpacity onPress={() => setMisteryPressed(false)}>
            <Ionicons name="arrow-back-circle-sharp" size={35} color={COLORS.BLACK} />
          </TouchableOpacity>
        </ContainerMisterys>
        : <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20, alignItems: 'center' }}>
          {moreMistery <= 4 ? <>
            <Text size={20} weight={700} color={COLORS.BLACK}>
              {misterySelected[moreMistery].numberOfMistery}
            </Text>
            <Text size={18} weight={700} color={COLORS.BLACK}>{misterySelected[moreMistery].title}</Text>
            {isLoadingImage && <ActivityIndicator style={{ marginTop: 20 }} size={'large'} color={COLORS.YELLOW} />}
            <Image
              source={{ uri: misterySelected[moreMistery].image }}
              style={{
                ...(!isLoadingImage && { width: 180, height: 250, marginTop: 20 }),
                borderRadius: 5,
              }}
              onLoadStart={() => setIsLoadingImage(true)}
              onLoadEnd={() => setIsLoadingImage(false)}
            />
            <Text size={15} style={{ marginTop: 20, textAlign: 'justify', marginBottom: 20 }}>
              {misterySelected[moreMistery].body}
            </Text>
            <ContainerPrayers>
              {misterySelected[moreMistery].prayers.map(prayer => <ListItem
                isBlack
                showQuantity
                item={prayer}
                onTapShowModal={onTapShowModal} />)}
            </ContainerPrayers>
            <ContainerActionsButton>
              <TouchableOpacity onPress={onRemoveMoreMistery}>
                <Ionicons name="arrow-back-circle-sharp" size={35} color={COLORS.BLACK} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onAddMoreMistery}>
                <Ionicons name="arrow-forward-circle-sharp" size={35} color={COLORS.BLACK} />
              </TouchableOpacity>
            </ContainerActionsButton>
            <ModalPrayer visible={modalVisible} close={onTapCloseModal} item={prayerItemModal} />
          </> : <>
            <Text size={18} weight={700} color={COLORS.BLACK}>{agradecimento.title}</Text>
            <Text size={15} style={{ textAlign: 'justify', marginBottom: 20 }}>
              {agradecimento.prayer}
            </Text>
            <Text size={18} weight={700} color={COLORS.BLACK}>{salveRainha.title}</Text>
            <Text size={15} style={{ textAlign: 'justify', marginBottom: 20 }}>
              {salveRainha.prayer}
            </Text>
            <ContainerActionsButton>
              <TouchableOpacity onPress={onRemoveMoreMistery}>
                <Ionicons name="arrow-back-circle-sharp" size={35} color={COLORS.BLACK} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onEndRosario}>
                <Ionicons name="arrow-forward-circle-sharp" size={35} color={COLORS.BLACK} />
              </TouchableOpacity>
            </ContainerActionsButton>
          </>
          }
        </ScrollView>
      }
    </>
  )
}