import Image from "next/image";
import React from "react";
import Icon from "./crm-icon.svg";

interface Props {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}

export const CRMIcon = ({ width, height }: Props): JSX.Element => {
  return (
    <Image src={Icon} alt="crm-icon" height={height || 30} width={width || 30} priority/>
  );
};
