"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { ShieldCheck, Lock } from "lucide-react";
import styles from "./Slide8.module.css";

export default function Slide8() {
    return (
        <Slide className={styles.slide8}>
            <div className={styles.content}>
                <motion.div
                    className={styles.shieldContainer}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", duration: 1.5 }}
                >
                    <ShieldCheck size={200} className="text-white" strokeWidth={1} />
                    <motion.div
                        className={styles.lock}
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Lock size={60} color="var(--primary-dark)" />
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.text}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h1>Ironclad Client Protection.</h1>
                    <ul className={styles.list}>
                        <li>Centralized Data Vault</li>
                        <li>Enterprise-Grade Security</li>
                        <li>POPIA Ready</li>
                    </ul>
                    <div className={styles.note}>
                        "Our client data is our gold; we are locking it in a vault."
                    </div>
                </motion.div>
            </div>
        </Slide>
    );
}
