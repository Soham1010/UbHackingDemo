"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./SponsorsSection.module.css";

const initialSponsors = [
  { name: "Google", type: "shield", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", type: "circle", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "AWS", type: "scroll", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "GitHub", type: "star", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Meta", type: "scroll", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Salesforce", type: "circle", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
];

const SponsorsSection = () => {
  return (
    <section className={styles.sponsors}>
      <h2 className={styles.title}>Our Elite Sponsors</h2>
      
      <div className={styles.grid}>
        {initialSponsors.map((sponsor, i) => (
          <motion.div 
            key={i}
            className={styles.sponsorCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`${styles.frame} ${styles[sponsor.type]}`} />
            <img src={sponsor.logo} alt={sponsor.name} className={styles.logo} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
