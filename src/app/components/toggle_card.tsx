import "./styles_comp.css";
import React, { useState } from "react";
import { Button } from "@mui/base/Button";
import { IconButton } from "./buttons";
import { IconChevronUp } from "@tabler/icons-react";


interface ToggleCardProps {
  question: string;
  answer: string;
}

const ToggleCard: React.FC<ToggleCardProps> = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Toggle function to open/close the card
//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

  return (
    <div className="card">
      <div className="card-header" >
        <h3 className="card-question">{question}</h3>
        <IconButton
            icon={IconChevronUp}
            url="/"
            size={36}
            color="var(--fiking-light)"
            className="toggle-button"
        />
      </div>
      {(
        <div className="card-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default ToggleCard;
