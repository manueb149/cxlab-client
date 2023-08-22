/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const AlertCircle82 = ({ color = "#039855", className }: Props): JSX.Element => {
  return (
    <svg
      className={`alert-circle-82 ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M14 9.33331V14M14 18.6666H14.0117M25.6667 14C25.6667 20.4433 20.4433 25.6666 14 25.6666C7.55668 25.6666 2.33334 20.4433 2.33334 14C2.33334 7.55666 7.55668 2.33331 14 2.33331C20.4433 2.33331 25.6667 7.55666 25.6667 14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

AlertCircle82.propTypes = {
  color: PropTypes.string,
};
