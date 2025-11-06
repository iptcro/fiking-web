import React from "react";
import spages from "@/app/styles/styles_pages.module.css";
import Navbar from "@/app/components/navbar";
import Footer from "../app/components/footer";
import classNames from "classnames";
import { IconTargetArrow } from "@tabler/icons-react";
import "@/app/styles/globals.css";
import Gallery from "@/app/components/gallery";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/buttons";
import FAQ from "@/app/components/faq";
import { StaticIcon } from "@/app/components/Icon";
import {
  IconUsers,
  IconAtom,
  IconTrophy,
  IconArrowUpRight
} from "@tabler/icons-react";
import KeyInfo from "@/app/components/key_info";

export default function IntegrationBeePage() {
  return (
    <div className={spages["page"]}>
      <Navbar />
      <div
        className={spages["hero"]}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className={spages["info-holder"]}>
          <div className={spages["big-logo-holder"]} >
            <img
              src={"/media/logo/integrijada_banner.png"}
              className={spages["big-logo"]}
              alt="integrijada banner"
               style={{
                  width: "100%"
                  }}
            />
          </div>
          <div className={spages["description"]} style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p>
              Natjecanje u integriranju osmišljeno je kao dinamično i javno događanje koje okuplja studente Sveučilišta u Zagrebu kako bi odmjerili
              svoje sposobnosti kroz rješavanje izazovnih zadataka rješavanja integrala pod vremenskim pritiskom.
              Natjecanje je osmišljeno na uzoru duge tradicije MIT-a gdje se od 1981 održava jednom godišnje,  visoka učilišta diljem svijetu su
              popratili trend te se isto održava diljem SAD-a te u UK-u, Poljskoj, Švicarskoj, Austriji, Njemačkoj, Španjolskoj, Portugalu te diljem Azije i Afrike. 
            </p>
          </div>
          <div className={spages["btn-holder"]}>
            <a target="_blank" href="https://forms.gle/C57LQZJaZ4xcpzSB7"><ButtonPrimary>Prijavi se!</ButtonPrimary></a>
            <a target="_blank" href="https://www.instagram.com/integrijada/"><ButtonSecondary>Instagram</ButtonSecondary></a>
          </div>
        </div>
        <div className={spages["big-logo-holder"]} style={{ marginBottom: "10rem" }}>
          <img
            src={"/media/logo/Bijelocrno-removebg-preview.png"}
            className={spages["big-logo"]}
            alt="integrijada logo"
            style={{
                height: "auto",
                width: "45%"
                }}
          />
        </div>
      </div>

      <div className={classNames(spages["hero"], spages["columns"])} style={{ marginTop: "-8rem", zIndex: -1 }}>
        <div>
          {/* Integrijada */}
          <div className={classNames(spages["hero-box"], spages["accent"])}>
            <h2>Integrijada</h2>
            <div className={spages["description"]}>
              <p>
              Natjecanje se odvija u dvije faze, kvalifikacije i javno na ploči, rješavanje integrala u vremenskom roku. 
              Najbrži i najtočniji prolaze dalje sve do velikog finala. Natjecanje je dizajnirano kao spoj edukacije, zabave i natjecateljskog duha. 
              Propozicije i pravila natjecanja izglasava Komisija za organizaciju sastavljena od studenata zagrebačkog PMF-a, 
              čiji je predsjednik prijavitelj na natječaj. Komisija izglasava propozicije na skupštini i objavljuje ih dva tjedna prije natjecanja 
              preko službenih kanala kako bi se dalo prostora za eventualne dorade i/ili žalbe na pravila. 
              Najbolji natjecatelji dobivaju nagrade, ali najvažnija je titula “Velikog Integratora“ koja se dodjeljuje prvom mjestu na turniru. 
              </p>
            </div>
          </div>

          {/* IMG */}
          <div
            className={spages["hero-box"]}
            style={{ border: "none", padding: 0 }}
          >
            <img
              src={"/media/gallery/IMG-20241214-WA0014.jpg"}
              style={{
                width: "100%",
                borderRadius: "18px",
              }}
            />
          </div>

          {/* details */}
          <div id="details" className={classNames(spages["hero-box"], spages["accent"])}>
            <h2>Ciljevi natjecanja</h2>
            <div>
              <p>
                Organizacijom natjecanja u integriranju šira zajednica dobiva priliku upoznati ljepotu i izazovnost analitičke matematike. 
                Natjecanje promovira pozitivnu percepciju matematike kao dinamične, kreativne discipline. 
                Natjecanjem se postiže razvoj zajedništva u akademskoj zajednici kroz druženje i podršku natjecateljima. 
                Jača se STEM identitet kod mladih i motivira ih se za daljnje matematičko obrazovanje. 
                Učenike koji se još nisu opredijelili za visoko učilište naginje prema matematičkim i prirodoslovnim znanostima i time pojačava potencijal STEM obrazovanje.
                Kroz popularizaciju i igru natjecanje uključuje i ugrožene skupine u STEM-u kao što su pripadnici ženske populacije, nacionalnih manjina i sl. 
              </p>
            </div>
          </div>
        </div>
        
        <div>
        {/* IMG */}
          <div
            className={spages["hero-box"]}
            style={{ border: "none", padding: 0 }}
          >
            <img
              src={"/media/gallery/20241213_220945.jpg"}
              style={{
                width: "100%",
                // height: "20%",
                borderRadius: "18px",
              }}
            />
          </div>

          <div id="details" className={classNames(spages["hero-box"], spages["accent"])}>
            <h2>Zašto sudjelovati?</h2>
            <div>
                <p>
                  Rješavanje integrala pod pritiskom vremena potiče brzo prepoznavanje tehnika, snalaženje pod pritiskom i kritično razmišljanje
                  za razvoj u realnom svijetu ispita, rokova i javnog govorenja. Natjecanje potiče samopouzdanje u prezentaciji matematičkog znanja pred auditorijem.
                  Sudjelovanje u natjecanju predstavlja odličnu pripremu za druga matematička natjecanja i zadatke iz fizike, inženjerstva te primijenjene matematike.
                  Motivacija za realizaciju ovog natječaja je i stvaranje trajne tradicije kojom se stvara pozitivan akademski ritual za danje djelovanje.
                </p>
            </div>
          </div>

        {/* IMG */}
          <div
            className={spages["hero-box"]}
            style={{ border: "none", padding: 0 }}
          >
            <img
              src={"/media/gallery/20241213_220839.jpg"}
              style={{
                width: "100%",
                borderRadius: "18px",
              }}
            />
          </div>

        </div>
      </div>

      <div className={classNames(spages["hero"], spages["color"], spages["divider"])}></div>

      <div className={classNames(spages["hero"])}>
        <h1>Integrijada 2024.</h1>
        <div className={classNames(spages["columns"])}>
          <div>
            <div className={classNames(spages["hero-box"])}>
              <h2>Prva integrijada</h2>
              <p>
              Na prošlogodišnjem Božićnom domjenku Fizičkog odsjeka PMF-a po prvi je put održana Integrijada, privukavši pritom veliki interes okupljenih. 
              Zbog vrlo dobrog odaziva publike i pozitivnih reakcija sudionika, Integrijada prerasta u natjecanje koje na godišnjoj razini okuplja ljubitelje integralnog računa.
              U prvom izdanju Integrijade, prestižnu titulu Velikog Integratora osvojio je Ilan Mihelja, čime je otvorena tradicija natjecanja koja će se, nadamo se, nastaviti i u narednim godinama.
              </p>
            </div>
            <div className={classNames(spages["hero-box"])} style={{marginTop: "3rem"}}>
              <h2>
                Sponzori ovogodišnje intergijade
              </h2>
              {/* <div style={{ textAlign: "center" }}>
                <img
                  src="/media/sponsors.svg"
                  alt="SponzoriIntegrijada"
                  style={{ maxWidth: "100%", borderRadius: "12px", marginTop: "1rem" }}
                />
              </div> */}
            </div>
          </div>
          <div>
          <div className={spages["align-center"]}>
            <h2>
              Trenutni Veliki Integrator, Ilan Mihelja
            </h2>
            <div style={{ textAlign: "center" }}>
              <img
                src="/media/gallery/IMG-20241214-WA0012.jpg"
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
        </div>
      </div>

      <Footer />
    </div>
  );
}
