"use client"

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import Image from "next/image";

import "./style.css";

interface Props {
  cursor?: boolean;
  open: boolean;
  supportingText: boolean;
  tooltip: "top-left" | "right" | "top-arrow" | "bottom" | "left" | "top-no-arrow" | "top-right";
  className: any;
}

export const HelpIcon = ({ cursor = true, open, supportingText, tooltip, className }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    open: open,

    supportingText: supportingText,

    tooltip: tooltip || "top-no-arrow",
  });

  return (
    <div
      className={`help-icon ${state.tooltip} open-${state.open} supporting-text-${state.supportingText} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {((state.open && state.tooltip === "left") ||
        (state.open && state.tooltip === "top-arrow") ||
        (state.open && state.tooltip === "top-left") ||
        (state.open && state.tooltip === "top-no-arrow") ||
        (state.open && state.tooltip === "top-right")) && (
          <>
            <div className="tooltip">
              {state.tooltip === "top-no-arrow" && (
                <div className="content-4">
                  <div className="text-13">
                    {!state.supportingText && <>This is a tooltip</>}

                    {state.supportingText && (
                      <>
                        <div className="text-14">This is a tooltip</div>
                        <p className="supporting-text">
                          Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user
                          understand meaning, function or alt-text.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              )}

              {["left", "top-arrow", "top-left", "top-right"].includes(state.tooltip) && (
                <>
                  <div className="content-5">
                    <div className="text-15">
                      {!state.supportingText && <>This is a tooltip</>}

                      {state.supportingText && (
                        <>
                          <div className="text-14">This is a tooltip</div>
                          <p className="supporting-text">
                            Tooltips are used to describe or identify an element. In most scenarios, tooltips help the
                            user understand meaning, function or alt-text.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  <Image width={50} height={50}
                    className="tooltip-2"
                    alt="Tooltip"
                    src={
                      state.supportingText && state.tooltip === "top-arrow"
                        ? "https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/tooltip-10.svg"
                        : state.tooltip === "top-right"
                          ? "https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/tooltip-9.svg"
                          : state.tooltip === "top-left"
                            ? "https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/tooltip-7.svg"
                            : state.tooltip === "left"
                              ? "https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/tooltip-1.svg"
                              : "https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/tooltip-11.svg"
                    }
                  />
                </>
              )}
            </div>
            <>
              {cursor && (
                <div className="cursor">
                  <div className="lines-wrapper">
                    <Image width={50} height={50}
                      className="lines"
                      alt="Lines"
                      src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/lines-13.svg"
                    />
                  </div>
                </div>
              )}
            </>
          </>
        )}

      {state.open && ["bottom", "right"].includes(state.tooltip) && (
        <div className="overlap">
          <div className="tooltip-3">
            <Image width={50} height={50}
              className="tooltip-4"
              alt="Tooltip"
              src={
                state.tooltip === "bottom" && state.supportingText
                  ? "https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/tooltip-4.svg"
                  : state.tooltip === "right"
                    ? "https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/tooltip-3.svg"
                    : "https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/tooltip-5.svg"
              }
            />
            <div className="content-6">
              <div className="text-16">
                {!state.supportingText && <>This is a tooltip</>}

                {state.supportingText && (
                  <>
                    <div className="text-14">This is a tooltip</div>
                    <p className="supporting-text">
                      Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user
                      understand meaning, function or alt-text.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          {cursor && (
            <div className="cursor-2">
              <div className="img-wrapper">
                <Image width={50} height={50}
                  className="lines"
                  alt="Lines"
                  src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/lines-13.svg"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        open: true,
      };

    case "mouse_leave":
      return {
        ...state,
        open: false,
      };
  }

  return state;
}

HelpIcon.propTypes = {
  cursor: PropTypes.bool,
  open: PropTypes.bool,
  supportingText: PropTypes.bool,
  tooltip: PropTypes.oneOf(["top-left", "right", "top-arrow", "bottom", "left", "top-no-arrow", "top-right"]),
};
