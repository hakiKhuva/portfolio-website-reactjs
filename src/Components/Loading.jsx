import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading({text}){
    return(
        <div className="flex flex-col items-center m-2 p-2 ">
            <AiOutlineLoading3Quarters className="animate-spin m-0.5" width={20} height={20} />
            <span className="block m-0.5 font-lato">{text}</span>
        </div>
    )
}