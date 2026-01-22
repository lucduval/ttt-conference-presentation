"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { MessageCircle, Send, Paperclip, FileText, Check, Bot } from "lucide-react";
import styles from "./Slide1_ClientInteraction.module.css";
import Image from "next/image";

export default function Slide1_ClientInteraction() {
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
                {/* Left Content */}
                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Seamless Client Engagement</h1>
                    <ul className={styles.bulletList}>
                        <motion.li
                            className={styles.bulletItem}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <MessageCircle size={32} className={styles.bulletIcon} />
                            Automated WhatsApp outreach
                        </motion.li>
                        <motion.li
                            className={styles.bulletItem}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.0 }}
                        >
                            <Send size={32} className={styles.bulletIcon} />
                            Instant document collection
                        </motion.li>
                    </ul>
                </motion.div>

                {/* Right: Phone Mockup */}
                <motion.div
                    className={styles.phoneWrapper}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <div className={styles.phoneFrame}>
                        <div className={styles.phoneHeader}>
                            <div className={styles.avatar}>
                                <Bot size={24} color="#008069" />
                            </div>
                            <span className={styles.contactName}>TTT Tax Agent</span>
                        </div>

                        <div className={styles.chatArea}>
                            {/* 1. Agent Outreach */}
                            <motion.div
                                className={`${styles.messageBubble} ${styles.agentMessage}`}
                                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 2.0 }}
                            >
                                <strong>Hi Luc!</strong> Tax season is open. Please submit your IRP5 for 2025.
                                <span className={styles.timestamp}>10:00 AM</span>
                            </motion.div>

                            {/* 2. Client Reply with Doc */}
                            <motion.div
                                className={`${styles.messageBubble} ${styles.clientMessage}`}
                                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 4.0 }}
                            >
                                Here is my IRP5.

                                <div className={styles.pdfAttachment}>
                                    <FileText size={24} color="#e53935" />
                                    <span>IRP5_2025.pdf</span>
                                </div>
                                <span className={styles.timestamp}>10:05 AM</span>
                            </motion.div>

                            {/* 3. Agent Confirmation */}
                            <motion.div
                                className={`${styles.messageBubble} ${styles.agentMessage}`}
                                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 6.0 }}
                            >
                                Thanks! Document received. We are processing it now.
                                <span className={styles.timestamp}>10:05 AM</span>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </Slide>
    );
}
