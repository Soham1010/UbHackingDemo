"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./TeamSection.module.css";
import Image from "next/image";

const team = [
  { name: "Ash Ketchum", role: "The Architect / Developer", badge: "LEAD", image: "/Pokemon_Reference_Images/stitch (5)/screen.png" },
  { name: "Misty", role: "The Pixel Painter / Designer", badge: "UI/UX", image: "/Pokemon_Reference_Images/stitch (5)/screen.png" },
  { name: "Brock", role: "The Boulder / Organizer", badge: "OPS", image: "/Pokemon_Reference_Images/stitch (5)/screen.png" },
  { name: "Gary Oak", role: "The Code Crusader / Developer", badge: "DEV", image: "/Pokemon_Reference_Images/stitch (5)/screen.png" },
  { name: "Dawn", role: "The UI/UX Innovator", badge: "DESIGN", image: "/Pokemon_Reference_Images/stitch (5)/screen.png" },
  { name: "Prof. Oak", role: "The Hackathon Mentor", badge: "MENTOR", image: "/Pokemon_Reference_Images/stitch (5)/screen.png" },
];

const TeamSection = () => {
  return (
    <section className={styles.team}>
      <h2 className={styles.title}>TRAINER HALL OF FAME</h2>
      
      <div className={styles.grid}>
        {team.map((member, i) => (
          <motion.div 
            key={i}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.badge}>{member.badge}</div>
            <div className={styles.paperClip} />
            <div className={styles.image}>
               <Image 
                src={member.image} 
                alt={member.name} 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
