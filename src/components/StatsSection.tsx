import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const StatsSection: React.FC = () => {
    const stats = [
        {
            value: "26%",
            label: "Emotional Distress",
            context: "Filipino youth experienced deep emotional distress or felt life was not worth living (NYC, 2015).",
            icon: "sentiment_very_dissatisfied",
            color: "text-red-400",
            bg: "bg-red-900/50"
        },
        {
            value: "33%",
            label: "Increase in Perfectionism",
            context: "Socially prescribed perfectionism—the belief that others will only value you if you are perfect (Curran & Hill, 2019).",
            icon: "trending_up",
            color: "text-red-400",
            bg: "bg-red-900/50"
        },
        {
            value: "97.4%",
            label: "Religious Importance",
            context: "Filipino Catholic youth consider religion important, highlighting the hidden crisis of faith performance (NYC, 2015).",
            icon: "church",
            color: "text-red-400",
            bg: "bg-red-900/50"
        }
    ];

    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        ScrollTrigger.refresh();

        cardsRef.current.forEach((card, i) => {
            if (!card) return;
            gsap.fromTo(card, 
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: i * 0.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 95%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
    }, []);

    return (
        <section id="stats" className="py-32 px-6 bg-red-950 relative overflow-hidden min-h-[600px] border-t border-red-900/40">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 space-y-4">
                    <h2 className="font-headline text-5xl md:text-7xl font-black text-red-50 leading-none">Why This Matters</h2>
                    <p className="text-red-200 text-lg md:text-xl max-w-2xl mx-auto font-bold italic">
                        The data behind the hidden crisis of performance in the sanctuary.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            ref={(el) => { if (el) cardsRef.current[index] = el; }}
                            className={`${stat.bg} rounded-3xl p-10 flex flex-col items-center text-center space-y-6 shadow-2xl shadow-red-950/80 border border-red-800 hover:scale-[1.03] transition-transform duration-500`}
                        >
                            <div className="w-20 h-20 bg-red-950 rounded-2xl flex items-center justify-center shadow-lg border border-red-900">
                                <span className={`material-symbols-outlined ${stat.color} text-4xl`}>{stat.icon}</span>
                            </div>
                            <div className="space-y-4">
                                <h3 className={`font-headline text-6xl font-black ${stat.color}`}>{stat.value}</h3>
                                <p className="font-black text-red-50 text-lg uppercase tracking-widest">{stat.label}</p>
                                <p className="text-red-200 text-base font-medium leading-relaxed">{stat.context}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
