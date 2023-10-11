import { ActivityIndicator, SafeAreaView, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { ContainerColor, ContainerDate } from "./styles";
import { ILiturgia } from "@utils/typesAndInterfaces";
import { COLORS, COLORS_READING, SECOND_NOT_EXIST, TYPES_RENDER } from "@utils/constants";
import { getLiturgiaOfDay } from "@services/liturgia";
import { Header } from "./components/Header";
import { Text } from "@components/Text";
import { formatDate } from "@utils/formatDate";
import { Reading } from "./components/Reading";
import { Salmo } from "./components/Salmo";
import { Loading } from "@components/Loading";

export function Liturgia() {
  const [liturgiaOfDay, setLiturgiaOfDay] = useState<ILiturgia | null>(null)
  const [itemPressed, setItemPressed] = useState<TYPES_RENDER>('primeiraLeitura')
  const [isLoading, setIsLoading] = useState(false)

  async function searchLiturgia() {
    setIsLoading(true)
    const liturgiaOfDay = await getLiturgiaOfDay()
    if (liturgiaOfDay?.segundaLeitura === SECOND_NOT_EXIST)
      delete liturgiaOfDay?.segundaLeitura
    setLiturgiaOfDay(liturgiaOfDay)
    setIsLoading(false)
  }

  useEffect(() => {
    searchLiturgia()
  }, [])

  return (
    <SafeAreaView>
      {isLoading ? <Loading />
      : liturgiaOfDay
        ? <View style={{ marginBottom: 120 }}>
          <Header
            arrayOfReading={liturgiaOfDay
              ? Object.keys(liturgiaOfDay)
              : []}
            onTap={setItemPressed}
            itemPressed={itemPressed}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 20,
            }}
          >
          <ContainerDate>
            <Text size={70} color={COLORS_READING[liturgiaOfDay.cor]}>{formatDate(liturgiaOfDay?.data)[0]}</Text>
            <View>
              <Text color={COLORS_READING[liturgiaOfDay.cor]}>{formatDate(liturgiaOfDay?.data)[3].toString().slice(0, 3).toUpperCase()}</Text>
              <Text color={COLORS_READING[liturgiaOfDay.cor]}>{formatDate(liturgiaOfDay?.data)[2]}</Text>
            </View>
          </ContainerDate>
          
          <ContainerColor>
            <Text size={15}>COR LITÚRGICA: {liturgiaOfDay.cor.toUpperCase()}</Text>
            <Text size={20} style={{ textAlign: 'center' }}>{liturgiaOfDay.liturgia}</Text>
          </ContainerColor>

          {itemPressed !== "salmo" && <Reading 
            itemPressed={itemPressed} 
            leitura={liturgiaOfDay[itemPressed]} />}
          {itemPressed === "salmo" && <Salmo 
            itemPressed={itemPressed} 
            salmo={liturgiaOfDay[itemPressed]} />}
          </ScrollView>
        </View>
        : null}
    </SafeAreaView>
  )
}