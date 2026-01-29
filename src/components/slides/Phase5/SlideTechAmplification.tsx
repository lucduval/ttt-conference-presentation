"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import styles from "./SlideTechAmplification.module.css";
import FlywheelAnimation from "./FlywheelAnimation";

export default function SlideTechAmplification() {
    return (
        <Slide className={styles.slideAmplification}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        TTT Financial Group
                    </motion.h1>

                    <ul className={styles.pointsList}>
                        {[
                            "Tech is the tool, not the end goal",
                            "Helping you to be more efficient with your clients",
                            "Amplify TTT's team with AI"
                        ].map((point, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.3 }}
                            >
                                <CheckCircle size={24} className={styles.checkIcon} />
                                <span>{point}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className={styles.rightColumn}>
                    <FlywheelAnimation />
                </div>
            </div>
        </Slide>
    );
}
