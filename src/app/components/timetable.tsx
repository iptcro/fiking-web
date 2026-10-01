import React from "react";
import "@/app/styles/styles_comp.css";

export type TimetableItem = {
  time: string;
  title: string;
  speaker?: string;
};

export type TimetableDay = {
  label: string;
  date: string;
  items: TimetableItem[];
};

export default function Timetable({ data }: { data: TimetableDay[] }) {
  return (
    <div className="timetable-grid">
      {data.map((day) => (
        <div key={day.label} className="timetable-day">
          <div className="timetable-day-header">
            <span className="timetable-day-label">{day.label}</span>
            <span className="timetable-day-date">{day.date}</span>
          </div>
          <div className="timetable-items">
            {day.items.map((item, i) => (
              <div key={i} className="timetable-item">
                <div className="timetable-time">{item.time}</div>
                <div className="timetable-content">
                  <p className="timetable-title">{item.title}</p>
                  {item.speaker && (
                    <p className="timetable-speaker">{item.speaker}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
