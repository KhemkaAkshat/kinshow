import { Link } from "react-router-dom";
import {
  SEO,
  StructuredData,
  faqSchema,
  organizationSchema,
  breadcrumbSchema,
} from "../components/SEO";

const FAQ_DATA = [
  {
    question: "What is Kinshow?",
    answer:
      "Kinshow is a free cinema discovery platform that helps you find movies and TV shows. We provide ratings, cast information, reviews, and streaming availability all in one place.",
  },
  {
    question: "Is Kinshow free to use?",
    answer:
      "Yes, Kinshow is completely free to use. We do not charge any fees for browsing movies, TV shows, or using features like the watchlist and viewing history.",
  },
  {
    question: "Does Kinshow host any content?",
    answer:
      "No, Kinshow does not host, stream, or distribute any copyrighted content. We aggregate data from third-party APIs (TVmaze, OMDb) and redirect to authorized streaming services.",
  },
  {
    question: "How do I create a watchlist on Kinshow?",
    answer:
      'Simply click the "+ Add to List" button on any movie or TV show detail page. Your watchlist is saved locally in your browser and accessible from the My List page.',
  },
  {
    question: "What data sources does Kinshow use?",
    answer:
      "Kinshow uses TVmaze API for TV show data, OMDb API for movie ratings and posters, and IMDb for identification. All data belongs to their respective owners.",
  },
  {
    question: "Is Kinshow available on mobile?",
    answer:
      "Yes, Kinshow is fully responsive and works on all devices including smartphones, tablets, and desktop browsers.",
  },
  {
    question: "How do I report a bug or suggest a feature?",
    answer:
      "You can contact us via email at kinshuksharma2024@gmail.com or open an issue on our GitHub repository at github.com/kiinshuk/kinshow.",
  },
];

const FEATURES = [
  {
    icon: "🎬",
    title: "Movie & TV Database",
    description:
      "Browse movies and TV shows with ratings, cast details, and synopses.",
  },
  {
    icon: "⌕",
    title: "Smart Search",
    description:
      "Find movies and shows quickly with a fast and responsive search.",
  },
  {
    icon: "🔖",
    title: "Personal Watchlist",
    description: "Save movies and shows you want to watch later.",
  },
  {
    icon: "◷",
    title: "Viewing History",
    description: "Keep track of the movies and shows you've already explored.",
  },
  {
    icon: "▣",
    title: "Episode Guide",
    description:
      "Explore complete season and episode information for TV series.",
  },
  {
    icon: "▶",
    title: "Streaming Links",
    description:
      "Find where your favorite movies and shows are available to watch.",
  },
  {
    icon: "⌘",
    title: "Responsive Design",
    description: "Enjoy Kinshow across desktop, tablet, and mobile devices.",
  },
];

const DATA_SOURCES = [
  {
    name: "TVmaze",
    description: "TV show data, episode guides, cast information, and images.",
  },
  {
    name: "OMDb API",
    description: "Movie ratings, posters, and supplementary movie information.",
  },
  {
    name: "IMDb",
    description: "Movie and show identification and ratings.",
  },
];

const TECHNOLOGIES = [
  "React 18",
  "Vite",
  "React Router",
  "TVmaze API",
  "OMDb API",
  "Vercel",
  "Vercel Analytics",
];

