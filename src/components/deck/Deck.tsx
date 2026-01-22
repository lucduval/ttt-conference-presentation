"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./Deck.module.css";

// Import slides (will be added as we create them)
import Slide1 from "../slides/Phase1/Slide1";
import Slide_Agenda from "../slides/Phase1/Slide_Agenda";
import Slide1_ClientInteraction from "../slides/TaxAgentDemo/Slide1_ClientInteraction";
import Slide2_ProcessFlow from "../slides/TaxAgentDemo/Slide2_ProcessFlow";
import Slide3_CRMView from "../slides/TaxAgentDemo/Slide3_CRMView";
import Slide4_Reporting from "../slides/TaxAgentDemo/Slide4_Reporting";

import Slide9 from "../slides/Phase3/Slide9";
import Slide13 from "../slides/Phase5/Slide13";
import Slide15 from "../slides/Phase5/Slide15";
import Slide2025 from "../slides/Phase6/Slide2025";
import Slide_OmniDemo from "../slides/Phase6/Slide_OmniDemo";
import Slide2026 from "../slides/Phase6/Slide2026";

const SLIDES = [
    Slide1,
    Slide_Agenda,
    Slide2025,
    Slide2026,
    Slide1_ClientInteraction,
    Slide3_CRMView,
    Slide2_ProcessFlow,
    Slide4_Reporting,
    Slide_OmniDemo,
    //Slide9,
    Slide13,
    Slide15,
];

export default function Deck() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === "Space") {
                setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
            } else if (e.key === "ArrowLeft") {
                setCurrentSlide((prev) => Math.max(prev - 1, 0));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const CurrentSlideComponent = SLIDES[currentSlide];

    return (
        <div className={styles.deck}>
            <AnimatePresence mode="wait">
                <CurrentSlideComponent key={currentSlide} />
            </AnimatePresence>

            {/* Footer Logos */}
            <footer className={styles.footer}>
                <div className={styles.logoLeft}>
                    <Image
                        src="/financial-group-logo.jpg"
                        alt="Financial Group Logo"
                        width={255}
                        height={85}
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <div className={styles.logoRight}>
                    <Image
                        src="/black-circle-logo.png"
                        alt="Black Circle Logo"
                        width={85}
                        height={85}
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </footer>
        </div>
    );
}
