import { FlatList, TouchableOpacity, View } from "react-native";
import { ListItem } from "../ListItem";
import { COLORS, introducaoRosario } from "@utils/constants";
import { Ionicons } from "@expo/vector-icons";
import { ButtonMisterys } from "../../styles";
import { Text } from "@components/Text";
import { TModalPrayer } from "../..";

interface IIntroduction {
  onTapShowModal: (itemToShow: TModalPrayer) => void;
  goBack: () => void;
  setMisteryPressed: (pressed: boolean) => void;
}

export function Introduction(props: IIntroduction) {
  const { goBack, onTapShowModal, setMisteryPressed } = props

  return (
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
  )
}