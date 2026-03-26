"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./FAQSection.module.css";

const faqs = [
  { q: "WHO CAN ATTEND?", a: "Any university student can join! This includes undergraduate and graduate students. Beginners are welcome!" },
  { q: "IS IT FREE?", a: "Yes, UB Hacking is completely free for all admitted hackers. We provide food, swag, and mentorship!" },
  { q: "WHAT IF I DON'T HAVE A TEAM?", a: "No worries! We'll have a team formation event before the hacking begins. You can also work solo!" },
  { q: "WHAT SHOULD I BRING?", a: "Laptop, charger, student ID, toiletries, and a positive attitude! We'll provide the rest." },
];

const FAQSection = () => {
  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>FREQUENTLY ASKED QUESTIONS</h2>
      
      <div className={styles.list}>
        {faqs.map((faq, i) => (
          <motion.div 
            key={i}
            className={styles.questionBox}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className={styles.question}>{faq.q}</h3>
            <p className={styles.answer}>{faq.a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
