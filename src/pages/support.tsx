import React from "react";
import spages from "@/app/styles/styles_pages.module.css";
import Navbar from "@/app/components/navbar";
import Footer from "../app/components/footer";
import classNames from "classnames";
import { IconTargetArrow, IconBuildingBank, IconHeartHandshake, IconCreditCard } from "@tabler/icons-react";
import "@/app/styles/globals.css";

export default function SupportPage() {
  return (
    <div className={spages["page"]}>
      <Navbar />

      <div className={classNames(spages["hero"])}>
        <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            <h1 style={{ marginBottom: '10px' }}>Podrži nas</h1>
            <p style={{ maxWidth: '800px', textAlign: 'left', marginBottom: '40px', opacity: 0.8 }}>
            Vaš doprinos omogućuje hrvatskim studentima sudjelovanje u prestižnom Svjetskom natjecanju iz fizike.
            </p>

            {/* Method 1: Bank Transfer */}
            <div className={classNames(spages["columns"], spages["about-card"])} style={{ marginBottom: '30px' }}>
            <div className={spages["align-center"]} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: '1',padding: '20px' }}>
                <IconBuildingBank size={128} stroke={1.5} color="var(--fiking-dark)" />
                <h1>Donacija</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: '1',padding: '20px' }}>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                <strong>Primatelj:</strong> Udruga Fiking<br />
                <strong>Adresa:</strong> Posavska ulica 44, Novo Čiče<br />
                <strong>IBAN:</strong> <code style={{ background: '#eee', padding: '2px 5px', borderRadius: '4px' }}>HR89 2360 0001 1031 5842 8</code><br />
                <strong>Model:</strong> HR00<br />
                <strong>Poziv na broj:</strong> 84039896784<br />
                <strong>Opis plaćanja:</strong> "Donacija za rad udruge"
                </p>
            {/* Barkod / QR slika */}
            <div style={{ textAlign: "center", marginTop: "-20px" }}>
              <img
                src="media/donation_barcode.jpeg" // stavi svoju sliku ovdje
                alt="Barkod za uplatu"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <p style={{ fontSize: "0.8rem", opacity: 0.7, marginTop: "-25px" }}>
                Skeniraj barkod za uplatu
              </p>
            </div>
            </div>
            </div>

            {/* Method 2: Partnership */}
            <div className={classNames(spages["columns"], spages["about-card"])} style={{ marginBottom: '30px', flexDirection: 'row-reverse' }}>
            <div className={spages["align-center"]} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: '1',padding: '20px' }}>
                <IconHeartHandshake size={128} stroke={1.5} color="var(--fiking-dark)" />
                <h1>Sponzorstvo</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: '1', padding: '20px'  }}>
                <p>
                Želite li da vaša tvrtka sponzorira Integrijadu ili IPT konferenciju? 
                Javite nam se za dogovor o suradnji i promociji vašeg brenda unutar naše zajednice.
                </p>
                <a href="mailto:info@fiking.hr" style={{ color: 'var(--fiking-dark)', fontWeight: 'bold' }}>
                Pošalji upit →          {/* Barkod / QR slika */}
                </a>
            </div>
            </div>

            {/* Vision/Goal section
            <div style={{ marginTop: '60px', padding: '40px', background: 'rgba(0,0,0,0.03)', borderRadius: '24px' }}>
            <div className={spages["align-center"]}>
                <IconTargetArrow size={48} style={{ marginBottom: '15px' }} />
                <h2>Naš Cilj</h2>
                <p style={{ maxWidth: '700px' }}>
                Svaka donacija se koristi isključivo za pokrivanje troškova opreme, najma prostora 
                te osiguravanje nagrada za sudionike naših natjecanja. Transparentnost nam je na prvom mjestu.
                </p>
            </div>
            </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}