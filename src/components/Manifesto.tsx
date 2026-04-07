import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Manifesto: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (!containerRef.current) return;
        gsap.fromTo(containerRef.current.children, 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
        );
    }, []);

    return (
        <section id="the-trap" className="py-32 px-6 bg-purple-950 relative overflow-hidden border-t border-purple-800/40">
            <div ref={containerRef} className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
                <div className="w-full md:w-1/2 relative group">
                    <div className="absolute -inset-4 bg-fear/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <img 
                        alt="Deconstructing Performance" 
                        className="relative rounded-2xl w-full aspect-[4/5] object-cover shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-700 pointer-events-none"
                        src="/inside_out2.jpg" 
                    />
                    
                    {/* Religious Scrupulosity Card */}
                    <div className="absolute -bottom-8 -right-8 bg-purple-900/90 p-6 rounded-2xl backdrop-blur-md shadow-2xl max-w-xs border border-purple-800 hidden lg:block z-20">
                        <p className="font-headline font-bold text-white text-sm mb-1 uppercase tracking-wider">Religious Scrupulosity</p>
                        <p className="text-purple-200 text-xs leading-relaxed italic opacity-90">"A psychological struggle where an individual is so obsessed with being 'morally perfect' that they experience constant anxiety."</p>
                    </div>

                    {/* Image Attribution Overlay */}
                    <div className="absolute bottom-6 left-10 md:left-14 opacity-30 flex items-center gap-2 select-none pointer-events-none z-10 transition-all group-hover:bottom-4 group-hover:left-8">
                        <span className="w-4 h-[1px] bg-purple-400"></span>
                        <p className="text-purple-200 text-[8px] uppercase tracking-[0.2em] font-bold">Disney·Pixar · Inside Out</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 space-y-12">
                    <div className="space-y-4">
                        <span className="font-label text-fear font-bold tracking-[0.3em] uppercase text-xs block">The Context</span>
                        <h2 className="font-headline text-4xl md:text-6xl font-black text-purple-50 mb-8 leading-[1.1]">The Perfection Trap.</h2>
                    </div>
                    <div className="space-y-8 text-purple-200 text-lg md:text-xl leading-relaxed font-normal">
                        <p>Many passionate young believers face overwhelming pressure due to religious group norms and an unrealistic drive for perfectionism.</p>
                        <p className="border-l-4 border-purple-800 pl-8 text-purple-300 italic">
                            Driven by the Filipino concept of <strong>Hiya (shame)</strong>, admitting to a mental struggle is often deemed a sign of weak faith. As a result, youth live a "double life"—performing as flawless leaders while silently suffering from burnout.
                        </p>
                        <p>This arises when holiness is incorrectly measured by <span className="text-white font-black uppercase tracking-tighter border-b-2 border-fear/60 pb-0.5">external compliance</span>—like maintaining a "sin-free" reputation—rather than true internal spiritual growth.</p>
                        <p className="text-purple-100 font-medium">This pressure forces an important question: <em>Is it truly possible to live an immaculate life by strictly following these rules, or does this demand for perfection create deeper moral and mental dilemmas?</em></p>
                        <div className="pt-8 border-t border-purple-800">
                            <p className="text-purple-400 font-label italic text-sm tracking-widest uppercase font-bold">"The mythological supposition that faith is a demand for flawlessness."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
