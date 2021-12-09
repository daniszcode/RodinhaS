import { ArrowIcon } from "../../Components/ArrowIcon/ArrowIcon"
import { ButtonPink } from "../../Components/Button/Button"
import { LogoImg } from "../../Components/Logo/Logo"
import "./Home.css"

const Home = () => {
    return (
        <>
        <body>
            <main>
            <header>
                <div>
                <ArrowIcon />
                <LogoImg imageGirlmap="image-home--girlmap" imageGirlsit="image-home--girlsit"  />
                </div>
                <div>
                    <input type="text" name="" id="" />
                </div>
            </header>
            <section>
                <div>
                <ul>
                    <li>Foto api</li>
                    <li>Foto api</li>
                </ul>
                </div>
                <div>
                    <ButtonPink>Ver Ranking</ButtonPink>
                </div>
            
            </section>
            </main>
        </body>
        </>
    )
    
}

export {Home}