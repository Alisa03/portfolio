import React from "react";

import { About, Header, Skills, Works } from "@/screens";

export default function Home() {
  return <>
      <Header />
      <div className="container">
        <About />
        <Skills />
        <Works />
      </div>
    </>
}
