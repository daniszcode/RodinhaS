import { MapPosition } from "../../Components/MapPosition/MapPosition";
import { ArrowIcon } from "../../Components/ArrowIcon/ArrowIcon"
const Map = () => {
    return (
        <>   
        <body>
            <main>
                <header>
                <div>
                    <div>
                        <ArrowIcon />
                    </div>
                </div>
                </header>
            </main>
        </body>
        <MapPosition  />
        </>
    )
}

export { Map };