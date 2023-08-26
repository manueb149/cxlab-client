import { LogoDarkIcon } from "@/assets/icons/Logo";
import React from "react"

interface Props {
  children?: React.ReactNode;
}

const Footer = ({ children }: Props) => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div className="h-full flex flex-col justify-center">
        <LogoDarkIcon width={180} />
        <p className=" w-4/6 text-center">Providing reliable tech beyond your imaginations</p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Cloud</a>
        <a className="link link-hover">CRM</a>
        <a className="link link-hover">Contact Centerd</a>
        <a className="link link-hover">WiFi</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  )
}

export default Footer