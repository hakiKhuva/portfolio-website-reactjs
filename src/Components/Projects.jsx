import { fetchRepositories } from "../utils";
import Project from "./Project";
import Section from "./Section";
import { useEffect, useRef, useReducer } from "react";
import Loading from "./Loading";
import SectionHeading from "./SectionHeading";
import useLocalStorage from "../hooks/useLocalStorage";

const ACTIONS = {
    API_SUCCESS: "api-success",
    API_ERROR: "api-error"
}

function reducer(state, action){
    switch(action.type){
        case ACTIONS.API_SUCCESS:
            return {
                isLoading: false,
                projects: action.data.projects,
                apiError: null
            }
        case ACTIONS.API_ERROR:
            return {
                isLoading: false,
                projects: [],
                apiError: action.error.message
            }
        default:
            return state
    }
}


export default function Projects({username}){
    const [ state, dispatch ] = useReducer(reducer, {
        isLoading: true,
        projects: [],
        apiError: null,
    })
    const [storage, setStorage] = useLocalStorage()
    const initialized = useRef(false);

    useEffect(()=>{
        if(!initialized.current){
            initialized.current = true;

            if(storage.lastUpdated === null || (storage.lastUpdated !== null && (Date.now() - storage.lastUpdated)/1000 >= 3600)){
                fetchRepositories({
                    username: username
                })
                .then(
                    repos => {
                        dispatch({
                            type: ACTIONS.API_SUCCESS,
                            data: {
                                projects: repos
                            }
                        })
                        setStorage({
                            projects: repos
                        })
                    }
                ).catch(
                    err => {
                        dispatch({
                            type: ACTIONS.API_ERROR,
                            error: {
                                message: err.toString().split(":").slice(1,).join(":")
                            }
                        })
                    }
                )
            } else {
                dispatch({
                    type: ACTIONS.API_SUCCESS,
                    data: {
                        projects: storage.projects
                    }
                })
            }
        }
    },[])

    return(
        <Section sectionId="projects" classNames={state.projects.length > 0 && 'pb-48 max-md:pb-72'}>
            <SectionHeading text={"Projects"} />
            {
                state.apiError && <div><p className="text-lg">!{state.apiError}</p></div>
            }
            {
                state.isLoading === true ?
                <Loading text={"Loading Projects"} />
                :
                <div className="grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-md:grid-cols-1 my-8">
                    {
                        state.projects.map(project => {
                            return <Project key={project.id} {...project} />
                        })
                    }
                </div>
            }
        </Section>
    )
}