"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import styles from "./Slide1.module.css";

export default function Slide1() {
    return (
        <Slide className={styles.slide1}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <h2 className={styles.subtitle}>Our Technology Future: 2026 & Beyond</h2>
                <h1 className={styles.title}>SuperAgency</h1>
                <div className={styles.bridgeGraphic}>
                    {/* Placeholder for Digital Bridge Visual */}
                    <div className={styles.bridgeLine}></div>
                </div>
            </motion.div>
        </Slide>
    );
}
