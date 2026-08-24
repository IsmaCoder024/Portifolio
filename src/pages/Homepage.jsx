import "./Homepage.css";
import React, { useState } from "react";
import myPic from "../images/Me.png";
import { ChevronRight, Menu, X } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Repositories", href: "https://github.com/IsmaCoder024?tab=repositories" },
  { label: "Projects", href: "#" },
];


const socialLinks = [
  { label: "GitHub",  href: "https://github.com/IsmaCoder024" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/isma-mandai-8b1a87366/" },
  { label: "Instagram",  href: "https://www.instagram.com/being_isma_" },

];

function Homepage() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <main className="landing-page">
      <button
        className="mobile-nav-toggle"
        type="button"
        aria-label={isMobileNavOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isMobileNavOpen}
        onClick={() => setIsMobileNavOpen((current) => !current)}
      >
        {isMobileNavOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div
        className={`nav-backdrop ${isMobileNavOpen ? "open" : ""}`}
        aria-hidden="true"
        onClick={() => setIsMobileNavOpen(false)}
      />

      <div className={`hero-drawer ${isMobileNavOpen ? "open" : ""}`}>
        <nav className="hero-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsMobileNavOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hero-socials" aria-label="Social links">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileNavOpen(false)}
            >
              <span>{label}</span>
              {label === "LinkedIn" && <FaLinkedin />}
              {label === "Instagram" && <FaInstagram />}
              {label === "Twitter" && <FaTwitter />}
              {label === "Facebook" && <FaFacebook />}
              {label === "Github" && <FaGithub />}
            </a>
          ))}
        </div>
      </div>

      <section className="hero-shell" aria-label="Portfolio introduction">
        <header className="hero-topbar">
          <div className="desktop-nav" aria-label="Desktop navigation">
            <nav className="desktop-nav-links" aria-label="Primary">
              {navItems.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="desktop-socials" aria-label="Social links">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label === "LinkedIn" && <FaLinkedin />}
                  {label === "Instagram" && <FaInstagram />}
                  {label === "Twitter" && <FaTwitter />}
                  {label === "Facebook" && <FaFacebook />}
                  {label === "Github" && <FaGithub />}
                </a>
              ))}
            </div>
          </div>
        </header>

        <div className="hero-content" id="welcome">
          <div className="hero-copy">
            <h1>Ismail Mandai</h1>
            <p className="intro-text">
              Highly motivated  software developer with practical
              experience in applying modern
              development concepts in academic, personal, and freelance
              projects. Possesses strong problem-solving and analytical skills,
              with a commitment to continuous learning and growth in real-world
              software development environments.
            </p>
            <a className="cta-button" href="https://wa.me/255768139112" target="_blank"
            rel="noopener noreferrer">
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
