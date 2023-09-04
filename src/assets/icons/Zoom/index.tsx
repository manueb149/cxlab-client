import Image from "next/image";
import React from "react";
import Icon from "./zoom-icon.svg";
import Zoom from "./zoom.svg"
import classNames from "@/utils/classNames";

interface Props {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  className?: string;
}

export const ZoomIcon = ({ width, height }: Props): JSX.Element => {
  return (
    <Image src={Icon} alt="zoom-icon" height={height || 30} width={width || 30} priority/>
  );
};

export const ZoomLogo = ({ width, height, className }: Props) => {
  return (
    <Image
      className={classNames("h-auto inline-block", `${(width || height) ? "" : "object-fill"}`, className || "")} 
      src={Zoom} alt="ZoomLogo" 
      width={width ?? 50} 
      priority 
    />
  );
};
