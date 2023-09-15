import LayoutWrapper from "@/Layout";
import Animation from "@/Pages/Animation/intex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CXlab | Five9',
  description: 'CXlab Five9'
}

export default function Index() {
  return (
    <LayoutWrapper>
      <div className="w-100 h-100">
        <Animation />
      </div>
    </LayoutWrapper>
  )
}
