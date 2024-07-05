import React from "react";

import { Link } from "./Link";

export function About() {
  return (
    <section className="mt-8 text-base">
      <h2
        id="about"
        className="font-bold text-2xl md:text-3xl md:leading-normal"
      >
        <a href="#about">About L2BEAT</a>
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p>
            This website is based on the open-source website of L2BEAT.com, and
            we thank them dearly for inspiring the RSTBEAT concept.
          </p>
          <p>
            RSTBEAT is a public goods organization, soon to be a company,
            dedicated to providing transparency to the restaking ecosystem.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            We aim to serve as an impartial and autonomous watchdog, always
            acting in the best interest of users and the broader ecosystem. Our
            commitment is to remain genuinely neutral and grounded in reality
            and facts.
          </p>
          <p>
            We receive generous funding from the Ethereum Foundation Ecosystem
            Support Grants. Additionally, we are actively seeking further
            funding and donoations to enhance our monitoring capabilities and
            continue advancing the ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
