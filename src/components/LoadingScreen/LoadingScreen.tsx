"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./LoadingScreen.module.css";

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // Will fill up in ~4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loadingContainer}>
      {/* Sketchbook Background Image */}
      <Image
        src="/Pokemon_Reference_Images/stitch (6)/screen.png"
        alt="Loading Background"
        fill
        className={styles.backgroundImage}
        priority
      />

      {/* Subtle paper vignette effect */}
      <div className={styles.vignette} />

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.pikachuWrapper}>
          <Image
            src="https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif"
            alt="Pikachu Running"
            width={220}
            height={220}
            className={styles.pikachu}
            unoptimized
          />
        </div>

        <div className={styles.loadingInfo}>
          <div className={styles.loadingBarContainer}>
            <motion.div
              className={styles.loadingBarFill}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
          <p className={styles.loadingSubtitle}>loading your adventure...</p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
