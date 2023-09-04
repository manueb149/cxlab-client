import Image from "next/image";
import React from "react";
import Five9 from "./five9.svg";
import classNames from "@/utils/classNames";

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}

export const Five9Logo = ({ width, height, className }: Props) => {
  return (
    <Image
      className={classNames("h-auto inline-block", `${(width || height) ? "" : "object-fill"}`, className || "")} 
      src={Five9} alt="five9" 
      width={width ?? 50} 
      priority 
    />
  );
};
