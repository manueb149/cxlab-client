import LayoutWrapper from "@/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CXlab | Blogs',
  description: 'CXlab Blogs'
}

export default function Index() {
  return (
    <LayoutWrapper devMode>
      Blogs
    </LayoutWrapper>
  )
}
