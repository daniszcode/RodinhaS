import "./Button.css"

const ButtonPink = (props) => {
    return (
        <button className="button">{props.children}</button>
    )
}

export {ButtonPink}