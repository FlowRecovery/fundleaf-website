"use client";

import Link from "next/link";
import type { Article } from "../data";

export default function ArticleClient({ article }: { article: Article }) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="art">
      <header className="art-header">
        <div className="art-header-inner">
          <Link href="/resources" className="art-back">
            &larr; Resources
          </Link>
          <span className="art-type">{article.type}</span>
          <h1 className="art-title">{article.title}</h1>
          <div className="art-meta">
            <span>{article.author}</span>
            <span className="art-meta-sep" aria-hidden="true">&middot;</span>
            <time dateTime={article.date}>{formattedDate}</time>
            <span className="art-meta-sep" aria-hidden="true">&middot;</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </header>

      <div className="art-layout">
        <nav className="art-toc" aria-label="Table of contents">
          <p className="art-toc-heading">On this page</p>
          <ul>
            {article.sections.map((s) => (
              <li key={s.heading}>
                <a href={`#${s.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main className="art-main">
          <p className="art-intro">{article.description}</p>

          {article.sections.map((s) => (
            <section
              key={s.heading}
              id={s.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="art-section"
            >
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
              {s.pullQuote && (
                <blockquote className="art-pullquote">
                  <p>{s.pullQuote}</p>
                </blockquote>
              )}
            </section>
          ))}

          <div className="art-conversion">
            <h2>{article.conversionHeading}</h2>
            <p>{article.conversionBody}</p>
            <div className="art-conversion-btns">
              <Link href="#" className="button-primary">
                Start finding funding
              </Link>
              <Link href="/pricing" className="button-secondary">
                View pricing
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
