"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./TeamSection.module.css";

const team = [
  { name: "Ash Ketchum", role: "Lead Organizer",  badge: "LEAD"   },
  { name: "Misty",       role: "Design Lead",     badge: "UI/UX"  },
  { name: "Brock",       role: "Operations",      badge: "OPS"    },
  { name: "Gary Oak",    role: "Dev Lead",        badge: "DEV"    },
  { name: "Dawn",        role: "Marketing",       badge: "MKTG"   },
  { name: "Prof. Oak",   role: "Faculty Mentor",  badge: "MENTOR" },
];

/* Silhouette placeholder — question mark trainer card */
const TrainerPlaceholder = ({ index }: { index: number }) => (
  <div className={styles.placeholder}>
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.silhouette}>
      {/* Head */}
      <ellipse cx="50" cy="30" rx="22" ry="22" fill="currentColor" opacity="0.18"/>
      {/* Body */}
      <path d="M20 120 Q20 70 50 65 Q80 70 80 120Z" fill="currentColor" opacity="0.18"/>
      {/* Question mark */}
      <text x="50" y="38" textAnchor="middle" fontSize="28" fontWeight="bold" fill="currentColor" opacity="0.45">?</text>
    </svg>
    <span className={styles.placeholderLabel}>Trainer #{index + 1}</span>
  </div>
);

const TeamSection = () => {
  return (
    <section className={styles.team}>

      {/* ── Header ── */}
      <div className={styles.header}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          The People Behind It
        </motion.p>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Meet the <span className={styles.titleAccent}>Organizers</span>
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The trainers working behind the scenes to make this happen
        </motion.p>
      </div>

      {/* ── Cards grid ── */}
      <div className={styles.grid}>
        {team.map((member, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            style={{ rotate: `${i % 2 === 0 ? -1.5 : 1.5}deg` } as React.CSSProperties}
          >
            <div className={styles.badge}>{member.badge}</div>
            <div className={styles.imageWrap}>
              <TrainerPlaceholder index={i} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default TeamSection;
