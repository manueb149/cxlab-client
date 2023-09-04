import Image from "next/image";
import React from "react";
import IconGreen from "./right-arrow-green-icon.svg";
import IconBlue from "./right-arrrow-blue-icon.svg";

interface Props {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  color?: 'blue' | 'green'
}

export const RightArrowIcon = ({ width, height, color }: Props): JSX.Element => {
  return (
    <Image
      src={color === 'green' ? IconGreen : IconBlue}
      alt="ArrowIcon"
      height={height || 30}
      width={width || 30}
    />
  )
};
