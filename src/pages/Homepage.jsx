import "./Homepage.css";
import myPic from "../images/PSX_20240716_200731.jpg";
import { ChevronRight } from "lucide-react";

const navItems = [
  "Home",
  "Repositories",
  "Projects",
];

const brands = ["ClickUp", "Dropbox", "PAYCHEX", "elastic", "stripe"];

const socialLinks = [
  { label: "LinkedIn", short: "in", href: "https://www.linkedin.com" },
  { label: "Behance", short: "Be", href: "https://www.behance.net" },
  { label: "Twitter", short: "t", href: "https://twitter.com" },
];

function Homepage() {
  return (
    <main className="landing-page">
      <section className="hero-shell" aria-label="Portfolio introduction">
        <header className="hero-topbar">
          <nav className="hero-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item} href="#welcome">
                {item}
              </a>
            ))}
          </nav>

          <div className="hero-socials" aria-label="Social links">
            {socialLinks.map(({ label, short, href }) => (
              <a key={label} href={href} aria-label={label}>
                <span>{short}</span>
              </a>
            ))}
          </div>
        </header>

        <div className="hero-content" id="welcome">
          <div className="hero-copy">
            <h1>Ismail M Mandai</h1>
            <p className="intro-text">
              Highly motivated  software developer with practical
              experience in PHP, JavaScript, Java, and Python, applying modern
              development concepts in academic, personal, and freelance
              projects. Possesses strong problem-solving and analytical skills,
              with a commitment to continuous learning and growth in real-world
              software development environments.
            </p>
            <a className="cta-button" href="#contact">
              Contact Me
              {/* Let&apos;s get started */}
              <ChevronRight size={18} />
            </a>
          </div>

          <div className="hero-portrait">
            <div className="portrait-ring" aria-hidden="true">
              <img src={myPic} alt="Portrait of Ismail M." />
            </div>
          </div>
        </div>

       
      </section>
    </main>
  );
}

export default Homepage;
