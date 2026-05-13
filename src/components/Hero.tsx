import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden px-6 pb-10 pt-24 md:px-12 lg:px-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                <div>


                    <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[7rem]">
                        Emily
                        <br />
                        Zabron
                    </h1>

                    <div className="mt-7 border-l-4 border-orange-400 pl-6">
                        <p className="max-w-3xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-xl">
                            I am a software engineer at The Home Depot and a Computer Science
                            graduate from CU Boulder with a minor in Computer Engineering. I
                            build reliable software across full-stack, systems, embedded, and
                            object-oriented engineering. I am especially passionate about
                            designing efficient, modular, and maintainable software systems,
                            with a strong interest in software architecture and scalable
                            application design.
                        </p>

                        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-xl">
                            Available for freelance software engineering, portfolio websites,
                            business websites, and custom development projects.

                            <a
                                href="mailto:youremail@gmail.com"
                                className="ml-2 text-orange-400 transition-colors hover:text-orange-300"
                            >
                                Let’s work together → ezabron03@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
                    <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-400/25 via-transparent to-blue-400/20 blur-2xl" />

                    <div className="relative h-[460px] overflow-hidden rounded-[2rem] border border-neutral-300 bg-neutral-200 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 md:h-[540px]">
                        <Image
                            src="/images/emily-hero.jpg"
                            alt="Emily Zabron"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}