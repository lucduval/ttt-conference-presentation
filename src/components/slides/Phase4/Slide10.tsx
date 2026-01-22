"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";
import styles from "./Slide10.module.css";

export default function Slide10() {
    return (
        <Slide className={styles.slide10}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className={styles.brainWrapper}>
                    {/* Pulsing Rings */}
                    {[1, 2, 3].map((item) => (
                        <motion.div
                            key={item}
                            className={styles.pulseRing}
                            initial={{ scale: 0.8, opacity: 0.8 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: item * 0.4,
                                ease: "easeOut"
                            }}
                        />
                    ))}

                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 1.2 }}
                        className={styles.brainIcon}
                    >
                        <Brain size={120} color="#00C8FF" />
                    </motion.div>

                    {/* Floating Sparkles */}
                    <motion.div
                        className={styles.sparkle1}
                        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <Sparkles size={32} color="#FFD700" />
                    </motion.div>
                    <motion.div
                        className={styles.sparkle2}
                        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                    >
                        <Sparkles size={24} color="#FFD700" />
                    </motion.div>
                </div>

                <motion.div
                    className={styles.text}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <h1>AI is Here. And It’s Real.</h1>
                    <p>Not Sci-Fi. It’s Happening Now.</p>
                </motion.div>
            </motion.div>
        </Slide>
    );
}
