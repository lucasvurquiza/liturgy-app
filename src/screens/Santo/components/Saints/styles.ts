import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme: { colors } }) => colors.YELLOW}25;
  padding: 5px;
  align-items: center;
  border-radius: 5px;
`;
