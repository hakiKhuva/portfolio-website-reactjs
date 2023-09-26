import { LuMapPin } from "react-icons/lu";
import { config } from "../config";
import Section from "./Section";

export default function About(){
    return(
        <Section classNames="bg-gradient-to-br from-sky-300 to-green-300 text-black " sectionId="about">
            <div className="w-full max-w-3xl">
                <h1 className="text-5xl font-bold my-3 max-sm:text-3xl">Hello, I'm {config.name}</h1>
                <p className="text-2xl max-sm:text-xl my-5">{config.headline}</p>
                <div className="text-lg flex items-center">
                    <LuMapPin className="mr-0.5"/>
                    <span>{config.location}</span>
                </div>
                <div className="">
                    <a
                        href={config.resumeURL}
                        className="block w-max bg-white/80 px-4 py-3 rounded shadow my-5 hover:scale-110 hover:-translate-y-1 hover:translate-x-1 font-lato text-sm transition"
                        target="_blank"
                    >VIEW RESUME</a>
                </div>
            </div>
        </Section>
    )
}