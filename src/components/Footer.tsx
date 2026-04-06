import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-stone-50 text-stone-400 font-plus-jakarta text-[10px] leading-relaxed border-t border-stone-200/40">
            <div className="max-w-7xl mx-auto px-12 py-24 flex flex-col items-center text-center space-y-12">
                <div className="space-y-4">
                    <div className="font-headline font-black text-stone-900 text-3xl mb-8">Pray, <span className="text-primary italic">Don’t Prey</span></div>
                    <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed text-stone-500 font-medium">
                        Escaping the Trap of Perfect Faith Amid Unholy Mental Health Struggles.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 text-left items-start pb-20 border-b border-stone-200/60 w-full">
                    <div className="space-y-6">
                        <span className="font-label uppercase tracking-widest text-primary font-black">Submitted By</span>
                        <div className="space-y-1.5 text-stone-800 text-sm md:text-base font-bold">
                            <p>Atienza, Lorenzo A.</p>
                            <p>Berano, R Jay V.</p>
                            <p>Caoile, Yuan Miguel G.</p>
                            <p>Divinagracia, Karl Matthew T.</p>
                            <p>Villano, Jean Carla M.</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <span className="font-label uppercase tracking-widest text-primary font-black">Presented To</span>
                        <div className="space-y-1.5 text-stone-800 text-sm md:text-base font-bold">
                            <p>Sir Rafael F. Fernando</p>
                            <p>Department of Theology</p>
                            <p>De La Salle University – Manila</p>
                            <p>Term 2, A.Y. 2025 – 2026</p>
                            <p>Faith Worth Living (LCFAITH Z26)</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
                    <p className="tracking-widest uppercase font-black">© 2026 LCFAITH. All rights reserved.</p>
                    <div className="flex gap-10 tracking-widest uppercase font-black">
                        <a className="hover:text-primary transition-colors underline underline-offset-8 select-none cursor-pointer" onClick={() => alert('Add link to Privacy Policy')}>Privacy</a>
                        <a className="hover:text-primary transition-colors underline underline-offset-8 select-none cursor-pointer" onClick={() => alert('Add link to Contact')}>Contact</a>
                        <a className="hover:text-primary transition-colors underline underline-offset-8 select-none" href="#references">Resources</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
