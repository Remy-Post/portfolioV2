import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Resume() {
    const [keyWords, setKeyWords] = useState([]);
    const [activeKeywordIndex, setActiveKeywordIndex] = useState(0);

    useEffect(() => {
        fetch("mockdata.json")
            .then(res => res.json())
            .then(data => {
                setKeyWords(data.keyWords ?? []);
            })
            .catch(() => {
                setKeyWords([]);
            });
    }, []);

    useEffect(() => {
        if (!keyWords || keyWords.length === 0) return;

        const intervalId = window.setInterval(() => {
            setActiveKeywordIndex((prev) => (prev + 1) % keyWords.length);
        }, 2400);

        return () => window.clearInterval(intervalId);
    }, [keyWords]);

    return (
        <div className="grid grid-cols-[35%_65%] h-screen overflow-y-auto overflow-x-hidden">
            <section className="w-full h-screen sticky top-0 left-0 bg-[#F6F8FA] flex flex-col justify-evenly py-10">
                <div className="ml-20">
                    <h3 className="text-3xl">Hi,</h3>
                    <h1 className="text-4xl font-bold">I'm Remy</h1>
                    <p className="text-xl flex w-max" aria-live="polite">
                        {keyWords.length > 0 && (
                            <span key={activeKeywordIndex} className="inline-block keyword-rotate self-end">
                                {keyWords[activeKeywordIndex]}
                            </span>
                        )}
                    </p>
                </div>

                <div className="ml-20">
                    <nav className="flex flex-col border-l-2">
                        <a href="#resume" className="relative w-max pl-8 p-3 py-2.5 text-xl font-medium transition-all duration-300 block -ml-[2px] outline-none border-transparent text-[#586574] hover:text-[#0B1724]">Resume</a>
                    </nav>
                </div>

                <article className="flex gap-5 ml-20">
                    <Link to="/" className="relative w-max pl-8 p-3 py-2.5 text-xl font-medium transition-all duration-300 block -ml-[2px] outline-none border-transparent text-[#586574] hover:text-[#0B1724]">
                        <img src="./Icons/home-icon.svg" alt="Home Icon" className="w-10 h-10 icon" />
                    </Link>
                    <Link to="/github" className="relative w-max pl-8 p-3 py-2.5 text-xl font-medium transition-all duration-300 block -ml-[2px] outline-none border-transparent text-[#586574] hover:text-[#0B1724]">
                        <img src="./Icons/github-icon.svg" alt="Github Icon" className="w-10 h-10 icon" />
                    </Link>
                </article>
            </section>

            <section className="w-[99%] bg-[#FFFFFF] py-10 flex flex-col items-center">
                <div id="resume" className="w-9/10 h-9/10 flex flex-col items-center">
                    <h3 className="text-center font-bold text-4xl mb-6 text-[#0B1724]">My Resume</h3>
                    <iframe
                        src="Resume.pdf"
                        title="Resume"
                        className="w-full h-screen border-2 border-[#6C5F6F]/25 rounded-2xl"
                    />
                </div>
                <div className="mt-6">
                    <a
                        href="Resume.pdf"
                        download="Remy_Post_Resume.pdf"
                        className="px-8 py-3 bg-[#0B7285] text-white font-medium text-xl rounded-xl hover:bg-[#0B7285]/90 transition-all duration-300"
                    >
                        Download Resume
                    </a>
                </div>
            </section>
        </div>
    )
}
