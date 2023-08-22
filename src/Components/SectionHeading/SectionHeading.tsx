"use client"

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  type: "title" | "title-description";
  column: "twelve-col" | "five-col" | "eight-col" | "six-col";
  alignment: "left-align" | "center-align";
  className: any;
  text: string;
}

export const SectionHeading = ({ type, column, alignment, className, text = "Section Title" }: Props): JSX.Element => {
  return (
    <div className={`section-heading ${type} ${column} ${alignment} ${className}`}>
      {type === "title-description" && (
        <>
          <div className="section-title-wrapper">
            <div className="section-title">{text}</div>
          </div>
          <p className="description">This will be a two liner description about the section. You can modify here.</p>
        </>
      )}

      {type === "title" && <div className="section-title-2">{text}</div>}
    </div>
  );
};

SectionHeading.propTypes = {
  type: PropTypes.oneOf(["title", "title-description"]),
  column: PropTypes.oneOf(["twelve-col", "five-col", "eight-col", "six-col"]),
  alignment: PropTypes.oneOf(["left-align", "center-align"]),
  text: PropTypes.string,
};
