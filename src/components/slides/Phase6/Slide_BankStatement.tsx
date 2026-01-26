"use client";

import React, { useState, useEffect } from 'react';
import Slide from "../../deck/Slide";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle, Zap, Brain, Layers } from "lucide-react";
import styles from "./Slide_BankStatement.module.css";

export default function SlideBankStatement() {
    const [scene, setScene] = useState(1); // Start at Upload scene

    // Sequence timing
    useEffect(() => {
        const sequence = {
            1: { time: 5000, next: 2 }, // Upload
            2: { time: 5000, next: 3 }, // Processing
            3: { time: 8000, next: 1 }, // Table -> Loop back to Upload
        };

        const currentScene = sequence[scene as keyof typeof sequence];
        if (currentScene) {
            const timeoutId = setTimeout(() => {
                setScene(currentScene.next);
            }, currentScene.time);
            return () => clearTimeout(timeoutId);
        }
    }, [scene]);

    return (
        <Slide className={styles.slideContainer}>
            {/* Left Pane: Animation */}
            <div className={styles.leftPane}>
                <div className={styles.sceneContainer}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="laptop"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className={styles.laptop}
                        >
                            <div className={styles.screen}>
                                <div style={{ marginBottom: '15px', fontWeight: 'bold', fontSize: '1.2rem', color: '#2C5282', paddingBottom: '10px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Bank Statement Tool</span>
                                    <span style={{ fontSize: '0.9rem', color: '#718096' }}>
                                        {scene === 1 ? 'Uploading...' : scene === 2 ? 'Processing...' : 'Review'}
                                    </span>
                                </div>

                                {scene === 1 && (
                                    <motion.div
                                        key="upload"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className={styles.uploadZone}
                                    >
                                        <Upload size={64} color="#3182CE" />
                                        <div style={{ marginTop: 20, width: '60%', height: 8, background: '#E2E8F0', borderRadius: 4, overflow: 'hidden' }}>
                                            <motion.div
                                                style={{ height: '100%', background: '#3182CE' }}
                                                initial={{ width: '0%' }}
                                                animate={{ width: '100%' }}
                                                transition={{ duration: 4.5 }} // Slowed down
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {scene === 2 && (
                                    <motion.div
                                        key="processing"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}
                                    >
                                        <div className={styles.spinner} />
                                        <span className={styles.label} style={{ fontSize: '1.2rem' }}>AI Analyzing Transactions...</span>
                                    </motion.div>
                                )}

                                {scene === 3 && (
                                    <motion.div
                                        key="table"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className={styles.tableContainer}
                                    >
                                        <div className={styles.tableHeader}>
                                            <span>Date</span>
                                            <span>Description</span>
                                            <span>Amount</span>
                                            <span>Category</span>
                                        </div>
                                        {[
                                            { date: "22 Jan", desc: "Uber Trip", amt: "-R24.50", cat: "Travel", color: "#E53E3E", bg: "#FFF5F5" },
                                            { date: "21 Jan", desc: "Apple Store", amt: "-R1,299.00", cat: "Equipment", color: "#3182CE", bg: "#EBF8FF" },
                                            { date: "20 Jan", desc: "Client Lunch", amt: "-R85.00", cat: "Meals", color: "#D69E2E", bg: "#FFFFF0" },
                                            { date: "19 Jan", desc: "Consulting Fee", amt: "+R5,000.00", cat: "Income", color: "#38A169", bg: "#F0FFF4" }
                                        ].map((tx, i) => (
                                            <motion.div
                                                className={styles.tableRow}
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + (i * 0.8) }} // Slowed staggered entrance
                                            >
                                                <span>{tx.date}</span>
                                                <span>{tx.desc}</span>
                                                <span style={{ fontWeight: 600 }}>{tx.amt}</span>
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.8 + (i * 0.8) }}
                                                >
                                                    <span
                                                        className={styles.categoryTag}
                                                        style={{ color: tx.color, backgroundColor: tx.bg }}
                                                    >
                                                        {tx.cat}
                                                    </span>
                                                </motion.div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                            <div className={styles.laptopBase} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Right Pane: Content */}
            <div className={styles.rightPane}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Bank Statement Tool 2.0
                </motion.h1>

                <ul className={styles.featureList}>
                    {[
                        { icon: Zap, text: "Improved AI Extraction" },
                        { icon: Layers, text: "Smart Categorisation" },
                        { icon: Brain, text: "Learns from previous bank slips" },
                    ].map((item, i) => (
                        <motion.li
                            key={i}
                            className={styles.featureItem}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (i * 0.2), type: "spring", stiffness: 100 }}
                        >
                            <div className={styles.featureIcon}>
                                <item.icon size={24} />
                            </div>
                            {item.text}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </Slide>
    );
}
