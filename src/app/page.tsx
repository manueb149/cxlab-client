import NoSSR from "@/Components/NoSSR";
import Home from "@/Pages/Home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CXlab | Home',
}

export default function Index() {
  return (
    <>
      <NoSSR><Home /></NoSSR>
    </>

  )
}
