import { NextPage } from 'next';
import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'lead' | 'label';
type Element = Variant | 'span' | 'figcaption' | 'blockquote' | 'label';
type Color = 'dark' | 'light' | 'primary';

interface Props {
  variant: Variant;
  element?: Element;
  color?: Color;
  [rest: string]: any;
}

const Typography: NextPage<Props> = ({
  variant,
  element = variant,
  color,
  children,
  ...rest
}) => {
  let styles: string;
  let textColor: string;
  let size: string;

  // Set color and font weight
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
    case 'label':
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
    case 'lead':
      switch (color) {
        case 'light':
          textColor = 'text-gray-200';
          break;
        case 'primary':
          textColor = 'text-sky-700';
          break;
        case 'dark':
        default:
          textColor = 'text-gray-600';
      }
      styles = `${textColor}`;
      break;
  }

  // Set size
  switch (variant) {
    case 'h1':
      size = 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl';
      break;
    case 'h2':
      size = 'text-2xl sm:text-3xl md:text-3xl lg:text-4xl';
      break;
    case 'h3':
      size = 'text-xl sm:text-2xl md:text-2xl lg:text-2xl';
      break;
    case 'h4':
      size = 'text-lg sm:text-xl md:text-xl lg:text-xl';
      break;
    case 'h5':
    case 'lead':
      element = 'p';
      size = 'text-base lg:text-lg';
      break;
    case 'h6':
    case 'label':
      size = 'text-sm';
      break;
    case 'p':
      size = 'text-base';
      break;
  }

  styles += ' ' + size;

  return React.createElement(element, { className: styles, ...rest }, children);
};

export default Typography;
