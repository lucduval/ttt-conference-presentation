"use client";

import Slide from "../../deck/Slide";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import styles from "./Slide15.module.css";

export default function Slide15() {
    return (
        <Slide className={styles.slide15}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className={styles.rocketWrapper}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <Rocket size={120} color="white" />
                </motion.div>

                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className={styles.title}
                >
                    The Future is Here.
                </motion.h1>

                <motion.button
                    className={styles.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    Let's Go
                </motion.button>
            </motion.div>
        </Slide>
    );
}
