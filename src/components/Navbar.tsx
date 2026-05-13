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
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-10">

                {/* Terminal Logo */}
                <div className="flex items-center font-mono text-xl font-bold tracking-tight text-neutral-100 sm:text-3xl">
                    <span className="mr-2 text-neutral-500 sm:mr-3">
                        &gt;
                    </span>

                    <span>emily.dev</span>

                    <span className="ml-2 text-neutral-500 sm:ml-3">
                        $
                    </span>

                    <span className="ml-2 inline-block h-6 w-[3px] rounded-full bg-orange-400 sm:h-8 animate-[blink_0.6s_steps(1,end)_infinite]" />
                </div>

                {/* Navigation + Icons */}
                <div className="flex items-center gap-3 text-neutral-300 sm:gap-6">

                    <a
                        href="#experience"
                        className="hidden font-mono text-sm transition hover:text-white sm:block"
                    >
                        experience
                    </a>

                    <a
                        href="#work"
                        className="hidden font-mono text-sm transition hover:text-white sm:block"
                    >
                        projects
                    </a>

                    <a
                        href="https://github.com/ilike2code87"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:scale-110 hover:text-white"
                    >
                        <FaGithub size={28} className="sm:h-[34px] sm:w-[34px]" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/emily-zabron"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:scale-110 hover:text-white"
                    >
                        <FaLinkedin size={28} className="sm:h-[34px] sm:w-[34px]" />
                    </a>

                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="transition hover:scale-110"
                        aria-label="Toggle theme"
                    >
                        {!mounted ? (
                            <span className="block h-[28px] w-[28px] sm:h-[34px] sm:w-[34px]" />
                        ) : theme === "dark" ? (
                            <Sun
                                size={28}
                                className="text-yellow-300 sm:h-[34px] sm:w-[34px]"
                            />
                        ) : (
                            <Moon
                                size={28}
                                className="text-blue-400 sm:h-[34px] sm:w-[34px]"
                            />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}