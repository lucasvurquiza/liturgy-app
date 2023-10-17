import { Text } from "@components/Text";
import { ActivityIndicator, Image, ScrollView, TouchableOpacity } from "react-native";
import { ContainerActionsButton, ContainerPrayers } from "../../styles";
import { ListItem } from "../ListItem";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, agradecimento, salveRainha } from "@utils/constants";
import { ModalPrayer } from "../ModalPrayer";
import { IOneMistery } from "@utils/typesAndInterfaces";
import { TModalPrayer } from "../..";

interface IMistery {
  moreMistery: number;
  misterySelected: IOneMistery[];
  isLoadingImage: boolean;
  setIsLoadingImage: (loading: boolean) => void;
  onTapShowModal: (itemToShow: TModalPrayer) => void;
  onRemoveMoreMistery: () => void;
  onAddMoreMistery: () => void;
  modalVisible: boolean;
  onTapCloseModal: () => void;
  prayerItemModal: TModalPrayer | null;
  onEndRosario: () => void;
}

export function Mistery(props: IMistery) {
  const {
    isLoadingImage,
    misterySelected,
    modalVisible,
    moreMistery,
    onAddMoreMistery,
    onRemoveMoreMistery,
    onTapCloseModal,
    onTapShowModal,
    prayerItemModal,
    setIsLoadingImage,
    onEndRosario
  } = props

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20, alignItems: 'center' }}>
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
            key={prayer.title}
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
            <Ionicons name="close-circle-sharp" size={35} color={COLORS.BLACK} />
          </TouchableOpacity>
        </ContainerActionsButton>
      </>
      }
    </ScrollView>
  )
}