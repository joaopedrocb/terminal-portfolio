// types
import { TextsInterface } from '../../types';

export interface TextsContextInterface {
  texts: TextsInterface;
  changeTexts(texts: TextsInterface): void;
}

export interface TextsContextProviderPropsInterface {
  children: any;
}
