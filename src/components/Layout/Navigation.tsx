"use client";

import React from "react";
import styles from "./Navigation.module.css";
import { Zap, Globe, MessageCircle, Share2, Info, HelpCircle } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Zap size={24} color="#ffcb05" fill="#ffcb05" />
        UB HACKING
      </div>
      <div className={styles.links}>
        <a href="#home" className={styles.link}>Home</a>
        <a href="#about" className={styles.link}>About</a>
        <a href="#tracks" className={styles.link}>Tracks</a>
        <a href="#sponsors" className={styles.link}>Sponsors</a>
        <a href="#faq" className={styles.link}>FAQ</a>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        Gotta Hack &apos;Em All! — UB Hacking © 2026
      </p>
      <div className={styles.socials}>
        <Globe size={24} />
        <MessageCircle size={24} />
        <Share2 size={24} />
      </div>
    </footer>
  );
};
