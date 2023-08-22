"use client"

import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";
import "./style.css";

interface Props {
  className: any;
  downloadBadge: string;
}

export const DownloadBadge = ({
  className,
  downloadBadge = "https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/download-badge---google-play-badge-2.svg",
}: Props): JSX.Element => {
  return <Image width={50} height={50} className={`download-badge ${className}`} alt="Download badge" src={downloadBadge} />;
};

DownloadBadge.propTypes = {
  downloadBadge: PropTypes.string,
};
