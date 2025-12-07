const projects = [
    {
        category: "System Engineering",
        items: [
            {
                name: "vm-c",
                desc: "A virtual machine implementation in C. Explores low-level computing concepts/instruction execution.",
                stack: ["C", "Systems", "VM"],
                repo: "https://github.com/git-pravee/vm-c",
                stars: 12
            },
            {
                name: "student-management",
                desc: "Robust C++ system for managing student records with file handling and CRUD operations.",
                stack: ["C++", "OOP", "File I/O"],
                repo: "https://github.com/is-praveen/student-management",
                stars: 10
            },
            {
                name: "calculator-in-c",
                desc: "Scientific calculator handling complex mathematical operations and memory management.",
                stack: ["C", "Math", "Algorithms"],
                repo: "https://github.com/is-praveen/calculator-in-c",
                stars: 6
            }
        ]
    },
    {
        category: "DevOps & Cloud",
        items: [
            {
                name: "devops-infra",
                desc: "Collection of diverse DevOps practices, Dockerfiles, and CI/CD configurations.",
                stack: ["Docker", "K8s", "Bash"],
                repo: "https://github.com/git-pravee/devops",
                stars: 8
            },
            {
                name: "is-praveen",
                desc: "Personal GitHub configuration meta-repo. Infrastructure as Code for developer profile.",
                stack: ["Config", "Git"],
                repo: "https://github.com/is-praveen/is-praveen",
                stars: 5
            }
        ]
    },
    {
        category: "Web & Tools",
        items: [
            {
                name: "scamdetector",
                desc: "ML-powered tool to detect potential scam websites/messages using pattern matching.",
                stack: ["Python", "Security", "ML"],
                repo: "https://github.com/git-pravee/scamdetector",
                stars: 4
            },
            {
                name: "Task-Management",
                desc: "Productivity application for organizing daily workflows with a clean UI.",
                stack: ["JS", "Web", "UI/UX"],
                repo: "https://github.com/is-praveen/Task-Management-App",
                stars: 7
            },
            {
                name: "ultimate-coding",
                desc: "Comprehensive resource collection for mastering coding fundamentals.",
                stack: ["Education", "DSA"],
                repo: "https://github.com/git-pravee/ultimate-coding-foundation",
                stars: 15
            }
        ]
    }
];

const Projects = () => {
    return (
        <div className="min-h-screen py-20 px-6 animate-fade-in">
            <div className="container mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        <span className="text-neon-green">~/</span> projects
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                        A curated collection of my open-source contributions.
                        Merging logic with creativity to build functional software.
                    </p>
                </div>

                <div className="space-y-20">
                    {projects.map((section) => (
                        <section key={section.category}>
                            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                                <span className="w-8 h-px bg-neon-blue"></span>
                                {section.category}
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((project, idx) => (
                                    <a
                                        key={idx}
                                        href={project.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group glass-card p-6 rounded-lg border border-white/5 hover:border-neon-blue/30 hover:bg-white/5 transition-all duration-300 flex flex-col h-full"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="text-neon-blue group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                            </div>
                                            <div className="flex items-center gap-1 text-slate-500 font-mono text-xs">
                                                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
                                                <span>{project.stars}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon-blue transition-colors font-mono">
                                            {project.name}
                                        </h3>

                                        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                            {project.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.stack.map(tag => (
                                                <span key={tag} className="px-2 py-1 bg-cyber-black rounded text-[10px] text-neon-green font-mono border border-white/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Projects;
