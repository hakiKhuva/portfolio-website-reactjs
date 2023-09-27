export default function FlexLink({iconElement, to, children}){
    return(
        <a href={to} className="max-w-full flex items-center my-3 w-max hover:underline focus:underline text-ellipsis overflow-hidden" target="_blank">
            {
                iconElement ?
                <>
                    <div>{iconElement}</div>
                    <span className="text-sm block overflow-hidden whitespace-nowrap text-ellipsis max-w-full">{to}</span>
                </>
                :
                children
            }
        </a>
    )
}