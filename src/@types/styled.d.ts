import { ThemeType } from '../utils/constants';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
