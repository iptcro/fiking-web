import React from "react";
import spages from "@/app/styles/styles_pages.module.css";
import Navbar from "@/app/components/navbar";
import Footer from "../app/components/footer";
import classNames from "classnames";
import "@/app/styles/globals.css";
import KeyInfo from "@/app/components/key_info";
import { ButtonPrimary } from "@/app/components/buttons";
import Abstracts, { Abstract } from "@/app/components/abstracts";

export const conferenceKeyInfo = [
    { id: 1, icon: "IconCalendarMonth", title: "6–7 October 2026" },
    { id: 2, icon: "IconPinned", title: "Institute of Physics, Zagreb", url: "https://www.google.com/maps/search/?api=1&query=Institut+za+fiziku,+Bijeni%C4%8Dka+cesta+46,+10000+Zagreb" },
    { id: 3, icon: "IconUsers", title: "open to public" },
    { id: 4, icon: "IconHandFingerRight", title: "registration required" },
];

const abstractsData: Abstract[] = [
    {
        title: "Singing Water",
        presenter: "Gabrijel Janđel (CRO)",
        image: "/media/conference/singing_water.png",
        body: `Several cultures use water as a musical instrument, creating a variety of sounds depending on how the surface of the water is stroked.
               We investigated three such stroke techniques – the slap, the plunge and the plow.

               First we slapped the water, and found out the hand is an approximated Helmholtz resonator.
               Second, we plunged our "hand" into the water, we analysed the cavity collapse dynamics and approximated the resonant frequency of the cavity.
               Last but not least, we plowed through the water, and found out that the associated sound is not created by splashes of water, but by bubbles, driven to collapse by turbulence!
   
               Using our discoveries, we can create music!
               We used a variety of experimental setups, including a seesaw-like system for the slap, and a moving platform with our 3D-printed hand approximation mounted upon it for the plow.`,
    },
    // {
    //     title: "Beer Foam",
    //     presenter: "Borna Stjepić (CRO)",
    //     image: "/media/conference/placeholder.svg",
    //     body: `Foams represent complex soft-state systems which embody many interesting diffusion, breakage and coalescence phenomena. 
    //            In our work, we have studied the properties of wet and dry foams in everyday beverages such as fizzy drinks and beer. 
               
    //            We theoretically modelled bubble evolution with numerical models combining continuous bubble growth with stochastic bubble breakage. 
    //            Using our theoretical model, we were able to predict the functional dependence of the foam height on time, which we confirmed using a repeatable experimental setup. 
    //            The results show an exponential decay for dry foam systems, such as fizzy drink foam, and a power-law decay for wet foams, as in the case of beer foams.`,
    // },
    {
        title: "Automated method for analysis of biomechanics of figure skating jumps",
        presenter: "Ema Vuković (CRO)",
        image: "/media/conference/figure_skating.jpeg",
        body: `Figure skating jumps require a precise combination of translational and rotational motion. 
        
               A simple and accessible method for the automated analysis of biomechanical jump parameters using inertial sensors integrated into a smartphone is presented. 
               Data from six competitive female figure skaters were collected during on-ice and off-ice training and used to analyse flight time, 
               estimate jump height and maximum angular velocity for Double Axel, Triple Salchow, and Triple Toe Loop jumps.
               
               Results showed differences between on-ice and off-ice execution, with maximum angular velocity consistently higher on ice. 
               Developed method demonstrates the potential of smartphone sensors for accessible monitoring of figure skating performance under real training conditions.`,
    },
    {
        title: "Invent Yourself: Ping-Pong Balls Cannon",
        presenter: "Filip Landek (CRO)",
        image: "/media/conference/ping_pong.jpeg",
        body: `Problems in the IPT, and similar competitions such as IYNT and IYPT, surprisingly often ask for a solution to an engineering problem presented as a physics problem. 
               IPT 2026 Problem 5, the "Ping-Pong Balls Cannon", is a clear example. It asks for a device that launches ping-pong balls as far as possible; 
               meaning there is no single phenomenon to explain, but rather a design space to explore, almost from first principles. 
               This makes it a different challenge from the traditional physics problems, but one that is especially rewarding for a physics student. 
               
               This talk presents the solution to the cannon as a case study, while also using it to outline a general workflow for such problems: 
               showing how physical intuition can drive design decisions, and where physics has to be supplemented by empirical and engineering judgement.`,
    },
    {
        title: "Can You Hear Me Now? Acoustic Transmission in a String Telephone",
        presenter: "Niklas Schrimpf (AUT)",
        image: "/media/conference/string_telephone.jpeg",
        body: `A string telephone is something most are familiar with and have played with as a child. 
               Some even schemed to build one stretching all the way to a friend’s house or even a network to multiple houses. 

               In this presentation those plans are revisited by analysing the acoustic properties of a string telephone
               from the perspective of signal transmission with focus on wave dampening in the string and the transition from string to cup. 
               
               The goal is to not only maximize the range, but also to modify the telephone to have a group call.`,
    },
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

                                <div className={spages["support-block"]}>
                                    <p className={spages["support-text"]}>
                                        This conference is organized with support from Institute of Physics and Ruđer Bošković Institute.
                                    </p>
                                    <div className={spages["support-logos"]}>
                                        <img src="/media/logo/ifs_logo.png" alt="Institute of Physics" />
                                        <img src="/media/logo/irb_logo.png" alt="Ruđer Bošković Institute" />
                                    </div>
                                </div>
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
                <h1>Abstracts</h1>
                <Abstracts data={abstractsData} />
            </section>

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
