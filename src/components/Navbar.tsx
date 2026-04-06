import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white/70 dark:bg-stone-950/70 backdrop-blur-xl text-stone-800 dark:text-stone-100 font-plus-jakarta text-sm tracking-wide docked full-width top-0 sticky z-50 no-line tonal shift flat no shadows">
            <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
                <div className="text-xl font-bold tracking-tighter text-stone-900 dark:text-stone-50">Pray, Don’t Prey</div>
                <div className="hidden md:flex items-center space-x-8">
                    <a className="text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-100 transition-colors"
                        href="#faith">Faith</a>
                    <a className="text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-100 transition-colors"
                        href="#mental-health">Mental Health</a>
                    <a className="text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-100 transition-colors"
                        href="#references">Resources</a>
                    <a className="text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-100 transition-colors"
                        href="#the-trap">The Trap</a>
                </div>
                <a href="#resources"
                    className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-all inline-block select-none">
                    Get Support
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
