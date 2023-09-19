import NoSSR from "@/Components/NoSSR";
import LayoutWrapper from "@/Layout";
import Home from "@/Pages/Home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CXlab | Home',
  description: 'Empresa líder en soluciones de cloud coolaboration y plataformas de productividad.'
}

export default function Index() {

  return (
    <LayoutWrapper>
      {/* <NoSSR> */}
        <Home />
      {/* </NoSSR> */}
    </LayoutWrapper>
  )
}
