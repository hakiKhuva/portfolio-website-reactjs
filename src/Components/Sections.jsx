import "./Sections.css"

export default function Sections({children}){
    return(
        <article className="flex flex-col snap-y snap-mandatory overflow-auto min-h-screen h-screen scroll-smooth z-10 bg-gradient-to-br from-teal-100 via-emerald-200 to-cyan-300 no-scrollbar">
            {children}
        </article>
    )
}