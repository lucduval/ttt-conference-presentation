"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { Cpu, Zap } from "lucide-react";
import styles from "./SlideTechAmplification.module.css";

export default function SlideTechAmplification() {
    return (
        <Slide className={styles.slideAmplification}>
            <motion.div
                className={styles.contentWrapper}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className={styles.iconContainer}
                    animate={{
                        scale: [1, 1.1, 1],
                        filter: ["drop-shadow(0 0 10px rgba(78, 205, 196, 0.3))", "drop-shadow(0 0 20px rgba(78, 205, 196, 0.6))", "drop-shadow(0 0 10px rgba(78, 205, 196, 0.3))"]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Cpu size={80} color="#4ECDC4" strokeWidth={1.5} />
                    <motion.div
                        className={styles.spark}
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                        <Zap size={30} color="#FFD700" fill="#FFD700" />
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Amplifying Potential
                </motion.h1>

                <motion.div
                    className={styles.missionBox}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <p>
                        "Shift from <span className={styles.highlight}>execution to strategy.</span>"
                    </p>
                    <motion.div
                        className={styles.separator}
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    />
                    <p className={styles.subtext}>
                        Let technology handle the routine, freeing you to deliver the <br /><strong>insights that matter.</strong>
                    </p>
                </motion.div>
            </motion.div>
        </Slide>
    );
}
