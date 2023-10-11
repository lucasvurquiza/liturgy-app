import { Text } from "@components/Text";
import { TYPES_RENDER_LABEL } from "@utils/constants";
import { View } from "react-native";

type TProps = {
  salmo: {
    referencia: string;
    refrao: string;
    texto: string;
  } | null;
  itemPressed: keyof typeof TYPES_RENDER_LABEL;
}

export function Salmo(props: TProps) {
  const { salmo, itemPressed } = props

  return (
    <View style={{ gap: 20 }}>
      <Text size={20}>{TYPES_RENDER_LABEL[itemPressed]} ({salmo?.referencia})</Text>
      <Text size={15} weight={500}>{salmo?.refrao}</Text>
      <Text size={15} weight={700}>{salmo?.refrao}</Text>
      <Text size={15} weight={500}>{salmo?.texto}</Text>
    </View>
  )
}