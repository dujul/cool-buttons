import Category from "./Category";
import React from "react";
import "./Card.css"


type CardProps = {
    category: string,
    desc?: string,
    children?: JSX.Element | JSX.Element[]
}
export default function Card(props: CardProps) {
    return <>
        <div className={"card"}>
            <Category name={props.category} className={"category"}>
                <div>{props.children}</div>
                <div className={"desc"}>{props.desc}</div>
            </Category>
        </div>
    </>
}