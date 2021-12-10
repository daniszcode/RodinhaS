import { ArrowIcon } from "../../Components/ArrowIcon/ArrowIcon";
import { LogoImg } from "../../Components/Logo/Logo";

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
                    <div><img src="" alt="" /></div>
                    <div></div>
                    <div></div>
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