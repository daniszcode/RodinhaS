import { ArrowIcon } from "../../Components/ArrowIcon/ArrowIcon";
import { Icon } from "../../Components/Icon/icon";
import { LogoImg } from "../../Components/Logo/Logo";
import { Stars } from "../../Components/StarsIcon/StarsIcon";

const Ranking = () => {
    return (
        <>
        <body className="container-login">
            <main className="container-main">
                <nav className="container-main--nav">
                    <ArrowIcon />
                </nav>
                <header className="container-main--header">
                    <div className="container-box--text">
                        <div className="container-box--icon" >
                        <Icon />
                        </div>
                        <div className="container-text" > </div>
                        <h1>Rankin<span className="span-h1" >g</span></h1>
                        <h2>Passeios acessiveis</h2>
                    </div>
                </header>
                <section className="container-main--section" >
                    <div className="container-box--section"><Icon /><Stars />  </div>
                    <div className="container-box--section"><Icon /><Stars />  </div>
                    <div className="container-box--section"><Icon /><Stars />  </div>
                </section>
                <footer className="container-main--footer" >
                <LogoImg imageGirlmap="image-home--girlmap" imageGirlsit="image-home--girlsit" />
                </footer>
            </main>
        </body>
        </>
    )
}

export {Ranking};