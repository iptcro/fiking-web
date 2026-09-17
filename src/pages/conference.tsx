import React from "react";
import spages from "@/app/styles/styles_pages.module.css";
import Navbar from "@/app/components/navbar";
import Footer from "../app/components/footer";
import classNames from "classnames";
import "@/app/styles/globals.css";
import KeyInfo from "@/app/components/key_info";
import { ButtonPrimary } from "@/app/components/buttons";

export const conferenceKeyInfo = [
    { id: 1, icon: "IconCalendarMonth", title: "6–7 October 2026" },
    { id: 2, icon: "IconPinned", title: "Institute of Physics, Zagreb", url: "https://www.google.com/maps/search/?api=1&query=Institut+za+fiziku,+Bijeni%C4%8Dka+cesta+46,+10000+Zagreb" },
    { id: 3, icon: "IconUsers", title: "open to public" },
    { id: 4, icon: "IconHandFingerRight", title: "registration required" },
];

const galleryPhotos = [
    { image: "/media/conference/gallery-team-photo.jpg", caption: "Team Croatia, joined online by guest speakers" },
    { image: "/media/conference/gallery-traveling-flame.jpg", caption: "Traveling flame – Luka" },
    { image: "/media/conference/gallery-oscillating-rings.jpg", caption: "Oscillating rings – Matteo & Emanuele" },
    { image: "/media/conference/gallery-slinky.jpg", caption: "The slinky – Igor & Małgorzata" },
    { image: "/media/conference/gallery-rubber-shot.jpg", caption: "Rubber shot – Ivan" },
    { image: "/media/conference/gallery-networking.jpg", caption: "Networking over pizza" },
];

export default function ConferencePage() {
    return (
        <div className={classNames(spages["page"], spages["conference-page"])}>
            <div className={spages["ipt-top"]}>
                <svg
                    className={spages["wavy-decoration"]}
                    viewBox="0 0 800 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <path
                            key={i}
                            d={`M -20 ${-20 + i * 6} C ${150 + i * 10} ${120 + i * 8}, ${300 - i * 4} ${20 - i * 4}, ${450 + i * 10} ${180 + i * 6} S ${620 - i * 6} ${60 - i * 6}, ${820 + i * 6} ${220 + i * 4}`}
                            stroke="var(--ipt-orange, #F0742A)"
                            strokeWidth="1.5"
                        />
                    ))}
                </svg>

                <Navbar />

                <div className={classNames(spages["hero"])}>
                    <div className={spages["hero-content"]}>
                        <div className={spages["date-badge"]}>
                            <span>6–7/10</span> 2026
                        </div>
                        <h1>Croatian <span>IPT</span> Conference</h1>

                        <div className={classNames(spages["columns"])}>

                            <div className={spages["align-center"]}>
                                <p>
                                    Each year, after returning from the International Physicists&apos; Tournament, we organize the <strong><span>Croatian IPT Conference</span></strong> so students can present their solutions and experience to a wider audience — not just their peers at PMF, but anyone curious about physics.
                                </p>
                                <p>
                                    Alongside keynote talks from guest physicists, students present the problems they solved best at the tournament, with participants from various countries. It&apos;s a chance for them to gain early experience presenting their work to peers and colleagues.
                                </p>
                                <a href="https://indico.global/event/19055/overview" target="_blank" rel="noopener noreferrer"><ButtonPrimary>REGISTER NOW!</ButtonPrimary></a>
                            </div>
                            <div className={spages["align-center"]} style={{ alignItems: "center" }}>
                                <img
                                    src="/media/conference/presenter-orange.svg"
                                    alt="presenter"
                                    style={{
                                        width: "50%",
                                        borderRadius: "18px",
                                        padding: "0",

                                    }}
                                />
                                <p className={spages["free-entry"]}>
                                    <span>Free entry</span> & opened to public.
                                </p>
                            </div>
                        </div>
                    </div>

                    <svg
                        className={spages["halftone-decoration"]}
                        viewBox="0 0 220 220"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        {Array.from({ length: 12 }).map((_, row) =>
                            Array.from({ length: 12 }).map((_, col) => {
                                const dist = Math.hypot(row - 5.5, col - 5.5);
                                const r = Math.max(0.5, 5.5 - dist * 0.9);
                                return (
                                    <circle
                                        key={`${row}-${col}`}
                                        cx={col * 18 + 10}
                                        cy={row * 18 + 10}
                                        r={r}
                                        fill="var(--ipt-orange, #F0742A)"
                                    />
                                );
                            })
                        )}
                    </svg>
                </div>
            </div>

            <div className={classNames(spages["hero"], spages["color"])}>
                <KeyInfo keyInfo={conferenceKeyInfo} iconColor="#141414" boxed />
            </div>

            <section className={spages["hero"]}>
                <h1>Gallery from last year</h1>
                <div className={spages["gallery-grid"]}>
                    {galleryPhotos.map((photo, index) => (
                        <div key={index} className={spages["gallery-card"]}>
                            <img src={photo.image} alt={photo.caption} />
                            <p className={spages["gallery-caption"]}>{photo.caption}</p>
                        </div>
                    ))}
                </div>
                <p>
                    Check out the full list of this year&apos;s problems{" "}
                    <span>
                        <a href="https://ipt.science/problems/">here!</a>
                    </span>
                </p>
            </section>

            <Footer />
        </div >
    );
}
