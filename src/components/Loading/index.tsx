import { ActivityIndicator } from "react-native";
import { ContainerHeader } from "./styles";
import { COLORS } from "@utils/constants";

export function Loading() {
  return (
    <ContainerHeader>
      <ActivityIndicator color={COLORS.YELLOW} size={100} />  
    </ContainerHeader>
  )
}