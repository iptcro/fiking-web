import React from "react";
import "@/app/styles/styles_comp.css";
import { IconChevronDown } from "@tabler/icons-react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

const faq_data = [
  {
    question: "Prva sam godina studija fizike. Imam li dovoljno znanja za ovo natjecanje?",
    answer: "Studenti prve godine tek kreću s općim fizikama i činjenica je da ćeš vjerojatno imati poteškoća s čitanjem članaka i rješavanjem problema. Ipak, svakako možeš sudjelovati u rješavanju problema jer je tu i puno provođenja eksperimenata, analize i sl. Možeš iskoristiti ovu priliku za učenje od starijih studenata te stjecanje vrijednog iskustva, a onda se na višim godinama kvalificirati u natjecateljski tim.",
  },
  {
    question: "Ne studiram fiziku, ali bavim se programiranjem, matematikom i sl. Mogu li svejedno sudjelovati?",
    answer: "Dapače! Tražimo ljude koji znaju raditi simulacije eksperimenata, ljude koji su dobri s matematikom i analizom podataka, ljude koji su dobri s elektronikom i sl., svaka vještina je dobrodošla!",
  },
  // {
  //   question: "Što ako nisam iz Zagreba?",
  //   answer: ""
  // }
];

export default function FAQ() {
  return (
    <div>
      {faq_data.map((event) => (
        <Accordion key={event.toString()} className="card">
          <AccordionSummary
            className="card-header"
            expandIcon={
              <IconChevronDown
                stroke={3}
                size={24}
                color={"var(--fiking-light)"}
              />
            }
          >
            <h3 className="card-question" style={{color: "black"}}>{event.question}</h3>
          </AccordionSummary>
          <AccordionDetails className="card-answer">
            <p style={{color: "black"}}>{event.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
