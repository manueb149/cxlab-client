/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const VuesaxLinearTickCircle1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`vuesax-linear-tick-circle-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="#475467"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
        stroke="#475467"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path className="path" d="M0.5 23.5V0.5H23.5V23.5H0.5Z" opacity="0" stroke="#475467" />
    </svg>
  );
};
