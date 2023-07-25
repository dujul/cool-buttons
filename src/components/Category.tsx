type CategoryProps = {
    name: string,
    children: JSX.Element | JSX.Element[],
    className?: string
}

export default function Category(props: CategoryProps) {
    return <div className={props.className}>
        <div className={"category-title"}>{props.name}</div>
        <div>{props.children}</div>
    </div>
}