"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { Bot, Fingerprint, Activity, ShieldCheck } from "lucide-react";
import styles from "./SlideTechTrends.module.css";

export default function SlideTechTrends() {
    return (
        <Slide className={styles.slideTrends}>
            <motion.div className={styles.header}>
                <h1>Tech Trends 2026</h1>
                <p>The next wave of financial innovation</p>
            </motion.div>

            <div className={styles.grid}>
                {/* Trend 1: AI Agents */}
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className={styles.iconWrapper} style={{ backgroundColor: "#E6F7FF" }}>
                        <Bot size={40} color="#0077BB" />
                    </div>
                    <h3>AI Agents</h3>
                    <p>Autonomous financial assistants working 24/7</p>
                </motion.div>

                {/* Trend 2: Rich Data Ecosystem */}
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className={styles.iconWrapper} style={{ backgroundColor: "#F3E5F5" }}>
                        <Fingerprint size={40} color="#7C3AED" />
                    </div>
                    <h3>Rich Data Ecosystem</h3>
                    <p>Extracting more value from our extensive data lakes</p>
                </motion.div>

                {/* Trend 3: Accelerated Tooling */}
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className={styles.iconWrapper} style={{ backgroundColor: "#E0F2F1" }}>
                        <Activity size={40} color="#4ECDC4" />
                    </div>
                    <h3>Accelerated Tooling</h3>
                    <p>Building specialized tools faster than ever before</p>
                </motion.div>

                {/* Trend 4: Deep Insights */}
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className={styles.iconWrapper} style={{ backgroundColor: "#FFF3E0" }}>
                        <ShieldCheck size={40} color="#FF9F1C" />
                    </div>
                    <h3>Deep Insights</h3>
                    <p>Unlocking better data insights & cross-selling opportunities</p>
                </motion.div>
            </div>
        </Slide>
    );
}
