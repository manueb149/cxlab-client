"use client"
import UnderDevelopment from "@/Components/UnderDevelopment"
import Footer from "./Footer"
import Header from "./Header"

interface Props {
  devMode?: boolean;
}
const LayoutWrapper = ({ children, devMode }: React.PropsWithChildren<Props>) => {
  return devMode ? (
    <UnderDevelopment />
  ) : (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default LayoutWrapper