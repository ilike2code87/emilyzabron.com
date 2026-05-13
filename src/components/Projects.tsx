const projects = [
    {
        title: "RISC-V CPU Pipeline",
        type: "Computer Architecture",
        description:
            "Designed a five-stage CPU pipeline with instruction fetch, decode, execute, memory, and writeback stages. This project strengthened my understanding of how processors execute instructions at a low level and how pipeline stages interact. I worked through control flow, instruction movement, and architecture-level tradeoffs that affect CPU performance. It was one of my strongest low-level engineering projects because it connected assembly, hardware concepts, and execution flow.",
        tech: ["RISC-V", "Assembly", "CPU Architecture", "Pipelining"],
    },
    {
        title: "Multi-Threaded DNS Resolver",
        type: "Operating Systems",
        description:
            "Built a multi-threaded DNS resolver in C using requester and resolver threads. The project used a producer-consumer architecture with pthreads, mutexes, condition variables, and a shared queue. I focused on safe synchronization, preventing race conditions, and coordinating file input with DNS lookup output. This project gave me practical experience with concurrent systems and Linux programming.",
        tech: ["C", "pthreads", "Linux", "Mutexes", "Condition Variables"],
    },
    {
        title: "Embedded Battleship Game",
        type: "Embedded Systems",
        description:
            "Developed a touchscreen Battleship game on an STM32 board using C, LCD graphics, touch input, and hardware peripherals. The game included ship placement, turn-based gameplay, hit and miss detection, AI ship placement, and randomized AI attacks. I worked with embedded constraints, hardware initialization, display rendering, and touch coordinate mapping. This project showed my ability to build interactive software close to the hardware.",
        tech: ["C", "STM32", "HAL", "LCD", "Touchscreen", "Embedded"],
    },
    {
        title: "Polymorphia Game Framework",
        type: "Object-Oriented Design",
        description:
            "Created and extended a Java game framework using object-oriented design patterns. The project used Strategy, Factory, Command, Observer, Builder, and dependency injection to make game behavior flexible and extensible. I implemented different character behaviors, command creation, observer updates, and configurable game setup logic. This project helped me think about maintainable architecture instead of just writing code that works once.",
        tech: ["Java", "Gradle", "JUnit", "Design Patterns", "OOP"],
    },
    {
        title: "Linux File Tester",
        type: "Systems Programming",
        description:
            "Implemented a command-line file testing utility in C using low-level Linux system calls. The tool supported opening files, reading, writing, seeking, and observing file offset behavior. I worked directly with file descriptors, read and write semantics, seek positioning, and terminal-based input. This project gave me a stronger understanding of how operating systems expose file operations to user programs.",
        tech: ["C", "Linux", "File Descriptors", "System Calls"],
    },
    {
        title: "Personal Portfolio Website",
        type: "Frontend Engineering",
        description:
            "Designed and developed a fully responsive personal portfolio website using Next.js, React, TypeScript, and Tailwind CSS to showcase my software engineering projects, systems programming experience, and technical work. Implemented a modular component-based architecture with reusable UI sections, responsive layouts, dark and light theme support, and terminal-inspired interface details. Focused on frontend engineering principles including clean UI composition, asset optimization, maintainable structure, and responsive design across mobile and desktop screens. Deployed the site through Vercel with a GitHub-based workflow for continuous updates.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "GitHub"],
    },
];

export default function Projects() {
    return (
        <section id="work" className="px-6 pt-2 pb-16 md:px-12 lg:px-20">
            <div className="mb-12 flex flex-col gap-4 border-b border-neutral-300 pb-6 dark:border-neutral-700 md:flex-row md:items-end md:justify-between">
                <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                    Projects
                </h2>
                <span className="text-neutral-500 dark:text-neutral-400">
          2024–2026
        </span>
            </div>

            <div className="grid gap-6">
                {projects.map((project, index) => (
                    <article
                        key={project.title}
                        className="group rounded-3xl border border-neutral-300 bg-white/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900/70 md:p-8"
                    >
                        <div className="mb-8 flex items-center justify-between">
              <span className="text-sm text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </span>
                            <span className="rounded-full border border-neutral-300 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
                {project.type}
              </span>
                        </div>

                        <h3 className="mb-5 text-3xl font-semibold tracking-tight md:text-5xl">
                            {project.title}
                        </h3>

                        <p className="max-w-4xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-lg">
                            {project.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {project.tech.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                                >
                  {item}
                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );

}