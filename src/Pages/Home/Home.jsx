import { ArrowIcon } from "../../Components/ArrowIcon/ArrowIcon"
import { ButtonPink } from "../../Components/Button/Button"
import { LogoImg } from "../../Components/Logo/Logo"
import { UniqueReq } from "../../Components/Req/Req"
import "./Home.css"
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <>
        <body className="container-main">
            <main className="container-main---box">
            <header className="container-header---box" >
                <div className="box-header---image">
             <Link to="/"><ArrowIcon  /></Link>   
                <LogoImg imageGirlmap="image-home--girlmap" imageGirlsit="image-home--girlsit"  />
                </div>
                <div className="box-header---input">
                    <input className="box--input" type="text" name="" id="" placeholder="Digite o nome do local" />
                </div>
            </header>
            <section className="container-section---box">
                <div className="box-section---text">
                    <h1 className="box-text--logo">Sugestõe<span className="span-h1">s</span></h1>
                </div>
                <div className="box-section---list">
                <Link to="/map"> <UniqueReq /> </Link>
                </div>
            </section>
                <footer className="container-footer---box">
                <div className="box-footer---box">
                <Link to="/ranking"> <ButtonPink>Ver Ranking</ButtonPink></Link>
                </div>
                </footer>
            </main>
        </body>
        </>
    )
    
}

export {Home}