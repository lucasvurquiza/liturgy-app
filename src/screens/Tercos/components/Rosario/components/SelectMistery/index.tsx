import { Text } from "@components/Text";
import { ContainerMisterys } from "../../styles";
import { COLORS, misteriosRosario } from "@utils/constants";
import { ListMisterys } from "../ListMisterys";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IOneMistery } from "@utils/typesAndInterfaces";

interface ISelectMistery {
  setMisteryPressed: (pressed: boolean) => void;
  setMisterySelected: (mistery: IOneMistery[]) => void;
}

export function SelectMistery(props: ISelectMistery) {
  const { setMisteryPressed, setMisterySelected } = props

  return (
    <ContainerMisterys>
      <Text color={COLORS.BLACK} weight={800}>Mistérios</Text>
      {misteriosRosario.map(item => <ListMisterys key={item.titleMistery} item={item} selectMistery={setMisterySelected} />)}
      <TouchableOpacity onPress={() => setMisteryPressed(false)}>
        <Ionicons name="arrow-back-circle-sharp" size={35} color={COLORS.BLACK} />
      </TouchableOpacity>
    </ContainerMisterys>
  )
}