"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { Bot, Mail, MessageCircle, User, Link, Database, ClipboardList } from "lucide-react";
import Image from "next/image";
import styles from "./Slide2025.module.css";

export default function Slide2025() {
    return (
        <Slide className={styles.slide2025}>
            <motion.div className={styles.header}>
                <h1>2025: Foundation Built.</h1>
                <p>A year of massive technical leaps.</p>
            </motion.div>

            <div className={styles.grid}>
                {/* Feature 1: SARS/TTT Co-Pilot */}
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className={styles.iconGroup}>
                        <Bot size={48} color="#4ECDC4" />
                        <div className={styles.dataBadges}>
                            <span className={styles.badge}>SARS</span>
                            <span className={styles.badge}>TTT</span>
                        </div>
                    </div>
                    <h3>Custom Co-Pilot</h3>
                    <p>Trained on TTT's data & SARS regs</p>
                </motion.div>

                {/* Feature 2: Omnichannel Hub */}
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className={styles.omniFlow}>
                        <div className={styles.inputs}>
                            <Mail size={24} color="#0077BB" />
                            <MessageCircle size={24} color="#25D366" />
                        </div>
                        <motion.div
                            className={styles.flowLine}
                            animate={{ width: ["0%", "100%"], opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        />
                        <User size={32} color="#4ECDC4" />
                    </div>
                    <h3>Omnichannel</h3>
                    <p>Email & WhatsApp → Consultant</p>
                </motion.div>

                {/* Feature 3: Xero Integration */}
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className={styles.integration}>
                        {/* Using Database icon as placeholder for TTT System, and Link for connection */}
                        <Database size={40} color="#0077BB" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        >
                            <Link size={32} color="#8899A6" />
                        </motion.div>
                        <span className={styles.xeroText}>Xero</span>
                    </div>
                    <h3>Integration</h3>
                    <p>Seamless sync with Xero</p>
                </motion.div>

                {/* Feature 4: Admin Hub */}
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className={styles.iconGroup}>
                        <ClipboardList size={48} color="#FF9F1C" />
                    </div>
                    <h3>Admin Hub</h3>
                    <p>efficiency task manager</p>
                </motion.div>
            </div>

            <motion.div
                className={styles.successBanner}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2 }}
            >
                ✓ 100% COMPLETE
            </motion.div>
        </Slide>
    );
}
