import { ArrowIcon } from "../../Components/ArrowIcon/ArrowIcon";
import { Icon } from "../../Components/Icon/icon";
import { LogoImg } from "../../Components/Logo/Logo";
import { Stars } from "../../Components/StarsIcon/StarsIcon";

const Ranking = () => {
    return (
        <>
        <body>
            <h1>Ranking</h1>
            <main>
                <nav>
                    <ArrowIcon />
                </nav>
                <header>
                    <div>
                        <img src="" alt="" />
                        <h1>Rankin<span className="span-h1" >g</span></h1>
                        <h2>Passeios acessiveis</h2>
                    </div>
                </header>
                <section>
                    <div><Icon /><Stars />  </div>
                    <div><Icon /><Stars />  </div>
                    <div><Icon /><Stars />  </div>
                </section>
                <footer>
                <LogoImg imageGirlmap="image-home--girlmap" imageGirlsit="image-home--girlsit" />
                </footer>
            </main>
        </body>
        </>
    )
}

export {Ranking};