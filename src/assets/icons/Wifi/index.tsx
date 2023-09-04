import Image from "next/image";
import React from "react";
import Icon from "./wifi-icon.svg";

interface Props {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}

export const WifiIcon = ({ width, height }: Props): JSX.Element => {
  return (
    <Image src={Icon} alt="WifiIcon" height={height || 30} width={width || 30} priority/>
  );
};
