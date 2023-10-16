import { Text } from "@components/Text";
import { COLORS } from "@utils/constants";
import { TouchableOpacity } from "react-native";
import { Button } from "./styles";
import { IMisteryDay, IOneMistery } from "@utils/typesAndInterfaces";

interface IList {
  item: IMisteryDay;
  selectMistery: (mistery: IOneMistery[]) => void;
}

export function ListMisterys(props: IList) {
  const { item, selectMistery } = props

  return (
    <Button onPress={() => selectMistery(item.misterys)}>
      <Text
        color={COLORS.BLACK}
        size={20}>
        {item.titleMistery} ({item.dayOfWeek})
      </Text>
    </Button>
  )
}