import React from "react";
import "./NeonButtonSign.css"

type NeonButtonSignProps = {
    children?: JSX.Element | JSX.Element[] | string,
    onClick?: () => void
}
export default function NeonButtonSign(props: NeonButtonSignProps) {
    return <button className={"neon-button"} onClick={() => props.onClick?.()}>
        {props.children || "Hello World!"}
    </button>
}