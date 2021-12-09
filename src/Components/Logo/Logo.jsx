import ImageOne from "../../Assets/girl-sit.svg"
import ImageTwo from "../../Assets/girl-map.svg"

const LogoImg = (props) => {
    return (
        <>
        <img className={props.imageGirlmap} src={ImageTwo} alt="girl with the map" />
        <img  className={props.imageGirlsit} src={ImageOne} alt="girl sitting in the wheelchair" />
        </>
    )
}

export {LogoImg}