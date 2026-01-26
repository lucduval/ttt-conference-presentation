"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { Rocket, Wand2, Calculator, TrendingUp, Lock, FileText, Bot } from "lucide-react";
import styles from "./Slide2026.module.css";

export default function Slide2026() {
    const levels = [
        { name: "AI Tax Submissions", icon: Rocket, color: "#FF6B6B", percentage: 80 },
        { name: "Smarter Invoicing", icon: Wand2, color: "#9D50BB", percentage: 70 },
        { name: "Accounting Tools 2.0", icon: Calculator, color: "#45B7D1", percentage: 80 },
        { name: "Financial Advisory", icon: TrendingUp, color: "#4ECDC4", percentage: 50 },
        { name: "Bank Statement Tool 2.0", icon: FileText, color: "#36D7B7", percentage: 85 },
        { name: "Autonomous Agents", icon: Bot, color: "#2D3748", percentage: 0, status: "COMING SOON" },
    ];

    return (
        <Slide className={styles.slide2026}>
            <motion.div className={styles.header}>
                <h1>2026: The Unlock</h1>
                <p>Doubling down on speed and strategy</p>
            </motion.div>

            <div className={styles.grid}>
                {levels.map((level, i) => (
                    <motion.div
                        key={level.name}
                        className={styles.levelCard}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (i * 0.15) }}
                    >
                        <div className={styles.iconCircle} style={{ background: level.color }}>
                            <level.icon size={32} color="white" />
                        </div>
                        <h3>{level.name}</h3>

                        <div className={styles.impactBar}>
                            <div className={styles.barLabel}>
                                <span>Readiness</span>
                                <span>{level.percentage}%</span>
                            </div>
                            <div className={styles.barTrack}>
                                <motion.div
                                    className={styles.barFill}
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${level.percentage}%` }}
                                    transition={{ delay: 1 + (i * 0.2), duration: 1.5, ease: "easeOut" }}
                                />
                            </div>
                        </div>

                        <div className={styles.statusContainer}>
                            <div
                                className={styles.statusDot}
                                style={{ background: level.status === "COMING SOON" ? "#CBD5E0" : undefined }}
                            />
                            <span className={styles.statusText}>{level.status || "IN DEVELOPMENT"}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Slide>
    );
}
