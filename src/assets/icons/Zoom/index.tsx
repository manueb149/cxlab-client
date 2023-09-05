import Image from "next/image";
import React from "react";
import Icon from "./zoom-icon.svg";
import Logo from "./zoom.svg"
import classNames from "@/utils/classNames";

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}

export const ZoomIcon = ({ width, height, className }: Props) => {
  return (
    <Image
      className={classNames("h-auto inline-block", `${(width || height) ? "" : "object-fill"}`, className || "")} 
      src={Icon} alt="ZoomIcon" 
      width={width ?? 50} 
      priority 
    />
  );
};

export const ZoomLogo = ({ width, height, className }: Props) => {
  return (
    <Image
      className={classNames("h-auto inline-block", `${(width || height) ? "" : "object-fill"}`, className || "")} 
      src={Logo} alt="ZoomLogo" 
      width={width ?? 50} 
      priority 
    />
  );
};
