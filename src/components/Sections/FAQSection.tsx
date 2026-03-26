"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQSection.module.css";

/* Cycling through 3 Pokeball types from PokeAPI sprites */
const pokeballs = [
  { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png", label: "Poké Ball" },
  { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png", label: "Great Ball" },
  { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png", label: "Ultra Ball" },
];

const faqs = [
  {
    q: "Who can attend?",
    a: "Any university student can join — undergraduate or graduate. Total beginners are not just welcome, they're encouraged! All you need is curiosity and the drive to build something cool.",
  },
  {
    q: "Is it free to participate?",
    a: "100% free! UB Hacking covers everything — food, swag, workshops, and mentorship for all admitted hackers. Just show up and start building.",
  },
  {
    q: "What if I don't have a team?",
    a: "No worries, Trainer! We run a team formation event right before hacking kicks off. You can also fly solo — some of the best projects come from solo hackers.",
  },
  {
    q: "What should I bring?",
    a: "Laptop, charger, student ID, any toiletries you need for an overnight stay, and a positive attitude. We'll supply the food, caffeine, and good vibes.",
  },
  {
    q: "What kind of projects can I build?",
    a: "Anything! Web apps, mobile apps, hardware hacks, AI tools — the field is yours. Check the Tracks section for themed categories with extra prizes, but you're free to build whatever inspires you.",
  },
  {
    q: "Will there be mentors and workshops?",
    a: "Absolutely. Industry mentors from our sponsor companies will be on-site and online throughout the event. We'll also run workshops on popular tools and frameworks to help you level up mid-hack.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ball = pokeballs[index % pokeballs.length];

  return (
    <motion.div
      className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
    >
      {/* ── Question row (clickable) ── */}
      <button className={styles.questionRow} onClick={onToggle} aria-expanded={isOpen}>
        {/* Pokeball */}
        <motion.img
          src={ball.src}
          alt={ball.label}
          className={styles.pokeball}
          animate={{ rotate: isOpen ? 360 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Question text */}
        <span className={styles.questionText}>{faq.q}</span>

        {/* Chevron */}
        <motion.span
          className={styles.chevron}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </button>

      {/* ── Answer (animated reveal) ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.answerWrapper}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <p className={styles.answer}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.faq}>

      {/* ── Header ── */}
      <div className={styles.header}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Trainer&apos;s <span className={styles.titleAccent}>Field Guide</span>
        </motion.p>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Got <span className={styles.titleAccent}>Questions</span>?
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Everything you need to know before your adventure begins
        </motion.p>
      </div>

      {/* ── Accordion list ── */}
      <div className={styles.list}>
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            faq={faq}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>

    </section>
  );
};

export default FAQSection;
