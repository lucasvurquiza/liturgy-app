import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme: { colors } }) => colors.BLACK}; 
  width: 100%; 
  height: 100%;
  opacity: 0.9;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  background-color: ${({ theme: { colors } }) => colors.WHITE};
  align-items: center;
  justify-content: center;
  margin-horizontal: 20px;
  padding-horizontal: 10px;
  border-radius: 5px;
  padding-vertical: 10px;
  gap: 10px;
  height: 90%;
`;

export const Header = styled.View`
  border-bottom-width: 1px;
  border-color: ${({ theme: { colors } }) => colors.BLACK}; 
`;

export const ButtonFooter = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: ${({ theme: { colors } }) => colors.BLACK}; 
`;