import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

import Footer from "./Footer.jsx";
import Work from "./Work.jsx";
import Project from "./Project.jsx";
import Language from "./Lauguage.jsx";

export default function App() {

    const [isLoading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [work, setWork] = useState([]);
    const [techStacks, setTechStacks] = useState([]);

    const { ref: aboutMeRef, inView: aboutMeInView } = useInView();
    const { ref: projectRef, inView: projectInView } = useInView();
    const { ref: workRef, inView: workInView } = useInView();

    console.log("About me Ref:", aboutMeInView)
    console.log("Project Ref: ",projectInView);
    console.log("Work Ref: ",workInView);

    useEffect(() => {
        fetch("mockdata.json").then(res => res.json()).then(data => {
            setProjects(data.projects);
            setWork(data.work);
            setTechStacks(data.techStacks);
            setLoading(false);
            console.log(data);
        });
    }, []);

    return(
        <>
            <div className="flex h-screen overflow-hidden ">
                <section className="w-[50%] bg-gray-400 flex flex-col justify-evenly py-10">
                    <div className="ml-20">
                        <h3 className="text-3xl">Hi,</h3>
                        <h1 className="text-4xl font-bold">I'm Remy</h1>
                    </div> {/*Name*/}

                    <div className="ml-20">
                        <nav className="flex flex-col border-l-2 border-gray-300">
                            <NavItem href="#about" isActive={aboutMeInView} >About Me</NavItem>
                            <NavItem href="#projects" isActive={projectInView && !aboutMeInView}>Projects</NavItem>
                            <NavItem href="#work" isActive={workInView && !projectInView && !aboutMeInView}>Work Experience </NavItem>
                        </nav>
                    </div>

                    <article className="flex gap-5 ml-20"> {/*Icons*/}
                        <a href="Resume.pdf" target="_blank" >
                            <img src="Document.svg" alt="Document Icon" className="w-10 h-10 icon" />
                        </a>
                        <a href="https://github.com/Remy-Post/" target="_blank">
                            <img src="Github.svg" alt="Github Icon" className="w-10 h-10 icon"/>
                        </a>
                        <a href="tel:+19053926023" target="_blank">
                            <img src="Phone.svg" alt="Phone Icon" className="w-10 h-10 icon" />
                        </a>
                        <a href="mailto:remy.post.06@gmail.com" target="_blank">
                            <img src="Gmail.svg" alt="Gmail Icon" className="w-10 h-10 icon" />
                        </a>
                    </article>
                </section>

                {/*-----------------------------------------*/} {/*Switching Sides*/}

                <section className="overflow-y-auto w-[50%] bg-lime-200 py-10">
                    <div className="w-[90%] mx-auto" id="#about" ref={aboutMeRef}>
                        <h3 className="font-bold text-2xl text-center">About Me</h3>
                        <TextHolder>
                            <span className="text-xl">I</span> am currently a second-year student concurrently pursuing an Honours Bachelor of Science in Computer Science at Lakehead University and a Computer Programmer diploma at Georgian College.
                        </TextHolder>
                        <TextHolder>
                            <span className="text-xl">M</span>y technical expertise lies in building scalable, user-friendly full-stack applications. I specialize in the React ecosystem (including Next.js and Redux), Python automation, and ASP.NET Core.
                        </TextHolder>
                        <TextHolder>
                            <span className="text-xl">B</span>eyond the screen, I value leadership and community building. I've honed my communication and organizational skills serving as VP of Communications for the Georgian College Residence Student Council and as a Camp Counsellor.
                        </TextHolder>
                        <TextHolder>
                            <span className="text-xl">W</span>hen I'm not coding, you can find me analyzing movies, strategizing over board games, or relaxing with video games.
                        </TextHolder>

                        <div className="mt-5 overflow-hidden">
                            <div className="carousel-track">
                                {
                                    isLoading == true ? <div>Loading...</div> : (
                                        <>
                                            {techStacks.map((techStack, index) => (
                                                <div key={index} className="shrink-0 rounded-2xl bg-gray-100 p-2">
                                                    <Language name={techStack.name} image={techStack.image} />
                                                </div>
                                            ))}
                                            {/* Duplicate for seamless loop */}
                                            {techStacks.map((techStack, index) => (
                                                <div key={`dup-${index}`} className="shrink-0 rounded-2xl bg-gray-100 p-2">
                                                    <Language name={techStack.name} image={techStack.image} />
                                                </div>
                                            ))}
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div> {/*About Me*/}
                    <div className="mt-10" id="#projects" ref={projectRef}>
                        <h3 className="text-center font-bold text-2xl">Projects</h3>
                        <div className="projectContainer">
                        {
                            isLoading == true ? <div>Loading...</div> : projects.map( ((project, index) => (
                                <div key={index} className="p-4 m-6 bg-gray-100 rounded-4xl project">
                                    <Project {...project} />
                                </div>
                            )))
                        }
                        </div>
                    </div> {/*Projects*/}
                    <div ref={workRef} id="work"> {/*Work*/}
                        {
                            isLoading == true ? <div>Loading...</div> : work.map( ((work, index) => (
                                <div key={index} className="p-4 mb-8 bg-rose-400/65 rounded-xl project w-[60%] hover:w-[90%] group mx-auto transition-all duration-300 ease-in-out">
                                    <Work
                                        date={work.date}
                                        company={work.company}
                                        position={work.position}
                                        descriptionArray={work.descriptionArray}
                                        css={work.css} />
                                </div>
                            )))
                        }

                    </div>
                </section>
            </div>
        </>
    )
}

function TextHolder({children}){
    return(
        <p className="my-3 rounded">{children}</p>
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
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400"} 
      `}
        >
            {children}
        </a>
    );
}