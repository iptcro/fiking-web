import React from "react";
import spages from "@/app/styles/styles_pages.module.css";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/buttons";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import FAQ from "@/app/components/faq";
import classNames from "classnames";
import { StaticIcon } from "@/app/components/Icon";
import {
  IconUsers,
  IconAtom,
  IconTrophy,
  IconArrowUpRight
} from "@tabler/icons-react";
import KeyInfo from "@/app/components/key_info";

export const homeKeyInfo = [
  { id: 1, icon: "IconSchool", title: "Studentsko Natjecanje" },
  { id: 2, icon: "IconCalendarMonth", title: "26.-30. svibanj" },
  { id: 3, icon: "IconMapPin", title: "Oklahoma State University, SAD" },
  { id: 4, icon: "IconTestPipe", title: "STEM" },
];

export default function HomePage() {
  return (
    <div className={spages["page"]}>
      <Navbar />
      <div
        className={spages["hero"]}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className={spages["info-holder"]}>
          <h1>
            Studiraš fiziku? <br />
            Voliš <u>natjecanja</u>?
          </h1>
          <div className={spages["description"]}>
            <p>
              IPT je međunarodno studentsko natjecanje u kojem timovi rješavaju otvorene probleme u fizici. Nakon nekoliko mjeseci rada, sudionici predstavljaju svoja rješenja i sudjeluju u znanstevnim raspravama tijekom petodnevnog turnira.
            </p>
          </div>
          <div className={spages["btn-holder"]}>
            <a href="#howToJoin"><ButtonPrimary>Uključi se!</ButtonPrimary></a>
            <a target="_blank" href="https://ipt.science"><ButtonSecondary>Što je IPT?</ButtonSecondary></a>
          </div>
          <div className={spages["irb-message"]}>
            <a target="_blank" href="https://irb.hr/">
              <img
                src={"/media/logo/irb_logo.png"}
                alt="IRB logo"
                className={spages["irb-logo"]}
              />
            </a>
            <p>
              Sudjelovanje studenata na Međunarodnom turniru fizičara (IPT) podržava <strong>Institut Ruđer Bošković</strong>.
            </p>
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
        <KeyInfo keyInfo={homeKeyInfo} />
      </div>

      <div className={classNames(spages["hero"], spages["columns"])}>
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
            {/* <ButtonPrimary>Više o udruzi i članovima</ButtonPrimary> */}
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
          <div id="howToJoin" className={classNames(spages["hero-box"], spages["accent"])}>
            <h2>Kako sudjelovati?</h2>
            <div style={{ fontWeight: "bold" }}>
              <p>1. Odluči da želiš :)</p>
              <p>
                2. Pošalji mail na <a href="mailto:info@fiking.hr">info@fiking.hr</a> i pridruži se na Discord server udruge!
              </p>
            </div>
          </div>
        </div>

        <div>
          {/* IPT? */}
          <div className={spages["hero-box"]}>
            <h2>International Physicists’ Tournament (IPT)?</h2>
            <div className={spages["icon-description"]}>
              <div className={spages["ipt-icon-holder"]}>
                <IconUsers className={spages["ipt-icon"]} />
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
              <div className={spages["ipt-icon-holder"]}>
                <IconAtom className={spages["ipt-icon"]} />
              </div>
              <div>
                <h3>Otvoreni problemi</h3>
                <p>
                  Problemi su otvorenog tipa, što znači da nema točnog rješenja,
                  pa istraživanje nalikuje pravom znanstvenom radu. Često su
                  inspirirani pojavama iz svakodnevnog života i industrije. Pogledajte ovogodišnji <a href="https://iptnet.info/problems/">popis problema!</a>
                </p>
              </div>
            </div>

            <div className={spages["icon-description"]}>
              <div className={spages["ipt-icon-holder"]}>
                <IconTrophy className={spages["ipt-icon"]} />
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
            <a target="_blank" href="https://iptnet.info/">
              <ButtonSecondary>
                Saznaj više{" "}
                <StaticIcon
                  icon={IconArrowUpRight}
                  size={24}
                  color={"var(--fiking-dark)"}
                />
              </ButtonSecondary>
            </a>
          </div>
        </div>
      </div>

      <div className={classNames(spages["hero"], spages["color"], spages["divider"])}></div>

      <div className={classNames(spages["hero"])}>
        <h2>IPT 2025: Naši studenti prvi put u polufinalu!</h2>
        <div className={classNames(spages["columns"])}>

          <div className={spages["align-center"]}>
            <p>
              Naš tim je ove godine ostvario povijesni uspjeh — prvi put smo se plasirali u polufinale Međunarodnog turnira fizičara (IPT)! Turnir se održao u Poljskoj i okupio timove s više od 25 sveučilišta iz cijelog svijeta. Odabrano je 18 zemalja koje su se natjecale, a mi smo među njima zauzeli 9. mjesto.
            </p>
            <p>
              Odlazak na turnir u Poljsku bio je moguć zahvaljujući podršci fakulteta, nekoliko lokalnih tvrtki te velikom broju prijatelja, obitelji i podupiratelja koji su donirali putem crowdfundinga – od srca hvala svima!
            </p>
            <p>
              Pripreme za IPT 2026 već su počele — ako želiš biti dio ekipe i iskusiti znanost iz prve ruke, javi nam se!
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src="/media/sponsors.svg"
                alt="Sponzori"
                style={{ maxWidth: "100%", borderRadius: "12px", marginTop: "1rem" }}
              />
            </div>
          </div>
          <div className={spages["align-center"]}>
            <img
              src="/media/archive/ipt_2025_1.jpg"
              alt="team-croatia"
              style={{
                width: "100%",
                borderRadius: "18px",
                padding: "0",
              }}
            />
          </div>
        </div>
      </div>

      <div className={classNames(spages["hero"], spages["color"])}>
        <div>
          <h2>Još nešto te zanima?</h2>
          <FAQ />
        </div>
      </div>

      <Footer />
    </div>
  );
}
