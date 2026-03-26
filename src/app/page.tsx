"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import ScrapbookLayout from "@/components/Layout/ScrapbookLayout";
import { Navigation, Footer } from "@/components/Layout/Navigation";
import HeroSection from "@/components/Sections/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import TracksSection from "@/components/Sections/TracksSection";
import SponsorsSection from "@/components/Sections/SponsorsSection";
import FAQSection from "@/components/Sections/FAQSection";
import TeamSection from "@/components/Sections/TeamSection";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds of loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div key="loading" exit={{ opacity: 0 }}>
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div 
          key="content" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navigation />
          <ScrapbookLayout>
            <div id="home"><HeroSection /></div>
            <div id="about"><AboutSection /></div>
            <div id="tracks"><TracksSection /></div>
            <div id="sponsors"><SponsorsSection /></div>
            <div id="faq"><FAQSection /></div>
            <div id="team"><TeamSection /></div>
          </ScrapbookLayout>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
