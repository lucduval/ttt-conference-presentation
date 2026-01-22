"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { Flag, Users, Globe } from "lucide-react";
import styles from "./Slide14.module.css";

export default function Slide14() {
    const steps = [
        { label: "Q1: Launch", icon: Flag, desc: "Tax & Advisory Pilot" },
        { label: "Q2: Iterate", icon: Users, desc: "Feedback & Tuning" },
        { label: "Q3: Expand", icon: Globe, desc: "Full Rollout" },
    ];

    return (
        <Slide className={styles.slide14}>
            <motion.div className={styles.header}>
                <h1>The Road Ahead</h1>
            </motion.div>

            <div className={styles.roadmap}>
                <div className={styles.line}></div>
                {steps.map((step, i) => (
                    <motion.div
                        key={step.label}
                        className={styles.step}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.4 }}
                    >
                        <div className={styles.circle}>
                            <step.icon size={32} color="white" />
                        </div>
                        <h3>{step.label}</h3>
                        <p>{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </Slide>
    );
}
