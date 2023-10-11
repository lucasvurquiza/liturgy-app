import styled from 'styled-components/native';
import {Text as NativeText} from 'react-native';
import { COLORS } from '../utils/constants';

interface TextProps {
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  color?: string;
  size?: number;
}

export const Text = styled(NativeText)<TextProps>`
  color: ${({ color , theme: { colors } }) => color || colors.GRAY};
  font-size: ${({ size }) => size || 30}px;
  font-weight: ${({ weight }) => weight || 600};
`;
