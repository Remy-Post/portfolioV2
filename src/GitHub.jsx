import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import Project from "./Project.jsx";


import  {GitHubCalendar} from "react-github-calendar";

export default function GitHub() {
    const [isLoading, setLoading] = useState(true);
    const [keyWords, setKeyWords] = useState([]);
    const [activeKeywordIndex, setActiveKeywordIndex] = useState(0);
    const [projects, setProjects] = useState([]);

    const { ref : githubRef, inView : isGithubInView } = useInView();
    const { ref : projectsRef, inView : isProjectsInView } = useInView();

    useEffect(() => {
        fetch("mockdata.json").then(res => res.json()).then(data => {
            setKeyWords(data.keyWords);
            setProjects(data.projects);

            setLoading(false);
        })
            .catch(error => console.error("Error fetching data:", error));
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
                        <NavItem href="#github" isActive={isGithubInView}>GitHub Calendar</NavItem>
                        <NavItem href="#projects" isActive={isProjectsInView}>Projects</NavItem>
                    </nav>
                </div>

                <article className="flex gap-5 items-center ml-15">
                    <Link to="/" target="_blank" className={`relative w-max pl-8 p-3 py-2.5 text-xl font-medium transition-all duration-300 block -ml-[2px] outline-none border-transparent text-[#586574] hover:text-[#0B1724]`}>
                        <img src="./Icons/home-icon.svg" alt="Document Icon" className="w-10 h-10 icon" />
                    </Link>
                    <a href="https://github.com/Remy-Post/" target="_blank">
                        <img src="./Icons/Github.svg" alt="Github Icon" className="w-10 h-10 icon"/>
                    </a>
                </article>
            </section>

            {/*-----------------------------------------*/} {/*Right Side*/}

            <section className="w-[99%] bg-[#FFFFFF] py-10">
                <div ref={githubRef} id="github">
                    <div className="flex justify-evenly w-full mx-auto p-4 my-6"> {/*Title*/}
                        <h3 className="text-3xl font-bold">GitHub</h3>
                        <h3 className="text-2xl italic text-[#6C5F6F]">Remy-Post</h3>
                    </div> {/*Title*/}
                        <div className="w-full mx-10">
                        <GitHubCalendar
                            username="Remy-Post"
                            className="w-full h-full"
                            colorScheme="light"
                        />
                    </div> {/*Github Calendar*/}
                    </div>
                <div ref={projectsRef} id="projects">
                    <h3 className="text-4xl font-bold mt-20 ml-13">Projects</h3>
                    {
                        isLoading == true ? <div>Loading...</div> : projects.map( ((project, index) => (
                            <div key={index} className="p-4 m-6 bg-[#FFFFFF] rounded-4xl project hover:bg-gray-500/1">
                                <Project {...project} />
                            </div>
                        )))
                    }
                </div> {/*Projects*/}
            </section>
        </div>
    )
}

function NavItem({href, isActive, children }) {
    return (
        <a
            href={href}
            className={`
        relative w-max pl-8 p-3 py-2.5 text-xl font-medium transition-all duration-300 block
        -ml-[2px] /* Negative margin pulls it on top of the parent border */
        outline-none /* Removes the outline */ 
        border-transparent
        ${isActive
                ? "ml-3.5 scale-[1.1] underline underline-offset-2"  /* Active State styles */
                : "border-transparent text-[#586574] hover:text-[#0B1724]"} 
      `}
            >
            {children}
        </a>
    );
}