"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navigation.module.css";
import { Globe, MessageCircle, Share2 } from "lucide-react";


export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>

      {/* ── Brand ── */}
      <a href="#home" className={styles.brand}>
        <div className={styles.brandText}>
          <span className={styles.brandName}>UB HACKING</span>
          <span className={styles.brandSub}>Gotta Hack &apos;Em All!</span>
        </div>
        {/* Inline Pokeball SVG */}
        <svg className={styles.pokeballIcon} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="20" cy="20" r="17" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5"/>
          <path d="M3 20 A17 17 0 0 1 37 20" fill="#e53935"/>
          <line x1="3" y1="20" x2="37" y2="20" stroke="#1a1a1a" strokeWidth="2.5"/>
          <circle cx="20" cy="20" r="6" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5"/>
          <circle cx="20" cy="20" r="2.5" fill="#ddd"/>
        </svg>
      </a>

      {/* ── Links ── */}
      <div className={styles.links}>
        {["home", "about", "tracks", "sponsors", "faq"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={styles.link}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      {/* ── Register CTA ── */}
      <a href="#home" className={styles.registerBtn}>
        Register Now
      </a>

    </nav>
  );
};

const Pokeball = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="20" cy="20" r="17" fill="#fff" stroke="#ffcb05" strokeWidth="2"/>
    <path d="M3 20 A17 17 0 0 1 37 20" fill="#e53935"/>
    <line x1="3" y1="20" x2="37" y2="20" stroke="#ffcb05" strokeWidth="2"/>
    <circle cx="20" cy="20" r="6" fill="#fff" stroke="#ffcb05" strokeWidth="2"/>
    <circle cx="20" cy="20" r="2.5" fill="#eee"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className={styles.footer}>

      {/* ── Grass / wave divider ── */}
      <div className={styles.footerWave}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60 L0 30 Q60 0 120 25 Q180 50 240 20 Q300 0 360 28 Q420 55 480 22 Q540 0 600 30 Q660 55 720 20 Q780 0 840 28 Q900 55 960 22 Q1020 0 1080 30 Q1140 55 1200 20 Q1260 0 1320 28 Q1380 55 1440 25 L1440 60 Z" fill="#1a1a1a"/>
        </svg>
      </div>

      <div className={styles.footerBody}>

        {/* Floating decorative pokeballs */}
        <Pokeball className={`${styles.decoBall} ${styles.decoBall1}`} />
        <Pokeball className={`${styles.decoBall} ${styles.decoBall2}`} />
        <Pokeball className={`${styles.decoBall} ${styles.decoBall3}`} />

        <div className={styles.footerGrid}>

          {/* ── Col 1: Brand ── */}
          <div className={styles.footerCol}>
            <div className={styles.footerBrand}>
              <Pokeball className={styles.footerPokeball} />
              <span className={styles.footerBrandName}>UB HACKING</span>
            </div>
            <p className={styles.footerTagline}>
              Gotta Hack &apos;Em All!
            </p>
            <p className={styles.footerDesc}>
              A 36-hour Pokemon-themed hackathon at the University at Buffalo. Build, learn, and catch &apos;em all.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Website" className={styles.socialLink}><Globe size={18} /></a>
              <a href="#" aria-label="Discord" className={styles.socialLink}><MessageCircle size={18} /></a>
              <a href="#" aria-label="Share"   className={styles.socialLink}><Share2 size={18} /></a>
            </div>
          </div>

          {/* ── Col 2: Quick links ── */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Quick Links</h4>
            <nav className={styles.footerLinks}>
              {["home","about","tracks","sponsors","faq","team"].map(s => (
                <a key={s} href={`#${s}`} className={styles.footerLink}>
                  <span className={styles.footerLinkArrow}>▶</span>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </a>
              ))}
            </nav>
          </div>

          {/* ── Col 3: Info ── */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>The Event</h4>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📅</span>
                <span>Spring 2026</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <span>University at Buffalo</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>⏱️</span>
                <span>36 Hours of Hacking</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🏆</span>
                <span>$10,000+ in Prizes</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>👾</span>
                <span>500+ Hackers</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLine} />
          <div className={styles.footerBottomContent}>
            <span className={styles.copyright}>© 2026 UB Hacking · All rights reserved</span>
            <span className={styles.madeWith}>
              Made with <span className={styles.heart}>❤️</span> by <strong>Soham Mehra</strong>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
