"use client"

import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";
import { useReducer } from "react";
import { HugeIconInterfaceOutlineAgenda1 } from "../../assets/icons/HugeIconInterfaceOutlineAgenda1";
import { HugeIconInterfaceOutlineApps2 } from "../../assets/icons/HugeIconInterfaceOutlineApps2";
import { VuesaxLinearFlag4 } from "../../assets/icons/VuesaxLinearFlag4";
import { VuesaxLinearTickCircle } from "../../assets/icons/VuesaxLinearTickCircle";
import "./style.css";


interface Props {
  property1: "variant-5" | "variant-3" | "desktop-1" | "variant-4" | "desktop-2";
}

export const Component = ({ property1 }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "desktop-1",
  });

  return (
    <div className={`component property-1-5-${state.property1}`}>
      <div className="frame-19">
        <div className="button-5">
          <p className="text-5">Task Management – Why and How?</p>
        </div>
        <div className="text-wrapper-6">Projects That Work.</div>
        <p className="lorem-ipsum-is">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&#39;s standard dummy text ever since the 1500s
        </p>
      </div>
      {["desktop-1", "variant-3", "variant-5"].includes(state.property1) && (
        <>
          <div className="frame-20">
            <div className="div-2">
              {state.property1 === "desktop-1" && <>Dasboard</>}

              {state.property1 === "variant-3" && <>Projects</>}

              {state.property1 === "variant-5" && <>Tasks</>}
            </div>
            <div className="div-3">
              {state.property1 === "desktop-1" && (
                <p className="text-wrapper-35">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s standard dummy text ever since the 1500s
                </p>
              )}

              {["variant-3", "variant-5"].includes(state.property1) && (
                <p className="text-wrapper-35">
                  s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unch
                </p>
              )}
            </div>
          </div>
          <div
            className="frame-21"
            onClick={() => {
              dispatch("click_4778");
            }}
          >
            <div className="frame-22">
              <HugeIconInterfaceOutlineApps2
                className="instance-node"
                color={state.property1 === "desktop-1" ? "white" : "#475467"}
              />
              <div className="text-wrapper-7">Dashboard</div>
            </div>
            <p className="text-wrapper-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div
            className="frame-23"
            onClick={() => {
              dispatch("click");
            }}
          >
            <div className="frame-22">
              <HugeIconInterfaceOutlineAgenda1
                className="instance-node"
                color={state.property1 === "variant-3" ? "white" : "#475467"}
              />
              <div className="text-wrapper-9">Projects</div>
            </div>
            <p className="text-wrapper-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div
            className="frame-24"
            onClick={() => {
              dispatch("click_4788");
            }}
          >
            <div className="frame-22">
              <VuesaxLinearTickCircle
                className="instance-node"
                color={state.property1 === "variant-5" ? "white" : "#475467"}
              />
              <div className="text-wrapper-11">Tasks</div>
            </div>
            <p className="text-wrapper-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </>
      )}

      {["desktop-2", "variant-4"].includes(state.property1) && (
        <>
          <div className="frame-25">
            <div className="div-2">
              {state.property1 === "desktop-2" && <>Projects</>}

              {state.property1 === "variant-4" && <>Tasks</>}
            </div>
            <p className="div-3">
              s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
              unch
            </p>
          </div>
          <div
            className="frame-26"
            onClick={() => {
              dispatch("click_4745");
            }}
          >
            <div className="frame-22">
              <HugeIconInterfaceOutlineApps2 className="instance-node" color="#475467" />
              <div className="text-wrapper-13">Dashboard</div>
            </div>
            <p className="text-wrapper-14">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="frame-27">
            <div className="frame-22">
              <HugeIconInterfaceOutlineAgenda1
                className="instance-node"
                color={state.property1 === "variant-4" ? "#475467" : "white"}
              />
              <div className="text-wrapper-15">Projects</div>
            </div>
            <p className="text-wrapper-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="frame-28">
            <div className="frame-22">
              <VuesaxLinearTickCircle
                className="instance-node"
                color={state.property1 === "variant-4" ? "white" : "#475467"}
              />
              <div className="text-wrapper-17">Tasks</div>
            </div>
            <p className="text-wrapper-18">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </>
      )}

      <div className="frame-29">
        <div className="frame-22">
          <VuesaxLinearFlag4 className="instance-node" />
          <div className="text-wrapper-13">Agenda</div>
        </div>
        <p className="text-wrapper-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      {["desktop-2", "variant-4"].includes(state.property1) && (
        <>
          <div className="purple-circle" />
          <Image width={50} height={50}
            className="web-preview"
            alt="Web preview"
            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/web-preview-4.png"
          />
        </>
      )}

      {["desktop-1", "variant-3", "variant-5"].includes(state.property1) && (
        <div className="overlap-group-3">
          <div className="purple-circle-2" />
          <Image width={50} height={50}
            className="web-preview-2"
            alt="Web preview"
            src="https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/web-preview-5.png"
          />
        </div>
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "desktop-1") {
    switch (action) {
      case "click":
        return {
          property1: "desktop-2",
        };
    }
  }

  if (state.property1 === "desktop-2") {
    switch (action) {
      case "click_4745":
        return {
          property1: "desktop-1",
        };
    }
  }

  if (state.property1 === "variant-3") {
    switch (action) {
      case "click_4778":
        return {
          property1: "desktop-1",
        };

      case "click_4788":
        return {
          property1: "variant-4",
        };
    }
  }

  if (state.property1 === "variant-4") {
    switch (action) {
      case "click_4745":
        return {
          property1: "desktop-1",
        };
    }
  }

  if (state.property1 === "variant-5") {
    switch (action) {
      case "click_4778":
        return {
          property1: "desktop-1",
        };
    }
  }

  return state;
}

Component.propTypes = {
  property1: PropTypes.oneOf(["variant-5", "variant-3", "desktop-1", "variant-4", "desktop-2"]),
};
