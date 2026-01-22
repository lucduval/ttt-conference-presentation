"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { Rocket, Wand2, Calculator, TrendingUp, Lock } from "lucide-react";
import styles from "./Slide2026.module.css";

export default function Slide2026() {
    const levels = [
        { name: "AI Tax Submissions", icon: Rocket, color: "#FF6B6B" },
        { name: "Invoicing 2.0", icon: Wand2, color: "#9D50BB" },
        { name: "Accounting Tools 2.0", icon: Calculator, color: "#45B7D1" },
        { name: "Financial Advisory", icon: TrendingUp, color: "#4ECDC4" },
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
                        whileHover={{ y: -10 }}
                    >
                        <div className={styles.iconCircle} style={{ background: level.color }}>
                            <level.icon size={32} color="white" />
                        </div>
                        <h3>{level.name}</h3>
                        <div className={styles.unlockBar}>
                            <motion.div
                                className={styles.fill}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1 + (i * 0.3), duration: 1.5 }}
                            />
                        </div>
                        <div className={styles.status}>COMING SOON</div>
                    </motion.div>
                ))}
            </div>
        </Slide>
    );
}
