import Image from "next/image";
import React from "react";
import Zoox from "./zoox.webp";
import classNames from "@/utils/classNames";

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}

export const ZooxLogo = ({ width, height, className }: Props) => {
  return (
    <Image
      className={classNames("h-auto inline-block", `${(width || height) ? "" : "object-fill"}`, className || "")} 
      src={Zoox} alt="ZooxLogo" 
      width={width ?? 50} 
      priority 
    />
  );
};
