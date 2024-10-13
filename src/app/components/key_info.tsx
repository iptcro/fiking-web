import React from "react";
import "@/app/styles/styles_comp.css";
import { IconSchool, IconCalendarMonth, IconMapPin, IconTestPipe  } from "@tabler/icons-react";
import { StaticIcon  } from "./Icon";

const key_info = [
  {
    icon: IconSchool,
    title: "studentsko natjecanje",
  },
  {
    icon: IconCalendarMonth,
    title: "7. - 13. travnja",
  },
  {
    icon: IconMapPin,
    title: "Varšava, Poljska",
  },
  {
    icon: IconTestPipe,
    title: "STEM",
  },
];

const gridTemplate = Array(key_info.length).fill('auto').join(' ');
Array(key_info.length).fill('auto').join(' ');
export default function KeyInfo() {
  return (
    <div style={{display: "grid", gridTemplateColumns: gridTemplate}}>
      {key_info.map((event) => (
        <div key={event.toString()} className="key-info-box">
            <div>
            <StaticIcon icon={event.icon} size={40}/>
            </div>
            <h2>{event.title}</h2>
        </div>
      ))}
    </div>
  );
}
