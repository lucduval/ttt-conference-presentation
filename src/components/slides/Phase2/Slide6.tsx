"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { Calculator, Shield, FileSpreadsheet, Briefcase } from "lucide-react";
import styles from "./Slide6.module.css";

const APPS = [
    { name: "TTT Tax", icon: Calculator, color: "#FF6B6B" },
    { name: "TTT Insurance", icon: Shield, color: "#4ECDC4" },
    { name: "TTT Accounting", icon: FileSpreadsheet, color: "#45B7D1" },
    { name: "TTT Advisory", icon: Briefcase, color: "#96CEB4" },
];

export default function Slide6() {
    return (
        <Slide className={styles.slide6}>
            <motion.div className={styles.header}>
                <h1>Specialized Tools. Connected Data.</h1>
                <p>You get the tools YOU need.</p>
            </motion.div>

            <div className={styles.grid}>
                {APPS.map((app, i) => (
                    <motion.div
                        key={app.name}
                        className={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    >
                        <div className={styles.iconBox} style={{ backgroundColor: app.color }}>
                            <app.icon size={40} color="white" />
                        </div>
                        <h3>{app.name}</h3>
                    </motion.div>
                ))}
            </div>
        </Slide>
    );
}
