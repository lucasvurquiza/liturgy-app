import styled from "styled-components/native";

export const ButtonMisterys = styled.TouchableOpacity`
  justify-content: center;
  border-bottom-width: 1px;
  border-color: ${({ theme: { colors } }) => colors.BLACK};
`;

export const ContainerMisterys = styled.TouchableOpacity`
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

export const ContainerPrayers = styled.View`
  align-items: center; 
  gap: 10px; 
  margin-bottom: 20px;
`;

export const ContainerActionsButton = styled.View`
  flex-direction: row; 
  justify-content: space-between; 
  width: 100%;
`;
