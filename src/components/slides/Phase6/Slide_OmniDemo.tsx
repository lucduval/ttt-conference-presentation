"use client";

import React from "react";
import Slide from "../../deck/Slide";
import { Player } from "@remotion/player";
import { motion } from "framer-motion";
import { Users, MessageSquare } from "lucide-react";
import { OmnichannelFlow } from "../../../remotion/OmnichannelFlow";
import styles from "./Slide_OmniDemo.module.css";

export default function Slide_OmniDemo() {
    return (
        <Slide className={styles.container}>
            {/* Left Pane: Laptop Animation */}
            <div className={styles.leftPane}>
                <div className={styles.laptopFrame}>
                    <div className={styles.screen}>
                        <div className={styles.playerWrapper}>
                            <Player
                                component={OmnichannelFlow}
                                durationInFrames={300}
                                compositionWidth={1920}
                                compositionHeight={1080}
                                fps={30}
                                className={styles.playerFrame}
                                autoPlay
                                loop
                                controls={false}
                                clickToPlay={false}
                                doubleClickToFullscreen={false}
                            />
                        </div>
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
                    Omnichannel Experience
                </motion.h1>

                <ul className={styles.featureList}>
                    {[
                        { icon: Users, text: "Connects clients directly to consultants" },
                        { icon: MessageSquare, text: "Unified communication interface for faster resolution" }
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
