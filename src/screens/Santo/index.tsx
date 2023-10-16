import { FlatList, View } from "react-native";
import { useEffect, useState } from "react";
import { ContainerHeader } from "./styles";
import { Saints } from "./components/Saints";
import { decode } from 'html-entities';
import { ISaint } from "@utils/typesAndInterfaces";
import { getSaintsOfDay, returnLinkToImage } from "@services/saintOfDay";
import { Text } from "@components/Text";
import { formatDate } from "@utils/formatDate";
import { Loading } from "@components/Loading";

export function Santo() {
  const [saintsToDay, setSaintsToDay] = useState<ISaint[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const date = new Date();
  let day: number | string = date.getDate();
  let month: number | string = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + day;

  const formattedToday = day + '/' + month + '/' + year;

  async function searchLiturgia() {
    setIsLoading(true);
    const saintsOfDay = await getSaintsOfDay(month, day)
    const saintsMapped = saintsOfDay?.map(item => ({
      name: item.name,
      ...(item.isFavorite && { isFavorite: item.isFavorite }),
      ...(item.text && { text: decode(item.text.replace(/<[^>]+>/g, '')) }),
      summary: item.summary,
      ...(item.image && { image: returnLinkToImage(item.image) }),
    }))
    setSaintsToDay(saintsMapped || null)
    setIsLoading(false);
  }

  useEffect(() => {
    searchLiturgia()
  }, [])

  return (
    <>
      {isLoading
        ? <Loading />
        : <View>
          <FlatList
            data={saintsToDay}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            renderItem={({ item }) => <Saints saintDay={item} key={item.name} />}
            ListHeaderComponentStyle={{ marginBottom: 20 }}
            ListHeaderComponent={<ContainerHeader>
              <Text size={70}>{formatDate(formattedToday)[0]}</Text>
              <Text size={40} weight={400}>{formatDate(formattedToday)[3].toString().slice(0, 3).toUpperCase()}</Text>
            </ContainerHeader>}
          />
        </View>}
    </>
  )
}