"use client";

import Slide from "../../deck/Slide";
import { motion, useAnimation } from "framer-motion";
import { Sparkles, ArrowRight, Brain, BookOpen, Clock } from "lucide-react";
import styles from "./Slide_CoPilot.module.css";
import React from "react";

export default function SlideCoPilot() {
    const cursorControls = useAnimation();

    React.useEffect(() => {
        const sequence = async () => {
            await cursorControls.start({ opacity: 1, x: 300, y: 400, transition: { duration: 0 } });
            await cursorControls.start({ x: 860, y: 250, transition: { duration: 2, ease: "easeInOut" } });
            await cursorControls.start({ scale: 0.8, transition: { duration: 0.2 } });
            await cursorControls.start({ scale: 1, transition: { duration: 0.2 } });
            await cursorControls.start({ opacity: 0, transition: { delay: 0.5, duration: 0.5 } });
        };
        sequence();
    }, [cursorControls]);

    return (
        <Slide className={styles.container}>
            {/* Left Pane: Laptop Animation */}
            <div className={styles.leftPane}>
                <div className={styles.laptopFrame}>
                    <div className={styles.screen}>
                        {/* Dynamics UI Header */}
                        <div className={styles.topBar}>
                            <div className={styles.waffle}>:::</div>
                            <div className={styles.dynamicsTitle}>Dynamics 365 | TTT Financial Group</div>
                        </div>

                        <div className={styles.mainLayout}>
                            {/* Nav Rail */}
                            <div className={styles.navRail}>
                                <div className={`${styles.navItem} ${styles.active}`} />
                                <div className={styles.navItem} />
                                <div className={styles.navItem} />
                                <div className={styles.navItem} />
                                <div className={styles.navItem} />
                            </div>

                            {/* Main Content Area (Dummy Grid) */}
                            <div className={styles.contentArea}>
                                <div className={styles.gridDummy}>
                                    <div className={styles.gridHeader} />
                                    {[85, 92, 78, 95, 82, 90, 88].map((width, i) => (
                                        <div key={i} className={styles.gridRow} style={{ width: `${width}%` }} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CoPilot Toggle Button (Static or Initial State) */}
                        <motion.div
                            className={styles.copilotTrigger}
                            initial={{ scale: 1 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{ opacity: 1 }} // Assuming it's always visible for this flow
                        >
                            <Sparkles size={20} color="#0078D4" />
                        </motion.div>

                        {/* Animated Cursor */}
                        <motion.div
                            className={styles.cursor}
                            initial={{ x: 300, y: 400, opacity: 0 }}
                            animate={cursorControls}
                        />

                        {/* CoPilot Panel */}
                        <motion.div
                            className={styles.copilotPanel}
                            initial={{ x: "100%" }}
                            animate={{ x: "0%" }}
                            transition={{ delay: 2.5, duration: 0.8, ease: "circOut" }}
                        >
                            <div className={styles.copilotHeader}>
                                <Sparkles size={16} />
                                <span>CoPilot</span>
                            </div>

                            <div className={styles.copilotBody}>
                                {/* AI Greeting */}
                                <motion.div
                                    className={`${styles.message} ${styles.aiMessage}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 3.5 }}
                                >
                                    <div className={styles.aiAvatar}><Sparkles size={12} color="white" /></div>
                                    Hello! How can I help you with TTT's policies today?
                                </motion.div>

                                {/* User Question */}
                                <motion.div
                                    className={`${styles.message} ${styles.userMessage}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 5.5 }} // Wait for typing
                                >
                                    What is the TTT policy on remote work allowance?
                                </motion.div>

                                {/* AI Typing Indicator */}
                                <motion.div
                                    initial={{ opacity: 0, display: "none" }}
                                    animate={{ opacity: 1, display: "block" }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 6.5, duration: 0.5 }} // Shows while thinking
                                    style={{ fontSize: '0.8rem', color: '#666', fontStyle: 'italic', marginLeft: '10px' }}
                                >
                                    Thinking...
                                </motion.div>

                                {/* AI Response */}
                                <motion.div
                                    className={`${styles.message} ${styles.aiMessage}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 8.5 }}
                                >
                                    <div className={styles.aiAvatar}><Sparkles size={12} color="white" /></div>
                                    <Typewriter
                                        text="TTT follows a hybrid model allowing up to 3 days of remote work per week for eligible roles, subject to manager approval and team coverage requirements."
                                        delay={9000} // Start after container fades in (8.5s) + 0.5s pause
                                    />
                                </motion.div>
                            </div>

                            <div className={styles.inputArea}>
                                <div className={styles.inputPlaceholder}>
                                    Ask a question about...
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Right Pane: Text Content */}
            <div className={styles.rightPane}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    TTT's CoPilot
                </motion.h1>



                <ul className={styles.featureList}>
                    {[
                        { icon: Brain, text: "Trained on all TTT specific data" },
                        { icon: BookOpen, text: "Great training resource for new staff" }
                    ].map((item, i) => (
                        <motion.li
                            key={i}
                            className={styles.featureItem}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + (i * 0.15), duration: 0.6 }}
                        >
                            <div className={styles.featureIcon}>
                                <item.icon size={18} />
                            </div>
                            {item.text}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </Slide>
    );
}

// Optimized Typewriter: Reserves space to prevent layout shifts and delays execution
function Typewriter({ text, delay = 0 }: { text: string; delay?: number }) {
    const [displayedText, setDisplayedText] = React.useState("");
    const [started, setStarted] = React.useState(false);

    React.useEffect(() => {
        let timer: NodeJS.Timeout;

        const startTyping = () => {
            setStarted(true);
            let i = 0;
            timer = setInterval(() => {
                if (i < text.length) {
                    setDisplayedText((prev) => prev + text.charAt(i));
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 30); // Typing speed
        };

        const initialDelay = setTimeout(startTyping, delay);

        return () => {
            clearTimeout(initialDelay);
            if (timer) clearInterval(timer);
        };
    }, [text, delay]);

    return (
        <span style={{ position: 'relative', display: 'inline-block' }}>
            {/* Invisible full text to reserve layout space */}
            <span style={{ visibility: 'hidden' }}>{text}</span>
            {/* Visible typed text overlay */}
            <span style={{ position: 'absolute', top: 0, left: 0 }}>
                {started ? displayedText : ""}
            </span>
        </span>
    );
}
