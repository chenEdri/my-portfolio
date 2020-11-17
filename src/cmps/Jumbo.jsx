import React from "react";
import { About } from "./About"

export function Jumbo() {
  return (
    <section className="mb50 mt80">
      <div className="jumbo-container flex">
        <div className="main-logo flex column sb">
          <div>
            <h1 className="slogan flex align-center">Chen Edr<span className="clr2">i</span></h1>
            <h2 className="slogan-2">Full-Stack Devolper</h2>
          </div>
          <div>
            <About />
          </div>
        </div>
        <div className="jumbo-img"></div>
      </div>
    </section>
  );
}
