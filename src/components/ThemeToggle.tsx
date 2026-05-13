"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="h-6 w-6"
                aria-label="Toggle Theme"
                suppressHydrationWarning
            />
        );
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="transition-transform hover:scale-110"
            aria-label="Toggle Theme"
        >
            {resolvedTheme === "dark" ? "☀️" : "🌙"}
        </button>
    );
}