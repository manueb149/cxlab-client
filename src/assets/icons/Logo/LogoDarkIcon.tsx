"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LogoDark from "./cxlab-logo-dark.svg";
import LogoLight from "./cxlab-logo.svg";

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}

export const LogoDarkIcon = ({ width, height }: Props): JSX.Element => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => setTheme(e.matches ? 'dark' : 'light'))
  })
  return theme === 'dark'
    ? <Image className="h-auto text-orange-700" src={LogoDark} alt="logo dark" width={width || 50} priority />
    : <Image className="h-auto text-orange-700" src={LogoLight} alt="logo dark" width={width || 50} priority />
};

