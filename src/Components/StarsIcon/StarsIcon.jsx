import stars from "../../Assets/stars.svg"
const Stars = (props) => {
    return (
        <>
        <img className={props.ClassStar} src={stars} alt="icon-star" />
        <img className={props.ClassStar}  src={stars} alt="icon-star" />
        <img className={props.ClassStar}  src={stars} alt="icon-star" />
        <img className={props.ClassStar}  src={stars} alt="icon-star" />
        </>
    )
}

export {Stars}