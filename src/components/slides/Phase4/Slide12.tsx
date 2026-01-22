"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { Lightbulb, History, ArrowRight } from "lucide-react";
import styles from "./Slide12.module.css";

export default function Slide12() {
    return (
        <Slide className={styles.slide12}>
            <div className={styles.content}>
                <motion.div
                    className={styles.past}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <History size={48} className={styles.dimIcon} />
                    <h2>Recording History</h2>
                    <p>"Here is what happened last year."</p>
                </motion.div>

                <motion.div
                    className={styles.arrow}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <ArrowRight size={48} />
                </motion.div>

                <motion.div
                    className={styles.future}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className={styles.crystalBall}>
                        <div className={styles.glow}></div>
                        <Lightbulb size={80} color="white" className={styles.bulb} />
                    </div>
                    <h2>Shaping the Future</h2>
                    <p>"Here is what you should do next."</p>
                </motion.div>
            </div>

            <motion.div
                className={styles.tagline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
            >
                Predictive Advisory.
            </motion.div>
        </Slide>
    );
}
