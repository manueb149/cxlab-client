import Image from "next/image";
import React from "react";
import Logo from "./cxlab-logo.svg";
import Mark from "./cxlab-mark.svg";
import LogoDark from "./cxlab-logo-dark.svg";

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}

export const LogoIcon = ({ width, height }: Props): JSX.Element => {
  return (
    <Image src={Logo} alt="logo" height={height || 50} width={width || 50} priority />
  );
};

export const LogoDarkIcon = ({ width, height }: Props): JSX.Element => {
  return (
    <Image src={LogoDark} alt="logo dark" height={height || 50} width={width || 50} priority />
  );
};

export const LogoMark = ({ width, height }: Props): JSX.Element => {
  return (
    <Image src={Mark} alt="mark" objectFit={(width || height) ? "" : "fill"} width={width} height={height} priority />
  );
};
