"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./SponsorsSection.module.css";

const sponsors = [
  { name: "Google",     logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft",  logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "AWS",        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "GitHub",     logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Meta",       logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
];

const SponsorsSection = () => {
  return (
    <section className={styles.sponsors}>

      {/* ── Header ── */}
      <div className={styles.header}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Powered By
        </motion.p>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our <span className={styles.titleAccent}>Sponsors</span>
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The Trainers fueling your adventure — we couldn&apos;t do it without them
        </motion.p>
      </div>

      {/* ── Pokédex device ── */}
      <motion.div
        className={styles.pokedex}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
      >

        {/* ─── LEFT PANEL ─── */}
        <div className={styles.leftPanel}>

          {/* Top section: camera + lights */}
          <div className={styles.leftTop}>
            {/* Big camera lens */}
            <div className={styles.camera}>
              <div className={styles.cameraRing} />
              <div className={styles.cameraLens}>
                <div className={styles.cameraInner} />
                <div className={styles.cameraShine} />
              </div>
            </div>

            {/* Status lights */}
            <div className={styles.lights}>
              <div className={`${styles.light} ${styles.lightRed}`} />
              <div className={`${styles.light} ${styles.lightYellow}`} />
              <div className={`${styles.light} ${styles.lightGreen}`} />
            </div>
          </div>

          {/* Divider bar */}
          <div className={styles.leftDivider} />

          {/* Mini screen */}
          <div className={styles.miniScreen}>
            <span className={styles.miniScreenText}>POKÉDEX</span>
            <div className={styles.miniScreenLine} />
            <div className={styles.miniScreenLine} />
          </div>

          {/* Speaker grille */}
          <div className={styles.speaker}>
            {[0,1,2,3,4].map(i => (
              <div key={i} className={styles.speakerLine} />
            ))}
          </div>

          {/* D-pad */}
          <div className={styles.dpadWrapper}>
            <div className={styles.dpad}>
              <div className={styles.dpadV} />
              <div className={styles.dpadH} />
              <div className={styles.dpadCenter} />
            </div>
          </div>

          {/* A / B buttons */}
          <div className={styles.actionButtons}>
            <div className={`${styles.actionBtn} ${styles.btnB}`}>B</div>
            <div className={`${styles.actionBtn} ${styles.btnA}`}>A</div>
          </div>
        </div>

        {/* ─── HINGE ─── */}
        <div className={styles.hinge}>
          <div className={styles.hingeRivet} />
          <div className={styles.hingeGroove} />
          <div className={styles.hingeGroove} />
          <div className={styles.hingeGroove} />
          <div className={styles.hingeRivet} />
        </div>

        {/* ─── RIGHT PANEL ─── */}
        <div className={styles.rightPanel}>

          {/* Screen bezel */}
          <div className={styles.screenBezel}>
            <div className={styles.screenHeader}>
              <span className={styles.screenLabel}>◀ SPONSOR DATA ▶</span>
            </div>

            {/* Main screen */}
            <div className={styles.screen}>
              {/* Corner brackets */}
              <div className={`${styles.bracket} ${styles.bracketTL}`} />
              <div className={`${styles.bracket} ${styles.bracketTR}`} />
              <div className={`${styles.bracket} ${styles.bracketBL}`} />
              <div className={`${styles.bracket} ${styles.bracketBR}`} />

              {/* Scanline overlay */}
              <div className={styles.scanlines} />

              {/* Sponsor logos */}
              <div className={styles.sponsorGrid}>
                {sponsors.map((s, i) => (
                  <motion.div
                    key={s.name}
                    className={styles.sponsorItem}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <div className={styles.sponsorLogoWrap}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.logo} alt={s.name} className={styles.sponsorLogo} />
                    </div>
                    <span className={styles.sponsorName}>{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom controls */}
          <div className={styles.rightControls}>
            <div className={styles.controlBtn}>SELECT</div>
            <div className={styles.controlDots}>
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </div>
            <div className={styles.controlBtn}>START</div>
          </div>
        </div>

      </motion.div>

      {/* Become a sponsor CTA */}
      <motion.a
        href="mailto:ubhacking@buffalo.edu"
        className={styles.ctaButton}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Become a Sponsor →
      </motion.a>

    </section>
  );
};

export default SponsorsSection;
