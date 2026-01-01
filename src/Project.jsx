import {useState} from "react";

//Helper used to return a 'project element'
export default function Project({...params}){
    const [minusClicked, setMinusClicked] = useState(false);

    const colors = {
        gray: "text-[#586574]",
        yellow: "text-[#6C5F6F]",
        blue: "text-[#0B7285]",
        red: "text-[#D96C75]",
        orange: "text-[#D96C75]",
        main: "text-[#0B1724]",
        green: "text-[#0B7285]"

    }
    return(
        <div className={` ${minusClicked ? "p-5" : "p0 m-0"} rounded-4xl project`}>
            {/*Header*/}
            <div className="grid grid-cols-[25%_50%_25%]">
                <div className="w-full flex justify-start items-center">
                    <div className={`${minusClicked ? 'bg-[#0B7285]' : 'bg-[#0B7285] hover:cursor-pointer hover:bg-[#0B7285]/90'} w-7 h-7 rounded-[100%] group flex justify-center items-center`} onClick={() => setMinusClicked(!minusClicked)}>
                        { minusClicked ? <img src="./Icons/minus-icon.svg" alt="Minus Icon" className="w-4 rounded-4xl text-white bg-white"  />
                            :
                            <img src="./Icons/plus-icon.svg" alt="Plus Icon" className="w-4 rounded-4xl " />
                        }
                    </div>
                    <div className="bg-[#D96C75] w-7 h-7 rounded-4xl mx-3"><p className="hidden">HIDDEN</p></div>
                    <div className="bg-[#6C5F6F] w-7 h-7 rounded-4xl"><p className="hidden">HIDDEN</p></div>
                </div>
                <h3 className="text-2xl font-bold text-center self-center">{params.name}</h3>
                {/*Icon*/}
                <div className="flex justify-end">
                    <a href={params.githubLink} target="_blank">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20"
                             aria-hidden="true" className="h-8 w-8 self-end hover:cursor-pointer" height="1em" width="1em"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                                  clipRule="evenodd"></path>
                            <path fillRule="evenodd"
                                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
            {/*Body*/}
            {minusClicked ? (
                <div>
                    <hr className="text-[#0B7285] bg-[#0B1724] rounded-4xl h-[2px] px-3 my-2" />
                    <div>
                        <div> {/*Starting*/}
                            <span className={colors.red}>const</span>
                            <span className={colors.main}> project </span>
                            <span className={colors.red}>=</span>
                            <span className={colors.gray}>{' {'}</span>
                        </div>
                        <div className="mx-3.5"> {/* Name*/}
                            <span className={colors.main}>type:</span>
                            <span className={colors.gray}> '</span>
                            <span className={colors.blue}>{params.type}</span>
                            <span className={colors.yellow}>{params.name}</span>
                            <span className={colors.gray}>'</span>
                        </div>
                        <div className="mx-3.5"> {/* Tech Stack */}
                            <span className={colors.main}>Tools: </span>
                            <span className={colors.gray}>[</span>
                            <span className={colors.gray}>'</span>
                            {
                                params.techStack.map((t, index) => (
                                    <span key={index}>
                                <span key={index} className={colors.main}>{t}</span>
                                        {index < params.techStack.length - 1 && <span className={colors.gray}>, </span>}
                                        <span className={colors.gray}>'</span>
                            </span>
                                ))
                            }
                            <span className={colors.gray}>]</span>
                        </div>
                        <div className="mx-3.5"> {/*Role*/}
                            <span className={colors.main}>myRole: </span>
                            <span className={colors.orange}>{params.role}</span>
                        </div>
                        <div className="mx-3.5"> {/*Description*/}
                            <span className={colors.main}>Description: </span>
                            <span className={colors.blue}>{params.description}</span>
                            <span className={colors.gray}>,</span>
                        </div>
                        {params.hostingLink && <div className="mx-3.5">
                            <span className={colors.main}>Live link: </span>
                            <a href={params.hostingLink} target="_blank">
                                <span className="text-[#0B7285] underline underline-offset-2">{params.hostingLink}</span>
                            </a>
                        </div>}
                        {/*{params.githubLink && <div className="mx-3.5">*/}
                        {/*    <span className={colors.main}>Source: </span>*/}  {/*GITHUB LINK*/}
                        {/*    <a href={params.githubLink} target="_blank" className="text-blue-600 hover:underline">*/}
                        {/*        <span>{params.githubLink}</span>*/}
                        {/*    </a>*/}
                        {/*</div>}*/}
                        <div> {/*Ending*/}
                            <span className={colors.gray}>{"}"};</span>
                        </div>
                    </div>
                </div>

            ) : (
                <></>
            )}

            {/*Footer*/}
            <div>

            </div>
        </div>
    )
}
