import styled from 'styled-components/native';
import { COLORS } from '../../../../utils/constants';

export const Container = styled.View`
  background-color: ${({ theme: { colors } }) => colors.BROWN};
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 20px;
  gap: 10px;
`;

export const Item = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

type TLabel = {
  selected?: boolean;
}

export const Label = styled.Text<TLabel>`
  color: ${({ theme: { colors } }) => colors.WHITE};
  font-weight: 600;
  font-size: 15px;
  opacity: ${({ selected }) => selected ? 1 : 0.5};
`;
