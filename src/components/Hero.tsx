import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
    const emotions = [
        { name: 'Joy', icon: 'sentiment_very_satisfied', bg: 'bg-yellow-100', color: 'text-yellow-600', glow: 'shadow-yellow-200/80', border: 'border-yellow-200' },
        { name: 'Sadness', icon: 'sentiment_dissatisfied', bg: 'bg-blue-100', color: 'text-blue-600', glow: 'shadow-blue-200/80', border: 'border-blue-200' },
        { name: 'Anger', icon: 'local_fire_department', bg: 'bg-red-100', color: 'text-red-600', glow: 'shadow-red-200/80', border: 'border-red-200' },
        { name: 'Fear', icon: 'psychology_alt', bg: 'bg-purple-100', color: 'text-purple-600', glow: 'shadow-purple-200/80', border: 'border-purple-200' },
        { name: 'Disgust', icon: 'sick', bg: 'bg-green-100', color: 'text-green-600', glow: 'shadow-green-200/80', border: 'border-green-200' },
    ];

    const orbsRef = useRef<HTMLDivElement[]>([]);
    const floatingTweensRef = useRef<(gsap.core.Tween | null)[]>([]);
    const isAnimatingRef = useRef<boolean[]>(Array(5).fill(false));
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        orbsRef.current.forEach((orb, i) => {
            if (!orb) return;
            const tween = gsap.to(orb, {
                y: "-=12",
                duration: 2.5 + i * 0.3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
            floatingTweensRef.current[i] = tween;
        });

        if (textRef.current) {
            gsap.fromTo(textRef.current.children, 
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out"
                }
            );
        }
    }, []);

    const handleOrbClick = (index: number) => {
        if (isAnimatingRef.current[index]) return;
        isAnimatingRef.current[index] = true;

        const orb = orbsRef.current[index];
        if (!orb) return;
        
        // Kill the floating animation so it doesn't conflict
        if (floatingTweensRef.current[index]) {
            floatingTweensRef.current[index].kill();
        }

        gsap.to(orb, {
            y: -1500,
            opacity: 0,
            scale: 0.5,
            duration: 1.5,
            ease: "power4.in",
            onComplete: () => {
                gsap.fromTo(orb, 
                    { y: 0, opacity: 0, scale: 0 }, 
                    { 
                        opacity: 1, 
                        scale: 1, 
                        duration: 1, 
                        ease: "back.out(1.7)",
                        onComplete: () => {
                            isAnimatingRef.current[index] = false;
                            // Recreate the seamless float
                            floatingTweensRef.current[index] = gsap.to(orb, {
                                y: "-=12",
                                duration: 2.5 + index * 0.3,
                                repeat: -1,
                                yoyo: true,
                                ease: "sine.inOut"
                            });
                        }
                    }
                );
            }
        });
    };

    return (
        <section id="hero" className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-32 bg-[#0d041a] bg-gradient-to-br from-[#0d041a] via-purple-900 to-[#0d041a]">
            {/* Glowing orbs animated in the background */}
            <div className="absolute top-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-joy rounded-full blur-[120px] mix-blend-screen opacity-30"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sadness rounded-full blur-[120px] mix-blend-screen opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-fear rounded-full blur-[120px] mix-blend-screen opacity-20"></div>
            </div>
            
            <div ref={textRef} className="relative z-10 text-center max-w-5xl mb-24 space-y-12">
                <div className="space-y-4">

                    <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] drop-shadow-2xl">
                        Inside Faith:<br />
                        <span className="inline-block pr-4 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-joy via-[#FF9A9E] to-sadness italic underline decoration-joy/50 underline-offset-[16px] drop-shadow-[0_0_20px_rgba(253,228,127,0.4)]">The Mind Within</span>
                    </h1>
                </div>
                
                <div className="space-y-6">
                    <p className="text-purple-50 text-2xl md:text-4xl font-black tracking-tight max-w-3xl mx-auto leading-tight drop-shadow-md">
                        This safe place is for you. In a world filled with pressure, expectations, and silent struggles—you are allowed to simply be.
                    </p>
                    <p className="text-purple-200 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed border-l-4 border-joy/60 pl-8 text-left">
                        <span className="text-joy uppercase tracking-widest text-xs font-black block mb-2 drop-shadow-sm">Context</span>
                        Many young Christians live a double life, appearing to be "perfect" in faith while silently struggling within.
                    </p>
                </div>

                <div className="pt-12 border-t border-purple-800/50 max-w-2xl mx-auto">
                    <p className="text-purple-300 font-label italic text-base md:text-lg leading-relaxed font-bold">
                        Release your emotions to God. Click the orbs below.
                    </p>
                </div>
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto mt-8">
                <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                    {emotions.map((emotion, index) => (
                        <div key={index} className="flex flex-col items-center gap-6 group">
                            <div 
                                ref={(el) => { if (el) orbsRef.current[index] = el; }}
                                onClick={() => handleOrbClick(index)}
                                className={`w-28 h-28 md:w-36 md:h-36 ${emotion.bg} ${emotion.border} border-2 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 relative group overflow-hidden ${emotion.glow}`}
                            >
                                <span className={`material-symbols-outlined ${emotion.color} text-4xl md:text-5xl select-none relative z-10 font-light`}>
                                    {emotion.icon}
                                </span>
                                <div className="absolute inset-0 bg-white/40 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                            </div>
                            <span className={`font-label ${emotion.color} text-[10px] tracking-[0.4em] uppercase font-black`}>
                                {emotion.name}
                            </span>
                        </div>
                    ))}
                </div>
                
                <div className="mt-32 text-center">
                    <p className="text-stone-400 font-label italic text-xs tracking-[0.5em] uppercase font-black animate-pulse">
                        Release to God
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
