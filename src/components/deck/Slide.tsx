"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./Slide.module.css";

interface SlideProps {
    children: ReactNode;
    className?: string;
}

const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

export default function Slide({ children, className = "" }: SlideProps) {
    return (
        <motion.div
            className={`${styles.slide} ${className}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
}