export default function About() {
  return (
    <main className="page">
      <SEO
        title="About"
        description="Learn about Kinshow — a free cinema discovery platform for movies and TV shows. Browse ratings, cast, reviews, and find streaming links. No sign-up required."
        url="https://kinshow.vercel.app/about"
      />

      <StructuredData data={faqSchema(FAQ_DATA)} />
      <StructuredData data={organizationSchema()} />

      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "https://kinshow.vercel.app/" },
          { name: "About", url: "https://kinshow.vercel.app/about" },
        ])}
      />

      <style>{`
        .about-page {
          max-width: 1050px;
          margin: 0 auto;
          padding: 48px 24px 80px;
        }

        /* HERO */

        .about-hero {
          padding: 42px 0 46px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 52px;
        }

        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
          color: var(--accent);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .about-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }

        .about-hero-title {
          margin: 0 0 14px;
          font-family: var(--font-display);
          font-size: clamp(42px, 7vw, 64px);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .about-hero-title span {
          color: var(--accent);
        }

        .about-hero-description {
          max-width: 680px;
          margin: 0;
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.7;
        }

        /* SECTIONS */

        .about-section {
          margin-bottom: 58px;
        }

        .about-section-heading {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 22px;
        }

        .about-section-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: 27px;
          line-height: 1.2;
        }

        .about-section-label {
          color: var(--text-muted);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .about-section-description {
          max-width: 680px;
          margin: -10px 0 22px;
          color: var(--text-secondary);
          font-size: 13.5px;
          line-height: 1.7;
        }

        /* ABOUT KINSHOW */

        .about-copy {
          max-width: 820px;
        }

        .about-copy p {
          margin: 0 0 16px;
          color: var(--text-secondary);
          font-size: 14.5px;
          line-height: 1.85;
        }

        .about-copy p:last-child {
          margin-bottom: 0;
        }

        /* FEATURES */

        .about-feature-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 52px;
          border-top: 1px solid var(--border);
        }

        .about-feature {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 14px;
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
        }

        .about-feature-icon {
          color: var(--accent);
          font-size: 18px;
          line-height: 1.4;
          text-align: center;
        }

        .about-feature-title {
          margin: 0 0 5px;
          font-size: 14px;
          font-weight: 600;
        }

        .about-feature-description {
          margin: 0;
          color: var(--text-secondary);
          font-size: 12.5px;
          line-height: 1.6;
        }

        /* DATA SOURCES */

        .about-source-list {
          border-top: 1px solid var(--border);
        }

        .about-source {
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 30px;
          padding: 18px 0;
          border-bottom: 1px solid var(--border);
        }

        .about-source-name {
          font-size: 14px;
          font-weight: 600;
        }

        .about-source-description {
          color: var(--text-secondary);
          font-size: 13px;
          line-height: 1.6;
        }

        .about-data-note {
          margin: 16px 0 0;
          color: var(--text-muted);
          font-size: 11.5px;
          line-height: 1.6;
        }

        /* TECHNOLOGY */

        .about-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .about-tech-badge {
          display: inline-flex;
          padding: 7px 12px;
          border: 1px solid var(--border-strong);
          border-radius: 999px;
          color: var(--text-secondary);
          background: var(--bg-raised);
          font-size: 11.5px;
          transition:
            color var(--duration) var(--ease),
            border-color var(--duration) var(--ease);
        }

        .about-tech-badge:hover {
          color: var(--text);
          border-color: var(--accent);
        }

        /* CONTRIBUTING */

        .about-contribute {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 26px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .about-contribute-content {
          max-width: 680px;
        }

        .about-contribute-title {
          margin: 0 0 7px;
          font-family: var(--font-display);
          font-size: 22px;
        }

        .about-contribute-description {
          margin: 0;
          color: var(--text-secondary);
          font-size: 13px;
          line-height: 1.65;
        }

        .about-github-link {
          flex-shrink: 0;
          color: var(--accent);
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          transition: color var(--duration) var(--ease);
        }

        .about-github-link:hover {
          color: var(--accent-hover);
        }

        /* DISCLAIMER */

        .about-disclaimer {
          padding: 20px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .about-disclaimer-title {
          margin: 0 0 8px;
          font-size: 13px;
          font-weight: 600;
        }

        .about-disclaimer p {
          max-width: 850px;
          margin: 0;
          color: var(--text-muted);
          font-size: 12px;
          line-height: 1.7;
        }

        /* CONTACT */

        .about-contact {
          padding: 34px 0;
          text-align: center;
        }

        .about-contact-title {
          margin: 0 0 8px;
          font-family: var(--font-display);
          font-size: 25px;
        }

        .about-contact p {
          max-width: 500px;
          margin: 0 auto 15px;
          color: var(--text-secondary);
          font-size: 13px;
        }

        .about-contact-link {
          color: var(--accent);
          font-size: 13px;
          font-weight: 600;
        }

        .about-contact-link:hover {
          color: var(--accent-hover);
        }

        /* FAQ */

.about-faq {
  border-top: 1px solid var(--border);
}

.about-faq-item {
  border-bottom: 1px solid var(--border);
}

.about-faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 19px 0;
  cursor: pointer;
  list-style: none;
  font-size: 13.5px;
  font-weight: 600;
  transition: color var(--duration) var(--ease);
}

.about-faq-question::-webkit-details-marker {
  display: none;
}

.about-faq-question:hover {
  color: var(--accent);
}

.about-faq-icon {
  flex-shrink: 0;
  color: var(--text-muted);
  font-size: 20px;
  font-weight: 300;
  line-height: 1;
  transition:
    transform var(--duration) var(--ease),
    color var(--duration) var(--ease);
}

.about-faq-item[open] .about-faq-icon {
  color: var(--accent);
  transform: rotate(45deg);
}

.about-faq-answer {
  max-width: 800px;
  margin: -2px 0 19px;
  color: var(--text-secondary);
  font-size: 12.5px;
  line-height: 1.7;
  animation: aboutFaqOpen 0.2s ease;
}

@keyframes aboutFaqOpen {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

        /* RESPONSIVE */

        @media (max-width: 750px) {
          .about-page {
            padding: 32px 18px 60px;
          }

          .about-hero {
            padding: 34px 0 38px;
            margin-bottom: 42px;
          }

          .about-section {
            margin-bottom: 46px;
          }

          .about-section-heading {
            margin-bottom: 18px;
          }

          .about-feature-list {
            grid-template-columns: 1fr;
          }

          .about-source {
            grid-template-columns: 110px 1fr;
            gap: 20px;
          }

          .about-contribute {
            align-items: flex-start;
            flex-direction: column;
            gap: 16px;
          }
        }

        @media (max-width: 480px) {
          .about-page {
            padding-left: 16px;
            padding-right: 16px;
          }

          .about-hero-title {
            font-size: 42px;
          }

          .about-hero-description {
            font-size: 14px;
          }

          .about-section-title {
            font-size: 23px;
          }

          .about-source {
            grid-template-columns: 1fr;
            gap: 5px;
          }

          .about-section-label {
            display: none;
          }
        }
      `}</style>

      <div className="about-page">
        {/* HERO */}
        <section className="about-hero">
          <div className="about-eyebrow">
            <span className="about-eyebrow-dot" />
            About Kinshow
          </div>

          <h1 className="about-hero-title">
            Discover your next <span>favorite.</span>
          </h1>

          <p className="about-hero-description">
            A free cinema discovery platform for finding movies and TV shows,
            exploring ratings and cast information, and keeping track of what
            you want to watch.
          </p>
        </section>

        {/* ABOUT KINSHOW */}
        <section className="about-section">
          <div className="about-section-heading">
            <h2 className="about-section-title">About Kinshow</h2>
            <span className="about-section-label">01</span>
          </div>

          <div className="about-copy">
            <p>
              Kinshow is a free cinema discovery platform designed to help you
              find your next favorite movie or TV show. We aggregate data from
              multiple sources to give you ratings, cast information, reviews,
              and streaming availability — all in one clean, easy-to-use
              interface.
            </p>

            <p>
              Whether you're looking for the latest trending series or a hidden
              gem from the past, Kinshow helps you discover, track, and organize
              your watchlist.
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section className="about-section">
          <div className="about-section-heading">
            <h2 className="about-section-title">Features</h2>
            <span className="about-section-label">02</span>
          </div>

          <p className="about-section-description">
            Everything you need to discover, organize, and keep track of what
            you want to watch.
          </p>

          <div className="about-feature-list">
            {FEATURES.map((feature) => (
              <article className="about-feature" key={feature.title}>
                <span className="about-feature-icon" aria-hidden="true">
                  {feature.icon}
                </span>

                <div>
                  <h3 className="about-feature-title">{feature.title}</h3>

                  <p className="about-feature-description">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DATA SOURCES */}
        <section className="about-section">
          <div className="about-section-heading">
            <h2 className="about-section-title">Data Sources</h2>
            <span className="about-section-label">03</span>
          </div>

          <p className="about-section-description">
            Kinshow uses third-party services to provide movie and TV
            information.
          </p>

          <div className="about-source-list">
            {DATA_SOURCES.map((source) => (
              <div className="about-source" key={source.name}>
                <div className="about-source-name">{source.name}</div>

                <div className="about-source-description">
                  {source.description}
                </div>
              </div>
            ))}
          </div>

          <p className="about-data-note">
            All movie and TV show data, images, and trademarks are the property
            of their respective owners. Kinshow does not host any content
            directly.
          </p>
        </section>

        {/* TECHNOLOGY */}
        <section className="about-section">
          <div className="about-section-heading">
            <h2 className="about-section-title">Technology</h2>
            <span className="about-section-label">04</span>
          </div>

          <p className="about-section-description">
            Kinshow is built with modern web technologies and deployed on
            Vercel.
          </p>

          <div className="about-tech-list">
            {TECHNOLOGIES.map((technology) => (
              <span className="about-tech-badge" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* CONTRIBUTING */}
        <section className="about-section">
          <div className="about-contribute">
            <div className="about-contribute-content">
              <h2 className="about-contribute-title">Contributing</h2>

              <p className="about-contribute-description">
                Kinshow is an open-source project. Found a bug, have an idea, or
                want to help improve the project? Check out the repository and
                contribute to its development.
              </p>
            </div>

            <a
              href="https://github.com/kiinshuk/kinshow"
              target="_blank"
              rel="noopener noreferrer"
              className="about-github-link"
            >
              View on GitHub →
            </a>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="about-section">
          <div className="about-disclaimer">
            <h2 className="about-disclaimer-title">Disclaimer</h2>

            <p>
              Kinshow is an educational project built for demonstration
              purposes. We do not host, stream, or distribute any copyrighted
              content. All streaming links redirect to third-party services that
              hold the rights to distribute content. Users are responsible for
              ensuring they access content through legal and authorized
              channels.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="about-section">
          <div className="about-contact">
            <h2 className="about-contact-title">Get in Touch</h2>

            <p>
              Have questions, suggestions, or feedback? Visit our Contact page
              to reach out.
            </p>

            <Link to="/contact" className="about-contact-link">
              Visit Contact Page →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="about-section">
          <div className="about-section-heading">
            <h2 className="about-section-title">Frequently Asked Questions</h2>
            <span className="about-section-label">05</span>
          </div>

          <div className="about-faq">
            {FAQ_DATA.map((q) => (
              <details className="about-faq-item" key={q.question}>
                <summary className="about-faq-question">
                  <span>{q.question}</span>
                  <span className="about-faq-icon" aria-hidden="true">
                    +
                  </span>
                </summary>

                <p className="about-faq-answer">{q.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
