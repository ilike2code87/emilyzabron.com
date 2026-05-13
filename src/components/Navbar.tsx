"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-black/70 backdrop-blur-xl">
            <div className="flex w-full items-center justify-between px-3 py-3 sm:px-6 sm:py-5 md:px-10">
                <div className="flex min-w-0 items-center font-mono text-lg font-bold tracking-tight text-neutral-100 sm:text-3xl">
                    <div className="relative mr-3">
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-neutral-500 transition hover:text-white"
                            aria-label="Open navigation menu"
                        >
                            &gt;
                        </button>

                        {open && (
                            <div className="absolute left-0 top-10 z-50 w-44 rounded-2xl border border-neutral-800 bg-black/95 p-3 text-sm text-neutral-300 shadow-xl backdrop-blur-xl">
                                <a
                                    href="#experience"
                                    onClick={() => setOpen(false)}
                                    className="block rounded-lg px-3 py-2 transition hover:bg-neutral-900 hover:text-white"
                                >
                                    experience
                                </a>

                                <a
                                    href="#work"
                                    onClick={() => setOpen(false)}
                                    className="block rounded-lg px-3 py-2 transition hover:bg-neutral-900 hover:text-white"
                                >
                                    projects
                                </a>
                            </div>
                        )}
                    </div>

                    <span>emily.dev</span>
                    <span className="ml-2 text-neutral-500">$</span>
                    <span className="ml-1 inline-block h-5 w-[2px] animate-[blink_0.6s_steps(1,end)_infinite] rounded-full bg-orange-400 sm:h-8 sm:w-[3px]" />
                </div>

                <div className="flex shrink-0 items-center gap-3 text-neutral-300 sm:gap-5">
                    <a
                        href="https://github.com/ilike2code87"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:scale-110 hover:text-white"
                    >
                        <FaGithub className="h-5 w-5 sm:h-8 sm:w-8" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/emily-zabron"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:scale-110 hover:text-white"
                    >
                        <FaLinkedin className="h-5 w-5 sm:h-8 sm:w-8" />
                    </a>

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="transition hover:scale-110"
                        aria-label="Toggle theme"
                    >
                        {!mounted ? (
                            <span className="block h-5 w-5 sm:h-8 sm:w-8" />
                        ) : theme === "dark" ? (
                            <Sun className="h-5 w-5 text-yellow-300 sm:h-8 sm:w-8" />
                        ) : (
                            <Moon className="h-5 w-5 text-blue-400 sm:h-8 sm:w-8" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}