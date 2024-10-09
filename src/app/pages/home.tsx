import React from 'react';
import "./styles_pages.css";
import {ButtonPrimary, ButtonSecondary} from "../components/buttons";
import { IconArrowUpRight } from '@tabler/icons-react';
import Navbar from '@/app/components/navbar';

export default function HomePage() {
    return (
        <div className="page">
            <Navbar />
            <div className="hero">
                <h1>Studiraš fiziku? <br/> Voliš natjecanja?</h1>
                <div className="description">
                    <p>
                        IPT je međunarodno studentsko natjecanje u kojem timovi rješavaju otvorene probleme u fizici. Nakon nekoliko mjeseci rada, sudionici predstavljaju svoja rješenja i sudjeluju u znanstevnim raspravama tijekom petodnevnog turnira.
                    </p>
                </div>
                <div className="btn-holder">
                    <ButtonPrimary>Uključi se!</ButtonPrimary>
                    <ButtonSecondary>Što je IPT?</ButtonSecondary>
                </div>
            </div>
            <div className="hero color">
                <h1>Colored h1</h1>
            </div>
            <div>
                <ButtonPrimary>Button</ButtonPrimary>
                <ButtonPrimary icon={<IconArrowUpRight size={14}/>}>Button</ButtonPrimary>
                <ButtonSecondary>Button</ButtonSecondary>
                <ButtonSecondary icon={<IconArrowUpRight size={14}/>}>Button</ButtonSecondary>
            </div>
        </div>
    );
}


