"use client";

import Slide from "../../deck/Slide";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { FileCheck, Clock, TrendingUp, BarChart3, LineChart } from "lucide-react";
import styles from "./Slide4_Reporting.module.css";
import { useEffect } from "react";

const AnimatedCounter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
    const displayText = useTransform(springValue, (current) => Math.floor(current).toLocaleString());

    useEffect(() => {
        motionValue.set(value);
    }, [value, motionValue]);

    return <motion.span>{displayText}</motion.span>;
};

export default function Slide4_Reporting() {
    return (
        <Slide className={styles.slideContainer}>
            {/* Top Header */}
            <motion.div
                className={styles.topHeader}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                AI Tax Agent
            </motion.div>

            <div className={styles.contentRow}>
                {/* Left: Text Points */}
                <div className={styles.textSide}>
                    <motion.div
                        className={styles.bulletItem}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <BarChart3 size={32} className={styles.bulletIcon} />
                        <div className={styles.bulletContent}>
                            <div className={styles.bulletTitle}>Measurable Impact</div>
                            <div className={styles.bulletDesc}>Real-time tracking of efficiency gains and process velocity.</div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.bulletItem}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <LineChart size={32} className={styles.bulletIcon} />
                        <div className={styles.bulletContent}>
                            <div className={styles.bulletTitle}>Business Value</div>
                            <div className={styles.bulletDesc}>Direct correlation between automation and revenue growth.</div>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Visuals */}
                <div className={styles.visualSide}>
                    {/* Top Row: Cards */}
                    <div className={styles.cardsRow}>
                        {/* Metric 1 */}
                        <motion.div
                            className={styles.metricCard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 }}
                        >
                            <div className={styles.iconWrapper} style={{ background: "#e0f2fe", color: "#0284c7" }}>
                                <FileCheck size={24} />
                            </div>
                            <div className={styles.value}>
                                <AnimatedCounter value={1240} />
                            </div>
                            <div className={styles.label}>Documents Processed</div>
                        </motion.div>

                        {/* Metric 2 */}
                        <motion.div
                            className={styles.metricCard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                        >
                            <div className={styles.iconWrapper} style={{ background: "#fef3c7", color: "#d97706" }}>
                                <Clock size={24} />
                            </div>
                            <div className={styles.value}>
                                <AnimatedCounter value={350} /> hrs
                            </div>
                            <div className={styles.label}>Time Saved</div>
                        </motion.div>

                        {/* Metric 3 */}
                        <motion.div
                            className={styles.metricCard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                        >
                            <div className={styles.iconWrapper} style={{ background: "#dcfce7", color: "#16a34a" }}>
                                <TrendingUp size={24} />
                            </div>
                            <div className={styles.value}>
                                <AnimatedCounter value={45} />
                            </div>
                            <div className={styles.label}>Opportunities Created</div>
                        </motion.div>
                    </div>


                </div>
            </div>
        </Slide>
    );
}
