import Image from "next/image";
import React from "react";
import Icon from "./zoom-icon.svg";

interface Props {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}

export const ZoomIcon = ({ width, height }: Props): JSX.Element => {
  return (
    <Image src={Icon} alt="zoom-icon" height={height || 30} width={width || 30} priority/>
  );
};
