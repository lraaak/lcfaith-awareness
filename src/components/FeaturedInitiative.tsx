import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const FeaturedInitiative: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (!containerRef.current) return;
        gsap.fromTo(containerRef.current.children, 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
        );
    }, []);

    return (
        <section id="featured" className="py-32 px-6 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div ref={containerRef} className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="lg:w-1/2 space-y-10">
                        <div className="space-y-4">
                            <span className="font-label text-primary font-bold tracking-[0.3em] uppercase text-xs block">Featured Initiative</span>
                            <h2 className="font-headline text-4xl md:text-7xl font-black text-stone-900 leading-none tracking-tighter">
                                De La Salle <br />
                                <span className="text-stone-300 italic font-light">Days with the Lord</span>
                            </h2>
                        </div>
                        
                        <div className="space-y-8 text-stone-600 text-lg md:text-xl font-medium leading-relaxed">
                            <p className="border-l-4 border-primary pl-8 py-2">
                                A youth group that encourages people to start and nurture a personal relationship with Christ. A friendship that allows us to realize and discover what we can contribute to making the world we live in a better place and urges us to reach out and act.
                            </p>
                            <p>
                                Through the <span className="text-stone-900 font-black uppercase tracking-widest border-b-2 border-primary/60 pb-0.5">DWTL Retreat</span>, a three-day, two-night spiritual workshop, you can be introduced to these concepts and afterwards be part of a community that supports each other’s spiritual growth through everyday things.
                            </p>
                            
                            <div className="pt-10 flex flex-wrap gap-6">
                                <a 
                                    href="https://www.facebook.com/delasalledwtl" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-stone-900 text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl flex items-center gap-3"
                                >
                                    Visit FB Page
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                </a>
                                <a href="#resources" className="text-stone-900 border border-stone-200 px-10 py-5 rounded-full font-black text-lg hover:bg-stone-200 transition-all inline-block select-none">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:w-1/2 relative group w-full">
                        <div className="absolute inset-0 bg-primary/10 rounded-3xl -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700"></div>
                        <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] shadow-2xl bg-white flex items-center justify-center p-8 md:p-16 border border-stone-100">
                             <img 
                                src="/org-logo.jpg" 
                                alt="De La Salle DWTL Logo" 
                                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedInitiative;
