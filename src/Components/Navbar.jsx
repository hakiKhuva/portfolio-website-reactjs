import NavLink from "./NavLink";

export default function Navbar(){
    return(
        <nav className="fixed bottom-0 left-0 right-0 w-max mx-auto my-3 rounded-full shadow-teal-400 shadow-sm flex flex-row p-4 z-50 bg-white">
            <NavLink to={"about"}>About</NavLink>
            <NavLink to={"projects"}>Projects</NavLink>
            <NavLink to={"contact"}>Contact</NavLink>
        </nav>
    )
}