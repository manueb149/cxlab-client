import Image from "next/image";
import React from "react";
import IconGreen from "./right-arrow-green-icon.svg";
import IconBlue from "./right-arrrow-blue-icon.svg";
import IconOrange from "./right-arrrow-orange-icon.svg";
import classNames from "@/utils/classNames";

const ArrowIconColor = {
  green: IconGreen,
  blue: IconBlue,
  orange: IconOrange
}

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  variant?: keyof typeof ArrowIconColor
}

export const RightArrowIcon = ({ width, height, className, variant = 'orange' }: Props) => {
  return (
    <Image
      className={classNames("h-auto inline-block", `${(width || height) ? "" : "object-fill"}`, className || "")} 
      src={ArrowIconColor[variant]} alt="ArrowIcon" 
      width={width ?? 50} 
      priority 
    />
  );
};

