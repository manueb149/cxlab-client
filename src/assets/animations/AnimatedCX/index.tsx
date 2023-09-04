import Image from "next/image";
import React from "react";
import Icon from "./animatedCx.svg";

interface Props {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}

export const AnimatedCX = ({ width, height }: Props): JSX.Element => {
  return (
    <Image className="h-auto inline-block" src={Icon} alt="cc-icon" priority />
  );
};
