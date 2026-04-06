import React from 'react';

const References: React.FC = () => {
    const referencesList = [
        {
            text: "Carlson, A. M. (2023, March 27). The pursuit of perfectionism vs holiness in the Christian life. Catholic365.",
            url: "https://www.catholic365.com/article/27272/the-pursuit-of-perfectionism-vs-holiness-in-the-christian-life.html"
        },
        {
            text: "GotQuestions.org. (2024). What does the Bible say about perfectionism?",
            url: "https://www.gotquestions.org/Bible-perfectionism.html"
        },
        {
            text: "Curran, T., & Hill, A. P. (2019). Perfectionism is increasing over time: A meta-analysis of birth cohort differences from 1989 to 2016. Psychological Bulletin, 145(4), 410–429.",
            url: "https://doi.org/10.1037/bul0000138"
        },
        {
            text: "Geovani, L., & Aditya, Y. (2021). The influence of religious orientation on maladaptive perfectionism among perfectionist college students. Jurnal Psikologi Ulayat, 8(2), 330–342.",
            url: "https://doi.org/10.24854/jpu225"
        },
        {
            text: "Moroń, M., Biolik-Moroń, M., & Matuszewski, K. (2022). Scrupulosity in the network of obsessive-compulsive symptoms, religious struggles, and self-compassion: A study in a non-clinical sample. Religions, 13(10), 879.",
            url: "https://doi.org/10.3390/rel13100879"
        },
        {
            text: "National Youth Commission. (2015). National youth assessment study (NYAS) 2015. Republic of the Philippines.",
            url: "https://yptoolbox.unescapsdd.org/wp-content/uploads/2017/08/National-Youth-Assessment-Study.pdf"
        }
    ];

    return (
        <section id="references" className="py-32 px-6 bg-[#0a0214] border-t border-purple-900/40 relative">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <span className="font-label text-purple-400 font-bold tracking-[0.3em] uppercase text-xs block">References</span>
                    <h2 className="font-headline text-4xl md:text-6xl font-black text-white leading-[1.1]">Sources & Further Reading</h2>
                </div>
                
                <div className="space-y-6">
                    {referencesList.map((ref, i) => (
                        <div key={i} className="bg-purple-950 p-8 rounded-2xl shadow-sm border border-purple-800 hover:shadow-lg transition-shadow group">
                            <a 
                                href={ref.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-start gap-4"
                            >
                                <span className="material-symbols-outlined text-purple-600 group-hover:text-purple-400 transition-colors flex-shrink-0 mt-1">open_in_new</span>
                                <p className="text-purple-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                                    {ref.text}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default References;
