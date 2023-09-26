import { fetchRepositories } from "../utils";
import Project from "./Project";
import Section from "./Section";
import { useState, useEffect, useRef } from "react";
import Loading from "./Loading";
import SectionHeading from "./SectionHeading";


export default function Projects({username}){
    const [isLoading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [apiError, setApiError] = useState(null);
    const initialized = useRef(false);

    useEffect(()=>{
        if(!initialized.current){
            initialized.current = true;
            fetchRepositories({
                username: username
            })
            .then(
                repos => {
                    setProjects(repos)
                    setLoading(false)
                }
            ).catch(
                err => {
                    setApiError(err.toString().split(":")[1])
                    setLoading(false)
                }
            )
        }
    },[])

    return(
        <Section sectionId="projects" classNames={projects.length > 1 && 'pb-48 max-md:pb-72'}>
            <SectionHeading text={"Projects"} />
            {
                apiError && <div><p className="text-lg">!{apiError}</p></div>
            }
            {
                isLoading === true ?
                <Loading text={"Loading Projects"} />
                :
                <div className="grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-md:grid-cols-1 my-8">
                    {
                        projects.map(project => {
                            return <Project key={project.id} {...project} />
                        })
                    }
                </div>
            }
        </Section>
    )
}