"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./AboutSection.module.css";

const stats = [
  { value: "500+", label: "Hackers" },
  { value: "36",   label: "Hours" },
  { value: "$10K+",label: "In Prizes" },
  { value: "50+",  label: "Projects" },
];

const photos = [
  { src: "/assets/img1.jpeg", alt: "Opening ceremony — packed lecture hall" },
  { src: "/assets/img2.jpeg", alt: "Hackers collaborating late into the night" },
  { src: "/assets/img3.jpeg", alt: "Workshop session in full swing" },
  { src: "/assets/img4.jpeg", alt: "Q&A with industry mentors" },
  { src: "/assets/img5.jpeg", alt: "Teams demoing their projects" },
  { src: "/assets/img6.jpeg", alt: "Awards and celebrations" },
  { src: "/assets/img7.jpeg", alt: "Community and connections" },
];

/* Alternating rotations for organic feel */
const rotations = [-2.5, 2, -1.5, 3, -2, 1.5, -3];

/* ── Photo Collage ── */
const PhotoCollage = () => (
  <div className={styles.collageMask}>
    <div className={styles.collageGrid}>
      {photos.map((photo, i) => (
        <motion.div
          key={i}
          className={styles.photoFrame}
          style={{ "--rotate": `${rotations[i]}deg` } as React.CSSProperties}
          initial={{ opacity: 0, scale: 0.88, rotate: rotations[i] }}
          whileInView={{ opacity: 1, scale: 1, rotate: rotations[i] }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.55, ease: "easeOut" }}
          whileHover={{
            scale: 1.06,
            rotate: 0,
            zIndex: 10,
            transition: { duration: 0.2 },
          }}
        >
          <div className={styles.photoInner}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 45vw, 22vw"
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
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

        {/* ── RIGHT: Photo collage ── */}
        <motion.div
          className={styles.illustrationSide}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <PhotoCollage />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
