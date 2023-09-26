export default function Section({children, classNames="", sectionId=""}){
    return (
        <section className={`snap-start snap-always p-4 `+classNames} id={sectionId}>
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                {children}
            </div>
        </section>
    )
}
