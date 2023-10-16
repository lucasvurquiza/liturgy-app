import { Text } from "@components/Text";
import { Container } from "./styles";
import { COLORS } from "@utils/constants";

interface IButton {
  label: string;
  onSelect?: () => void;
}

export function Button(props: IButton) {
  const { label, onSelect } = props

  return (
    <Container onPress={onSelect}>
      <Text size={20} color={COLORS.BLACK} style={{ paddingHorizontal: 20 }}>
        {label}
      </Text>
    </Container>
  )
}