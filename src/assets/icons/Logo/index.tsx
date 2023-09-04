import Image from "next/image";
import React from "react";
import Logo from "./cxlab-logo.svg";
import Mark from "./cxlab-mark.svg";
import LogoDark from "./cxlab-logo-dark.svg";
import classNames from "@/utils/classNames";

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}

export const LogoIcon = ({ width, height }: Props): JSX.Element => {
  return (
    <Image className="h-auto object-fill"src={Logo} alt="logo" width={width || 50} priority />
  );
};

export const LogoMark = ({ width, height, className }: Props) => {
  return (
    <Image
      className={classNames("h-auto inline-block", `${(width || height) ? "" : "object-fill"}`, className || "")} 
      src={Mark} alt="mark" 
      width={width ?? 50} 
      priority 
    />
  );
};
