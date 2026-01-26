"use client";

import Slide from "../../deck/Slide";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Slide_AdminHub.module.css";
import React, { useState, useEffect } from "react";
import { CheckCircle2, Circle, Clock } from "lucide-react";

type TaskStatus = "Not Started" | "In Progress" | "Completed";

interface Task {
    id: string;
    name: string;
    client: string;
    owner: string;
    status: TaskStatus;
}

const INITIAL_TASKS: Task[] = [
    { id: "1", name: "Q4 Tax Return", client: "Acme Corp", owner: "Sarah J.", status: "Completed" },
    { id: "2", name: "Payroll Audit", client: "Globex Inc", owner: "Mike R.", status: "In Progress" },
];

const POTENTIAL_TASKS = [
    { name: "Monthly Bookkeeping", client: "Soylent Corp" },
    { name: "VAT Registration", client: "Umbrella Corp" },
    { name: "Annual Report", client: "Stark Ind" },
    { name: "Payroll Setup", client: "Wayne Ent" },
    { name: "Tax Advisory", client: "Cyberdyne" },
    { name: "Audit Prep", client: "Massive Dynamic" },
    { name: "Compliance Check", client: "InGen" },
    { name: "Financial Statement", client: "Hooli" },
];

const OWNERS = ["Sarah J.", "Mike R.", "Jessica T.", "David L.", "Emily W."];

export default function SlideAdminHub() {
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

    useEffect(() => {
        // Add new task every 2 seconds
        const addTimer = setInterval(() => {
            const randomTask = POTENTIAL_TASKS[Math.floor(Math.random() * POTENTIAL_TASKS.length)];
            const randomOwner = OWNERS[Math.floor(Math.random() * OWNERS.length)];
            const newTask: Task = {
                id: Date.now().toString(),
                name: randomTask.name,
                client: randomTask.client,
                owner: randomOwner,
                status: "Not Started"
            };
            setTasks(prev => [newTask, ...prev].slice(0, 8)); // Keep max 8 tasks
        }, 2000);

        // Advance status every 1.5 seconds
        const statusTimer = setInterval(() => {
            setTasks(prev => {
                const newTasks = [...prev];
                // Find a candidate to upgrade
                const candidates = newTasks.filter(t => t.status !== "Completed");
                if (candidates.length > 0) {
                    const taskToUpdate = candidates[Math.floor(Math.random() * candidates.length)];
                    const index = newTasks.findIndex(t => t.id === taskToUpdate.id);
                    if (index !== -1) {
                        // 80% chance to progress, 20% to skip (to make it feel organic)
                        if (Math.random() > 0.2) {
                            if (newTasks[index].status === "Not Started") {
                                newTasks[index] = { ...newTasks[index], status: "In Progress" };
                            } else if (newTasks[index].status === "In Progress") {
                                newTasks[index] = { ...newTasks[index], status: "Completed" };
                            }
                        }
                    }
                }
                return newTasks;
            });
        }, 1500);

        return () => {
            clearInterval(addTimer);
            clearInterval(statusTimer);
        };
    }, []);

    return (
        <Slide className={styles.container}>
            {/* Left Pane: Laptop Animation */}
            <div className={styles.leftPane}>
                <div className={styles.laptopFrame}>
                    <div className={styles.screen}>
                        {/* Dynamics UI Header */}
                        <div className={styles.topBar}>
                            <div className={styles.waffle}>:::</div>
                            <div className={styles.dynamicsTitle}>Dynamics 365 | Admin Hub</div>
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

                            {/* Main Content Area */}
                            <div className={styles.contentArea}>
                                <div className={styles.viewHeader}>All Admin Hub Tasks</div>
                                <table className={styles.taskTable}>
                                    <thead>
                                        <tr className={styles.tableHeader}>
                                            <th>Task Name</th>
                                            <th>Client</th>
                                            <th>Consultant</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <AnimatePresence initial={false}>
                                            {tasks.map((task) => (
                                                <TaskRow key={task.id} task={task} />
                                            ))}
                                        </AnimatePresence>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Pane: Statistics */}
            <div className={styles.rightPane}>
                <motion.ul className={styles.statList}>
                    <StatItem value="17k" label="Tasks Created" delay={0.2} />
                    <StatItem value="13k" label="Clients Managed" delay={0.4} />
                    <StatItem value="50+" label="Staff Members" delay={0.6} />
                    <StatItem value="Many" label="Hours Saved" delay={0.8} />
                </motion.ul>
            </div>
        </Slide>
    );
}

function TaskRow({ task }: { task: Task }) {
    return (
        <motion.tr
            className={styles.taskRow}
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
        >
            <td>{task.name}</td>
            <td>{task.client}</td>
            <td>{task.owner}</td>
            <td>
                <StatusPill status={task.status} />
            </td>
        </motion.tr>
    );
}

function StatusPill({ status }: { status: TaskStatus }) {
    let bg = "#E1DFDD"; // Gray
    let color = "#555";
    let icon = <Circle size={12} />;

    if (status === "In Progress") {
        bg = "#Ccecfd"; // Blue light
        color = "#005a9e"; // Blue dark
        icon = <Clock size={12} />;
    } else if (status === "Completed") {
        bg = "#Dff6dd"; // Green light
        color = "#107c10"; // Green dark
        icon = <CheckCircle2 size={12} />;
    }

    return (
        <motion.span
            className={styles.statusPill}
            initial={false}
            animate={{ backgroundColor: bg, color: color }}
            transition={{ duration: 0.3 }}
        >
            <span style={{ marginRight: 6, display: 'flex' }}>{icon}</span>
            {status}
        </motion.span>
    );
}

function StatItem({ value, label, delay }: { value: string, label: string, delay: number }) {
    return (
        <motion.li
            className={styles.statItem}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
        >
            <div className={styles.statValue}>{value}</div>
            <div className={styles.statLabel}>{label}</div>
        </motion.li>
    );
}
