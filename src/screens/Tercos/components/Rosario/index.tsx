import { Text } from "@components/Text";
import { COLORS, introducaoRosario, misteriosRosario } from "@utils/constants";
import { useState } from "react";
import { FlatList, Image, ScrollView, TouchableOpacity, View } from "react-native";
import { ModalPrayer } from "./components/ModalPrayer";
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from "./components/ListItem";
import { ListMisterys } from "./components/ListMisterys";
import { IOneMistery } from "@utils/typesAndInterfaces";
import { ActivityIndicator } from "react-native";

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
    if (moreMistery < 4) setMoreMistery(moreMistery + 1)
    else console.log('fim')
  }

  function onRemoveMoreMistery() {
    setIsLoadingImage(false)
    if (moreMistery > 0) setMoreMistery(moreMistery - 1)
    else setMisterySelected(null)
  }

  return (
    <>
      {!misterySelected ?
        !misteryPressed ? <>
          <FlatList
            data={introducaoRosario}
            contentContainerStyle={{ padding: 20, gap: 20 }}
            renderItem={({ item }) => <ListItem item={item} onTapShowModal={onTapShowModal} />}
            ListFooterComponent={<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={goBack}>
                <Ionicons name="arrow-back-circle-sharp" size={35} color={COLORS.BLACK} />
              </TouchableOpacity>
              <TouchableOpacity style={{ justifyContent: 'center', borderBottomWidth: 1, borderColor: COLORS.BLACK }} onPress={() => setMisteryPressed(true)}>
                <Text size={15} weight={500} color={COLORS.BLACK}>Mistérios do dia</Text>
              </TouchableOpacity>
            </View>}
          />
          <ModalPrayer visible={modalVisible} close={onTapCloseModal} item={prayerItemModal} />
        </> : <View style={{ alignItems: 'center', padding: 20, gap: 20 }}>
          <Text color={COLORS.BLACK} weight={800} >Mistérios</Text>
          {misteriosRosario.map(item => <ListMisterys key={item.titleMistery} item={item} selectMistery={setMisterySelected} />)}
          <TouchableOpacity onPress={() => setMisteryPressed(false)}>
            <Ionicons name="arrow-back-circle-sharp" size={35} color={COLORS.BLACK} />
          </TouchableOpacity>
        </View>
        : <ScrollView contentContainerStyle={{ padding: 20, alignItems: 'center' }}>
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
          <View style={{ alignItems: 'center', gap: 10, marginBottom: 20 }}>
            {misterySelected[moreMistery].prayers.map(prayer => <Text key={prayer.title} size={18} weight={700} color={COLORS.BLACK}>
              {prayer.title === 'Ave-Maria' && '10 '}{prayer.title}{prayer.title === 'Ave-Maria' && 's'}{prayer.isTouch && '...'}
            </Text>)}
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <TouchableOpacity onPress={onAddMoreMistery}>
              <Ionicons name="add-circle" size={35} color={COLORS.BLACK} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onRemoveMoreMistery}>
              <Ionicons name="arrow-back-circle-sharp" size={35} color={COLORS.BLACK} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      }
    </>
  )
}