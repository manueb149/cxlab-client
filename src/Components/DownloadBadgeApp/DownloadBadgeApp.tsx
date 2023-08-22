"use client"

import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";
import "./style.css";

interface Props {
  className: any;
  downloadBadgeApp: string;
}

export const DownloadBadgeApp = ({
  className,
  downloadBadgeApp = "https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/download-badge---app-store-badge-2.svg",
}: Props): JSX.Element => {
  return <Image width={50} height={50} className={`download-badge-app ${className}`} alt="Download badge app" src={downloadBadgeApp} />;
};

DownloadBadgeApp.propTypes = {
  downloadBadgeApp: PropTypes.string,
};
