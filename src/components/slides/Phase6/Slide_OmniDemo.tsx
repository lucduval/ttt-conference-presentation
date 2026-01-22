"use client";

import Slide from "../../deck/Slide";
import { Player } from "@remotion/player";
import { OmnichannelFlow } from "../../../remotion/OmnichannelFlow";
import styles from "./Slide_OmniDemo.module.css";

export default function Slide_OmniDemo() {
    return (
        <Slide className={styles.slideContainer}>
            <div className={styles.header}>
                <h1>Omnichannel Experience</h1>
                <p>Seamless management from WhatsApp to Resolution</p>
            </div>

            <div className={styles.playerWrapper}>
                <Player
                    component={OmnichannelFlow}
                    durationInFrames={300}
                    compositionWidth={1920}
                    compositionHeight={1080}
                    fps={30}
                    style={{
                        width: '100%',
                        height: '100%',
                        maxWidth: '1200px',
                        aspectRatio: '16/9',
                        borderRadius: '20px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                    }}
                    autoPlay
                    loop
                />
            </div>
        </Slide>
    );
}
