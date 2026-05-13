import Image from "next/image";
import {
    SiAngular,
    SiDocker,
    SiGithub,
    SiGooglecloud,
    SiGrafana,
    SiJira,
    SiQuarkus,
    SiSlack,
    SiTerraform,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const experiences = [
    {
        year: "May 2025 – August 2025",
        title: "Software Engineer Intern",
        company: "The Home Depot",
        description:
            "Worked on redesigning and modernizing an internal engineering website used for product sample requests and testing workflows at The Home Depot. The application was built on an extremely outdated early-2000s Angular codebase, and I helped migrate it through a major framework upgrade spanning roughly 20 Angular versions. I implemented a component-based architecture to improve modularity, maintainability, and long-term scalability across the application. This experience strengthened my understanding of enterprise frontend engineering, large-scale refactoring, and modern web development practices.",
        stack: [
            { name: "Angular", icon: () => <SiAngular className="text-2xl text-red-500" /> },
            { name: "GitHub", icon: () => <SiGithub className="text-2xl text-white" /> },
            { name: "Jira", icon: () => <SiJira className="text-2xl text-blue-500" /> },
            { name: "Slack", icon: () => <SiSlack className="text-2xl text-pink-500" /> },
        ],
    },
    {
        year: "May 2024 – August 2024",
        title: "Software Engineer Intern",
        company: "The Home Depot",
        description:
            "Collaborated with a team of seven software engineering interns to develop a backend-driven web application focused on monitoring technology systems across The Home Depot’s distribution fulfillment centers. The platform was designed to improve operational visibility by tracking system health and detecting outages in real time, allowing notifications to be routed directly to IT teams for faster response and resolution. I contributed to backend development, system logic, and data flow architecture while working within a collaborative agile engineering environment. This experience strengthened my understanding of large-scale enterprise systems, teamwork, and building software that supports real operational infrastructure.",
        stack: [
            { name: "Java", icon: () => <FaJava className="text-2xl text-orange-500" /> },
            { name: "Quarkus", icon: () => <SiQuarkus className="text-2xl text-blue-400" /> },
            { name: "Google Cloud", icon: () => <SiGooglecloud className="text-2xl text-blue-500" /> },
            { name: "Docker", icon: () => <SiDocker className="text-2xl text-sky-500" /> },
            { name: "Terraform", icon: () => <SiTerraform className="text-2xl text-purple-500" /> },
            { name: "Grafana", icon: () => <SiGrafana className="text-2xl text-orange-400" /> },
            { name: "Jira", icon: () => <SiJira className="text-2xl text-blue-500" /> },
            { name: "Slack", icon: () => <SiSlack className="text-2xl text-pink-500" /> },
            { name: "GitHub", icon: () => <SiGithub className="text-2xl text-white" /> },
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="px-6 py-24 md:px-12 lg:px-20">
            <div className="mb-14 flex flex-col gap-4 border-b border-neutral-300 pb-6 dark:border-neutral-700 md:flex-row md:items-end md:justify-between">
                <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                    Experience
                </h2>

                <p className="text-neutral-500 dark:text-neutral-400">
                    Industry Experience
                </p>
            </div>

            <div className="space-y-8">
                {experiences.map((experience) => (
                    <div
                        key={experience.year}
                        className="rounded-3xl border border-neutral-300 bg-white/50 p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60"
                    >
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-neutral-700 bg-white p-2">
                                    <Image
                                        src="/images/THD.png"
                                        alt="The Home Depot"
                                        fill
                                        sizes="56px"
                                        className="object-contain p-2"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                                        {experience.company}
                                    </p>

                                    <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                                        {experience.title}
                                    </h3>
                                </div>
                            </div>

                            <span className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
                {experience.year}
              </span>
                        </div>

                        <p className="max-w-4xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                            {experience.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            {experience.stack.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex items-center gap-3 rounded-2xl border border-neutral-300 bg-black/40 px-5 py-3 text-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-950/80"
                                >
                                    {tech.icon()}
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}