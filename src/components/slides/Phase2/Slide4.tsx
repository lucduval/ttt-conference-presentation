"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Slide4.module.css";

export default function Slide4() {
    return (
        <Slide className={styles.slide4}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className={styles.container}
            >
                <div className={styles.logos}>
                    {/* CSS Microsoft Logo */}
                    <div className={styles.msLogo}>
                        <div className={styles.msSquare} style={{ background: "#F25022" }}></div>
                        <div className={styles.msSquare} style={{ background: "#7FBA00" }}></div>
                        <div className={styles.msSquare} style={{ background: "#00A4EF" }}></div>
                        <div className={styles.msSquare} style={{ background: "#FFB900" }}></div>
                    </div>
                    <span className={styles.plus}>+</span>
                    <Image
                        src="/financial-group-logo.jpg"
                        alt="TTT Logo"
                        width={200}
                        height={80}
                        className={styles.tttLogo}
                    />
                </div>

                <motion.h1
                    className="text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    World-Class Power. Custom-Built for Us.
                </motion.h1>

                <motion.div
                    className={styles.features}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    {["Security", "Reliability", "Speed"].map((feat, i) => (
                        <motion.span
                            key={feat}
                            className={styles.feature}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + (i * 0.2) }}
                        >
                            {feat}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </Slide>
    );
}
