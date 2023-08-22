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

export const AlertCircle21 = ({ color = "#344054", className }: Props): JSX.Element => {
  return (
    <svg
      className={`alert-circle-21 ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_28_7303)">
        <path
          className="path"
          d="M6 4V6M6 8H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_28_7303">
          <rect className="rect" fill="white" height="12" width="12" />
        </clipPath>
      </defs>
    </svg>
  );
};

AlertCircle21.propTypes = {
  color: PropTypes.string,
};
