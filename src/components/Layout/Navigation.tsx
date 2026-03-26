"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navigation.module.css";
import { Globe, MessageCircle, Share2 } from "lucide-react";

/* ── Train data ── */
const trainMembers = [
  { name: "Ash Ketchum",  role: "Lead Organizer", bodyColor: "#3b4cca", hatColor: "#1a237e" },
  { name: "Misty",        role: "Design Lead",    bodyColor: "#e53935", hatColor: "#c62828" },
  { name: "Brock",        role: "Operations",     bodyColor: "#5d4037", hatColor: "#3e2723" },
  { name: "Gary Oak",     role: "Dev Lead",       bodyColor: "#7b1fa2", hatColor: "#4a0072" },
  { name: "Dawn",         role: "Marketing",      bodyColor: "#e91e63", hatColor: "#880037" },
  { name: "Prof. Oak",    role: "Faculty Mentor", bodyColor: "#e65100", hatColor: "#bf360c" },
];

/* ── Locomotive SVG (faces left — direction of travel) ── */
const LocomotiveSVG = () => (
  <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.trainSvg}>
    {/* Cowcatcher */}
    <polygon points="0,86 24,70 24,86" fill="#666"/>
    {/* Main body */}
    <rect x="22" y="26" width="120" height="44" rx="5" fill="#1f1f38"/>
    {/* Yellow accent stripe */}
    <rect x="22" y="26" width="120" height="12" rx="5" fill="#ffcb05"/>
    {/* Cab at back (right) */}
    <rect x="104" y="8" width="40" height="24" rx="4" fill="#282846"/>
    {/* Cab window */}
    <rect x="110" y="13" width="26" height="13" rx="2" fill="#82cffa" opacity="0.85"/>
    {/* Chimney */}
    <rect x="38" y="8" width="14" height="20" rx="3" fill="#1a1a1a"/>
    <rect x="33" y="7" width="24" height="6" rx="3" fill="#222"/>
    {/* Smoke puffs */}
    <circle cx="45" cy="3" r="6" fill="rgba(200,200,200,0.32)" className={styles.smoke1}/>
    <circle cx="56" cy="1" r="4" fill="rgba(200,200,200,0.22)" className={styles.smoke2}/>
    <circle cx="35" cy="2" r="3.5" fill="rgba(200,200,200,0.18)" className={styles.smoke3}/>
    {/* Pokeball emblem */}
    <circle cx="70" cy="46" r="13" fill="white" stroke="#ccc" strokeWidth="1"/>
    <path d="M57 46 A13 13 0 0 1 83 46" fill="#e53935"/>
    <line x1="57" y1="46" x2="83" y2="46" stroke="#444" strokeWidth="1.5"/>
    <circle cx="70" cy="46" r="5" fill="white" stroke="#444" strokeWidth="1.5"/>
    <circle cx="70" cy="46" r="2" fill="#e0e0e0"/>
    {/* Label */}
    <text x="90" y="42" fontSize="6.5" fontWeight="bold" fill="#ffcb05" fontFamily="monospace">UB HACKING</text>
    {/* Connector at back */}
    <rect x="140" y="45" width="20" height="5" rx="2.5" fill="#666"/>
    {/* Wheels */}
    {([32, 64, 96, 124] as number[]).map((x) => (
      <g key={x}>
        <circle cx={x} cy="82" r="13" fill="#111" stroke="#555" strokeWidth="2.5"/>
        <circle cx={x} cy="82" r="5" fill="#2a2a2a"/>
        <line x1={x} y1="69" x2={x} y2="95" stroke="#555" strokeWidth="1.5"/>
        <line x1={x - 13} y1="82" x2={x + 13} y2="82" stroke="#555" strokeWidth="1.5"/>
      </g>
    ))}
    {/* Side connecting rod */}
    <rect x="32" y="79" width="92" height="3" rx="1.5" fill="#555" opacity="0.65"/>
  </svg>
);

/* ── Single train car with character in window ── */
type TrainMember = typeof trainMembers[0];

