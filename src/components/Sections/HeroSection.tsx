"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";
import { Zap, Cloud, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {/* Background elements are now in the CSS background image */}

      {/* Main Content */}
      <motion.div 
        className={styles.titleWrapper}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>
          UB<br />HACKING
        </h1>
        <p className={styles.subtitle}>2026 - Gotta Hack &apos;Em All!</p>
      </motion.div>

      <motion.button 
        className={styles.registerButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Register Now
      </motion.button>
      
      {/* Floating Stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={styles.spark}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <Star size={20} color="#3c5aa6" fill="#3c5aa6" />
        </motion.div>
      ))}
    </section>
  );
};

export default HeroSection;
