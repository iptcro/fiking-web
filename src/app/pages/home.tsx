import React from "react";
import spages from "./styles_pages.module.css";
import { ButtonPrimary, ButtonSecondary } from "../components/buttons";
import Navbar from "@/app/components/navbar";
import Footer from "../components/footer";
import FAQ from "../components/faq";
import classNames from "classnames";
import { StaticIcon } from "../components/icon";
import {
  IconUsers,
  IconAtom,
  IconTrophy,
  IconArrowUpRight,
} from "@tabler/icons-react";
import KeyInfo from "../components/key_info";

export default function HomePage() {
  return (
    <div className={spages["page"]}>
      <Navbar />

      <div
        className={spages["hero"]}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
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
        <div className={spages["big-logo-holder"]}>
          <img
            src={"/media/logo/FikingLogo.svg"}
            className={spages["big-logo"]}
            alt="fiking logo"
          />
        </div>
      </div>

      <div className={classNames(spages["hero"], spages["color"])}>
        <KeyInfo />
      </div>

      <div
        className={spages["hero"]}
        style={{
          display: "grid",
          gridTemplateColumns: "49% 49%",
          columnGap: "2%",
        }}
      >
        <div>
          {/* Udruga Fiking */}
          <div className={spages["hero-box"]}>
            <h2>Udruga Fiking</h2>
            <div className={spages["description"]}>
              <p>
                Udruga Fiking osnovana je s ciljem pripreme hrvatskih studenata
                za sudjelovanje na međunarodnom turniru fizičara, IPT-ju. Udrugu
                vode studenti PMF-a u Zagrebu, a naš fokus je pružiti
                sudionicima sveobuhvatnu podršku — od mentorstva i pristupa
                laboratorijima do potpune financijske pomoći za rad na
                problemima i odlazak na natjecanje. Organiziramo redovite radne
                sastanke i radionice te pružamo pomoć u objavljivanju
                studentskih radova nastalih kroz pripreme. Pridruži se i postani
                dio natjecateljskog tima!
              </p>
            </div>
            <ButtonPrimary>Više o udruzi i članovima</ButtonPrimary>
          </div>

          {/* IMG */}
          <div
            className={spages["hero-box"]}
            style={{ border: "none", padding: 0 }}
          >
            <img
              src={"/media/group_photo.jpg"}
              style={{
                width: "100%",
                borderRadius: "18px",
              }}
            />
          </div>

          {/* How to join */}
          <div className={classNames(spages["hero-box"], spages["accent"])}>
            <h2>Kako sudjelovati?</h2>
            <div style={{fontWeight: "bold"}}>
              <p>1. Odluči da želiš :)</p>
              <p>2. Pridruži se na Discord server udruge Fiking i pokaži dobru
              volju.</p>
            </div>
            
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <h2>To je to!</h2>
              <div>
                <ButtonPrimary>
                  Uključi se{" "}
                  <StaticIcon
                    icon={IconArrowUpRight}
                    size={24}
                    color={"var(--fiking-light)"}
                  />
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* IPT? */}
          <div className={spages["hero-box"]}>
            <h2>International Physicists’ Tournament (IPT)?</h2>
            <div className={spages["icon-description"]}>
              <div>
                <StaticIcon
                  icon={IconUsers}
                  size={100}
                  color="var(--fiking-light)"
                />
              </div>
              <div>
                <h3>Timsko natjecanje</h3>
                <p>
                  Timovi od šest studenata zajedno rade na zadacima obuhvaćajući
                  teorijski, eksperimentalni i računalni dio. Imat ćeš priliku
                  usvojiti vještine poput čitanja znanstvene literature, rada u
                  laboratorijima i numeričkog modeliranja!
                </p>
              </div>
            </div>

            <div className={spages["icon-description"]}>
              <div>
                <StaticIcon
                  icon={IconAtom}
                  size={100}
                  color="var(--fiking-light)"
                />
              </div>
              <div>
                <h3>Otvoreni problemi</h3>
                <p>
                  Problemi su otvorenog tipa, što znači da nema točnog rješenja,
                  pa istraživanje nalikuje pravom znanstvenom radu. Često su
                  inspirirani pojavama iz svakodnevnog života ili industrije
                  poput _ i _.
                </p>
              </div>
            </div>

            <div className={spages["icon-description"]}>
              <div>
                <StaticIcon
                  icon={IconTrophy}
                  size={100}
                  color="var(--fiking-light)"
                />
              </div>
              <div>
                <h3>Fizikalne borbe</h3>
                <p>
                  Rasprave se vode kroz debate slične znanstvenim
                  konferencijama. U borbi sudjeluju tri tima od kojih jedan
                  prezentira rješenje, drugi time ga oponira, a treći moderira
                  diskusiju. Naglasak je na timskom radu i preciznom znanstvenom
                  izražavanju.
                </p>
              </div>
            </div>

            {/* TODO: Ovako treba dodavat ikone u button, dodaj icon param */}
            <ButtonSecondary>
              Saznaj više{" "}
              <StaticIcon
                icon={IconArrowUpRight}
                size={24}
                color={"var(--fiking-dark)"}
              />
            </ButtonSecondary>
          </div>
        </div>
      </div>

      <div className={classNames(spages["hero"], spages["color"])}>
        <div>
          <h1>Još nešto te zanima?</h1>
          <FAQ />
        </div>
      </div>

      <Footer />
    </div>
  );
}
