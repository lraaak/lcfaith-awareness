import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const SanctuaryGrid: React.FC = () => {
    const dataCards = [
        {
            title: "The Well-being Gap",
            value: "26%",
            label: "Experienced emotional distress.",
            description: "According to NYAS (2015), while 97.4% consider religion important, 26% experience deep emotional distress.",
            icon: "clinical_notes",
            theme: "bg-surface-container-high",
            col: "md:col-span-2"
        },
        {
            title: "Suri-Nilay",
            value: "Faith vs Perf.",
            label: "Spiritual Maturity.",
            description: "Holiness grows through conversion, repentance, and starting again—not moral faultlessness.",
            icon: "auto_stories",
            theme: "bg-primary/5",
            col: "md:col-span-1"
        },
        {
            title: "Double Life",
            value: "Hiya",
            label: "Socially Prescribed Perfection.",
            description: "Admitting a mental struggle is often seen as a sign of weak faith, leading many to hide their pain.",
            icon: "visibility_off",
            theme: "bg-stone-50 border border-stone-200/50",
            col: "md:col-span-1"
        },
        {
            title: "The Mercy Model",
            value: "Solidarity",
            label: "Pastoral Accompaniment.",
            description: "The Church is called to accompany the youth with mercy, understanding, and holistic pastoral care.",
            icon: "partner_exchange",
            theme: "bg-stone-900 text-white",
            col: "md:col-span-2"
        }
    ];

    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    
    useEffect(() => {
        if (headerRef.current) {
            gsap.fromTo(headerRef.current.children, 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: headerRef.current, start: "top 80%" } }
            );
        }
        
        cardsRef.current.forEach((card, i) => {
            if (!card) return;
            gsap.fromTo(card,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: i * 0.15, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 85%" } }
            );
        });
    }, []);

    return (
        <section id="mental-health" className="py-32 px-6 bg-stone-50 relative border-y border-stone-200/40">
            <div className="max-w-7xl mx-auto">
                <div ref={headerRef} className="text-center mb-24 max-w-4xl mx-auto space-y-6">
                    <span className="font-label text-primary font-bold tracking-[0.3em] uppercase text-xs block">Suri-Nilay: Judge & Discern</span>
                    <h2 className="font-headline text-4xl md:text-6xl font-black text-stone-900 leading-[1.1]">Bridging the gap between Scripture & Science.</h2>
                    <p className="text-stone-500 text-xl md:text-2xl font-medium leading-relaxed">
                        Moving away from a "performance" model toward a model of growth, vulnerability, and forgiveness.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {dataCards.map((card, index) => (
                        <div 
                            key={index} 
                            ref={(el) => { if (el) cardsRef.current[index] = el; }}
                            className={`${card.theme} ${card.col} rounded-3xl p-10 flex flex-col justify-between group overflow-hidden relative min-h-[420px] transition-all hover:scale-[1.02] duration-500 shadow-xl shadow-stone-200/50`}
                        >
                            <div className="relative z-10 flex flex-col items-start gap-4 h-full">
                                <div className={`w-14 h-14 ${card.theme === 'bg-stone-900 text-white' ? 'bg-stone-800' : 'bg-white'} rounded-full flex items-center justify-center mb-6 shadow-sm`}>
                                    <span className={`material-symbols-outlined ${card.theme === 'bg-stone-900 text-white' ? 'text-primary' : 'text-stone-400'} text-3xl`}>{card.icon}</span>
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <div className="flex flex-col gap-1">
                                        <span className={`font-label uppercase tracking-widest text-[10px] font-black ${card.theme === 'bg-stone-900 text-white' ? 'text-stone-400' : 'text-stone-400'}`}>{card.title}</span>
                                        <h3 className={`font-headline text-4xl md:text-5xl font-black ${card.theme === 'bg-stone-900 text-white' ? 'text-primary' : 'text-stone-900'}`}>{card.value}</h3>
                                    </div>
                                    <p className={`font-bold text-lg md:text-xl leading-tight ${card.theme === 'bg-stone-900 text-white' ? 'text-stone-100' : 'text-stone-800'}`}>{card.label}</p>
                                    <p className={`text-base md:text-lg leading-relaxed ${card.theme === 'bg-stone-900 text-white' ? 'text-stone-400' : 'text-stone-500'}`}>{card.description}</p>
                                </div>
                            </div>
                            
                            <img 
                                alt={card.title} 
                                className={`absolute bottom-[-10%] right-[-10%] w-2/3 h-2/3 object-contain opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none`}
                                src={card.icon === 'groups' ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcbCMGNLmpB48iP_a-aITKtNmh8cVZKB4Bjo1GibDZ_Il9WgKy0L5rcCzpXSF-YQrM8Dz5_rre-fFRNDC3x8pratV-Zg65x1XRK4JDi_Tuuaq5XnKLD2fi1PYKShqq1xPo4W7YU6pxCsl4CWpBPYv3nC6gxLE7O8nWqVaFDDl_GTHOiscBsOAPHu8DwVxXDSx-8UYa47LWSdsw8GGnzx57upHPxvKxgIReP2wkhdWoLC7BEJzTTwh_KDAY_zFjQdueYz55-daod4yi' : ''} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SanctuaryGrid;
