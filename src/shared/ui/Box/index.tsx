import {
  AlignItems,
  BoxStyleConstructService,
  Display,
  JustifyContent,
} from './BoxStyleConstructService';
import './style.css';

import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  id?: string;
  className?: string;

  display?: Display;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;

  flex?: number;
  flexDirection?: 'row' | 'column';
  gap?: string;

  margin?: string;
  padding?: string;
}>;

function Box(props: Props) {
  return (
    <div
      id={props.id}
      className={BoxStyleConstructService.constuct(props)}
      style={{ flex: props.flex, gap: props.gap, margin: props.margin, padding: props.padding }}
    >
      {props.children}
    </div>
  );
}

export default Box;
