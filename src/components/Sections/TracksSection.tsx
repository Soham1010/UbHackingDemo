"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./TracksSection.module.css";

/* ─────────────────────────────────────────────
   Track definitions
───────────────────────────────────────────── */
const tracks = [
  {
    id: "healthcare",
    trackName: "Health Care",
    pokemonName: "Chansey",
    pokemonId: 113,
    type: "Normal",
    typeEmoji: "🏥",
    hp: 250,
    prize: "$2,000",
    headerGradient: "linear-gradient(135deg, #f9a8c9 0%, #e06fa0 100%)",
    imageGradient: "linear-gradient(160deg, #fde8f0 0%, #f9c4d8 100%)",
    borderColor: "#e06fa0",
    description:
      "Build solutions that improve patient outcomes, mental health support, or medical accessibility for all.",
    moves: [
      {
        name: "Patient Care",
        cost: "●●",
        damage: "40",
        detail: "Design tools that reduce barriers to healthcare.",
      },
      {
        name: "Diagnosis AI",
        cost: "●●●",
        damage: "80",
        detail: "Use ML to assist medical diagnosis & monitoring.",
      },
    ],
    weakness: "⚔️ ×2",
    resistance: "—",
    retreat: 2,
  },
  {
    id: "sustainability",
    trackName: "Sustainability",
    pokemonName: "Bulbasaur",
    pokemonId: 1,
    type: "Grass",
    typeEmoji: "🌱",
    hp: 120,
    prize: "$2,000",
    headerGradient: "linear-gradient(135deg, #a8d8a0 0%, #4a9c38 100%)",
    imageGradient: "linear-gradient(160deg, #e8f5e4 0%, #c5e8b8 100%)",
    borderColor: "#4a9c38",
    description:
      "Create projects tackling climate change, renewable energy, or sustainable resource management.",
    moves: [
      {
        name: "Green Energy",
        cost: "🌿",
        damage: "30",
        detail: "Harness clean tech to power a better planet.",
      },
      {
        name: "Eco Innovation",
        cost: "🌿🌿",
        damage: "70",
        detail: "Build solutions that protect our environment.",
      },
    ],
    weakness: "🔥 ×2",
    resistance: "💧 −30",
    retreat: 1,
  },
  {
    id: "overall",
    trackName: "Best Overall",
    pokemonName: "Mewtwo",
    pokemonId: 150,
    type: "Psychic",
    typeEmoji: "✨",
    hp: 300,
    prize: "$5,000",
    headerGradient: "linear-gradient(135deg, #d4a0f0 0%, #8b2fc9 100%)",
    imageGradient: "linear-gradient(160deg, #f3e8fc 0%, #ddb8f5 100%)",
    borderColor: "#8b2fc9",
    description:
      "No constraints, no limits. Build the most impactful, creative, and polished hack of the entire event.",
    moves: [
      {
        name: "Gotta Hack Em All",
        cost: "✨✨",
        damage: "100",
        detail: "Show creativity, technical depth, and real-world impact.",
      },
      {
        name: "Grand Vision",
        cost: "✨✨✨",
        damage: "150",
        detail: "A project that transcends categories and inspires everyone.",
      },
    ],
    weakness: "🐛 ×2",
    resistance: "⚔️ −30",
    retreat: 3,
  },
  {
    id: "gemini",
    trackName: "Best Use of Gemini",
    pokemonName: "Porygon",
    pokemonId: 137,
    type: "Electric",
    typeEmoji: "🤖",
    hp: 180,
    prize: "$2,000",
    headerGradient: "linear-gradient(135deg, #90c8f8 0%, #1a6fc4 100%)",
    imageGradient: "linear-gradient(160deg, #e0f0ff 0%, #b0d8f8 100%)",
    borderColor: "#1a6fc4",
    description:
      "Integrate Google's Gemini AI in a meaningful way to power your hack's core functionality.",
    moves: [
      {
        name: "Neural Network",
        cost: "🤖🤖",
        damage: "60",
        detail: "Use Gemini's multimodal capabilities in your project.",
      },
      {
        name: "AI Integration",
        cost: "🤖🤖🤖",
        damage: "120",
        detail: "Build an experience powered entirely by Gemini AI.",
      },
    ],
    weakness: "—",
    resistance: "—",
    retreat: 1,
  },
  {
    id: "freshman",
    trackName: "Best Freshman Hack",
    pokemonName: "Charmander",
    pokemonId: 4,
    type: "Fire",
    typeEmoji: "🔥",
    hp: 100,
    prize: "$1,000",
    headerGradient: "linear-gradient(135deg, #ffc080 0%, #e05010 100%)",
    imageGradient: "linear-gradient(160deg, #fff0e0 0%, #ffd0a0 100%)",
    borderColor: "#e05010",
    description:
      "First-year students only! Show the world what you can build in your very first hackathon.",
    moves: [
      {
        name: "First Flame",
        cost: "🔥",
        damage: "30",
        detail: "Ignite your journey with your very first hack.",
      },
      {
        name: "Beginner's Blaze",
        cost: "🔥🔥",
        damage: "60",
        detail: "Prove that passion beats experience every time.",
      },
    ],
    weakness: "💧 ×2",
    resistance: "🌿 −30",
    retreat: 2,
  },
  {
    id: "education",
    trackName: "Education & EdTech",
    pokemonName: "Abra",
    pokemonId: 63,
    type: "Psychic",
    typeEmoji: "📚",
    hp: 140,
    prize: "$1,500",
    headerGradient: "linear-gradient(135deg, #80deea 0%, #00838f 100%)",
    imageGradient: "linear-gradient(160deg, #e0f7fa 0%, #b2ebf2 100%)",
    borderColor: "#00838f",
    description:
      "Build tools that make learning more accessible, engaging, and effective for students everywhere.",
    moves: [
      {
        name: "Knowledge Transfer",
        cost: "📚📚",
        damage: "50",
        detail: "Design platforms that unlock potential in every learner.",
      },
      {
        name: "Mind Expand",
        cost: "📚📚📚",
        damage: "90",
        detail: "Use AI to personalize education at scale.",
      },
    ],
    weakness: "🐛 ×2",
    resistance: "⚔️ −30",
    retreat: 1,
  },
  {
    id: "cybersecurity",
    trackName: "Cybersecurity",
    pokemonName: "Gengar",
    pokemonId: 94,
    type: "Ghost",
    typeEmoji: "🔐",
    hp: 160,
    prize: "$2,000",
    headerGradient: "linear-gradient(135deg, #b39ddb 0%, #311b92 100%)",
    imageGradient: "linear-gradient(160deg, #ede7f6 0%, #d1c4e9 100%)",
    borderColor: "#311b92",
    description:
      "Protect the digital world. Build tools that detect threats, secure systems, and keep data safe.",
    moves: [
      {
        name: "Shadow Firewall",
        cost: "🔐🔐",
        damage: "70",
        detail: "Defend against attacks before they happen.",
      },
      {
        name: "Phantom Encrypt",
        cost: "🔐🔐🔐",
        damage: "130",
        detail: "Make data invisible to those who shouldn't see it.",
      },
    ],
    weakness: "👻 ×2",
    resistance: "⚔️ −30",
    retreat: 1,
  },
];