const TrainCar = ({ member }: { member: TrainMember }) => (
  <div className={styles.trainCar}>
    {/* Name tooltip */}
    <div className={styles.nameTag}>
      <span className={styles.nameTagName}>{member.name}</span>
      <span className={styles.nameTagRole}>{member.role}</span>
    </div>
    {/* Car + embedded character */}
    <svg viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.trainSvg}>
      {/* Car body */}
      <rect x="4" y="18" width="102" height="56" rx="4" fill="#1f1f38"/>
      {/* Color stripe top */}
      <rect x="4" y="18" width="102" height="10" rx="4" fill={member.bodyColor}/>
      {/* Window opening */}
      <rect x="20" y="26" width="70" height="42" rx="3" fill="#0d1a2d"/>
      {/* Glass tint */}
      <rect x="20" y="26" width="70" height="42" rx="3" fill="#82cffa" opacity="0.07"/>

      {/* ── Character centered in window (cx=55, window y=26–68) ── */}
      {/* Hat brim */}
      <rect x="41" y="34" width="28" height="4" rx="2" fill={member.hatColor}/>
      {/* Hat top */}
      <rect x="45" y="27" width="20" height="9" rx="2" fill={member.hatColor}/>
      {/* Head */}
      <ellipse cx="55" cy="48" rx="11" ry="11" fill="#f5cba7"/>
      {/* Eyes */}
      <circle cx="50.5" cy="46" r="1.8" fill="#222"/>
      <circle cx="59.5" cy="46" r="1.8" fill="#222"/>
      {/* Eye shine */}
      <circle cx="51.3" cy="45.2" r="0.7" fill="white"/>
      <circle cx="60.3" cy="45.2" r="0.7" fill="white"/>
      {/* Smile */}
      <path d="M50 53 Q55 57 60 53" stroke="#c07050" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      {/* Shirt/body */}
      <rect x="43" y="60" width="24" height="10" rx="2" fill={member.bodyColor}/>
      {/* Collar V */}
      <path d="M51 60 L55 63 L59 60" fill="rgba(255,255,255,0.65)"/>

      {/* Window frame overlay */}
      <rect x="20" y="26" width="70" height="42" rx="3" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
      {/* Door seams */}
      <line x1="7" y1="18" x2="7" y2="74" stroke="rgba(255,255,255,0.07)" strokeWidth="2"/>
      <line x1="103" y1="18" x2="103" y2="74" stroke="rgba(255,255,255,0.07)" strokeWidth="2"/>
      {/* Coupler left */}
      <rect x="0" y="42" width="7" height="5" rx="2" fill="#555"/>
      {/* Coupler right */}
      <rect x="103" y="42" width="7" height="5" rx="2" fill="#555"/>
      {/* Wheels */}
      <circle cx="27" cy="88" r="12" fill="#111" stroke="#555" strokeWidth="2.5"/>
      <circle cx="27" cy="88" r="5" fill="#2a2a2a"/>
      <line x1="27" y1="76" x2="27" y2="100" stroke="#555" strokeWidth="1.5"/>
      <line x1="15" y1="88" x2="39" y2="88" stroke="#555" strokeWidth="1.5"/>
      <circle cx="83" cy="88" r="12" fill="#111" stroke="#555" strokeWidth="2.5"/>
      <circle cx="83" cy="88" r="5" fill="#2a2a2a"/>
      <line x1="83" y1="76" x2="83" y2="100" stroke="#555" strokeWidth="1.5"/>
      <line x1="71" y1="88" x2="95" y2="88" stroke="#555" strokeWidth="1.5"/>
    </svg>
  </div>
);

/* ── Full railway scene ── */
const TrainScene = () => (
  <div className={styles.trainScene}>
    {/* Inner clip wrapper keeps the rolling train inside bounds
        while the outer scene stays overflow:visible for tooltips */}
    <div className={styles.trainClip}>
      {/* Static track bed */}
      <div className={styles.trainGround}/>
      <div className={styles.trainTies}/>
      <div className={`${styles.trainRail} ${styles.trainRailTop}`}/>
      <div className={`${styles.trainRail} ${styles.trainRailBot}`}/>

      {/* Animated train */}
      <div className={styles.train}>
        {/* Locomotive */}
        <div className={styles.trainLoco}>
          <div className={styles.nameTag}>
            <span className={styles.nameTagName}>UB Hacking Express</span>
            <span className={styles.nameTagRole}>All aboard!</span>
          </div>
          <LocomotiveSVG />
        </div>
        {/* Passenger cars */}
        {trainMembers.map((m, i) => (
          <TrainCar key={i} member={m} />
        ))}
      </div>
    </div>
  </div>
);


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

      {/* ── Railway scene ── */}
      <TrainScene />

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
