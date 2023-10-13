import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme: { colors } }) => colors.YELLOW}60;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
`;
