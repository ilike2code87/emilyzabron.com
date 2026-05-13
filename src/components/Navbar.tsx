"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-black/70 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">

                {/* Terminal Logo */}
                <div className="flex items-center font-mono text-3xl font-bold tracking-tight text-neutral-100">
                    <span className="mr-3 text-neutral-500">&gt;</span>

                    <span>emily.dev</span>

                    <span className="ml-3 text-neutral-500">$</span>

                    <span className="ml-2 inline-block h-8 w-[3px] animate-[blink_0.6s_steps(1,end)_infinite] rounded-full bg-orange-400" />
                </div>

                {/* Navigation + Icons */}
                <div className="flex items-center gap-6 text-neutral-300">

                    <a
                        href="#experience"
                        className="font-mono text-sm transition hover:text-white"
                    >
                        experience
                    </a>

                    <a
                        href="#work"
                        className="font-mono text-sm transition hover:text-white"
                    >
                        projects
                    </a>

                    <a
                        href="https://github.com/ilike2code87"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:scale-110 hover:text-white"
                    >
                        <FaGithub size={34} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/emily-zabron"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:scale-110 hover:text-white"
                    >
                        <FaLinkedin size={34} />
                    </a>

                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="transition hover:scale-110"
                        aria-label="Toggle theme"
                    >
                        {!mounted ? (
                            <span className="block h-[34px] w-[34px]" />
                        ) : theme === "dark" ? (
                            <Sun size={34} className="text-yellow-300" />
                        ) : (
                            <Moon size={34} className="text-blue-400" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}