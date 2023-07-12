// types
import { ThemeInterface } from '../../types';

export interface ThemeContextInterface {
  theme: ThemeInterface;
  changeTheme(theme: ThemeInterface): void;
}

export interface ThemeContextProviderPropsInterface {
  children: any;
}
