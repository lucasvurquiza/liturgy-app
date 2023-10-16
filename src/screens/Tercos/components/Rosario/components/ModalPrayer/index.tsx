import { Text } from "@components/Text";
import { COLORS } from "@utils/constants";
import { Modal, ScrollView } from "react-native";
import { ButtonFooter, Card, Container, Header } from "./styles";

interface IModal {
  visible: boolean;
  close: () => void;
  item: {
    title: string;
    prayer: string;
    isTouch: boolean;
  } | null
}

export function ModalPrayer(props: IModal) {
  const { visible, close, item } = props

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={close}>
      <Container>
        <Card>
          <ScrollView contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center'
          }}
          showsVerticalScrollIndicator={false}>
            <Header>
              <Text size={25} weight={500} color={COLORS.BLACK}>{item?.title}</Text>
            </Header>
            <Text size={20} weight={400} color={COLORS.BLACK}>{item?.prayer}</Text>
            <ButtonFooter onPress={close}>
              <Text size={15} weight={500} color={COLORS.BLACK}>OK</Text>
            </ButtonFooter>
          </ScrollView>
        </Card>
      </Container>
    </Modal>
  )
}