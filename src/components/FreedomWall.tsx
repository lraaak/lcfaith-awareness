import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { supabase } from '../lib/supabase';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface FreedomEntry {
    id?: number;
    nickname: string;
    content: string;
    created_at?: string;
}


const FreedomWall: React.FC = () => {
    const [entries, setEntries] = useState<FreedomEntry[]>([]);
    const [nickname, setNickname] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const fetchEntries = useCallback(async () => {
        setLoading(true);
        setError(null);
        const { data, error: fetchError } = await supabase
            .from('messages')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(30);

        if (fetchError) {
            console.error('[FreedomWall] Supabase error:', fetchError);
            setError(`Could not load entries: ${fetchError.message}`);
            setEntries([]);
        } else {
            console.log('[FreedomWall] Fetched data:', data);
            setEntries(data || []);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchEntries();
    }, [fetchEntries]);

    // GSAP animations on mount
    useEffect(() => {
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: headerRef.current, start: 'top 80%' },
                }
            );
        }
        if (formRef.current) {
            gsap.fromTo(
                formRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: formRef.current, start: 'top 85%' },
                }
            );
        }
    }, []);

    // Animate new cards when entries load
    useEffect(() => {
        if (gridRef.current && entries.length > 0) {
            gsap.fromTo(
                gridRef.current.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: 'power3.out',
                }
            );
        }
    }, [entries]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!nickname.trim() || !content.trim()) return;
        setSubmitting(true);
        setError(null);

        const { error: insertError } = await supabase
            .from('messages')
            .insert([{ nickname: nickname.trim(), content: content.trim() }]);

        if (insertError) {
            setError('Failed to post. Please try again.');
        } else {
            setSuccess(true);
            setNickname('');
            setContent('');
            await fetchEntries();
            setTimeout(() => setSuccess(false), 3000);
        }
        setSubmitting(false);
    };

    const timeAgo = (dateStr?: string) => {
        if (!dateStr) return '';
        const diff = Date.now() - new Date(dateStr).getTime();
        const mins = Math.floor(diff / 60000);
        if (mins < 1) return 'just now';
        if (mins < 60) return `${mins} min ago`;
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return `${hrs} hour${hrs > 1 ? 's' : ''} ago`;
        const days = Math.floor(hrs / 24);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    };

    return (
        <section
            id="freedom-wall"
            ref={sectionRef}
            className="py-32 px-6 bg-[#0d041a] relative overflow-hidden border-t border-purple-900/40"
        >
            {/* Background glows */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-800/20 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div ref={headerRef} className="text-center mb-16 space-y-4">
                    <span className="font-label text-purple-300 font-bold tracking-[0.3em] uppercase text-xs block">
                        Community &bull; Freedom Wall
                    </span>
                    <h2 className="font-headline text-4xl md:text-7xl font-black text-white leading-none tracking-tighter drop-shadow-md">
                        Release to God.
                    </h2>
                    <p className="text-purple-200 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Share your thoughts, prayers, and reflections. You are not alone in this journey.
                    </p>
                </div>

                {/* Submission Form */}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mb-20 max-w-2xl mx-auto bg-purple-900/30 backdrop-blur-md rounded-3xl border border-purple-700/50 p-8 space-y-6 shadow-2xl shadow-purple-950/50"
                >
                    <h3 className="font-headline text-xl font-black text-white">
                        Share Your Heart
                    </h3>

                    <div className="space-y-2">
                        <label className="font-label text-purple-300 text-xs uppercase tracking-widest font-bold block">
                            Nickname
                        </label>
                        <input
                            id="freedom-wall-nickname"
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            placeholder="e.g. Anonymous, Anon, Christian…"
                            maxLength={40}
                            required
                            className="w-full bg-purple-950/60 border border-purple-700/60 rounded-xl px-4 py-3 text-white placeholder-purple-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/40 transition-all text-sm font-medium"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="font-label text-purple-300 text-xs uppercase tracking-widest font-bold block">
                            Your Message
                        </label>
                        <textarea
                            id="freedom-wall-content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="A prayer, a reflection, a thought you want to release to God…"
                            maxLength={400}
                            required
                            rows={4}
                            className="w-full bg-purple-950/60 border border-purple-700/60 rounded-lg px-4 py-3 text-white placeholder-purple-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/40 transition-all resize-none text-sm font-medium"
                        />
                        <p className="text-purple-600 text-xs text-right font-medium">
                            {content.length} / 400
                        </p>
                    </div>

                    {error && (
                        <p className="text-red-400 text-sm font-medium bg-red-900/20 border border-red-700/30 rounded-xl px-4 py-3">
                            {error}
                        </p>
                    )}

                    {success && (
                        <p className="text-emerald-400 text-sm font-medium bg-emerald-900/20 border border-emerald-700/30 rounded-xl px-4 py-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">check_circle</span>
                            Your message has been released. 🕊️
                        </p>
                    )}

                    <button
                        id="freedom-wall-submit"
                        type="submit"
                        disabled={submitting || !nickname.trim() || !content.trim()}
                        className="w-full bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-sm uppercase tracking-widest py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-purple-900/50 flex items-center justify-center gap-2"
                    >
                        {submitting ? (
                            <>
                                <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
                                Releasing…
                            </>
                        ) : (
                            <>
                                Release to the Wall
                            </>
                        )}
                    </button>
                </form>

                {/* Wall Grid */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="flex flex-col items-center gap-4 text-purple-400">
                            <span className="material-symbols-outlined text-4xl animate-spin">progress_activity</span>
                            <span className="font-label text-xs uppercase tracking-widest font-bold">
                                Loading the wall…
                            </span>
                        </div>
                    </div>
                ) : error ? (
                    <div className="text-center py-20">
                        <span className="material-symbols-outlined text-5xl mb-4 block text-red-500 opacity-60">error</span>
                        <p className="font-label text-xs uppercase tracking-widest font-bold text-red-400 mb-2">
                            Could not load messages
                        </p>
                        <p className="text-red-400/70 text-xs font-mono max-w-md mx-auto">{error}</p>
                        <button
                            onClick={() => fetchEntries()}
                            className="mt-6 text-purple-400 border border-purple-700 text-xs uppercase tracking-widest font-black px-6 py-2 rounded-full hover:bg-purple-900/40 transition-all"
                        >
                            Retry
                        </button>
                    </div>
                ) : entries.length === 0 ? (
                    <div className="text-center py-20 text-purple-500">
                        <span className="material-symbols-outlined text-5xl mb-4 block opacity-40">chat_bubble</span>
                        <p className="font-label text-xs uppercase tracking-widest font-bold">
                            Be the first to share on the Freedom Wall
                        </p>
                    </div>
                ) : (
                    <div ref={gridRef} className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {entries.map((entry, index) => {
                            return (
                                <div
                                    key={entry.id ?? index}
                                    className="break-inside-avoid bg-purple-900/30 backdrop-blur-sm border border-purple-800/50 rounded-2xl p-6 space-y-4 hover:-translate-y-1 hover:border-purple-600/60 transition-all duration-500 shadow-lg shadow-purple-950/40 group"
                                >

                                    {/* Content */}
                                    <p className="text-purple-100 text-base font-medium leading-relaxed italic">
                                        "{entry.content}"
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center gap-2 pt-2 border-t border-purple-800/40">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                        <span className="text-purple-300 text-xs uppercase tracking-widest font-black font-label">
                                            {entry.nickname}
                                        </span>
                                        {entry.created_at && (
                                            <span className="ml-auto text-purple-600 text-xs font-label font-bold">
                                                {timeAgo(entry.created_at)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default FreedomWall;
