"use client";

import { motion } from "framer-motion";
import styles from "./FlywheelAnimation.module.css";

export default function FlywheelAnimation() {
    const segments = [
        { label: "Efficiency", color: "#4ECDC4", rotate: 0 },
        { label: "Strategy", color: "#FFD700", rotate: 120 },
        { label: "Insights", color: "#FF6B6B", rotate: 240 },
    ];

    return (
        <div className={styles.flywheelContainer}>
            <motion.div
                className={styles.flywheel}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                {segments.map((segment, index) => (
                    <div
                        key={index}
                        className={styles.segment}
                        style={{
                            transform: `rotate(${segment.rotate}deg)`,
                            borderColor: segment.color
                        }}
                    >
                        <motion.div
                            className={styles.labelContainer}
                            style={{ transform: `rotate(${-segment.rotate}deg)` }}
                        >
                            <span className={styles.segmentLabel} style={{ color: segment.color }}>{segment.label}</span>
                        </motion.div>
                    </div>
                ))}
                <div className={styles.core}>
                    <span className={styles.coreText}>Growth</span>
                </div>
            </motion.div>
        </div>
    );
}
