import { Text } from "@components/Text";
import { Container } from "./styles";

interface IButton {
  label: string;
  onSelect?: () => void;
}

export function Button(props: IButton) {
  const { label, onSelect } = props

  return (
    <Container onPress={onSelect}>
      <Text size={20} style={{ paddingHorizontal: 20 }}>
        {label}
      </Text>
    </Container>
  )
}