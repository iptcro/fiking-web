"use client";
import React, { useState } from "react";
import styles from "@/app/styles/key_info_style.module.css";
import classNames from "classnames";
import {
  IconSchool,
  IconCalendarMonth,
  IconMapPin,
  IconTestPipe,
  IconChevronLeft,
  IconChevronRight,
  TablerIcon,
  IconPinned,
  IconUsers,
  IconHandFingerRight,
} from "@tabler/icons-react";
import { StaticIcon } from "./Icon";

type KeyInfoItem = {
  id: number;
  icon: string;
  title: string;
  url?: string;
};

type KeyInfoProps = {
  keyInfo: KeyInfoItem[];
  iconColor?: string;
  boxed?: boolean;
};

const iconMap: Record<string, TablerIcon> = {
  IconSchool,
  IconCalendarMonth,
  IconMapPin,
  IconTestPipe,
  IconPinned,
  IconUsers,
  IconHandFingerRight,
};

export default function KeyInfo({ keyInfo, iconColor, boxed }: KeyInfoProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? keyInfo.length - 1 : prevIndex - 1
    );

  const handleNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === keyInfo.length - 1 ? 0 : prevIndex + 1
    );

  const gridTemplate = Array(keyInfo.length)
    .fill(boxed ? "1fr" : "auto")
    .join(" ");

  return (
    <div>
      <div
        className={classNames(styles["key-info-list"], {
          [styles["boxed"]]: boxed,
        })}
        style={{ display: "grid", gridTemplateColumns: gridTemplate }}
      >
        {keyInfo.map((event) => {
          const Icon = iconMap[event.icon];
          return (
            <div
              key={event.id}
              className={classNames(styles["key-info-box"], {
                [styles["boxed"]]: boxed,
              })}
            >
              <div>
                <StaticIcon icon={Icon} size={40} color={iconColor} />
              </div>
              <h2>
                {event.url ? (
                  <a href={event.url} target="_blank" rel="noopener noreferrer">
                    {event.title}
                  </a>
                ) : (
                  event.title
                )}
              </h2>
            </div>
          );
        })}
      </div>

      <div className={styles["key-info-carousel"]}>
        <button onClick={handlePrev} className={styles["key-info-btn"]}>
          <StaticIcon icon={IconChevronLeft} size={60} color={iconColor} />
        </button>

        <div
          key={keyInfo[currentIndex].id}
          className={classNames(styles["carousel-item"], {
            [styles["boxed"]]: boxed,
          })}
        >
          <div style={{ display: "flex" }}>
            <StaticIcon
              icon={iconMap[keyInfo[currentIndex].icon]}
              size={40}
              color={iconColor}
            />
            <h2>
              {keyInfo[currentIndex].url ? (
                <a
                  href={keyInfo[currentIndex].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {keyInfo[currentIndex].title}
                </a>
              ) : (
                keyInfo[currentIndex].title
              )}
            </h2>
          </div>
        </div>

        <button onClick={handleNext} className={styles["key-info-btn"]}>
          <StaticIcon icon={IconChevronRight} size={60} color={iconColor} />
        </button>
      </div>
    </div>
  );
}
