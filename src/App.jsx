import { useEffect, useState } from "react";
import Footer from "./Footer.jsx";
import Project from "./Project.jsx";

export default function App() {
    const [isLoading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("mockdata.json").then(res => res.json()).then(data => {
            setProjects(data.projects);
            setLoading(false);
            console.log(data);
        });
    }, []);

    return(
        <>
            <div className="flex">
                <section className="static h-screen w-[50%] bg-gray-400 flex flex-col justify-evenly py-10">
                    <div className="self-center">
                        <h3>Hi,</h3>
                        <h1>I'm Remy</h1>
                    </div> {/*Name*/}

                    <div className="ml-20"> {/*Table of Contents*/}
                        <p>About Me</p>
                        <p>Projects</p>
                        <p>Contacts</p>
                    </div>

                    <article className="flex gap-5 ml-20"> {/*Icons*/}
                        <a href="Resume.pdf" target="_blank" >
                            <img src="Document.svg" alt="Document Icon" className="w-10 h-10" />
                        </a>
                        <a href="https://github.com/Remy-Post/" target="_blank">
                            <img src="Github.svg" alt="Github Icon" className="w-10 h-10"/>
                        </a>
                        <a href="tel:+19053926023" target="_blank">
                            <img src="Phone.svg" alt="Phone Icon" className="w-10 h-10" />
                        </a>
                        <a href="mailto:remy.post.06@gmail.com" target="_blank">
                            <img src="Gmail.svg" alt="Gmail Icon" className="w-10 h-10" />
                        </a>
                    </article>
                </section>
                <section className="static h-screen w-[50%] bg-lime-200 py-10">
                    <div className="w-[90%] mx-auto">
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
                    </div> {/*About Me*/}
                    <div className="mt-10">
                        <h3 className="text-center font-bold text-2xl">Projects</h3>
                        {
                            isLoading == true ? <div>Loading...</div> : projects.map( ((project, index) => (
                                <Project key={index} {...project} />
                            )))
                        }
                    </div> {/*Projects*/}
                    <div></div> {/*Contacts*/}
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