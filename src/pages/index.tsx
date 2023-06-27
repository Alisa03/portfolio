import React from "react";

import style from "@/styles/page.module.scss"

import HeaderContent from "@/components/Header";
import Works from '@/components/Works';
import Skills from '@/components/Skills';
import About from "@/components/About";

export default function Home() {

  return (
    <main>
      <HeaderContent />
      <div className={style.container}>
        <About />
        <Skills />
        <Works />
      </div>
    </main>
  )
}
