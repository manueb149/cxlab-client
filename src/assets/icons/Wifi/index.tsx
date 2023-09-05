import Image from "next/image";
import React from "react";
import Icon from "./wifi-icon.svg";
import classNames from "@/utils/classNames";
interface Props extends React.HTMLAttributes<HTMLImageElement> {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}

export const WifiIcon = ({ width, height, className }: Props) => {
  return (
    <Image
      className={classNames("h-auto inline-block", `${(width || height) ? "" : "object-fill"}`, className || "")} 
      src={Icon} alt="WifiIcon" 
      width={width ?? 50} 
      priority 
    />
  );
};
