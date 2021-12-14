import { MapPosition } from "../../Components/MapPosition/MapPosition";
import { ArrowIcon } from "../../Components/ArrowIcon/ArrowIcon"
import { Icon } from "../../Components/Icon/icon";
import "./Map.css"
const Map = () => {
    return (
        <>   
        <body className="container-map">
            <main className="container-main--map">
                <header className="container-header--map">
                    <div className="box-header--map">
                        <ArrowIcon />
                    </div>
                    <div className="box-header">
                        <Icon imageGirlInwheelchair="box-header--iconGirl" />
                        <h1 className="box-header--text">Com<span className="box-header--span">o</span> Chega<span className="box-header--span">r</span></h1>
                    </div>
                </header>
                <section className="container-section--map">
                    <MapPosition  />
                </section>
                <footer className="container-footer--map">
                    <Icon />
                    <p className="box-header--paragraph">Indica sua localização</p>
                </footer>
            </main>
        </body>
        </>
    )
}

export { Map };