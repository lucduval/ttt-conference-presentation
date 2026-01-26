"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { Bot, Mail, MessageCircle, User, Link, Database, ClipboardList, Layers, ArrowRightLeft } from "lucide-react";
import Image from "next/image";
import styles from "./Slide2025.module.css";

export default function Slide2025() {
    return (
        <Slide className={styles.slide2025}>
            <motion.div className={styles.header}>
                <h1>2025: Foundation Built</h1>
                <p>A year of massive technical leaps</p>
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
                    <h3>Xero Integration</h3>
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
                    <p>Efficiency task manager</p>
                </motion.div>

                {/* Feature 5: Unified CRM */}
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                >
                    <div className={styles.iconGroup}>
                        <Layers size={48} color="#7C3AED" />
                    </div>
                    <h3>Unified CRM</h3>
                    <p>All departments in one system</p>
                </motion.div>

                {/* Feature 6: Cross-Selling */}
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className={styles.iconGroup}>
                        <ArrowRightLeft size={48} color="#EC4899" />
                    </div>
                    <h3>Cross-Selling</h3>
                    <p>Leverage client data across departments</p>
                </motion.div>
            </div>


        </Slide>
    );
}
