"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { Smartphone, Laptop, FileText, Check, ArrowRight, User, Bot } from "lucide-react";
import styles from "./SlideTaxAgentDemo.module.css";
import { useState, useEffect } from "react";

export default function SlideTaxAgentDemo() {
    // State to orchestrate the "Found it!" moment on the laptop
    const [docLanded, setDocLanded] = useState(false);

    return (
        <Slide className={styles.slideContainer}>
            {/* --- PHONE SECTION --- */}
            <div className={styles.phoneContainer}>
                <div className={styles.phoneHeader}>
                    <Bot size={20} />
                    <span style={{ fontSize: "0.9rem", fontWeight: "bold" }}>TTT Agent</span>
                </div>
                <div className={styles.phoneBody}>
                    {/* Agent Message */}
                    <motion.div
                        className={`${styles.messageBubble} ${styles.agentMessage}`}
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                    >
                        <strong>Hi Luc!</strong> Tax season is open. Please send your IRP5.
                    </motion.div>

                    {/* Client Reply + Doc */}
                    <motion.div
                        className={`${styles.messageBubble} ${styles.clientMessage}`}
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.4 }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <FileText size={18} className="text-red-500" />
                            <span>IRP5_2025.pdf</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- FLYING DOCUMENT TRANSITION --- */}
            {/* 
                We use a separate motion div that moves from the phone's visual position to the laptop's.
                Since we are in a flex container, we can estimate relative movement or just move 'across' with x/y.
                Phone is roughly -200px from center, Laptop +100px.
                Let's approximate positions or use absolute offsets.
            */}
            <motion.div
                className={styles.flyingDoc}
                initial={{ opacity: 0, x: -160, y: 50, scale: 0.5 }}
                animate={{
                    opacity: [0, 1, 1, 0], // Fade in on phone, stay visible, fade out on laptop
                    x: [-160, -160, 200, 200], // Start Phone -> Wait -> Move Laptop -> Stay
                    y: [50, 50, -20, -20],
                    scale: [0.5, 1, 1.5, 1]
                }}
                transition={{
                    times: [0, 0.1, 0.8, 1], // Keyframe timing
                    duration: 2.5,
                    delay: 2 // Start after client message
                }}
                onAnimationComplete={() => setDocLanded(true)}
            >
                <FileText size={48} fill="#ffcccc" />
            </motion.div>


            {/* --- LAPTOP SECTION --- */}
            <div className={styles.laptopContainer}>
                <div className={styles.dynamicsHeader}>
                    <span style={{ marginRight: "auto" }}>Dynamics 365 | Tax Module</span>
                    <User size={16} />
                </div>
                <div className={styles.dynamicsBody}>
                    <div className={styles.dynamicsSidebar}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className={styles.sidebarItem} />
                        ))}
                    </div>
                    <div className={styles.dynamicsContent}>
                        <div className={styles.sectionTitle}></div>

                        {/* Form Fields populating */}
                        <div className={styles.formGrid}>
                            <Field delay={0} landed={docLanded} label="Tax Number" value="1234567890" />
                            <Field delay={0.2} landed={docLanded} label="Tax Year" value="2025" />
                            <Field delay={0.4} landed={docLanded} label="Source Code" value="3601" />
                            <Field delay={0.6} landed={docLanded} label="Gross Income" value="R 850,000" />
                        </div>

                        {/* Success Message */}
                        {docLanded && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                style={{ marginTop: "1rem", color: "green", display: "flex", gap: "0.5rem", fontSize: "0.8rem" }}
                            >
                                <Check size={16} /> Data extracted successfully from WhatsApp.
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </Slide>
    );
}

// Helper component for form fields
function Field({ label, value, landed, delay }: { label: string, value: string, landed: boolean, delay: number }) {
    return (
        <div className={styles.formField}>
            <div className={styles.fieldLabel} style={{ width: label.length * 8 + "px" }}></div>
            <div className={`${styles.fieldInput} ${landed ? styles.fieldFilled : ''}`}>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: landed ? 1 : 0 }}
                    transition={{ delay: delay }}
                >
                    {value}
                </motion.span>
            </div>
        </div>
    );
}
