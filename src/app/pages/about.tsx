import React from "react";
import spages from "@/app/styles/styles_pages.module.css";
import { ButtonPrimary, ButtonSecondary } from "../components/buttons";
import Navbar from "@/app/components/navbar";
import Footer from "../components/footer";
import FAQ from "../components/faq";
import classNames from "classnames";
import { StaticIcon } from "../components/Icon";
import {
  IconUsers,
  IconAtom,
  IconTrophy,
  IconArrowUpRight,
} from "@tabler/icons-react";
import KeyInfo from "../components/key_info";

export default function AboutPage() {
  return (
    <div className={spages["page"]}>
      <Navbar />

      <div className={classNames(spages["hero"])}>
        <div>
          <h1>O nama</h1>
          <p>Studentska udruga Fiking osnovana je 13. 5. 2024. u Velikoj Gorici, svega mjesec dana nakon 16. međunarodnog turnira fizičara. Članovi udruge su sadašnji i bivši natjecatelji te zaposlenici Fizičkog odsjeka Prirodoslovno-matematičkog fakulteta Sveučilišta u Zagrebu. Udruga je osnovana s ciljem pripreme hrvatskih studenata za sudjelovanje na budućim izdanjima međunarodnog turnira fizičara (IPT), a predsjednik je ujedno i hrvatski izbornik za turnir.</p>
          <p>Tijekom godina pokazalo se da je najveća poteškoća prilikom odlaska na turnir prikupljanje resursa i sredstava koja bi natjecateljima omogućila kvalitetno provođenje eksperimenata te putovanje u stranu državu. Kroz rad udruge, želimo omogućiti studentima prikladno mentorstvo te pristup potrebnoj opremi. Također, htjeli bismo povećati broj studenata koji imaju priliku otići na samo natjecanje kao gosti (studenti koji su doprinijeli rješavanju problema, a nisu se uspjeli kvalificirati u natjecateljski tim od 6 osoba) čime bi im se pružila prilika za upoznavanja stručnjaka iz cijeloga svijeta te unaprjeđenje karijere kroz međunarodnu suradnju. Prisustvom na turniru stekli bi vrijedno iskustvo za sudjelovanje u idućoj godini te povećali konkurentnost Hrvatske na samom natjecanju.
          </p>
          <p>Udruga tijekom čitave godine organizira tjedne radne sastanke na kojima se zajednički komentira napredak na problemima i vježba izlaganje rješenja. Konačna je rješenja moguće pretvoriti u znanstveni članak u kojem se opisuje istraženi problem, a koji udruga pomaže objaviti. Tako se stvara poticajna okolina za sve sudionike i prilika za isticanje pri budućem zapošljavanju. U planu je organizirati i konferenciju otvorenu za javnost na kojoj će studenti imati priliku prezentirati svoje radove kao projekt popularizacije znanosti.</p>
        </div>
        <div>
            <p>Naš glavni cilj je pružiti studentima kvalitetno mentorstvo i financijsku potporu za odlazak na IPT. Uz to, radimo na promociji znanosti u Hrvatskoj te povezivanju fakulteta i privatnih tvrtki.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
