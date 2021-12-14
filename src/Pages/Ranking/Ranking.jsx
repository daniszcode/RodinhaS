import { ArrowIcon } from "../../Components/ArrowIcon/ArrowIcon";
import { Icon } from "../../Components/Icon/icon";
import { Req } from "../../Components/Req/Req";
import "./Ranking.css"

const Ranking = () => {
    return (
        <>
        <body className="container-ranking">
            <main className="container-main">
                <nav className="container-main--nav">
                    <ArrowIcon />
                </nav>
                <header className="container-main--header">
                    <div className="container-box--text">
                        <div className="container-box--icon" >
                        <Icon imageGirlInwheelchair="icon-container--header" />
                        <h1 className="ranking-box--h1" >Rankin<span className="span-h1-ranking" >g</span></h1>
                        </div>
                        <div className="container-text--h2" > 
                        <h2 className="ranking-box--h2" >Passeios acessiveis</h2>
                        </div>
                    </div>
                </header>
                <section className="container-main--section" >
                    <div ><Req /></div>
                    
                </section>
            </main>
        </body>
        </>
    )
}

export {Ranking};