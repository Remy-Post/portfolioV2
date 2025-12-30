import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import GitHubCalendar from "react-github-calendar";

export default function GitHub() {
    const [keyWords, setKeyWords] = useState([]);
    const [activeKeywordIndex, setActiveKeywordIndex] = useState(0);

    useEffect(() => {
        fetch("mockdata.json").then(res => res.json()).then(data => {
            setKeyWords(data.keyWords);
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
        <div className="grid grid-cols-[35%_65%] h-screen overflow-y-auto">
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
                        <NavItem href="/">About Me</NavItem>
                        <NavItem href="/">Projects</NavItem>
                        <NavItem href="/">Work Experience</NavItem>
                    </nav>
                </div>

                <article className="flex gap-5 ml-20">
                    <Link to="/">
                        <img src="./Icons/home-icon.svg" alt="Document Icon" className="w-10 h-10 icon" />
                    </Link>
                    <a href="https://github.com/Remy-Post/" target="_blank">
                        <img src="Github.svg" alt="Github Icon" className="w-10 h-10 icon"/>
                    </a>
                </article>
            </section>

            {/*-----------------------------------------*/} {/*Right Side*/}

            <section className="w-[99%] bg-[#FFFFFF] py-10">
                <div className="flex justify-evenly w-full mx-auto p-4 my-6"> {/*Title*/}
                    <h3 className="text-3xl font-bold">GitHub</h3>
                    <h3 className="text-2xl italic text-[#6C5F6F]">Remy-Post</h3>
                </div>
                <GitHubCalendar
                    username="Remy-Post"
                    theme="dark"
                    <
                />
            </section>
        </div>
    )
}

function NavItem({href, children}) {
    return (
        <Link
            to={href}
            className="relative w-max pl-8 p-3 py-2.5 text-xl font-medium transition-all duration-300 block -ml-[2px] outline-none border-transparent text-[#586574] hover:text-[#0B1724]"
        >
            {children}
        </Link>
    );
}
