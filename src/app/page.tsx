import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Mathematics from "@/components/Mathematics";
export default function Home() {
    return (
        <main className="min-h-screen bg-[#f6f1e8] text-neutral-950 transition-colors duration-300 dark:bg-[#0b0b0b] dark:text-[#f6f1e8]">
            <Navbar />
            <Hero />
            <Experience />
            <Projects />
            <Mathematics />

        </main>
    );
}