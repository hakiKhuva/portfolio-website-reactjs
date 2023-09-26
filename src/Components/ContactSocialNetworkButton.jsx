export default function ContactSocialNetworkButton({children, to}){
    return (
        <a
            href={to}
            target="_blank"
            className="block text-2xl m-2 p-2 rounded border-2 border-zinc-700 hover:bg-zinc-800 hover:text-white transition"
        >
            {children}
        </a>
    )
}