/* ─────────────────────────────────────────────
   Single flip card
───────────────────────────────────────────── */
function TrackCard({ track, index }: { track: typeof tracks[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${track.pokemonId}.png`;

  return (
    <motion.div
      className={styles.cardWrapper}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Perspective container */}
      <div
        className={styles.cardScene}
        onClick={() => setFlipped((f) => !f)}
        title={flipped ? "Click to flip back" : "Click to reveal track!"}
      >
        <motion.div
          className={styles.cardInner}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 80, damping: 14 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* ── CARD BACK (shown initially) ── */}
          <div className={styles.cardFace} style={{ backfaceVisibility: "hidden" }}>
            <div className={styles.cardBackWrapper}>
              <Image
                src="/Pokemon_Reference_Images/pokemon_card.png"
                alt="Pokemon card back"
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
                priority
              />
              <div className={styles.cardBackHint}>
                <span>Click to reveal!</span>
              </div>
            </div>
          </div>

          {/* ── CARD FRONT (revealed on flip) ── */}
          <div
            className={styles.cardFace}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div
              className={styles.cardFront}
              style={{ borderColor: track.borderColor }}
            >
              {/* Holographic shimmer overlay */}
              <div className={styles.holoOverlay} />

              {/* Header */}
              <div
                className={styles.cardHeader}
                style={{ background: track.headerGradient }}
              >
                <div className={styles.cardHeaderLeft}>
                  <span className={styles.cardName}>{track.trackName}</span>
                </div>
                <div className={styles.cardHeaderRight}>
                  <span className={styles.cardHpLabel}>HP</span>
                  <span className={styles.cardHpValue}>{track.hp}</span>
                  <span className={styles.cardTypeEmoji}>{track.typeEmoji}</span>
                </div>
              </div>

              {/* Pokemon image */}
              <div
                className={styles.cardImageArea}
                style={{ background: track.imageGradient }}
              >
                <div className={styles.cardImageInner}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={spriteUrl}
                    alt={track.pokemonName}
                    className={styles.pokemonSprite}
                  />
                </div>
                <div className={styles.cardImageCaption}>
                  <span className={styles.pokemonStage}>Stage 1</span>
                  <span className={styles.pokemonSubName}>{track.pokemonName}</span>
                  <span className={styles.pokemonType}>{track.type} Type</span>
                </div>
              </div>

              {/* Moves */}
              <div className={styles.movesSection}>
                {track.moves.map((move, i) => (
                  <div key={i} className={styles.move}>
                    <div className={styles.moveTop}>
                      <span className={styles.moveCost}>{move.cost}</span>
                      <span className={styles.moveName}>{move.name}</span>
                      <span className={styles.moveDamage}>{move.damage}</span>
                    </div>
                    <p className={styles.moveDetail}>{move.detail}</p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className={styles.cardFooter}>
                <div className={styles.footerStats}>
                  <div className={styles.footerStat}>
                    <span className={styles.footerLabel}>Weakness</span>
                    <span className={styles.footerValue}>{track.weakness}</span>
                  </div>
                  <div className={styles.footerDivider} />
                  <div className={styles.footerStat}>
                    <span className={styles.footerLabel}>Resistance</span>
                    <span className={styles.footerValue}>{track.resistance}</span>
                  </div>
                  <div className={styles.footerDivider} />
                  <div className={styles.footerStat}>
                    <span className={styles.footerLabel}>Retreat</span>
                    <span className={styles.footerValue}>
                      {"●".repeat(track.retreat)}
                    </span>
                  </div>
                </div>
                <div className={styles.footerPrize}>
                  🏆 Prize: <strong>{track.prize}</strong>
                </div>
                <p className={styles.footerDesc}>{track.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Card label below */}
      <p className={styles.cardLabel}>
        {flipped ? track.trackName : "???"}
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Section
───────────────────────────────────────────── */
const TracksSection = () => {
  return (
    <section className={styles.tracks}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Hackathon Categories
        </motion.p>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Choose Your <span className={styles.titleAccent}>Track!</span>
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Each card hides a secret track — click to reveal your challenge &amp; prizes
        </motion.p>
      </div>

      {/* ── Row 1: 4 cards ── */}
      <div className={styles.cardsRow}>
        {tracks.slice(0, 4).map((track, i) => (
          <TrackCard key={track.id} track={track} index={i} />
        ))}
      </div>

      {/* ── Row 2: 3 cards centered ── */}
      <div className={styles.cardsRow}>
        {tracks.slice(4).map((track, i) => (
          <TrackCard key={track.id} track={track} index={i + 4} />
        ))}
      </div>
    </section>
  );
};

export default TracksSection;
