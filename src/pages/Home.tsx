import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [bootSequence, setBootSequence] = useState<string[]>([]);
    const [isBooted, setIsBooted] = useState(false);

    useEffect(() => {
        const sequence = [
            "Initializing system core...",
            "Loading kernel modules...",
            "Mounting file systems...",
            "Starting network services...",
            "Access granted: USER_LEVEL_ADMIN",
        ];

        let delay = 0;
        sequence.forEach((line, index) => {
            delay += Math.random() * 500 + 200;
            setTimeout(() => {
                setBootSequence(prev => [...prev, line]);
                if (index === sequence.length - 1) {
                    setTimeout(() => setIsBooted(true), 800);
                }
            }, delay);
        });
    }, []);

    if (!isBooted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cyber-black text-neon-green font-mono p-6">
                <div className="w-full max-w-lg">
                    {bootSequence.map((line, i) => (
                        <div key={i} className="mb-2">
                            <span className="text-slate-500 mr-2">[{new Date().toLocaleTimeString()}]</span>
                            <span className="typewriter-text">{line}</span>
                        </div>
                    ))}
                    <div className="animate-pulse">_</div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden animate-fade-in">

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[128px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[128px]"></div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl z-10">
                <div className="inline-block px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-sm font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
                    System Online
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none animate-fade-in-up delay-100">
                    Architecting <br />
                    <span className="text-neon-gradient">Scalable Systems</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up delay-200">
                    Software Engineer specializing in <span className="text-white font-medium">Low-Level Optimization</span> and <span className="text-white font-medium">DevOps Infrastructure</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up delay-300">
                    <Link
                        to="/projects"
                        className="px-8 py-4 bg-neon-blue text-cyber-black text-lg font-bold rounded hover:bg-neon-green hover:shadow-[0_0_30px_rgba(0,255,159,0.3)] transition-all duration-300"
                    >
                        init_projects()
                    </Link>
                    <Link
                        to="/about"
                        className="px-8 py-4 bg-transparent text-white border border-white/20 text-lg font-bold rounded hover:bg-white/5 hover:border-white/50 transition-all duration-300"
                    >
                        read_bio()
                    </Link>
                </div>

                {/* Terminal Footer */}
                <div className="mt-24 text-slate-500 font-mono text-sm animate-fade-in delay-[1000ms]">
                    <p>$ echo "Let's build something impossible."</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
