"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { CheckCircle, Rocket, Sparkles, ArrowRightCircle, HelpCircle } from "lucide-react";
import styles from "./Slide_Agenda.module.css";

const agendaItems = [
    {
        number: 1,
        title: "2025: Foundation Built",
        description: "Key achievements last year",
        icon: CheckCircle,
        color: "#10B981",
    },
    {
        number: 2,
        title: "2025: Innovation Delivered",
        description: "Admin Hub, CoPilot & Automation",
        icon: Sparkles,
        color: "#0078D4",
    },
    {
        number: 3,
        title: "2026: The Unlock",
        description: "The future of TTT",
        icon: Rocket,
        color: "#F59E0B",
    },
    {
        number: 4,
        title: "The Way Forward",
        description: "Strategic next steps",
        icon: ArrowRightCircle,
        color: "#0077BB",
    },
    {
        number: 5,
        title: "Closing & Questions",
        description: "Wrap up",
        icon: HelpCircle,
        color: "#6b7280",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0, 0, 0.2, 1] as const,
        },
    },
};

const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
        scaleY: 1,
        transition: {
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0, 0.2, 1] as const,
        },
    },
};

export default function Slide_Agenda() {
    return (
        <Slide className={styles.slideAgenda}>
            <div className={styles.container}>
                {/* Left Side - Heading */}
                <motion.div
                    className={styles.headingSection}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className={styles.title}>Agenda</h1>
                    <p className={styles.subtitle}>What we're covering</p>
                </motion.div>

                {/* Right Side - Timeline Items */}
                <div className={styles.timelineSection}>
                    {/* Vertical Timeline Line */}
                    <motion.div
                        className={styles.timelineLine}
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                    />

                    <motion.div
                        className={styles.itemsContainer}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {agendaItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={item.number}
                                    className={styles.agendaItem}
                                    variants={itemVariants}
                                >
                                    <div
                                        className={styles.itemDot}
                                        style={{ borderColor: item.color }}
                                    >
                                        <IconComponent
                                            size={20}
                                            color={item.color}
                                        />
                                    </div>
                                    <div className={styles.itemContent}>
                                        <span className={styles.itemNumber}>
                                            {item.number.toString().padStart(2, "0")}
                                        </span>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                        <p className={styles.itemDescription}>
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
