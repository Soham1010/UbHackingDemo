"use client";

import React from "react";
import Image from "next/image";
import styles from "./ScrapbookLayout.module.css";

interface ScrapbookLayoutProps {
  children: React.ReactNode;
}

const ScrapbookLayout = ({ children }: ScrapbookLayoutProps) => {
  return (
    <div className={styles.layout}>
      {/* Background Texture */}
      <Image
        src="/assets/scrapbook_paper_texture.png"
        alt=""
        fill
        className={styles.paperTexture}
        priority
      />
      
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default ScrapbookLayout;
