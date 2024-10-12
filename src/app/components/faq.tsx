import React from "react";
import "./styles_comp.css";
import { IconChevronDown } from "@tabler/icons-react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

const faq_data = [
  {
    question: "Mogu li se prijaviti ako ...",
    answer: "Answer to 1 is that one is the answer!",
  },
  {
    question: "Question 2",
    answer: "Again, 2 is now the answer",
  },
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
            <h3 className="card-question">{event.question}</h3>
          </AccordionSummary>
          <AccordionDetails className="card-answer">
            <p>{event.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
