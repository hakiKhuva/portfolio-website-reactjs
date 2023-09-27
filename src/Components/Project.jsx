import { GoRepoForked } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { LuExternalLink } from "react-icons/lu";
import { AiOutlineGithub } from "react-icons/ai";
import FlexLink from "./FlexLink";


function ProjectItem({children}){
    return (
    <div className="flex flex-row items-center mx-2 first:ml-0 last:mr-0">
        {children}
    </div>
    )
}


function ProjectLanguageBox({text}){
    return(
        <span className="px-2 py-1 bg-gradient-to-br from-slate-600 to-zinc-900 rounded text-xs text-white">{text}</span>
    )
}


function ProjectLanguages({languages}){
    return(
        <div className="flex items-center flex-wrap gap-2">
            {
                languages.map(lang => <ProjectLanguageBox key={lang} text={lang} />)
            }
        </div>
    )
}


export default function Project({name, description, homepage, repoUrl, languages, stars, forks}){
    return(
        <div className="w-full flex flex-col bg-gradient-to-br shadow-lg from-cyan-100 via-lime-100 to-slate-100 p-4 rounded transition hover:scale-110 hover:drop-shadow-2xl hover:saturate-150 font-karla">
            <h3 className="text-2xl font-bold mt-2 mb-0.5">{name}</h3>
            <p className="my-2">{description}</p>

            <ProjectLanguages languages={languages}/>

            <div className="my-2">
                <div className="flex mt-2 mb-0.5">
                    <ProjectItem>
                        <AiOutlineStar className="block mx-0.5" />
                        <span className="text-sm">{stars}</span>
                    </ProjectItem>
                    <ProjectItem>
                        <GoRepoForked className="block mx-0.5" />
                        <span className="text-sm">{forks}</span>
                    </ProjectItem>
                </div>

                {
                    homepage
                    &&
                    <FlexLink iconElement={<LuExternalLink className="block mx-0.5 text-lg"/>} to={homepage} />
                }
                <FlexLink iconElement={<AiOutlineGithub className="block mx-0.5 text-xl" />} to={repoUrl} />
            </div>

        </div>
    )
}