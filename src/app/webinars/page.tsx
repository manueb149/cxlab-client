import LayoutWrapper from "@/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CXlab | Webinars',
  description: 'CXlab Webinars'
}

export default function Index() {
  return (
    <LayoutWrapper devMode>
      Webinars
    </LayoutWrapper>
  )
}
