"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { User, FileText, DollarSign, Calendar, Save, Plus, Trash2, CheckCircle, Zap } from "lucide-react";
import styles from "./Slide3_CRMView.module.css";
import { useState, useEffect } from "react";

const SimulatedInput = ({ label, value, delay }: { label: string, value: string, delay: number }) => {
    return (
        <div className={styles.fieldGroup}>
            <span className={styles.label}>{label}</span>
            <div className={styles.inputField}>
                <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    transition={{
                        delay: delay,
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                    style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                >
                    {value}
                </motion.span>
                <motion.span
                    className={styles.flashCursor}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        delay: delay,
                        duration: 1.5,
                        times: [0, 0.1, 1],
                        repeat: 0
                    }}
                />
            </div>
        </div>
    );
};

export default function Slide3_CRMView() {
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
                {/* Laptop Mockup */}
                <motion.div
                    className={styles.laptopFrame}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.laptopScreen}>
                        {/* CRM Header */}
                        <div className={styles.crmHeader}>
                            <div className={styles.crmTitle}>Dynamics 365 | Tax Workspace</div>
                            <div className={styles.crmNav}>
                                <span>Dashboards</span>
                                <span>Clients</span>
                                <span>Submissions</span>
                                <span>Reports</span>
                            </div>
                        </div>

                        {/* Toolbar */}
                        <div className={styles.crmToolbar}>
                            <span className={styles.toolbarItem}><Save size={16} /> Save</span>
                            <span className={styles.toolbarItem}><Plus size={16} /> New</span>
                            <span className={styles.toolbarItem}><Trash2 size={16} /> Delete</span>
                        </div>

                        {/* Form Area */}
                        <div className={styles.formContainer}>
                            {/* Section 1: Client Info */}
                            <div className={styles.sectionTitle}>
                                <User size={18} /> Client Information
                            </div>

                            <SimulatedInput label="Full Name" value="Luc Duval" delay={0.5} />
                            <SimulatedInput label="Tax Reference No." value="9832049210" delay={0.8} />
                            <SimulatedInput label="Email" value="luc.duval@ttt.com" delay={1.1} />
                            <SimulatedInput label="Mobile" value="+27 82 555 1234" delay={1.4} />

                            {/* Section 2: Submission Details */}
                            <div className={styles.sectionTitle}>
                                <FileText size={18} /> Submission Data (Extracted)
                            </div>

                            <SimulatedInput label="Tax Year" value="2025" delay={2.0} />
                            <SimulatedInput label="Source Code" value="3601 - Income" delay={2.3} />
                            <SimulatedInput label="Gross Income" value="R 1,250,000.00" delay={2.6} />
                            <SimulatedInput label="PAYE Deducted" value="R 420,500.00" delay={2.9} />
                            <SimulatedInput label="Medical Aid" value="R 65,000.00" delay={3.2} />
                            <SimulatedInput label="RA Contribution" value="R 85,000.00" delay={3.5} />
                        </div>
                    </div>
                </motion.div>

                {/* Right Side Text */}
                <motion.div
                    className={styles.textSide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className={styles.bulletItem}>
                        <CheckCircle size={36} className={styles.bulletIcon} />
                        No manual data entry required
                    </div>
                    <div className={styles.bulletItem}>
                        <Zap size={36} className={styles.bulletIcon} />
                        Reduces human error risk
                    </div>
                    <div className={styles.bulletItem}>
                        <DollarSign size={36} className={styles.bulletIcon} />
                        Save time by not worrying about document processing
                    </div>
                </motion.div>
            </div>
        </Slide>
    );
}
