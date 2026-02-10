import React from "react";
import spages from "@/app/styles/styles_pages.module.css";
import Navbar from "@/app/components/navbar";
import Footer from "../app/components/footer";
import classNames from "classnames";
import { IconTargetArrow } from "@tabler/icons-react";
import { ButtonPrimary } from "@/app/components/buttons";
import "@/app/styles/globals.css";
import Gallery from "@/app/components/gallery";

export default function AboutPage() {
  return (
    <div className={spages["page"]}>
      <Navbar />

      <div className={classNames(spages["hero"])}>
        <h1>O nama</h1>
        <div className={classNames(spages["columns"], spages["about-card"])}>
          <div className={spages["align-center"]}>
            <img
              src={"/media/gallery/2024-5.jpeg"}
              style={{
                width: "100%",
                borderRadius: "18px",
                padding: "0",
              }}
            />
          </div>
          <div className={spages["align-center"]}>
            <p>
              Studentska udruga Fiking osnovana je 13. 5. 2024. u Velikoj
              Gorici, svega mjesec dana nakon 16. međunarodnog turnira fizičara.
              Članovi udruge su sadašnji i bivši natjecatelji te zaposlenici
              Fizičkog odsjeka Prirodoslovno-matematičkog fakulteta Sveučilišta
              u Zagrebu. Udruga je osnovana s ciljem pripreme hrvatskih
              studenata za sudjelovanje na budućim izdanjima međunarodnog
              turnira fizičara (IPT), a predsjednik je ujedno i hrvatski
              izbornik za turnir.
            </p>
          </div>
        </div>

        <div>
          <p className={spages["align-center"]}>
            Tijekom godina pokazalo se da je najveća poteškoća prilikom odlaska
            na turnir prikupljanje resursa i sredstava koja bi natjecateljima
            omogućila kvalitetno provođenje eksperimenata te putovanje u stranu
            državu. Kroz rad udruge, želimo omogućiti studentima prikladno
            mentorstvo te pristup potrebnoj opremi. Također, htjeli bismo
            povećati broj studenata koji imaju priliku otići na samo natjecanje
            kao gosti (studenti koji su doprinijeli rješavanju problema, a nisu
            se uspjeli kvalificirati u natjecateljski tim od 6 osoba) čime bi im
            se pružila prilika za upoznavanja stručnjaka iz cijeloga svijeta te
            unaprjeđenje karijere kroz međunarodnu suradnju. Prisustvom na
            turniru stekli bi vrijedno iskustvo za sudjelovanje u idućoj godini
            te povećali konkurentnost Hrvatske na samom natjecanju.
          </p>
        </div>

        <div className={spages["align-center"]}>
          <Gallery />
        </div>

        <div>
          <p className={spages["align-center"]}>
            Udruga tijekom čitave godine organizira tjedne radne sastanke na
            kojima se zajednički komentira napredak na problemima i vježba
            izlaganje rješenja. Konačna je rješenja moguće pretvoriti u
            znanstveni članak u kojem se opisuje istraženi problem, a koji
            udruga pomaže objaviti. Tako se stvara poticajna okolina za sve
            sudionike i prilika za isticanje pri budućem zapošljavanju. U planu
            je organizirati i konferenciju otvorenu za javnost na kojoj će
            studenti imati priliku prezentirati svoje radove kao projekt
            popularizacije znanosti.
          </p>
        </div>

        <div
          className={classNames(
            spages["icon-description"],
            spages["target-box"]
          )}
        >
          <div className={spages["ipt-icon-holder"]}>
            <IconTargetArrow
              className={spages["ipt-icon"]}
              style={{ color: "var(--fiking-darkest)" }}
            />
          </div>
          <div>
            <p style={{ fontSize: "1.1rem" }}>
              Naš glavni cilj je pružiti studentima kvalitetno mentorstvo i
              financijsku potporu za odlazak na IPT. Uz to, radimo na promociji
              znanosti u Hrvatskoj te povezivanju fakulteta i privatnih tvrtki.
            </p>
            <div className={spages["btn-holder"]}>
              <a href="/support"><ButtonPrimary>Podrži nas!</ButtonPrimary></a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
