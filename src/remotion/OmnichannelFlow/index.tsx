import { AbsoluteFill, Sequence, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { Mail, MessageCircle, User, MessageSquare, Send, Check, Smartphone, Search, Bell, Sparkles, Battery, Wifi, Signal } from 'lucide-react';
import React from 'react';

// --- Shared Components ---

const TypingIndicator = () => {
    const frame = useCurrentFrame();

    return (
        <div style={{ display: 'flex', gap: 4, padding: '8px 12px', backgroundColor: '#e5e5e5', borderRadius: 12, width: 'fit-content' }}>
            {[0, 1, 2].map(i => {
                const opacity = interpolate(Math.sin((frame / 10) + i), [-1, 1], [0.3, 1]);
                return <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#6b7280', opacity }} />
            })}
        </div>
    );
};

// --- Phone View (Left) ---

const PhoneView = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Timings
    const startTyping = 10;
    const endTyping = 110; // Slower typing (approx 3.3s)
    const sendTime = 90;
    const receiveTime = 200; // Time when consultant reply arrives on phone

    // Typing Animation
    const fullText = "Hi TTT, I need help with my tax submission for this year.";
    const textLength = interpolate(frame, [startTyping, endTyping], [0, fullText.length], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
    const currentText = fullText.slice(0, Math.floor(textLength));

    // Send Animation
    const msgScale = spring({ frame: frame - sendTime, fps, from: 0, to: 1, config: { stiffness: 200 } });
    const showSentMsg = frame > sendTime;

    // Receive Animation
    const replyScale = spring({ frame: frame - receiveTime, fps, from: 0, to: 1, config: { stiffness: 200 } });
    const showReply = frame > receiveTime;

    return (
        <div style={{
            width: 380, height: 750,
            backgroundColor: 'black',
            borderRadius: 50,
            padding: 12,
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            display: 'flex', flexDirection: 'column'
        }}>
            {/* Screen */}
            <div style={{ flex: 1, backgroundColor: '#E5DDD5', borderRadius: 40, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>

                {/* Status Bar */}
                <div style={{ height: 40, backgroundColor: '#008069', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', color: 'white' }}>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>14:30</span>
                    <div style={{ display: 'flex', gap: 6 }}>
                        <Signal size={14} />
                        <Wifi size={14} />
                        <Battery size={14} />
                    </div>
                </div>

                {/* App Header */}
                <div style={{ height: 60, backgroundColor: '#008069', display: 'flex', alignItems: 'center', padding: '0 15px', gap: 10, color: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="/logo-square.png" alt="TTT" style={{ width: 30, height: 30, borderRadius: '50%' }} onError={(e) => e.currentTarget.style.display = 'none'} />
                        <span style={{ color: '#008069', fontWeight: 'bold' }}>T</span>
                    </div>
                    <div>
                        <div style={{ fontWeight: 600 }}>TTT Support</div>
                        <div style={{ fontSize: 12, opacity: 0.8 }}>Business Account</div>
                    </div>
                </div>

                {/* Chat Area */}
                <div style={{ flex: 1, padding: 15, display: 'flex', flexDirection: 'column', gap: 10 }}>

                    {/* Typer (Preview before send) - only visible while typing and not sent */}
                    {frame > startTyping && !showSentMsg && (
                        <div style={{ alignSelf: 'flex-end', backgroundColor: '#dcf8c6', padding: 10, borderRadius: 10, opacity: 0.7 }}>
                            {currentText}<span style={{ borderRight: '2px solid black' }}></span>
                        </div>
                    )}

                    {/* Sent Message */}
                    {showSentMsg && (
                        <div style={{
                            alignSelf: 'flex-end',
                            backgroundColor: '#e7ffdb', // WhatsApp green
                            padding: '8px 12px',
                            borderRadius: '10px 0 10px 10px',
                            maxWidth: '85%',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            transform: `scale(${msgScale})`
                        }}>
                            <p style={{ margin: 0, fontSize: 14, color: '#111827' }}>{fullText}</p>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 4, marginTop: 4 }}>
                                <span style={{ fontSize: 10, color: '#9ca3af' }}>14:31</span>
                                <Check size={12} color="#53bdeb" />
                            </div>
                        </div>
                    )}

                    {/* Received Message */}
                    {showReply && (
                        <div style={{
                            alignSelf: 'flex-start',
                            backgroundColor: 'white',
                            padding: '8px 12px',
                            borderRadius: '0 10px 10px 10px',
                            maxWidth: '85%',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                            transform: `scale(${replyScale})`
                        }}>
                            <p style={{ margin: 0, fontSize: 14, color: '#111827' }}>Hi Michael! I'd be happy to assist. I've pulled up your profile. Sending you the required forms now.</p>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 4, marginTop: 4 }}>
                                <span style={{ fontSize: 10, color: '#9ca3af' }}>14:32</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Bar */}
                <div style={{ height: 60, backgroundColor: '#f0f2f5', padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ flex: 1, height: 40, backgroundColor: 'white', borderRadius: 20, padding: '10px 15px', color: '#9ca3af', fontSize: 14, display: 'flex', alignItems: 'center' }}>
                        {frame < startTyping ? "Type a message" : (frame < endTyping ? "" : "")}
                    </div>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#008069', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Send size={18} color="white" />
                    </div>
                </div>

            </div>
        </div>
    );
};

// --- Laptop View (Right) ---

const LaptopView = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Timings (Server receives slightly after phone sends)
    const receiveTime = 100; // 10 frames after phone send
    const startAi = 120;
    const endAi = 180; // AI Generating
    const sendReplyTime = 200;

    // Animations
    const msgOpacity = interpolate(frame, [receiveTime, receiveTime + 10], [0, 1], { extrapolateRight: 'clamp' });
    const msgY = interpolate(frame, [receiveTime, receiveTime + 15], [20, 0], { extrapolateRight: 'clamp' });

    const aiOpacity = interpolate(frame, [startAi, startAi + 10], [0, 1], { extrapolateRight: 'clamp' });

    // Typewriter effect for AI
    const aiText = "Hi Michael! I'd be happy to assist. I've pulled up your profile. Sending you the required forms now.";
    const aiWriteProgress = interpolate(frame, [startAi + 20, endAi], [0, aiText.length], { extrapolateRight: 'clamp' });
    const currentAiText = aiText.slice(0, Math.floor(aiWriteProgress));

    const sentReply = frame > sendReplyTime;

    return (
        <div style={{ width: 900, height: 600, display: 'flex', flexDirection: 'column' }}>
            {/* Laptop Frame */}
            <div style={{ flex: 1, backgroundColor: '#1a1a1a', borderRadius: '12px 12px 0 0', border: '1px solid #333', display: 'flex', flexDirection: 'column', padding: '12px 12px 0 12px', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
                {/* Screen */}
                <div style={{ flex: 1, backgroundColor: '#f3f4f6', borderRadius: '4px 4px 0 0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                    {/* Browser/App Header */}
                    <div style={{ height: 36, backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', padding: '0 15px', justifyContent: 'space-between' }}>
                        <div style={{ fontWeight: 600, color: '#374151', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
                            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#22c55e' }}></div>
                            <span style={{ marginLeft: 10 }}>TTT CRM - Michael Test</span>
                        </div>
                        <Bell size={16} color="#6b7280" />
                    </div>

                    {/* CRM Content */}
                    <div style={{ flex: 1, display: 'flex' }}>
                        {/* Sidebar */}
                        <div style={{ width: 220, backgroundColor: 'white', borderRight: '1px solid #e5e7eb', padding: 20 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                                <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <User size={20} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>Michael</div>
                                    <div style={{ fontSize: 11, color: '#0077BB' }}>Onboarded</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <div style={{ padding: 10, backgroundColor: '#eff6ff', borderRadius: 6, fontSize: 12 }}>Last Tax: 2024</div>
                                <div style={{ padding: 10, backgroundColor: '#fdf2f8', borderRadius: 6, fontSize: 12 }}>Renewal: Due</div>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#fafafa' }}>
                            <div style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', gap: 15 }}>
                                {/* Incoming Message from Phone */}
                                <div style={{
                                    opacity: msgOpacity,
                                    transform: `translateY(${msgY}px)`,
                                    alignSelf: 'flex-start',
                                    display: 'flex',
                                    gap: 10,
                                    maxWidth: '80%'
                                }}>
                                    <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <MessageCircle size={16} color="white" />
                                    </div>
                                    <div style={{ backgroundColor: 'white', padding: '12px 16px', borderRadius: '0 12px 12px 12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                                        <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 4 }}>Michael via WhatsApp • 14:31</div>
                                        <p style={{ margin: 0, fontSize: 14 }}>Hi TTT, I need help with my tax submission for this year.</p>
                                    </div>
                                </div>

                                {/* Sent Reply */}
                                {sentReply && (
                                    <div style={{
                                        alignSelf: 'flex-end',
                                        backgroundColor: '#0077BB',
                                        color: 'white',
                                        padding: '12px 16px',
                                        borderRadius: '12px 12px 0 12px',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                                        maxWidth: '70%'
                                    }}>
                                        <p style={{ margin: 0, fontSize: 14 }}>{aiText}</p>
                                    </div>
                                )}
                            </div>

                            {/* Reply Box */}
                            <div style={{ padding: 20, backgroundColor: 'white', borderTop: '1px solid #e5e7eb' }}>
                                <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden' }}>
                                    {/* AI Suggestion Header */}
                                    {frame > startAi && !sentReply && (
                                        <div style={{
                                            backgroundColor: '#fef3c7', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 6,
                                            fontSize: 11, color: '#b45309', fontWeight: 600, opacity: aiOpacity
                                        }}>
                                            <Sparkles size={12} /> AI Suggested Response
                                        </div>
                                    )}

                                    {/* Text Area */}
                                    <div style={{ padding: 12, minHeight: 60, fontSize: 14, color: '#374151' }}>
                                        {!sentReply ? currentAiText : ""}
                                        {frame > startAi && !sentReply && frame < endAi && <span style={{ borderRight: '2px solid black' }}></span>}
                                    </div>

                                    {/* Toolbar */}
                                    <div style={{ padding: '8px 12px', backgroundColor: '#f9fafb', borderTop: '1px solid #f3f4f6', display: 'flex', justifyContent: 'flex-end' }}>
                                        <div style={{
                                            backgroundColor: frame > endAi && !sentReply ? '#0077BB' : '#e5e7eb',
                                            color: 'white',
                                            padding: '6px 16px',
                                            borderRadius: 6,
                                            fontSize: 12,
                                            fontWeight: 600,
                                            transform: frame > endAi && !sentReply ? 'scale(1.05)' : 'scale(1)'
                                        }}>
                                            {sentReply ? "Sent" : "Send Reply"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Laptop Base */}
            <div style={{ height: 20, backgroundColor: '#2d2d2d', borderRadius: '0 0 12px 12px', margin: '0 20px' }}></div>
        </div>
    );
};

// --- Composition ---

export const OmnichannelFlow: React.FC = () => {
    return (
        <AbsoluteFill style={{ backgroundColor: '#f8fafc', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 50 }}>
            {/* Phone View */}
            <div style={{ zIndex: 10 }}>
                <PhoneView />
            </div>

            {/* Laptop View */}
            <div style={{ zIndex: 5 }}>
                <LaptopView />
            </div>
        </AbsoluteFill>
    );
};
