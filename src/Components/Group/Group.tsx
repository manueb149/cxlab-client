"use client"

import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";
import { useReducer } from "react";
import { ChevronDown3 } from "../../assets/icons/ChevronDown3";
import { Button } from "../Button";

import "./style.css";

interface Props {
  property1: "variant-4" | "variant-2" | "variant-3" | "default";
  className: any;
  headerClassName: any;
  buttonIcon: JSX.Element;
  override: JSX.Element;
  arrowRight: string;
}

export const Group = ({
  property1,
  className,
  headerClassName,
  buttonIcon = <ChevronDown3 className="chevron-down" color="#475467" />,
  override = <ChevronDown3 className="chevron-down" color="#475467" />,
  arrowRight = "https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/arrow-right-14.png",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`group property-1-${state.property1} ${className}`}>
      {["default", "variant-3"].includes(state.property1) && (
        <>
          <div className="dropdown-header">
            <div className="header">
              <div className="container">
                <Image width={50} height={50}
                  className="image"
                  alt="Image"
                  src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/image-2-7@2x.png"
                />
                <div className="content">
                  <div className="navigation">
                    <div
                      className="button-wrapper"
                      onClick={() => {
                        dispatch("click");
                      }}
                    >
                      <button className="button-2">
                        <div className="text-2">Solutions</div>
                        {state.property1 === "default" && (
                          <Image width={50} height={50}
                            className="chevron-down"
                            alt="Chevron down"
                            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/chevron-down-14.svg"
                          />
                        )}

                        {state.property1 === "variant-3" && <ChevronDown3 className="chevron-down" color="#475467" />}
                      </button>
                    </div>
                    <div className="button-wrapper">
                      <button className="button-2">
                        <div className="text-2">Services</div>
                        <ChevronDown3 className="chevron-down" color="#475467" />
                      </button>
                    </div>
                    <div
                      className="button-wrapper"
                      onClick={() => {
                        dispatch("click_5021");
                      }}
                    >
                      {state.property1 === "default" && (
                        <Button
                          className="button-instance"
                          destructive={false}
                          hierarchy="link-gray"
                          icon="default"
                          iconLeading={false}
                          override={<ChevronDown3 className="chevron-down" color="#475467" />}
                          size="lg"
                          stateProp="default"
                          text="Why Us?"
                        />
                      )}

                      {state.property1 === "variant-3" && (
                        <button className="button-2">
                          <div className="text-2">Why Us?</div>
                          <Image width={50} height={50}
                            className="chevron-down"
                            alt="Chevron down"
                            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/chevron-down-14.svg"
                          />
                        </button>
                      )}
                    </div>
                    <button className="button-2">
                      <div className="text-2">Contact Sales</div>
                    </button>
                  </div>
                </div>
                <div className="navigation-actions">
                  <div className="button-3">
                    {state.property1 === "default" && (
                      <>
                        <div className="text-3">Get a Quote</div>
                        <Image width={50} height={50}
                          className="arrow-right"
                          alt="Arrow right"
                          src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/arrow-right-14.png"
                        />
                      </>
                    )}

                    {state.property1 === "variant-3" && (
                      <button className="button-4">
                        <div className="text-3">Get a Quote</div>
                        <Image width={50} height={50}
                          className="arrow-right"
                          alt="Arrow right"
                          src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/arrow-right-14.png"
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <Image width={50} height={50}
                className="polygon"
                alt="Polygon"
                src={
                  state.property1 === "variant-3"
                    ? "https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/polygon-1-1.svg"
                    : "https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/polygon-1-2.svg"
                }
              />
              <div className="frame">
                {state.property1 === "default" && (
                  <>
                    <div className="frame-2">
                      <div className="frame-3">
                        <div className="frame-4">
                          <div className="frame-5">
                            <div className="text-wrapper-2">Explore</div>
                          </div>
                        </div>
                        <div className="frame-6">
                          <div className="frame-4">
                            <Image width={50} height={50}
                              className="fi"
                              alt="Fi"
                              src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/fi-1156732.svg"
                            />
                            <div className="frame-5">
                              <div className="frame-7">
                                <div className="text-wrapper-3">Five9-Contact Center</div>
                                <Image width={50} height={50}
                                  className="img"
                                  alt="Arrow right"
                                  src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/arrow-right-13.png"
                                />
                              </div>
                              <div className="text-wrapper-4">Simple and Secure</div>
                            </div>
                          </div>
                          <div className="frame-4">
                            <Image width={50} height={50}
                              className="fi"
                              alt="Fi"
                              src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/fi-9553463.svg"
                            />
                            <div className="frame-5">
                              <div className="frame-7">
                                <div className="text-wrapper-3">Salesforce-CRM</div>
                                <Image width={50} height={50}
                                  className="img"
                                  alt="Arrow right"
                                  src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/arrow-right-13.png"
                                />
                              </div>
                              <div className="text-wrapper-4">Simple and Secure</div>
                            </div>
                          </div>
                          <div className="frame-4">
                            <Image width={50} height={50}
                              className="fi"
                              alt="Fi"
                              src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/fi-4401479.svg"
                            />
                            <div className="frame-5">
                              <div className="frame-7">
                                <div className="text-wrapper-3">Zoom - Cloud collaboration</div>
                                <Image width={50} height={50}
                                  className="img"
                                  alt="Arrow right"
                                  src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/arrow-right-13.png"
                                />
                              </div>
                              <div className="text-wrapper-4">Simple and Secure</div>
                            </div>
                          </div>
                          <div className="frame-4">
                            <Image width={50} height={50}
                              className="fi"
                              alt="Fi"
                              src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/fi-159599.svg"
                            />
                            <div className="frame-5">
                              <div className="frame-7">
                                <div className="text-wrapper-3">Zoox Smart WIFI</div>
                                <Image width={50} height={50}
                                  className="img"
                                  alt="Arrow right"
                                  src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/arrow-right-13.png"
                                />
                              </div>
                              <div className="text-wrapper-4">Simple and Secure</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-8">
                        <div className="text-wrapper-2">Useful Links</div>
                        <div className="frame-9">
                          <div className="frame-10">
                            <Image width={50} height={50}
                              className="polygon-2"
                              alt="Polygon"
                              src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/polygon-2-6.svg"
                            />
                            <div className="frame-5">
                              <div className="text-wrapper-3">Webinars</div>
                            </div>
                          </div>
                          <div className="frame-10">
                            <Image width={50} height={50}
                              className="polygon-2"
                              alt="Polygon"
                              src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/polygon-2-5.svg"
                            />
                            <div className="frame-5">
                              <div className="text-wrapper-3">Blogs</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="frame-11">
                        <Image width={50} height={50}
                          className="image-2"
                          alt="Image"
                          src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/image-2-6@2x.png"
                        />
                        <div className="frame-12">
                          <p className="p">Save 30% with the Five9 Bundle</p>
                          <p className="text-wrapper-5">Get MindMeister and MeisterTask at a reduced price</p>
                        </div>
                        <div className="text-4">Find out more</div>
                        <Image width={50} height={50}
                          className="arrow-right"
                          alt="Arrow right"
                          src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/arrow-right-9.png"
                        />
                      </div>
                    </div>
                  </>
                )}

                {state.property1 === "variant-3" && (
                  <div className="frame-6">
                    <div className="frame-4">
                      <Image width={50} height={50}
                        className="fi"
                        alt="Fi"
                        src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/fi-1055189.svg"
                      />
                      <div className="frame-5">
                        <div className="text-wrapper-3">About us</div>
                        <div className="text-wrapper-4">Simple and Secure</div>
                      </div>
                    </div>
                    <div className="frame-4">
                      <Image width={50} height={50}
                        className="fi"
                        alt="Fi"
                        src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/fi-4415928.svg"
                      />
                      <div className="frame-5">
                        <div className="text-wrapper-3">Partners</div>
                        <div className="text-wrapper-4">Simple and Secure</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {["variant-2", "variant-4"].includes(state.property1) && (
        <div className="dropdown-header-2">
          {state.property1 === "variant-4" && (
            <>
              <div className="container-wrapper">
                <div className="container">
                  <Image width={50} height={50}
                    className="image"
                    alt="Image"
                    src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/image-2-7@2x.png"
                  />
                  <div className="content">
                    <div className="navigation">
                      <div
                        className="button-wrapper"
                        onClick={() => {
                          dispatch("click_5059");
                        }}
                      >
                        <button className="button-2">
                          <div className="text-2">Solutions</div>
                          <ChevronDown3 className="chevron-down" color="#475467" />
                        </button>
                      </div>
                      <div className="button-wrapper">
                        <button className="button-2">
                          <div className="text-2">Services</div>
                          <Image width={50} height={50}
                            className="chevron-down"
                            alt="Chevron down"
                            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/chevron-down-14.svg"
                          />
                        </button>
                      </div>
                      <div
                        className="button-wrapper"
                        onClick={() => {
                          dispatch("click_5069");
                        }}
                      >
                        <button className="button-2">
                          <div className="text-2">Why Us?</div>
                          <ChevronDown3 className="chevron-down" color="#475467" />
                        </button>
                      </div>
                      <button className="button-2">
                        <div className="text-2">Contact Sales</div>
                      </button>
                    </div>
                  </div>
                  <div className="navigation-actions">
                    <div className="navigation-actions">
                      <button className="button-4">
                        <div className="text-3">Get a Quote</div>
                        <Image width={50} height={50}
                          className="arrow-right"
                          alt="Arrow right"
                          src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/arrow-right-14.png"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <Image width={50} height={50}
                    className="polygon-3"
                    alt="Polygon"
                    src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/polygon-1.svg"
                  />
                  <div className="frame-13">
                    <div className="frame-2">
                      <div className="frame-9">
                        <div className="frame-14">
                          <Image width={50} height={50}
                            className="polygon-2"
                            alt="Polygon"
                            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/polygon-2-4.svg"
                          />
                          <div className="frame-5">
                            <div className="text-wrapper-3">Managed services</div>
                          </div>
                        </div>
                        <div className="frame-15">
                          <Image width={50} height={50}
                            className="polygon-2"
                            alt="Polygon"
                            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/polygon-2-3.svg"
                          />
                          <div className="frame-5">
                            <div className="text-wrapper-3">vCIO</div>
                          </div>
                        </div>
                        <div className="frame-15">
                          <Image width={50} height={50}
                            className="polygon-2"
                            alt="Polygon"
                            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/polygon-2-2.svg"
                          />
                          <div className="frame-16">
                            <div className="text-wrapper-3">Staff Augmentetion</div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-9">
                        <div className="frame-14">
                          <Image width={50} height={50}
                            className="polygon-2"
                            alt="Polygon"
                            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/polygon-2-1.svg"
                          />
                          <div className="frame-5">
                            <div className="text-wrapper-3">Strategic Consulting</div>
                          </div>
                        </div>
                        <div className="frame-17">
                          <Image width={50} height={50}
                            className="polygon-2"
                            alt="Polygon"
                            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/polygon-2.svg"
                          />
                          <div className="frame-5">
                            <div className="text-wrapper-3">Cloud Services</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-18">
                      <div className="frame-11">
                        <Image width={50} height={50}
                          className="image-2"
                          alt="Image"
                          src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/image-2-3@2x.png"
                        />
                        <div className="frame-12">
                          <p className="p">Save 30% with the Five9 Bundle</p>
                          <p className="text-wrapper-5">Get MindMeister and MeisterTask at a reduced price</p>
                        </div>
                        <div className="text-4">Find out more</div>
                        <Image width={50} height={50}
                          className="arrow-right"
                          alt="Arrow right"
                          src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/arrow-right-6.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {state.property1 === "variant-2" && (
            <div className={`header ${headerClassName}`}>
              <div className="container">
                <Image width={50} height={50}
                  className="image"
                  alt="Image"
                  src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/image-2-7@2x.png"
                />
                <div className="content">
                  <div className="navigation">
                    <div
                      className="button-wrapper"
                      onClick={() => {
                        dispatch("click_5127");
                      }}
                    >
                      <Button
                        className="button-instance"
                        destructive={false}
                        hierarchy="link-gray"
                        icon="default"
                        iconLeading={false}
                        override={buttonIcon}
                        size="lg"
                        stateProp="default"
                        text="Solutions"
                      />
                    </div>
                    <div
                      className="button-wrapper"
                      onClick={() => {
                        dispatch("click_5132");
                      }}
                    >
                      <button className="button-2">
                        <div className="text-2">Services</div>
                        <ChevronDown3 className="chevron-down" color="#475467" />
                      </button>
                    </div>
                    <div
                      className="button-wrapper"
                      onClick={() => {
                        dispatch("click_5137");
                      }}
                    >
                      <Button
                        className="button-instance"
                        destructive={false}
                        hierarchy="link-gray"
                        icon="default"
                        iconLeading={false}
                        override={override}
                        size="lg"
                        stateProp="default"
                        text="Why Us?"
                      />
                    </div>
                    <button className="button-2">
                      <div className="text-2">Contact Sales</div>
                    </button>
                  </div>
                </div>
                <div className="navigation-actions">
                  <div className="navigation-actions">
                    <button className="button-4">
                      <div className="text-3">Get a Quote</div>
                      <Image width={50} height={50} className="arrow-right" alt="Arrow right" src={arrowRight} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-3") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };

      case "click_5021":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-4") {
    switch (action) {
      case "click_5059":
        return {
          property1: "variant-2",
        };

      case "click_5069":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "click_5127":
        return {
          property1: "default",
        };

      case "click_5132":
        return {
          property1: "variant-4",
        };

      case "click_5137":
        return {
          property1: "variant-3",
        };
    }
  }

  return state;
}

Group.propTypes = {
  property1: PropTypes.oneOf(["variant-4", "variant-2", "variant-3", "default"]),
  arrowRight: PropTypes.string,
};
