import React from "react";
import spages from "./styles_pages.module.css";
import { ButtonPrimary, ButtonSecondary } from "../components/buttons";
import Navbar from "@/app/components/navbar";
import Footer from "../components/footer";
import FAQ from "../components/faq";
import classNames from "classnames";

export default function HomePage() {
  return (
    <div className={spages["page"]}>
      <Navbar />
      <div className={spages["hero"]}>
        <h1>
          Studiraš fiziku? <br />
          Voliš <u>natjecanja</u>?
        </h1>
        <div className={spages["description"]}>
          <p>
            IPT je međunarodno studentsko natjecanje u kojem timovi rješavaju
            otvorene probleme u fizici. Nakon nekoliko mjeseci rada, sudionici
            predstavljaju svoja rješenja i sudjeluju u znanstevnim raspravama
            tijekom petodnevnog turnira.
          </p>
        </div>

        <div className={spages["btn-holder"]}>
          <ButtonPrimary>Uključi se!</ButtonPrimary>
          <ButtonSecondary>Što je IPT?</ButtonSecondary>
        </div>
      </div>
      <div className={classNames(spages["hero"], spages["color"])}>
        <h1>Colored h1</h1>
      </div>
      <div className={spages["hero"]}>
        <h1>Udruga Fiking</h1>
        <div className={spages["description"]}>
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
      <div className={spages["hero"]}>
        <h1>Još nešto te zanima?</h1>
        <FAQ />
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
