import { NextPage } from 'next';
import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type Element = Variant;
type Color = 'dark' | 'light' | 'primary';

interface Props {
  variant: Variant;
  element?: Element;
  color?: Color;
}

const Typography: NextPage<Props> = ({
  variant,
  element = variant,
  color,
  children,
}) => {
  let styles: string;
  let textColor: string;
  let size: string;

  // Set color
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      switch (color) {
        case 'light':
          textColor = 'text-white';
          break;
        case 'primary':
          textColor = 'text-sky-700';
          break;
        case 'dark':
        default:
          textColor = 'text-black';
      }
      styles = `${textColor} font-bold`;
      break;
    case 'p':
      switch (color) {
        case 'light':
          textColor = 'text-gray-200';
          break;
        case 'primary':
          textColor = 'text-sky-700';
          break;
        case 'dark':
        default:
          textColor = 'text-gray-500';
      }
      styles = `${textColor}`;
      break;
  }

  // Set size
  switch (variant) {
    case 'h1':
      size = 'text-5xl';
      break;
    case 'h2':
      size = 'text-3xl';
      break;
    case 'h3':
      size = 'text-2xl';
      break;
    case 'h4':
      size = 'text-xl';
      break;
    case 'h5':
      size = 'text-lg';
      break;
    case 'h6':
      size = 'text-base';
      break;
    case 'p':
      size = 'text-base';
      break;
  }

  styles += ' ' + size;

  return React.createElement(element, { className: styles }, children);
};

export default Typography;
