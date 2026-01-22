"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { MessageCircle, ThumbsUp, Lightbulb } from "lucide-react";
import styles from "./Slide13.module.css";

export default function Slide13() {
    return (
        <Slide className={styles.slide13}>
            <motion.div className={styles.header}>
                <h1>We Need Your Voice</h1>
                <p>This path is built by us, for us</p>
            </motion.div>

            <div className={styles.feedbackContainer}>
                {/* Animated Cards appearing */}
                <motion.div
                    className={`${styles.card} ${styles.left}`}
                    initial={{ opacity: 0, x: -50, rotate: -5 }}
                    animate={{ opacity: 1, x: 0, rotate: -3 }}
                    transition={{ delay: 0.5 }}
                >
                    <MessageCircle size={32} className={styles.icon} color="#45B7D1" />
                    <p>"Can we add a shortcut for..."</p>
                </motion.div>

                <motion.div
                    className={`${styles.card} ${styles.right}`}
                    initial={{ opacity: 0, x: 50, rotate: 5 }}
                    animate={{ opacity: 1, x: 0, rotate: 3 }}
                    transition={{ delay: 1 }}
                >
                    <Lightbulb size={32} className={styles.icon} color="#FFD700" />
                    <p>"I have an idea for..."</p>
                </motion.div>

                <motion.div
                    className={`${styles.card} ${styles.center}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                >
                    <ThumbsUp size={32} className={styles.icon} color="#FF6B6B" />
                    <p>"This works great!"</p>
                </motion.div>
            </div>

            <motion.div
                className={styles.callout}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, type: "spring" }}
            >
                Participate with us!
            </motion.div>
        </Slide>
    );
}
