"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./AboutSection.module.css";

const stats = [
  { value: "500+", label: "Hackers" },
  { value: "36", label: "Hours" },
  { value: "$10K+", label: "In Prizes" },
  { value: "50+", label: "Projects" },
];

/* ── Inline SVG Illustration ── */
const PokemonIllustration = () => (
  <svg
    viewBox="0 0 520 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.illustration}
    aria-label="Professor Oak at a hackathon"
  >
    {/* ── Background glow circle ── */}
    <circle cx="280" cy="240" r="190" fill="#fff9e6" opacity="0.6" />

    {/* ── Desk ── */}
    <rect x="80" y="310" width="360" height="18" rx="6" fill="#c8a96e" />
    <rect x="100" y="326" width="16" height="80" rx="4" fill="#b08050" />
    <rect x="404" y="326" width="16" height="80" rx="4" fill="#b08050" />

    {/* ── Laptop base ── */}
    <rect x="150" y="270" width="220" height="42" rx="8" fill="#3c5aa6" />
    <rect x="158" y="275" width="204" height="30" rx="5" fill="#2a4080" />
    {/* Trackpad */}
    <rect x="215" y="280" width="90" height="18" rx="4" fill="#4a6fc0" />

    {/* ── Laptop screen ── */}
    <rect x="145" y="110" width="230" height="165" rx="10" fill="#1a1a2e" />
    <rect x="152" y="118" width="216" height="150" rx="6" fill="#0f3460" />
    {/* Code lines on screen */}
    <rect x="165" y="132" width="80" height="7" rx="3" fill="#ffcb05" opacity="0.9" />
    <rect x="165" y="146" width="120" height="7" rx="3" fill="#4fc3f7" opacity="0.8" />
    <rect x="175" y="160" width="100" height="7" rx="3" fill="#81c784" opacity="0.8" />
    <rect x="175" y="174" width="60" height="7" rx="3" fill="#4fc3f7" opacity="0.8" />
    <rect x="165" y="188" width="90" height="7" rx="3" fill="#ef9a9a" opacity="0.8" />
    <rect x="175" y="202" width="70" height="7" rx="3" fill="#81c784" opacity="0.8" />
    <rect x="165" y="216" width="110" height="7" rx="3" fill="#ffcb05" opacity="0.7" />
    {/* Cursor blink */}
    <rect x="280" y="216" width="3" height="10" rx="1" fill="#fff" opacity="0.9" />
    {/* Screen shine */}
    <rect x="153" y="119" width="60" height="20" rx="4" fill="#fff" opacity="0.04" />
    {/* Hinge */}
    <rect x="240" y="273" width="40" height="6" rx="3" fill="#2a4080" />

    {/* ── Professor Oak character ── */}
    {/* Lab coat body */}
    <rect x="355" y="210" width="90" height="120" rx="18" fill="#f5f5f5" />
    {/* Coat lapels */}
    <path d="M375 215 L395 250 L380 250 Z" fill="#e0e0e0" />
    <path d="M425 215 L405 250 L420 250 Z" fill="#e0e0e0" />
    {/* Shirt underneath */}
    <rect x="388" y="215" width="24" height="40" rx="4" fill="#ffcb05" />
    {/* Coat pocket */}
    <rect x="358" y="260" width="24" height="18" rx="4" fill="#e0e0e0" stroke="#ccc" strokeWidth="1" />
    {/* Pen in pocket */}
    <rect x="365" y="254" width="3" height="16" rx="1" fill="#3c5aa6" />
    {/* Left arm */}
    <path d="M355 225 Q320 255 325 295" stroke="#f5f5f5" strokeWidth="22" strokeLinecap="round" />
    {/* Right arm - pointing */}
    <path d="M445 225 Q470 240 475 220" stroke="#f5f5f5" strokeWidth="22" strokeLinecap="round" />
    {/* Left hand */}
    <ellipse cx="326" cy="298" rx="14" ry="12" fill="#f4c28e" />
    {/* Right hand pointing */}
    <ellipse cx="476" cy="217" rx="13" ry="11" fill="#f4c28e" />
    {/* Pointing finger */}
    <path d="M480 210 Q490 204 488 198" stroke="#f4c28e" strokeWidth="7" strokeLinecap="round" />

    {/* Neck */}
    <rect x="389" y="185" width="22" height="30" rx="8" fill="#f4c28e" />
    {/* Head */}
    <ellipse cx="400" cy="168" rx="38" ry="36" fill="#f4c28e" />
    {/* Hair - white/grey */}
    <path d="M362 158 Q368 128 400 125 Q432 128 438 158" fill="#d0d0d0" />
    <path d="M362 158 Q358 148 362 140 Q368 128 376 128" fill="#d0d0d0" />
    <path d="M438 158 Q442 148 438 140 Q432 128 424 128" fill="#d0d0d0" />
    {/* Glasses */}
    <circle cx="388" cy="165" r="10" fill="none" stroke="#555" strokeWidth="2.5" />
    <circle cx="412" cy="165" r="10" fill="none" stroke="#555" strokeWidth="2.5" />
    <path d="M398 165 L402 165" stroke="#555" strokeWidth="2" />
    <path d="M378 163 L372 161" stroke="#555" strokeWidth="2" />
    <path d="M422 163 L428 161" stroke="#555" strokeWidth="2" />
    {/* Eyes behind glasses */}
    <circle cx="388" cy="165" r="4" fill="#5a3e28" />
    <circle cx="412" cy="165" r="4" fill="#5a3e28" />
    <circle cx="390" cy="163" r="1.5" fill="#fff" />
    <circle cx="414" cy="163" r="1.5" fill="#fff" />
    {/* Smile */}
    <path d="M391 178 Q400 185 409 178" stroke="#c0845a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Legs */}
    <rect x="370" y="325" width="22" height="60" rx="8" fill="#5c6bc0" />
    <rect x="408" y="325" width="22" height="60" rx="8" fill="#5c6bc0" />
    {/* Shoes */}
    <ellipse cx="381" cy="388" rx="18" ry="9" fill="#333" />
    <ellipse cx="419" cy="388" rx="18" ry="9" fill="#333" />

    {/* ── Pokeball on desk ── */}
    <circle cx="115" cy="302" r="28" fill="#fff" stroke="#333" strokeWidth="2.5" />
    <path d="M87 302 Q87 274 115 274 Q143 274 143 302" fill="#e53935" />
    <rect x="87" y="299" width="56" height="6" rx="3" fill="#333" />
    <circle cx="115" cy="302" r="10" fill="#fff" stroke="#333" strokeWidth="2.5" />
    <circle cx="115" cy="302" r="5" fill="#f5f5f5" />

    {/* ── Pikachu ── */}
    {/* Body */}
    <ellipse cx="455" cy="355" rx="35" ry="30" fill="#ffcb05" />
    {/* Tail */}
    <path d="M487 345 Q510 310 505 290 Q510 275 495 280 Q500 295 490 320 Q488 335 487 345" fill="#ffcb05" />
    <path d="M505 290 Q510 275 495 280" stroke="#333" strokeWidth="1.5" fill="none" />
    {/* Ears */}
    <path d="M432 330 Q425 295 440 285 Q450 292 445 325" fill="#ffcb05" />
    <path d="M433 325 Q427 300 439 291 Q445 296 442 322" fill="#333" />
    <path d="M468 330 Q472 295 462 285 Q450 292 455 325" fill="#ffcb05" />
    <path d="M467 325 Q471 300 461 291 Q455 296 458 322" fill="#333" />
    {/* Red cheeks */}
    <ellipse cx="430" cy="355" rx="10" ry="8" fill="#e53935" opacity="0.85" />
    <ellipse cx="480" cy="355" rx="10" ry="8" fill="#e53935" opacity="0.85" />
    {/* Eyes */}
    <ellipse cx="444" cy="344" rx="7" ry="8" fill="#333" />
    <ellipse cx="466" cy="344" rx="7" ry="8" fill="#333" />
    <circle cx="446" cy="341" r="2.5" fill="#fff" />
    <circle cx="468" cy="341" r="2.5" fill="#fff" />
    {/* Nose */}
    <ellipse cx="455" cy="354" rx="3" ry="2" fill="#c0845a" />
    {/* Mouth */}
    <path d="M447 360 Q455 368 463 360" stroke="#c0845a" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Legs */}
    <ellipse cx="443" cy="383" rx="12" ry="8" fill="#ffcb05" />
    <ellipse cx="467" cy="383" rx="12" ry="8" fill="#ffcb05" />
    {/* Feet */}
    <ellipse cx="443" cy="389" rx="14" ry="7" fill="#c0845a" />
    <ellipse cx="467" cy="389" rx="14" ry="7" fill="#c0845a" />

    {/* ── Floating stars / sparkles ── */}
    <path d="M80 130 L83 122 L86 130 L94 133 L86 136 L83 144 L80 136 L72 133 Z" fill="#ffcb05" opacity="0.7" />
    <path d="M460 110 L462 104 L464 110 L470 112 L464 114 L462 120 L460 114 L454 112 Z" fill="#3c5aa6" opacity="0.5" />
    <path d="M60 300 L62 295 L64 300 L69 302 L64 304 L62 309 L60 304 L55 302 Z" fill="#ffcb05" opacity="0.5" />
    <path d="M490 160 L491 156 L492 160 L496 161 L492 162 L491 166 L490 162 L486 161 Z" fill="#ffcb05" opacity="0.6" />

    {/* ── Floating code tags near laptop ── */}
    <text x="68" y="175" fontFamily="monospace" fontSize="18" fill="#3c5aa6" opacity="0.6" fontWeight="bold">&lt;/&gt;</text>
    <text x="460" y="270" fontFamily="monospace" fontSize="14" fill="#3c5aa6" opacity="0.5" fontWeight="bold">{`{ }`}</text>

    {/* ── WiFi / signal waves ── */}
    <path d="M100 240 Q115 225 130 240" stroke="#3c5aa6" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
    <path d="M93 248 Q115 220 137 248" stroke="#3c5aa6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.35" />
    <path d="M86 256 Q115 215 144 256" stroke="#3c5aa6" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.2" />
    <circle cx="115" cy="242" r="4" fill="#3c5aa6" opacity="0.6" />
  </svg>
);

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>

        {/* ── LEFT: Text content ── */}
        <motion.div
          className={styles.textSide}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.eyebrow}>Who We Are</p>
          <h2 className={styles.title}>
            About <span className={styles.titleAccent}>UB Hacking</span>
          </h2>
          <p className={styles.description}>
            UB Hacking is a student-run hackathon at the University at Buffalo dedicated
            to bringing together passionate learners from all backgrounds. Like Professor Oak
            sending trainers on their first journey, we give you the resources, mentorship,
            and community to turn your wildest ideas into reality.
          </p>
          <p className={styles.description}>
            Whether you&apos;re a seasoned coder or just getting started, there&apos;s a
            place for you here. Gotta Hack &apos;Em All!
          </p>

          {/* Stats grid */}
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={styles.statCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#tracks"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Tracks →
          </motion.a>
        </motion.div>

        {/* ── RIGHT: Illustration ── */}
        <motion.div
          className={styles.illustrationSide}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <PokemonIllustration />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
