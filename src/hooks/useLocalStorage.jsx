import { useEffect, useState } from "react";

function getDataFromStorage(){
    const stateInStorage = window.localStorage.getItem('currentState')
    if(stateInStorage){
        try {
            const data = JSON.parse(stateInStorage)
            if(typeof(data.lastUpdated) === "number"){
                return data;
            }
        } catch {}
    }
    return {
        lastUpdated: null,
    }
}

export default function useLocalStorage(){
    const [storageState, setStorageState] = useState(getDataFromStorage)

    useEffect(()=>{
        window.localStorage.setItem("currentState", JSON.stringify(storageState))
    },[storageState])

    return [storageState, function(data){
        setStorageState({
            ...data,
            lastUpdated: Date.now(),
        })
    }]
}