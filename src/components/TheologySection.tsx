import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const TheologySection: React.FC = () => {
    const verses = [
        {
            verse: "Matthew 5:48",
            content: "\"Be perfect, as your heavenly Father is perfect.\"",
            meaning: "The Christian call is toward spiritual maturity and fullness in love rather than moral faultlessness."
        },
        {
            verse: "Romans 3:23",
            content: "\"For all have sinned and fall short of the glory of God.\"",
            meaning: "No one is morally flawless; every believer depends on God's mercy."
        },
        {
            verse: "1 John 1:9",
            content: "\"If we acknowledge our sins, He is faithful and just, to forgive us.\"",
            meaning: "Faith is a continuous journey of growth, not a demand for flawless behavior."
        }
    ];

    const headerRef = useRef<HTMLDivElement>(null);
    const versesRef = useRef<HTMLDivElement[]>([]);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (headerRef.current) {
            gsap.fromTo(headerRef.current.children, 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: headerRef.current, start: "top 80%" } }
            );
        }
        
        versesRef.current.forEach((verse, i) => {
            if (!verse) return;
            gsap.fromTo(verse,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: i * 0.15, ease: "power3.out", scrollTrigger: { trigger: verse, start: "top 85%" } }
            );
        });

        if (bottomRef.current) {
            gsap.fromTo(bottomRef.current.children, 
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: bottomRef.current, start: "top 80%" } }
            );
        }
    }, []);

    return (
        <section id="faith" className="py-32 px-6 bg-green-950 relative border-t border-green-900/40">
            <div className="max-w-7xl mx-auto space-y-24">
                <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-2xl space-y-4">
                        <span className="font-label text-green-300 font-bold tracking-[0.3em] uppercase text-xs block">Theological Reflection</span>
                        <h2 className="font-headline text-4xl md:text-7xl font-black text-green-50 leading-none">The Theology of Growth.</h2>
                    </div>
                    <p className="text-green-300 text-lg md:text-xl max-w-sm font-medium leading-relaxed italic">
                        "Holiness grows through the capacity for conversion, repentance, and the willingness to begin again." &mdash; Pope Benedict XVI
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {verses.map((v, i) => (
                        <div key={i} ref={(el) => { if (el) versesRef.current[i] = el; }} className="bg-green-900 p-12 rounded-3xl shadow-xl shadow-green-950/80 space-y-8 border border-green-800 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500">
                            <div className="space-y-6">
                                <div className="w-10 h-10 bg-green-800 border border-disgust/50 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="material-symbols-outlined text-disgust text-xl">auto_stories</span>
                                </div>
                                <h3 className="font-headline text-2xl font-black text-green-50 group-hover:text-disgust transition-colors">{v.verse}</h3>
                                <p className="text-green-100 text-xl font-medium leading-relaxed font-serif">
                                    {v.content}
                                </p>
                            </div>
                            <p className="text-green-300 text-sm leading-relaxed border-t border-green-800 pt-6">
                                {v.meaning}
                            </p>
                        </div>
                    ))}
                </div>

                <div ref={bottomRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                    <div className="bg-green-950 p-12 rounded-3xl text-white space-y-6 relative overflow-hidden group border border-green-800">
                        <h3 className="font-headline text-3xl font-black relative z-10">Human Dignity</h3>
                        <p className="text-green-300 leading-relaxed text-lg relative z-10 font-medium">
                            Each person's life is valuable because they are made in the image of God. Even after moral shortcomings, there remains an opportunity for repentance and holiness.
                        </p>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-disgust/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                    </div>
                    <div className="bg-green-900 p-12 rounded-3xl text-green-50 space-y-6 relative overflow-hidden group border border-green-800">
                        <h3 className="font-headline text-3xl font-black relative z-10">Preference for the Poor</h3>
                        <p className="text-green-300 leading-relaxed text-lg relative z-10 font-medium">
                            We are called to protect and support those who are struggling. Young people who experience intense pressure to be morally flawless are the ones we must accompany with mercy.
                        </p>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-disgust/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheologySection;
