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

            <div className={classNames(spages["hero"])}>
                <h1>More info soon...</h1>
            </div>

            <Footer />
        </div >
    );
}
