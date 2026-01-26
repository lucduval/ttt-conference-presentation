"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { FileText, LockOpen, Scan, FolderOpen, Database } from "lucide-react";
import styles from "./Slide2_ProcessFlow.module.css";

export default function Slide2_ProcessFlow() {
    const steps = [
        { id: 1, label: "Received", icon: FileText, color: "#9ca3af" },
        { id: 2, label: "Decrypting", icon: LockOpen, color: "#f87171" },
        { id: 3, label: "Extracting", icon: Scan, color: "#fbbf24" },
        { id: 4, label: "Categorising", icon: FolderOpen, color: "#60a5fa" },
        { id: 5, label: "CRM Entry", icon: Database, color: "#34d399" },
    ];

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

            <motion.div
                className={styles.subText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                From raw file to structured data in seconds
            </motion.div>

            <div className={styles.flowContainer}>
                {steps.map((step, index) => (
                    <div key={step.id} style={{ display: "contents" }}>
                        {/* Step Node */}
                        <motion.div
                            className={styles.stepWrapper}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 1.5 }} // Slower staggered entry
                        >
                            <motion.div
                                className={styles.iconCircle}
                                animate={{
                                    borderColor: [
                                        "transparent",
                                        step.color,
                                        "transparent"
                                    ],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    delay: index * 1.5 + 0.5, // Increased delay stagger
                                    duration: 2.5, // Slower animation
                                    times: [0, 0.5, 1],
                                    repeat: 0
                                }}
                            >
                                <step.icon size={40} color={step.color} />
                            </motion.div>
                            <span className={styles.label}>{step.label}</span>
                        </motion.div>

                        {/* Connector (if not last item) */}
                        {index < steps.length - 1 && (
                            <div className={styles.connector}>
                                <motion.div
                                    className={styles.connectorFill}
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{
                                        delay: index * 1.5 + 0.8, // Adjusted to match new slower pace
                                        duration: 0.8, // Slower fill
                                        ease: "linear"
                                    }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Slide>
    );
}
