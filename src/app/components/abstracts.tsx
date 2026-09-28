import React from "react";
import "@/app/styles/styles_comp.css";

export type Abstract = {
  title: string;
  presenter: string;
  image: string;
  body: string;
};

export default function Abstracts({ data }: { data: Abstract[] }) {
  return (
    <div className="abstracts-grid">
      {data.map((abstract) => (
        <div key={abstract.title} className="abstract-card">
          <div className="abstract-header">
            <img src={abstract.image} alt={abstract.title} className="abstract-thumb" />
            <div className="abstract-heading">
              <h3 className="abstract-title">{abstract.title}</h3>
              <p className="abstract-presenter">{abstract.presenter}</p>
            </div>
          </div>
          <div className="abstract-body">
            {abstract.body.split(/\n\s*\n/).map((paragraph, i) => (
              <p key={i}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
