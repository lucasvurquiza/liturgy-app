import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme: { colors } }) => colors.GRAY};
  height: 50px;
  justify-content: center;
`;
