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

export const AlertCircle104 = ({ color = "#F04438", className }: Props): JSX.Element => {
  return (
    <svg
      className={`alert-circle-104 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_28_7261)">
        <path
          className="path"
          d="M8 5.33331V7.99998M8 10.6666H8.00667M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8 14.6666C4.3181 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.3181 1.33331 8 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_28_7261">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

AlertCircle104.propTypes = {
  color: PropTypes.string,
};
