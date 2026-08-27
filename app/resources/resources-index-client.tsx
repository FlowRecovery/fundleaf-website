"use client";

import { useState } from "react";
import Link from "next/link";
import { articles, type ArticleType } from "./data";

const TYPES: ArticleType[] = ["Guide", "Template", "Funder profile", "Explainer"];

export default function ResourcesIndexClient() {
  const [active, setActive] = useState<ArticleType | "All">("All");

  const filtered =
    active === "All" ? articles : articles.filter((a) => a.type === active);

  return (
    <>
      <section className="res-hero">
        <div className="res-hero-inner">
          <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
            Resources
          </p>
          <h1>Guides, templates and funder profiles for UK fundraisers.</h1>
          <p className="res-hero-sub">
            Practical writing, honest guidance and the background knowledge
            that makes applications stronger.
          </p>
        </div>
      </section>

      <section className="res-index section" aria-labelledby="res-index-heading">
        <div className="res-index-inner">
          <div className="res-filter-row">
            <h2 id="res-index-heading" className="sr-only">
              All resources
            </h2>
            <div className="res-filters" role="group" aria-label="Filter by type">
              <button
                type="button"
                className={`res-filter-btn ${active === "All" ? "res-filter-btn--active" : ""}`}
                onClick={() => setActive("All")}
              >
                All
              </button>
              {TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`res-filter-btn ${active === t ? "res-filter-btn--active" : ""}`}
                  onClick={() => setActive(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="res-grid">
            {filtered.map((a) => (
              <Link
                key={a.slug}
                href={`/resources/${a.slug}`}
                className="res-card"
              >
                <span className="res-card-type">{a.type}</span>
                <h3 className="res-card-title">{a.title}</h3>
                <p className="res-card-desc">{a.description}</p>
                <div className="res-card-meta">
                  <span>{a.readingTime}</span>
                  <span>{new Date(a.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
