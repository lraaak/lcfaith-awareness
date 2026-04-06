import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const CTA: React.FC = () => {
    const actions = [
        { value: 'Workshops', label: 'Christian Mental Health' },
        { value: 'Reflection', label: 'Monthly Sessions' },
        { value: 'Faith Hour', label: 'Emotional Well-being' },
        { value: 'Resilience', label: 'A Positive Support System' },
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const actionsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            gsap.fromTo(containerRef.current.children, 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
            );
        }
        
        if (actionsRef.current) {
            gsap.fromTo(actionsRef.current.children, 
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: actionsRef.current, start: "top 85%" } }
            );
        }
    }, []);

    return (
        <section id="resources" className="py-40 px-6 relative bg-white overflow-hidden border-t border-stone-200/40">
            <div ref={containerRef} className="max-w-5xl mx-auto relative z-10 text-center">
                <div className="inline-block px-5 py-2 bg-primary/5 border border-primary/20 rounded-full text-primary font-bold text-xs uppercase tracking-[0.3em] mb-12">
                    Taking Action
                </div>
                <h2 className="font-headline text-5xl md:text-8xl font-black text-stone-900 mb-10 leading-none">Companion, Not Performer.</h2>
                <p className="text-stone-500 text-xl md:text-3xl leading-relaxed mb-20 max-w-4xl mx-auto font-medium">
                    Our faith calls us to accompany the youth with compassion and understanding. By integrating conventional mental health tools with spiritual development, we empower the youth to find meaning again. By doing so, the Church must ensure that no youth is burdened by unrealistic expectations and guilt that distort the true meaning of Christian holiness.
                </p>
                <div className="mb-12 text-center">
                    <h3 className="font-headline text-3xl md:text-5xl font-black text-stone-900 mb-4 inline-block border-b-4 border-primary/40 pb-2">Find a Support Hub</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-32 max-w-5xl mx-auto">
                    <div className="space-y-8 bg-stone-50 p-10 rounded-3xl border border-stone-200/60 shadow-xl shadow-stone-200/50 hover:-translate-y-1 transition-transform duration-500">
                        <div className="space-y-2">
                            <span className="font-label text-primary font-bold tracking-[0.2em] uppercase text-[10px]">Faith-Based &</span>
                            <h3 className="font-headline text-3xl font-black text-stone-900">Psycho-Spiritual Support</h3>
                        </div>
                        <div className="space-y-4">
                            <a href="https://www.cefam.ph/" target="_blank" rel="noopener noreferrer" className="block text-stone-600 font-bold hover:text-primary transition-colors border-b border-stone-200 pb-3 flex justify-between items-center group">
                                RMT-CEFAM (Center for Family Ministries)
                                <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                            </a>
                            <a href="https://mentalhealthph.org/directory/listing/don-bosco-health-center/" target="_blank" rel="noopener noreferrer" className="block text-stone-600 font-bold hover:text-primary transition-colors border-b border-stone-200 pb-3 flex justify-between items-center group">
                                Don Bosco Mental Health Center
                                <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                            </a>
                            <a href="https://christsyouthinaction.com/" target="_blank" rel="noopener noreferrer" className="block text-stone-600 font-bold hover:text-primary transition-colors border-b border-stone-200 pb-3 flex justify-between items-center group">
                                Christ’s Youth in Action (CYA)
                                <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                            </a>
                            <a href="https://feast.ph/" target="_blank" rel="noopener noreferrer" className="block text-stone-600 font-bold hover:text-primary transition-colors pb-1 flex justify-between items-center group">
                                The Feast (Light of Jesus Family)
                                <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-8 bg-stone-900 text-white p-10 rounded-3xl border border-stone-800 shadow-xl shadow-stone-950/20 hover:-translate-y-1 transition-transform duration-500">
                        <div className="space-y-2">
                            <span className="font-label text-stone-400 font-bold tracking-[0.2em] uppercase text-[10px]">Professional &</span>
                            <h3 className="font-headline text-3xl font-black text-white">Clinical Support</h3>
                        </div>
                        <div className="space-y-4">
                            <a href="https://www.ncmh.gov.ph/" target="_blank" rel="noopener noreferrer" className="block text-stone-300 font-bold hover:text-primary transition-colors border-b border-stone-700 pb-3 flex justify-between items-center group">
                                National Center for Mental Health (NCMH)
                                <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                            </a>
                            <a href="https://www.pmha.org.ph/" target="_blank" rel="noopener noreferrer" className="block text-stone-300 font-bold hover:text-primary transition-colors border-b border-stone-700 pb-3 flex justify-between items-center group">
                                Philippine Mental Health Association (PMHA)
                                <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                            </a>
                            <a href="https://www.in-touch.org/" target="_blank" rel="noopener noreferrer" className="block text-stone-300 font-bold hover:text-primary transition-colors pb-1 flex justify-between items-center group">
                                In Touch Community Services
                                <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                            </a>
                        </div>
                    </div>
                </div>                
                <div className="space-y-12 mb-32">
                    <p className="font-label text-stone-300 font-bold tracking-[0.5em] uppercase text-sm">Concrete Responses</p>
                    <div ref={actionsRef} className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-10 border-t border-stone-100 group opacity-50 hover:opacity-100 transition-opacity duration-700">
                        {actions.map((action, index) => (
                            <div key={index} className="flex flex-col items-center gap-3">
                                <span className="text-3xl font-headline font-black text-stone-900">{action.value}</span>
                                <span className="text-xs font-label uppercase tracking-widest text-stone-400 font-black">{action.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-3xl mx-auto p-12 bg-stone-50 rounded-3xl border border-stone-100 text-left space-y-8">
                    <h3 className="text-2xl font-black text-stone-900">A Holistic Approach</h3>
                    <p className="text-stone-500 text-lg leading-relaxed font-medium italic">
                        "When conventional mental health interventions are integrated with faith-based counseling, the youth will have useful items to make it through their plight without abandoning their faith."
                    </p>
                </div>
            </div>
            
            <div className="absolute top-1/2 left-1/4 w-[1000px] h-[1000px] bg-primary/2 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2"></div>
        </section>
    );
};

export default CTA;
