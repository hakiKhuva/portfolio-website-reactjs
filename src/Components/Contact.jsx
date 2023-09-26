import Section from "./Section"
import ContactForm from "./ContactForm"
import ContactSocialNetworkButton from "./ContactSocialNetworkButton"
import { AiFillGithub } from "react-icons/ai"
import { BiLogoLinkedin } from "react-icons/bi"
import { RiTwitterXLine } from "react-icons/ri"
import { config } from "../config"
import SectionHeading from "./SectionHeading"


export default function Contact(){
    return(
        <Section sectionId="contact" classNames="bg-gradient-to-tl via-teal-200 from-emerald-300 to-sky-400 py-12 max-sm:p-2">
            <div className="w-full max-w-2xl bg-white/60 p-8 rounded shadow-lg max-sm:p-4 mt-6 mb-12">
                <SectionHeading text={"Contact"} />
                <div className="flex flex-wrap items-center mt-8">
                    {
                    config.connectLinks.github
                    &&
                    <ContactSocialNetworkButton to={config.connectLinks.github}> <AiFillGithub /> </ContactSocialNetworkButton>
                    }
                    {
                    config.connectLinks.linkedin
                    &&
                    <ContactSocialNetworkButton to={config.connectLinks.linkedin}> <BiLogoLinkedin /> </ContactSocialNetworkButton>
                    }
                    {
                    config.connectLinks.twitter
                    &&
                    <ContactSocialNetworkButton to={config.connectLinks.twitter}> <RiTwitterXLine className="p-1" /> </ContactSocialNetworkButton>
                    }
                </div>
                <hr className="h-[2px] w-full border-0 bg-black/20 my-2" />
                <ContactForm />
            </div>
        </Section>
    )
}