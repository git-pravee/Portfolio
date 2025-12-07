const About = () => {
    return (
        <div className="min-h-screen py-20 px-6 animate-fade-in">
            <div className="container mx-auto max-w-5xl">

                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        <span className="text-neon-blue">~/</span> profile_info
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                        I engineer robust back-end systems and optimize computational logic.
                        My passion lies in dissecting low-level interactions and building scalable cloud infrastructure.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 gap-12">

                    {/* Main Bio */}
                    <div className="md:col-span-8 space-y-12">

                        {/* Experience / Education */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                                Academic_Architecture
                            </h2>

                            <div className="space-y-8">
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">Master of Computer Applications (M.Sc. CS)</h3>
                                        <span className="text-neon-green font-mono text-sm">Appearing / Final Year</span>
                                    </div>
                                    <p className="text-slate-400 mb-2">Swami Ramanand Teerth Marathwada University</p>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Specializing in Advanced Algorithms, Distributed Systems, and Database Internals.
                                        Actively researching optimization techniques in cloud environments.
                                    </p>
                                </div>

                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">BCA (Computers)</h3>
                                        <span className="text-slate-500 font-mono text-sm">Graduated 2022</span>
                                    </div>
                                    <p className="text-slate-400 mb-2">Swami Ramanand Teerth Marathwada University</p>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Foundation in Software Engineering principles, Object-Oriented Programming, and Web Technologies.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Core Competencies */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                                Core_Modules
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="glass-card p-6 rounded-lg border border-white/5">
                                    <h3 className="text-neon-blue font-bold mb-4 font-mono">&lt;SystemProgramming /&gt;</h3>
                                    <ul className="space-y-3 text-slate-400 text-sm">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-neon-blue rounded-full"></span>
                                            C / C++ Memory Management
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-neon-blue rounded-full"></span>
                                            Data Structures & Algorithms
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-neon-blue rounded-full"></span>
                                            Linux Kernel / Shell Scripting
                                        </li>
                                    </ul>
                                </div>

                                <div className="glass-card p-6 rounded-lg border border-white/5">
                                    <h3 className="text-neon-green font-bold mb-4 font-mono">&lt;DevOpsEngineering /&gt;</h3>
                                    <ul className="space-y-3 text-slate-400 text-sm">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-neon-green rounded-full"></span>
                                            Docker Containerization
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-neon-green rounded-full"></span>
                                            Kubernetes Orchestration
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-neon-green rounded-full"></span>
                                            CI/CD Pipeline Automation
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Stats */}
                    <div className="md:col-span-4 space-y-8">
                        <div className="glass-card p-6 rounded-xl border border-neon-blue/20">
                            <img
                                src="https://github.com/git-pravee.png"
                                alt="Pravin Talware"
                                className="w-32 h-32 rounded-lg mb-6 border-2 border-neon-blue/50 shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                            />
                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Class</span>
                                    <span className="text-white">Student</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Level</span>
                                    <span className="text-neon-green">Final Year</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">HP</span>
                                    <span className="text-red-400">100/100</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Mana</span>
                                    <span className="text-blue-400">Infinite</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <h4 className="text-white font-bold mb-4">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['C++', 'Python', 'React', 'TypeScript', 'AWS', 'Git', 'Bash'].map(tech => (
                                        <span key={tech} className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
