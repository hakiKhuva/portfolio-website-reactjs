export default function NavLink({ to, children }){
    return(
        <a
            href={to.startsWith("http") ? to : '#'+to }
            className="m-1 mx-4 font-lato hover:scale-105 hover:font-semibold transition duration-400"
        >
            {children}
        </a>
    )
}