"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { TrendingUp, RefreshCw } from "lucide-react";
import styles from "./Slide9.module.css";

export default function Slide9() {
    return (
        <Slide className={styles.slide9}>
            <motion.div className={styles.header}>
                <h1>The Growth Flywheel</h1>
                <p>Winning Together.</p>
            </motion.div>

            <div className={styles.flywheelContainer}>
                {/* Rotating Cycle */}
                <motion.div
                    className={styles.cycle}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    <div className={`${styles.node} ${styles.tax}`}>Tax</div>
                    <div className={`${styles.node} ${styles.advisory}`}>Advisory</div>
                    <div className={`${styles.node} ${styles.insurance}`}>Insurance</div>
                </motion.div>

                {/* Central Icon */}
                <div className={styles.center}>
                    <TrendingUp size={64} className={styles.centerIcon} />
                    <span>Growth</span>
                </div>

                {/* Text descriptions appearing */}
                <motion.div className={styles.captions}>
                    <motion.div
                        className={styles.captionStep}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        1. Tax work reveals opportunity
                    </motion.div>
                    <motion.div
                        className={styles.captionStep}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3 }}
                    >
                        2. Advisory wins the deal
                    </motion.div>
                    <motion.div
                        className={styles.captionStep}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5 }}
                    >
                        3. Loops to Insurance
                    </motion.div>
                </motion.div>

            </div>
        </Slide>
    );
}
