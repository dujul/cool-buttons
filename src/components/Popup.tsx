import "./Popup.css"
import NeonButtonSign from "./buttons/NeonButtonSign";
import {useEffect, useState} from "react";


type PopupProps = {
    toggle: boolean
}

export default function Popup(props: PopupProps) {
    const [open, setOpen] = useState(false);
    const [invokeCounter, setInvokeCounter] = useState(0);
    useEffect(() => {
        setInvokeCounter(invokeCounter+1)
        if (invokeCounter < 1) {
            return;
        }
        setOpen(true)
    }, [props.toggle])
    return <>
        <div className={"popup-background " + (open? "shown" : "")}>
            <div className={"popup-background-click"} onClick={() => setOpen(false)}></div>
            <div className={"popup-frame"}>
                Hey Testnachricht
                <NeonButtonSign onClick={() => setOpen(false)}>Close</NeonButtonSign>
            </div>
        </div>
    </>
}