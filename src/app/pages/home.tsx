import React from "react";
import "./styles_pages.css";
import { ButtonPrimary, ButtonSecondary } from "../components/buttons";
import Navbar from "@/app/components/navbar";
import Footer from "../components/footer";
import ToggleCard from "../components/toggle_card";

export default function HomePage() {
  return (
    <div className="page">
      <Navbar />
      <div className="hero">
        <h1>
          Studiraš fiziku? <br />
          Voliš <u>natjecanja</u>?
        </h1>
        <div className="description">
          <p>
            IPT je međunarodno studentsko natjecanje u kojem timovi rješavaju
            otvorene probleme u fizici. Nakon nekoliko mjeseci rada, sudionici
            predstavljaju svoja rješenja i sudjeluju u znanstevnim raspravama
            tijekom petodnevnog turnira.
          </p>
        </div>
        <div className="btn-holder">
          <ButtonPrimary>Uključi se!</ButtonPrimary>
          <ButtonSecondary>Što je IPT?</ButtonSecondary>
        </div>
      </div>
      <div className="hero color">
        <h1>Colored h1</h1>
      </div>
      <div className="hero">
        <h1>Udruga Fiking</h1>
        <div className="description">
          <p>
            Udruga Fiking osnovana je s ciljem pripreme hrvatskih studenata za
            sudjelovanje na međunarodnom turniru fizičara, IPT-ju. Udrugu vode
            studenti PMF-a u Zagrebu, a naš fokus je pružiti sudionicima
            sveobuhvatnu podršku — od mentorstva i pristupa laboratorijima do
            potpune financijske pomoći za rad na problemima i odlazak na
            natjecanje. Organiziramo redovite radne sastanke i radionice te
            pružamo pomoć u objavljivanju studentskih radova nastalih kroz
            pripreme. Pridruži se i postani dio natjecateljskog tima!
          </p>
        </div>
      </div>
      <div className="hero">
        <h1>Još nešto te zanima?</h1>
        <ToggleCard
          question="What is React?"
          answer="React is a JavaScript library for building user interfaces."
        />
        <ToggleCard
          question="What is TypeScript?"
          answer="TypeScript is a strongly typed programming language that builds on JavaScript."
        />
      </div>
      <Footer />
      {/* <div>
        <ButtonPrimary>Button</ButtonPrimary>
        <ButtonPrimary icon={<IconArrowUpRight size={14} />}>
          Button
        </ButtonPrimary>
        <ButtonSecondary>Button</ButtonSecondary>
        <ButtonSecondary icon={<IconArrowUpRight size={14} />}>
          Button
        </ButtonSecondary>
      </div> */}
    </div>
  );
}
