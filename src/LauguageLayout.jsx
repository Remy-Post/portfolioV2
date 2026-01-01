import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Project from "./Project";

export default function LauguageLayout(){

    const { id } = useParams(); //Fetchings the dynamic route parameter, returns type object

    const [keyWords, setKeyWords] = useState([]);
    const [language, setLanguage] = useState(null);
    const [activeKeywordIndex, setActiveKeywordIndex] = useState(0);
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch("mockdata.json")
            .then(res => res.json())
            .then(data => {
                setKeyWords(data.keyWords ?? []);


                const match = (data.techStacks ?? []) //Sees if it is a techStack
                    .find((tech) => tech.name.toLowerCase() === id); //Finds the first techStack that matches the id, if exists
                setLanguage(match ?? []);

                const allProjects = (data.projects ?? []) //Sees if it is a project
                    .filter((p) => p.techStack.map((tech) => tech.toLowerCase()).includes(id)); //Filters the projects that match the techStack
                setProjects(allProjects);

                setIsLoading(false);
                return data;
            })
            .catch(() => {
                setKeyWords([]);
                setLanguage(null);
            });
    }, [id]);

    useEffect(() => {
        if (!keyWords || keyWords.length === 0) return;

        const intervalId = window.setInterval(() => {
            setActiveKeywordIndex((prev) => (prev + 1) % keyWords.length);
        }, 2400);

        return () => window.clearInterval(intervalId);
    }, [keyWords]);

    return(
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
                        <a href="#language" className="relative w-max pl-8 p-3 py-2.5 text-xl font-medium transition-all duration-300 block -ml-[2px] outline-none border-transparent text-[#586574] hover:text-[#0B1724]">Overview</a>
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

            <section className="w-[99%] bg-[#FFFFFF] py-10">
                <div id="language" className="w-full flex justify-evenly items-center">
                    <h3 className="text-center font-bold text-4xl m-5">{language?.name}</h3>
                    <img src={language?.image} alt="Language Icon" className="w-20 h-20" />
                    <p className="text-2xl">{language?.proficiency}</p>
                </div> {/*Title*/}
                {language?.description && (
                    <div className="w-9/10 mt-5 mx-auto flex justify-evenly items-center">
                        {
                            language?.description.map((d, index) => (
                                <p key={index} className="text-xl text-center mb-5">{d}</p>
                            ))
                        }
                    </div>)} {/*Description*/}
                <div className="w-9/10 mt-5 mx-auto">
                    <h3 className="ml-3 mb-8 underline underline-offset-2 text-3xl font-bold">Projects</h3>
                    { projects && projects.map((p, index) => (
                            <Project key={index} {...p} />
                        ))
                    }
                </div> {/*Projects*/}
            </section>
        </div>
    )
}

function Item({children}){
    return(
        <div >
            {children}
        </div>
    )
}