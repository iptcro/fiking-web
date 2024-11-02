"use client";
import React, { useState } from "react";
import styles from "@/app/styles/key_info_style.module.css";
import {
  IconSchool,
  IconCalendarMonth,
  IconMapPin,
  IconTestPipe,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { StaticIcon } from "./Icon";

const key_info = [
  {
    id: 1,
    icon: IconSchool,
    title: "studentsko natjecanje",
  },
  {
    id: 2,
    icon: IconCalendarMonth,
    title: "7. - 13. travnja",
  },
  {
    id: 3,
    icon: IconMapPin,
    title: "Poljska",
  },
  {
    id: 4,
    icon: IconTestPipe,
    title: "STEM",
  },
];

const gridTemplate = Array(key_info.length).fill("auto").join(" ");
Array(key_info.length).fill("auto").join(" ");
export default function KeyInfo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? key_info.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === key_info.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
    <div className={styles["key-info-list"]} style={{display: "grid", gridTemplateColumns: gridTemplate}}>
      {key_info.map((event) => (
        <div key={event.toString()} className={styles["key-info-box"]}>
            <div>
            <StaticIcon icon={event.icon} size={40}/>
            </div>
            <h2>{event.title}</h2>
        </div>
      ))}
    </div>
    <div className={styles["key-info-carousel"]}>
      <button onClick={handlePrev} className={styles["key-info-btn"]}>
        <StaticIcon icon={IconChevronLeft} size={60} />
      </button>

      <div
        key={key_info[currentIndex].id}
        className={styles["carousel-item"]}
      >
        <div style={{ display: "flex" }}>
          <StaticIcon icon={key_info[currentIndex].icon} size={40} />
          <h2>{key_info[currentIndex].title}</h2>
        </div>
      </div>

      <button onClick={handleNext} className={styles["key-info-btn"]}>
        <StaticIcon icon={IconChevronRight} size={60} />
      </button>
    </div>
    </div>
  );
}
