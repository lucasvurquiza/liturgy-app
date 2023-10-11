import { Text } from "@components/Text";
import { TYPES_RENDER_LABEL } from "@utils/constants";
import { View } from "react-native";

type TProps = {
  leitura: {
    referencia: string;
    titulo: string;
    texto: string;
  } | null;
  itemPressed: keyof typeof TYPES_RENDER_LABEL;
}

export function Reading(props: TProps) {
  const { leitura, itemPressed } = props

  return (
    <View style={{ gap: 20 }}>
      <Text size={20}>{TYPES_RENDER_LABEL[itemPressed]} ({leitura?.referencia})</Text>
      <Text size={15} weight={500}>{leitura?.titulo}</Text>
      <Text size={15} weight={500}>{leitura?.texto}</Text>
    </View>
  )
}