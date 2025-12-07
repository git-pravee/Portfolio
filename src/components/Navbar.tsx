import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: '~/home', path: '/' },
        { name: '~/about', path: '/about' },
        { name: '~/projects', path: '/projects' },
        { name: '~/contact', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 w-full bg-cyber-black/90 backdrop-blur-md border-b border-white/10 z-50">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-xl font-bold font-mono text-white tracking-tighter">
                    <span className="text-neon-blue">&gt;</span> dev<span className="text-slate-400">_</span>pt
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`font-mono text-sm transition-all duration-300 relative ${isActive(link.path)
                                    ? 'text-neon-green font-bold'
                                    : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            {link.name}
                            {isActive(link.path) && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-green shadow-[0_0_10px_#00ff9f]"></span>
                            )}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-cyber-black border-t border-white/10">
                    <div className="flex flex-col p-4 space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`font-mono text-sm py-2 px-4 rounded transition-colors ${isActive(link.path)
                                        ? 'bg-white/5 text-neon-green border-l-2 border-neon-green'
                                        : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
