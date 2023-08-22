"use client"

import PropTypes from "prop-types";
import React from "react";
import { AlertCircle104 } from "../../assets/icons/AlertCircle104";
import { AlertCircle21 } from "../../assets/icons/AlertCircle21";
import { AlertCircle59 } from "../../assets/icons/AlertCircle59";
import { AlertCircle66 } from "../../assets/icons/AlertCircle66";
import { AlertCircle82 } from "../../assets/icons/AlertCircle82";

import "./style.css";

interface Props {
  size: "xl" | "xs" | "lg" | "sm" | "md";
  color: "warning" | "gray" | "success" | "primary" | "error";
  theme:
    | "dark-circle"
    | "light-square"
    | "dark-square"
    | "glass"
    | "light-circle-outline"
    | "modern"
    | "light-circle"
    | "mid-square";
  className: any;
  icon: JSX.Element;
}

export const FeaturedIcon = ({
  size,
  color,
  theme,
  className,
  icon = <AlertCircle82 className="alert-circle-82" color="#7F56D9" />,
}: Props): JSX.Element => {
  return (
    <div className={`featured-icon ${theme} size-1-${size} color-${color} ${className}`}>
      {(theme === "dark-circle" ||
        theme === "dark-square" ||
        theme === "light-circle-outline" ||
        theme === "light-circle" ||
        theme === "light-square" ||
        theme === "mid-square" ||
        theme === "modern") && <>{icon}</>}

      {theme === "glass" && (
        <div className="overlap-group-4">
          <div className="icon-background" />
          <div className="icon-glass">
            {size === "lg" && <AlertCircle66 className="alert-circle" color="white" />}

            {size === "md" && <AlertCircle59 className="alert-circle-59" color="white" />}

            {size === "sm" && <AlertCircle104 className="alert-circle-104" color="white" />}

            {size === "xs" && <AlertCircle21 className="alert-circle-21" color="white" />}

            {size === "xl" && <AlertCircle82 className="alert-circle-82" color="white" />}
          </div>
        </div>
      )}
    </div>
  );
};

FeaturedIcon.propTypes = {
  size: PropTypes.oneOf(["xl", "xs", "lg", "sm", "md"]),
  color: PropTypes.oneOf(["warning", "gray", "success", "primary", "error"]),
  theme: PropTypes.oneOf([
    "dark-circle",
    "light-square",
    "dark-square",
    "glass",
    "light-circle-outline",
    "modern",
    "light-circle",
    "mid-square",
  ]),
};
