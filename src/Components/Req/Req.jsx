import { useEffect, useState } from "react"
import "./Req.css"
import { Stars } from "../../Components/StarsIcon/StarsIcon";
import { Icon } from "../../Components/Icon/icon";

const Req = () => {

    const [local, setLocal] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/daniszcode/RodinhaS-Backend/db').then(response => response.json()).then(item => setLocal(item.response)).catch(err => console.log(err));
        
    }, [local] )
    
   
    return (
        <>
        <section>
            {local.map(({ id, title, url }) => 
                <ul className="container-ul--req">
                    <li className="option--req" key={id}>
                    {title}
                    </li>
                    <img className="img--req"  src={url} alt={title} /> 
                    <div >
                        <Icon imageGirlInwheelchair="icon-container--section"  /><Stars ClassStar="StarIconClass"/>
                        </div>
                </ul>
            )}
        </section>
        </>
    )
}

const UniqueReq = () => {
    const [local, setLocal] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/daniszcode/RodinhaS-Backend/db').then(response => response.json()).then(item => setLocal(item.response)).catch(err => console.log(err));
        
    }, [local] )
    
   
    return (
        <>
        <section className="container-section--req">
            {local.map(({ id, title, url }) => id === 1 &&
                <ul className="container-ul--req">
                    <li className="option--req" key={id}>
                    {title}
                    </li>
                    <img className="img--req"  src={url} alt={title} />
                </ul>
            )}
        </section>
        </>
    )
}
export {Req, UniqueReq}