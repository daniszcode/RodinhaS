import { MapPosition } from "../../Components/MapPosition/MapPosition";
import { ArrowIcon } from "../../Components/ArrowIcon/ArrowIcon"
import { Icon } from "../../Components/Icon/icon";
const Map = () => {
    return (
        <>   
        <body>
            <main>
                <header>
                    <div>
                        <ArrowIcon />
                    </div>
                    <div>
                        <Icon />
                        <h1>Como Chegar</h1>
                </div>
                </header>
                <section>
                <MapPosition  />
                </section>
                <footer>
                    <Icon />
                    <p>Indica sua localização</p>
                </footer>
            </main>
        </body>
        </>
    )
}

export { Map };