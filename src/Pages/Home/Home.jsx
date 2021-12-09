import { ArrowIcon } from "../../Components/ArrowIcon/ArrowIcon"
import { ButtonPink } from "../../Components/Button/Button"
import { LogoImg } from "../../Components/Logo/Logo"
import "./Home.css"

const Home = () => {
    return (
        <>
        <body className="container-main">
            <main className="container-main---box">
            <header className="container-header---box" >
                <div>
                <ArrowIcon />
                <LogoImg imageGirlmap="image-home--girlmap" imageGirlsit="image-home--girlsit"  />
                </div>
                <div>
                    <input type="text" name="" id="" placeholder="Digite o nome do local" />
                </div>
            </header>
            <section className="container-section---box">
                <div className="box-section---text">
                    <h1 className="box-text--logo">Sugestõe<span className="span-h1">s</span></h1>
                </div>
                <div className="box-section---list">
                <ul className="box-section---ul">
                    <li className="box-li---option">Foto api</li>
                    <li className="box-li---option">Foto api</li>
                </ul>
                </div>
            </section>
                <footer className="container-footer---box">
                <div className="box-footer---box">
                    <ButtonPink>Ver Ranking</ButtonPink>
                </div>
                </footer>
            </main>
        </body>
        </>
    )
    
}

export {Home}