
import Footer from "./Footer.jsx";

export default function App() {
    return(
        <>
            <div className="flex">
                <section className="static h-[90vh] w-[50%] bg-gray-400">
                    <div>
                        <h3>Hi,</h3>
                        <h1>I'm Remy</h1>
                    </div> {/*Name*/}

                    <div> {/*Table of Contents*/}
                        <p>About Me</p>
                        <p>Projects</p>
                        <p>Contacts</p>
                    </div>

                    <article> {/*Icons*/}
                        <div></div>
                    </article>
                </section>
                <section className="static h-[90vh] w-[50%] bg-lime-200">
                    <div></div> {/*About Me*/}
                    <div></div> {/*Projects*/}
                    <div></div> {/*Contacts*/}
                </section>
            </div>
        </>
    )
}