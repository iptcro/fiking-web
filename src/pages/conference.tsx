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

const talks = [
    {
        title: "Traveling flame",
        lecturer: "Luka Passek Kumerički",
        country: "Croatia",
        abstract: "Under certain circumstances a flame can travel along an open canal filled with liquid fuel. We will give an explanation of the phenomenon and its periodic behaviour and show the results of our investigations of its lifetime and speed.",
        image: ""
    },
    {
        title: "Flying coin",
        lecturer: "Elias Rothlin",
        country: "Switzerland",
        abstract: "One can make a coin fly from a table into a plate placed on it by blowing on it from a certain angle. We investigate the movement of the coin and ist dependence on relevant parameters through simulations and experiments. Based on our findings, we determine the Swiss coin which achieves the maximum height. By using a household compressor, we could repeatably land the coin in a cup at 24.5 ± 0.2 cm height. We also investigate the problem of predicting the face on which the coin lands. Based on experimental data, we determine suitable cup heights where this is possible.",
        image: ""
    },
    {
        title: "Oscillating rings",
        lecturer: "Matteo Murdaca & Emanuele Serrati",
        country: "Finland",
        abstract: "We studied a system of two ferromagnetic rings of different radii tied together by an inner string, suspended by a magnet placed above and held down by an outer string. We consider two coupled equations of motion dependent on magnetic moment and string (inner and outer) torsion torques, and investigate the rotational motion of the disk based on magnetic permeability of the rings, moments of inertia, positions, thickness. We predict chaotic/unpredictable behavior of the position, velocities and equilibrium positions of the system as a function of parametric changes.",
        image: ""
    },
    {
        title: "Bouncing honey",
        lecturer: "Nina Mitroczuk & Michał Świątek",
        country: "Poland",
        abstract: "When honey is dripping from a spoon, the trickle can stop flowing, oscillate up and down before flowing again. We analysed the flow of honey from a spoon. Initially, it forms a continuous stream, which eventually breaks up, goes up and down in a chaotic manner before transitioning to periodic droplet formation, where each drop has a nearly constant volume. These three stages correspond to distinct flow regimes: continuous flow, the “dripping faucet” flow regime, and droplet formation. In our experiments we used a scale connected to a computer and a camera to record the experiment.The honey flowed through a 3D printed nozzle attached to a container, which enabled us to control the flow rate.\n\n In addition to honey, we investigated other viscous fluids, including molasses, glycerol, and corn syrup, and measured key relevant parameters such as density, viscosity, and surface tension.Varying the relevant parameters, we obtained a phase diagram that maps the observed flow regimes.This diagram predicts the type of flow based on the Oh and Re numbers for a given viscous fluid",
        image: "/media/conference/honey.png"
    },
    {
        title: "Chaotic laces",
        lecturer: "Ema Novak & Nika Macan",
        country: "Croatia",
        abstract: "When a sufficiently large number of shoelaces is rotated in a centrifuge, they become entangled. Using the mathematical definition of a knot, it is possible to find the probability distribution for knot formation in dependence of string length and number. We came up with a mathematical model that is in good agreement with the experiments. When rotating many shoelaces, we encountered an interesting problem, the formation of one big bundle in the middle which was not intuitive from the start.",
        image: ""
    },
    {
        title: "The slinky",
        lecturer: "Igor Nowik & Małgorzata Flis",
        country: "Poland",
        abstract: "When one places a slinky at the top of a staircase, it can be pushed to travel in its peculiar motion down the stairs. Investigate how the average slope influences the motion of the slinky. What is the minimal average slope such that the slinky successfully reaches its steady periodic motion? What happens if you replace the stairs with an inclined plane? Our presentation aims to get familiar with this phenomenon, present the experimental results and our theoretical model.",
        image: ""
    },
    {
        title: "Rubber shot",
        lecturer: "Ivan Vučković",
        country: "Croatia",
        abstract: "One can launch a rubber band using its own extension. In this work, we want to estimate the highest possible launch speed of a rubber band and check the maximal speed that can be reliably achieved over multiple shots. We construct a theoretical model by assuming that rubber band is a 1D chain with two possible configurations of chain links. Then we use the conservation of energy and fit the free parameters onto the measured speeds of the rubber. Speeds were measured in two ways to differentiate maximum and reliable speeds. Since rubber loses some of its restoring force after being stretched a few times, we tested how this affects speed. We found that after about 10 stretches, the force levels off and therefore, we made a distinction: maximum speed was measured using rubber bands that hadn’t been stretched before, and reliable speed was measured using rubber bands that had already been stretched enough to reach that steady force level. Our results for velocities were 58 m/s for maximal and and 36 m/s for reliable velocity.",
        image: ""
    },
]

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
                        <a href="https://us06web.zoom.us/j/88188527466?pwd=xLTqP03EkbAqhyeCe3hs8hHRqAwMbQ.1" target="_blank"><ButtonSecondary>JOIN ONLINE!</ButtonSecondary></a>
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
                <div className={classNames(spages["programme-list"])}>
                    {talks.map((talk, index) => {
                        return (
                            <div key={index} className={spages["programme-item"]}>
                                <h2>{talk.title}</h2>
                                <h3>
                                    {talk.lecturer}{" "}
                                    <span className={spages["country"]}>({talk.country})</span>
                                </h3>
                                <p className="abstract">
                                    {talk.abstract + "\n"}
                                    {talk.image && (
                                        <img
                                            src={talk.image}
                                            alt={`${talk.title} image`}
                                            style={{ width: "80%", display: "block" }}
                                            className={spages["programme-image"]}
                                        />
                                    )}
                                </p>

                            </div>
                        );
                    })}
                </div>
                <p>
                    Check out the full list of this year&apos;s problems{" "}
                    <span>
                        <a href="https://ipt.science/problems/">here!</a>
                    </span>
                </p>
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
                        { time: "16:40", event: "Chaotic Laces – Ema & Nika ", country: "CRO" },
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
