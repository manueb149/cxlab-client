"use client"

import PropTypes from "prop-types";
import React, { useReducer } from "react";
import { Placeholder } from "../../assets/icons/Placeholder";
import { Placeholder67 } from "../../assets/icons/Placeholder67";
import "./style.css";

interface Props {
  iconTrailing?: boolean;
  iconLeading?: boolean;
  size: "xl" | "lg" | "two-xl" | "sm" | "md";
  hierarchy:
  | "tertiary-color"
  | "link-color"
  | "tertiary-gray"
  | "secondary-color"
  | "link-gray"
  | "primary"
  | "secondary-gray";
  icon: "dot-leading" | "only" | "default";
  destructive: boolean;
  stateProp: "disabled" | "focused" | "hover" | "default";
  className: any;
  text: string;
  override?: JSX.Element;
  textClassName?: any;
  icon1?: JSX.Element;
}

export const Button = ({
  iconTrailing = true,
  iconLeading = true,
  size,
  hierarchy,
  icon,
  destructive,
  stateProp,
  className,
  text = "Button CTA",
  override = <Placeholder67 className="placeholder-67" color="#475467" />,
  textClassName,
  icon1 = <Placeholder67 className="placeholder-67" color="#344054" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "md",
    hierarchy: hierarchy || "primary",
    icon: icon || "dot-leading",
    destructive: destructive,

    state: stateProp || "default",
  });

  return (
    <button
      className={`button ${state.size} ${state.hierarchy} ${state.icon} ${state.state} destructive-${state.destructive} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.icon === "dot-leading" && (
        <>
          <div className="dot">
            <div className="div" />
          </div>
          <div className="text">{text}</div>
        </>
      )}

      {state.icon === "default" && (
        <>
          <>{iconLeading && <>{icon1}</>}</>
          <div className={`text-wrapper ${textClassName}`}>{text}</div>
          <>{iconTrailing && <>{override}</>}</>
        </>
      )}

      {((state.icon === "only" && state.size === "lg") ||
        (state.icon === "only" && state.size === "md") ||
        (state.icon === "only" && state.size === "sm") ||
        (state.icon === "only" && state.size === "xl")) && (
        <Placeholder67
          className="placeholder-67"
          color={
            state.hierarchy === "primary"
              ? "white"
              : (!state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
              ? "#6941C6"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
                (state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused")
              ? "#B42318"
              : !state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                ["default", "focused"].includes(state.state)
              ? "#475467"
              : (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
              ? "#344054"
              : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
              ? "#D6BBFB"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
              ? "#FDA29B"
              : (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
              ? "#D0D5DD"
              : !state.destructive &&
                state.state === "hover" &&
                ["secondary-color", "tertiary-color"].includes(state.hierarchy)
              ? "#53389E"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
              ? "#912018"
              : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
              ? "#1D2939"
              : undefined
          }
        />
      )}

      {state.icon === "only" && state.size === "two-xl" && (
        <Placeholder
          className="placeholder-183"
          color={
            state.hierarchy === "primary"
              ? "white"
              : (!state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
              ? "#6941C6"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
                (state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused")
              ? "#B42318"
              : !state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                ["default", "focused"].includes(state.state)
              ? "#475467"
              : (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
              ? "#344054"
              : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
              ? "#D6BBFB"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
              ? "#FDA29B"
              : (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
              ? "#D0D5DD"
              : !state.destructive &&
                state.state === "hover" &&
                ["secondary-color", "tertiary-color"].includes(state.hierarchy)
              ? "#53389E"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
              ? "#912018"
              : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
              ? "#1D2939"
              : undefined
          }
        />
      )}
    </button>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

Button.propTypes = {
  iconTrailing: PropTypes.bool,
  iconLeading: PropTypes.bool,
  size: PropTypes.oneOf(["xl", "lg", "two-xl", "sm", "md"]),
  hierarchy: PropTypes.oneOf([
    "tertiary-color",
    "link-color",
    "tertiary-gray",
    "secondary-color",
    "link-gray",
    "primary",
    "secondary-gray",
  ]),
  icon: PropTypes.oneOf(["dot-leading", "only", "default"]),
  destructive: PropTypes.bool,
  stateProp: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
  text: PropTypes.string,
};
