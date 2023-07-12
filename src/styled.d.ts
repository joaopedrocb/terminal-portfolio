// styled.d.ts
import 'styled-components';
// types
import { ThemeInterface } from '~/common/presentation/types';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
