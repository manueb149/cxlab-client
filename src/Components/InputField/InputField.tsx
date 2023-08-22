"use client"

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import Image from "next/image";
import { AlertCircle104 } from "../../assets/icons/AlertCircle104";
import { ChevronDown3 } from "../../assets/icons/ChevronDown3";
import { Copy0113 } from "../../assets/icons/Copy0113";
import { Mail01 } from "../../assets/icons/Mail01";
import { XClose } from "../../assets/icons/XClose";
import { Button } from "../Button";
import { HelpIcon } from "../HelpIcon";

import "./style.css";

interface Props {
  helpIcon: boolean;
  hintText: boolean;
  label: boolean;
  size: "md" | "sm";
  type:
  | "icon-leading"
  | "leading-text"
  | "default"
  | "leading-dropdown"
  | "trailing-dropdown"
  | "tags"
  | "trailing-button"
  | "payment-input";
  destructive: boolean;
  stateProp: "focused" | "filled" | "placeholder" | "disabled";
  className: any;
  inputClassName: any;
  text: string;
}

export const InputField = ({
  helpIcon = true,
  hintText = true,
  label = true,
  size,
  type,
  destructive,
  stateProp,
  className,
  inputClassName,
  text = "olivia@untitledui.com",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "md",
    type: type || "icon-leading",
    destructive: destructive,

    state: stateProp || "placeholder",
  });

  return (
    <div
      className={`input-field type-${state.type} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="input-with-label">
        {label && (
          <div className="label">
            {["default", "icon-leading"].includes(state.type) && <>Email</>}

            {state.type === "payment-input" && <>Card number</>}

            {state.type === "tags" && <>Users</>}

            {state.type === "leading-dropdown" && <>Phone number</>}

            {["leading-text", "trailing-button"].includes(state.type) && <>Website</>}

            {state.type === "trailing-dropdown" && <>Sale amount</>}
          </div>
        )}

        <div
          className={`input type-0-${state.type} state-2-${state.state} size-5-${state.size} destructive-3-${state.destructive} ${inputClassName}`}
        >
          {["default", "icon-leading", "payment-input", "tags"].includes(state.type) && (
            <div className="content-2">
              {state.type === "icon-leading" && <Mail01 className="instance-node-2" />}

              {((state.destructive && state.state === "placeholder" && state.type === "tags") ||
                (state.state === "disabled" && state.type === "tags") ||
                (state.state === "filled" && state.type === "tags") ||
                (state.state === "focused" && state.type === "tags") ||
                state.type === "payment-input") && (
                  <div className="payment-method-icon">
                    {state.type === "payment-input" && (
                      <div className="mastercard">
                        <div className="overlap-group-5">
                          <Image width={50} height={50}
                            className="right-2"
                            alt="Right"
                            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/right-13.svg"
                          />
                          <Image width={50} height={50}
                            className="middle"
                            alt="Middle"
                            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/middle-13.svg"
                          />
                        </div>
                      </div>
                    )}

                    {state.type === "tags" && (
                      <>
                        <div className="tag">
                          <div className="content-3">
                            <div className="avatar" />
                            <div className="text-6">Olivia</div>
                          </div>
                          <div className="tag-x-close">
                            <XClose className="x-close" />
                          </div>
                        </div>
                        <div className="tag">
                          <div className="content-3">
                            <div className="avatar-2" />
                            <div className="text-6">Phoenix</div>
                          </div>
                          <div className="tag-x-close">
                            <XClose className="x-close" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}

              <div className="text-7">
                {["default", "icon-leading"].includes(state.type) && <>{text}</>}

                {state.type === "payment-input" && <>Card number</>}

                {((state.destructive && state.state === "placeholder" && state.type === "tags") ||
                  (state.state === "disabled" && state.type === "tags") ||
                  (state.state === "filled" && state.type === "tags") ||
                  (state.state === "focused" && state.type === "tags")) && <>Lana</>}

                {state.state === "placeholder" && state.type === "tags" && !state.destructive && <>Add users</>}
              </div>
            </div>
          )}

          {((!state.destructive && state.type === "default") ||
            (!state.destructive && state.type === "icon-leading") ||
            (!state.destructive && state.type === "payment-input") ||
            (!state.destructive && state.type === "tags")) && (
              <>
                <>
                  {helpIcon && (
                    <HelpIcon
                      className={`${state.state === "placeholder" && state.type === "icon-leading" && state.size === "sm"
                        ? "class"
                        : state.state === "placeholder" && state.size === "md" && state.type === "payment-input"
                          ? "class-2"
                          : state.state === "placeholder" && state.size === "sm" && state.type === "payment-input"
                            ? "class-3"
                            : state.state === "disabled" && state.type === "icon-leading" && state.size === "md"
                              ? "class-4"
                              : state.state === "disabled" && state.type === "icon-leading" && state.size === "sm"
                                ? "class-5"
                                : state.state === "disabled" && state.size === "md" && state.type === "payment-input"
                                  ? "class-6"
                                  : state.state === "disabled" && state.size === "sm" && state.type === "payment-input"
                                    ? "class-7"
                                    : state.type === "icon-leading" && state.size === "md" && state.state === "filled"
                                      ? "class-8"
                                      : state.type === "icon-leading" && state.size === "sm" && state.state === "filled"
                                        ? "class-9"
                                        : state.size === "md" && state.state === "filled" && state.type === "payment-input"
                                          ? "class-10"
                                          : state.state === "filled" && state.type === "payment-input" && state.size === "sm"
                                            ? "class-11"
                                            : state.type === "icon-leading" && state.size === "md" && state.state === "focused"
                                              ? "class-12"
                                              : state.type === "icon-leading" && state.size === "sm" && state.state === "focused"
                                                ? "class-13"
                                                : state.size === "md" && state.type === "payment-input" && state.state === "focused"
                                                  ? "class-14"
                                                  : state.size === "sm" && state.type === "payment-input" && state.state === "focused"
                                                    ? "class-15"
                                                    : state.state === "placeholder" && state.size === "md" && state.type === "default"
                                                      ? "class-16"
                                                      : state.state === "placeholder" && state.size === "sm" && state.type === "default"
                                                        ? "class-17"
                                                        : state.state === "placeholder" && state.type === "tags" && state.size === "md"
                                                          ? "class-18"
                                                          : state.state === "placeholder" && state.type === "tags" && state.size === "sm"
                                                            ? "class-19"
                                                            : state.state === "disabled" && state.size === "md" && state.type === "default"
                                                              ? "class-20"
                                                              : state.state === "disabled" && state.size === "sm" && state.type === "default"
                                                                ? "class-21"
                                                                : state.state === "disabled" && state.type === "tags" && state.size === "md"
                                                                  ? "class-22"
                                                                  : state.state === "disabled" && state.type === "tags" && state.size === "sm"
                                                                    ? "class-23"
                                                                    : state.size === "md" && state.state === "filled" && state.type === "default"
                                                                      ? "class-24"
                                                                      : state.state === "filled" && state.type === "default" && state.size === "sm"
                                                                        ? "class-25"
                                                                        : state.type === "tags" && state.size === "md" && state.state === "filled"
                                                                          ? "class-26"
                                                                          : state.type === "tags" && state.size === "sm" && state.state === "filled"
                                                                            ? "class-27"
                                                                            : state.size === "md" && state.type === "default" && state.state === "focused"
                                                                              ? "class-28"
                                                                              : state.size === "sm" && state.type === "default" && state.state === "focused"
                                                                                ? "class-29"
                                                                                : state.type === "tags" && state.size === "md" && state.state === "focused"
                                                                                  ? "class-30"
                                                                                  : state.type === "tags" && state.size === "sm" && state.state === "focused"
                                                                                    ? "class-31"
                                                                                    : "class-32"
                        }`}
                      open={false}
                      supportingText={false}
                      tooltip="top-arrow"
                    />
                  )}
                </>
              </>
            )}

          {((state.destructive && state.type === "default") ||
            (state.destructive && state.type === "icon-leading") ||
            (state.destructive && state.type === "payment-input") ||
            (state.destructive && state.type === "tags")) && (
              <AlertCircle104 className="alert-circle-117" color="#F04438" />
            )}

          {["leading-dropdown", "leading-text", "trailing-dropdown"].includes(state.type) && (
            <>
              <div className="dropdown">
                {["leading-dropdown", "leading-text"].includes(state.type) && (
                  <div className="text-8">
                    {state.type === "leading-text" && <>http://</>}

                    {state.type === "leading-dropdown" && <>US</>}
                  </div>
                )}

                {state.type === "leading-dropdown" && <ChevronDown3 className="instance-node-2" color="#667085" />}

                {state.type === "trailing-dropdown" && (
                  <div className="text-input">
                    <div className="leading-text-2">$</div>
                    <div className="text-9">1,000.00</div>
                  </div>
                )}

                {state.type === "trailing-dropdown" && !state.destructive && (
                  <>
                    <>
                      {helpIcon && (
                        <HelpIcon
                          className={`${state.state === "placeholder" && state.size === "sm"
                            ? "class-33"
                            : state.size === "md" && state.state === "disabled"
                              ? "class-34"
                              : state.state === "disabled" && state.size === "sm"
                                ? "class-35"
                                : state.size === "md" && state.state === "filled"
                                  ? "class-36"
                                  : state.state === "filled" && state.size === "sm"
                                    ? "class-37"
                                    : state.size === "md" && state.state === "focused"
                                      ? "class-38"
                                      : state.size === "sm" && state.state === "focused"
                                        ? "class-39"
                                        : "class-40"
                            }`}
                          open={false}
                          supportingText={false}
                          tooltip="top-arrow"
                        />
                      )}
                    </>
                  </>
                )}

                {state.type === "trailing-dropdown" && state.destructive && (
                  <AlertCircle104 className="alert-circle-117" color="#F04438" />
                )}
              </div>
              <div className="text-input-2">
                {!state.destructive && ["leading-dropdown", "leading-text"].includes(state.type) && (
                  <>
                    <div className="text-10">
                      {state.type === "leading-dropdown" && <>+1 (555) 000-0000</>}

                      {state.type === "leading-text" && <>www.untitledui.com</>}
                    </div>
                    <>
                      {helpIcon && (
                        <HelpIcon
                          className={`${state.state === "placeholder" && state.size === "sm" && state.type === "leading-dropdown"
                            ? "class-41"
                            : state.size === "md" && state.state === "disabled" && state.type === "leading-dropdown"
                              ? "class-42"
                              : state.state === "disabled" && state.size === "sm" && state.type === "leading-dropdown"
                                ? "class-43"
                                : state.size === "md" && state.state === "filled" && state.type === "leading-dropdown"
                                  ? "class-44"
                                  : state.size === "sm" && state.state === "filled" && state.type === "leading-dropdown"
                                    ? "class-45"
                                    : state.size === "md" && state.type === "leading-dropdown" && state.state === "focused"
                                      ? "class-46"
                                      : state.size === "sm" && state.type === "leading-dropdown" && state.state === "focused"
                                        ? "class-47"
                                        : state.state === "placeholder" && state.size === "md" && state.type === "leading-text"
                                          ? "class-48"
                                          : state.state === "placeholder" && state.size === "sm" && state.type === "leading-text"
                                            ? "class-49"
                                            : state.type === "leading-text" && state.size === "md" && state.state === "disabled"
                                              ? "class-50"
                                              : state.type === "leading-text" && state.state === "disabled" && state.size === "sm"
                                                ? "class-51"
                                                : state.type === "leading-text" && state.size === "md" && state.state === "filled"
                                                  ? "class-52"
                                                  : state.type === "leading-text" && state.size === "sm" && state.state === "filled"
                                                    ? "class-53"
                                                    : state.type === "leading-text" && state.size === "md" && state.state === "focused"
                                                      ? "class-54"
                                                      : state.type === "leading-text" && state.size === "sm" && state.state === "focused"
                                                        ? "class-55"
                                                        : "class-56"
                            }`}
                          open={false}
                          supportingText={false}
                          tooltip="top-arrow"
                        />
                      )}
                    </>
                  </>
                )}

                {state.destructive && ["leading-dropdown", "leading-text"].includes(state.type) && (
                  <>
                    <div className="text-11">
                      {state.type === "leading-dropdown" && <>+1 (555) 000-0000</>}

                      {state.type === "leading-text" && <>www.untitledui.com</>}
                    </div>
                    <AlertCircle104 className="alert-circle-117" color="#F04438" />
                  </>
                )}

                {state.type === "trailing-dropdown" && (
                  <>
                    <div className="dropdown-text">USD</div>
                    <ChevronDown3 className="instance-node-2" color="#667085" />
                  </>
                )}
              </div>
            </>
          )}

          {state.type === "trailing-button" && (
            <>
              <div className="text-input-3">
                <div className="text-12">www.untitledui.com</div>
                {!state.destructive && (
                  <>
                    <>
                      {helpIcon && (
                        <HelpIcon
                          className={`${state.state === "placeholder" && state.size === "sm"
                            ? "class-57"
                            : state.size === "md" && state.state === "disabled"
                              ? "class-58"
                              : state.state === "disabled" && state.size === "sm"
                                ? "class-59"
                                : state.size === "md" && state.state === "filled"
                                  ? "class-60"
                                  : state.state === "filled" && state.size === "sm"
                                    ? "class-61"
                                    : state.size === "md" && state.state === "focused"
                                      ? "class-62"
                                      : state.size === "sm" && state.state === "focused"
                                        ? "class-63"
                                        : "class-64"
                            }`}
                          open={false}
                          supportingText={false}
                          tooltip="top-arrow"
                        />
                      )}
                    </>
                  </>
                )}

                {state.destructive && <AlertCircle104 className="alert-circle-117" color="#F04438" />}
              </div>
              <Button
                className={`${!state.destructive || state.state === "focused" ? "class-65" : "class-66"}`}
                destructive={false}
                hierarchy="secondary-gray"
                icon="default"
                icon1={<Copy0113 className="instance-node-2" />}
                iconTrailing={false}
                size={state.size === "sm" ? "md" : "lg"}
                stateProp="default"
                text="Copy"
              />
            </>
          )}
        </div>
      </div>
      {hintText && (
        <div className={`hint-text type-5-${state.type} destructive-8-${state.destructive}`}>
          {(!state.destructive || state.type === "trailing-button") && (
            <p className="text-wrapper-35">This is a hint text to help user.</p>
          )}

          {((state.destructive && state.type === "default") ||
            (state.destructive && state.type === "icon-leading") ||
            (state.destructive && state.type === "leading-dropdown") ||
            (state.destructive && state.type === "leading-text") ||
            (state.destructive && state.type === "payment-input") ||
            (state.destructive && state.type === "tags") ||
            (state.destructive && state.type === "trailing-dropdown")) && (
              <p className="text-wrapper-35">This is an error message.</p>
            )}
        </div>
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "focused",
          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "focused",
          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "focused",
          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "focused",
          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "focused",
          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "focused",
          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "focused",
          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "focused",
          type: "payment-input",
        };
    }
  }

  if (state.destructive === false && state.size === "md" && state.state === "filled" && state.type === "icon-leading") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "placeholder",
          type: "icon-leading",
        };
    }
  }

  if (state.destructive === false && state.size === "sm" && state.state === "filled" && state.type === "icon-leading") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "placeholder",
          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "placeholder",
          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "placeholder",
          type: "payment-input",
        };
    }
  }

  if (state.destructive === true && state.size === "md" && state.state === "filled" && state.type === "icon-leading") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "placeholder",
          type: "icon-leading",
        };
    }
  }

  if (state.destructive === true && state.size === "sm" && state.state === "filled" && state.type === "icon-leading") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "placeholder",
          type: "icon-leading",
        };
    }
  }

  if (state.destructive === true && state.size === "md" && state.state === "filled" && state.type === "payment-input") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "placeholder",
          type: "payment-input",
        };
    }
  }

  if (state.destructive === true && state.size === "sm" && state.state === "filled" && state.type === "payment-input") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "placeholder",
          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "filled",
          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "filled",
          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "filled",
          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "filled",
          type: "payment-input",
        };
    }
  }

  if (state.destructive === true && state.size === "md" && state.state === "focused" && state.type === "icon-leading") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "filled",
          type: "icon-leading",
        };
    }
  }

  if (state.destructive === true && state.size === "sm" && state.state === "focused" && state.type === "icon-leading") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "filled",
          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "filled",
          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "filled",
          type: "payment-input",
        };
    }
  }

  if (state.destructive === false && state.size === "md" && state.state === "placeholder" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "focused",
          type: "default",
        };
    }
  }

  if (state.destructive === false && state.size === "sm" && state.state === "placeholder" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "focused",
          type: "default",
        };
    }
  }

  if (state.destructive === false && state.size === "md" && state.state === "placeholder" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "focused",
          type: "tags",
        };
    }
  }

  if (state.destructive === false && state.size === "sm" && state.state === "placeholder" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "focused",
          type: "tags",
        };
    }
  }

  if (state.destructive === true && state.size === "md" && state.state === "placeholder" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "focused",
          type: "default",
        };
    }
  }

  if (state.destructive === true && state.size === "sm" && state.state === "placeholder" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "focused",
          type: "default",
        };
    }
  }

  if (state.destructive === true && state.size === "md" && state.state === "placeholder" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "focused",
          type: "tags",
        };
    }
  }

  if (state.destructive === true && state.size === "sm" && state.state === "placeholder" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "focused",
          type: "tags",
        };
    }
  }

  if (state.destructive === false && state.size === "md" && state.state === "filled" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "placeholder",
          type: "default",
        };
    }
  }

  if (state.destructive === false && state.size === "sm" && state.state === "filled" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "placeholder",
          type: "default",
        };
    }
  }

  if (state.destructive === false && state.size === "md" && state.state === "filled" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "placeholder",
          type: "tags",
        };
    }
  }

  if (state.destructive === false && state.size === "sm" && state.state === "filled" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "placeholder",
          type: "tags",
        };
    }
  }

  if (state.destructive === true && state.size === "md" && state.state === "filled" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "placeholder",
          type: "default",
        };
    }
  }

  if (state.destructive === true && state.size === "sm" && state.state === "filled" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "placeholder",
          type: "default",
        };
    }
  }

  if (state.destructive === true && state.size === "md" && state.state === "filled" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "placeholder",
          type: "tags",
        };
    }
  }

  if (state.destructive === true && state.size === "sm" && state.state === "filled" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "placeholder",
          type: "tags",
        };
    }
  }

  if (state.destructive === false && state.size === "md" && state.state === "focused" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "filled",
          type: "default",
        };
    }
  }

  if (state.destructive === false && state.size === "sm" && state.state === "focused" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "filled",
          type: "default",
        };
    }
  }

  if (state.destructive === false && state.size === "md" && state.state === "focused" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "filled",
          type: "tags",
        };
    }
  }

  if (state.destructive === false && state.size === "sm" && state.state === "focused" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "filled",
          type: "tags",
        };
    }
  }

  if (state.destructive === true && state.size === "md" && state.state === "focused" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "filled",
          type: "default",
        };
    }
  }

  if (state.destructive === true && state.size === "sm" && state.state === "focused" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "filled",
          type: "default",
        };
    }
  }

  if (state.destructive === true && state.size === "md" && state.state === "focused" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "filled",
          type: "tags",
        };
    }
  }

  if (state.destructive === true && state.size === "sm" && state.state === "focused" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "filled",
          type: "tags",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "focused",
          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "focused",
          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "focused",
          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "focused",
          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "placeholder",
          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "placeholder",
          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "placeholder",
          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "placeholder",
          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "filled",
          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "filled",
          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "filled",
          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "filled",
          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "focused",
          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "focused",
          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "focused",
          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "focused",
          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "focused",
          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "focused",
          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "focused",
          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "focused",
          type: "leading-text",
        };
    }
  }

  if (state.destructive === false && state.size === "md" && state.state === "filled" && state.type === "leading-text") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "placeholder",
          type: "leading-text",
        };
    }
  }

  if (state.destructive === false && state.size === "sm" && state.state === "filled" && state.type === "leading-text") {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "placeholder",
          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "placeholder",
          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "placeholder",
          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "placeholder",
          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "placeholder",
          type: "trailing-button",
        };
    }
  }

  if (state.destructive === true && state.size === "md" && state.state === "filled" && state.type === "leading-text") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "placeholder",
          type: "leading-text",
        };
    }
  }

  if (state.destructive === true && state.size === "sm" && state.state === "filled" && state.type === "leading-text") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "placeholder",
          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "filled",
          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "filled",
          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "filled",
          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "filled",
          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "filled",
          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "filled",
          type: "trailing-button",
        };
    }
  }

  if (state.destructive === true && state.size === "md" && state.state === "focused" && state.type === "leading-text") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "filled",
          type: "leading-text",
        };
    }
  }

  if (state.destructive === true && state.size === "sm" && state.state === "focused" && state.type === "leading-text") {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "filled",
          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "focused",
          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "focused",
          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "focused",
          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "focused",
          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "placeholder",
          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "placeholder",
          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "placeholder",
          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "placeholder",
          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "md",
          state: "filled",
          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,
          size: "sm",
          state: "filled",
          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "md",
          state: "filled",
          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,
          size: "sm",
          state: "filled",
          type: "trailing-dropdown",
        };
    }
  }

  return state;
}

InputField.propTypes = {
  helpIcon: PropTypes.bool,
  hintText: PropTypes.bool,
  label: PropTypes.bool,
  size: PropTypes.oneOf(["md", "sm"]),
  type: PropTypes.oneOf([
    "icon-leading",
    "leading-text",
    "default",
    "leading-dropdown",
    "trailing-dropdown",
    "tags",
    "trailing-button",
    "payment-input",
  ]),
  destructive: PropTypes.bool,
  stateProp: PropTypes.oneOf(["focused", "filled", "placeholder", "disabled"]),
  text: PropTypes.string,
};
