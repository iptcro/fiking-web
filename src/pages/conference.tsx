import React from "react";
import spages from "@/app/styles/styles_pages.module.css";
import Navbar from "@/app/components/navbar";
import Footer from "../app/components/footer";
import classNames from "classnames";
import "@/app/styles/globals.css";
import { ButtonPrimary } from "@/app/components/buttons";
import KeyInfo from "@/app/components/key_info";

export const conferenceKeyInfo = [
    { id: 1, icon: "IconCalendarMonth", title: "June 11" },
    { id: 2, icon: "IconPinned", title: "PMF Zagreb" },
    { id: 3, icon: "IconUsers", title: "open to public" },
    { id: 4, icon: "IconHandFingerRight", title: "registration required" },
];

export default function ConferencePage() {
    return (
        <div className={classNames(spages["page"], spages["conference-page"])}>
            <Navbar />

            <div className={classNames(spages["hero"])}>
                <h1>International <span>IPT</span> Conference</h1>

                <div className={classNames(spages["columns"])}>

                    <div className={spages["align-center"]}>
                        <p>
                            We invite you to the first Croatian IPT conference, which will take place on <strong><span>June 11, 2025 at 2 PM</span></strong>, at the Department of Physics, Faculty of Science, University of Zagreb. The conference will be in hybrid mode and we will have participants from various countries.
                        </p>
                        <p>
                            The conference is <strong><span>open to the public</span></strong> and free for all participants. Registration is required!
                        </p>
                        <a href="https://forms.gle/StGHPfhiMgyg8mZp7" target="_blank"><ButtonPrimary>REGISTER NOW!</ButtonPrimary></a>
                    </div>
                    <div className={spages["align-center"]} style={{ alignItems: "center" }}>
                        <img
                            src="/media/conference/presenter.svg"
                            alt="presenter"
                            style={{
                                width: "50%",
                                borderRadius: "18px",
                                padding: "0",

                            }}
                        />
                    </div>
                </div>
            </div>

            <div className={classNames(spages["hero"], spages["color"])}>
                <KeyInfo keyInfo={conferenceKeyInfo} />
            </div>

            <section className={spages["hero"]}>
                <h1>Conference presentations</h1>
                <div className={classNames(spages["programme-list"], spages["columns"])}>
                    {[
                        {
                            title: "Traveling flame",
                            lecturer: "Luka Passek Kumerički",
                            country: "Croatia",
                        },
                        {
                            title: "Flying coin",
                            lecturer: "Elias Rothlin",
                            country: "Switzerland",
                        },
                        {
                            title: "Oscillating rings",
                            lecturer: "Matteo Murdaca & Emanuele Serrati",
                            country: "Finland",
                        },
                        {
                            title: "Bouncing honey",
                            lecturer: "Nina Mitroczuk & Michał Świątek",
                            country: "Poland",
                        },
                        {
                            title: "Chaotic laces",
                            lecturer: "Borna Stjepić",
                            country: "Croatia",
                        },
                        {
                            title: "The slinky",
                            lecturer: "Igor Nowik & Małgorzata Flis",
                            country: "Poland",
                        },
                        {
                            title: "Rubber shot",
                            lecturer: "Ivan Vučković",
                            country: "Croatia",
                        },
                    ].map((talk, index) => (
                        <div key={index} className={spages["programme-item"]}>
                            <h2>{talk.title}</h2>
                            <h3>
                                {talk.lecturer}{" "}
                                <span className={spages["country"]}>({talk.country})</span>
                            </h3>
                        </div>
                    ))}
                </div>
                <p>Check out the full list of this year&apos;s problems <span><a href="https://ipt.science/problems/">here!</a></span></p>
            </section>

            <section className={classNames(spages["hero"], spages["color"])}>
                <h1>Preliminary schedule</h1>
                <div className={spages["schedule-table"]}>
                    {[
                        { time: "14:30", event: "Doors Open" },
                        { time: "15:00", event: "Official Start & Introductory Speeches" },
                        { time: "15:20", event: "Traveling Flame – Luka ", country: "CRO" },
                        { time: "15:35", event: "Flying Coin – Elias ", country: "SWI" },
                        { time: "15:50", event: "Oscillating Rings – Matteo & Emanuele ", country: "FIN" },
                        { time: "16:05", event: "Short Break" },
                        { time: "16:20", event: "ICM Info – F. Landek" },
                        { time: "16:25", event: "Bouncing Honey – Nina & Michał ", country: "POL" },
                        { time: "16:40", event: "Chaotic Laces – Borna ", country: "CRO" },
                        { time: "16:55", event: "The Slinky – Igor & Gosia ", country: "POL" },
                        { time: "17:10", event: "Rubber Shot – Ivan ", country: "CRO" },
                        { time: "17:25", event: "Closing Ceremony" },
                        { time: "17:40", event: "Networking & Snacks" },
                    ].map((item, index) => (
                        <div key={index} className={spages["schedule-row"]}>
                            <div className={spages["schedule-time"]}>{item.time}</div>
                            <div className={spages["schedule-event"]}>
                                {item.event}
                                {item.country && (
                                    <span className={spages["country"]}>({item.country})</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div >
    );
}
