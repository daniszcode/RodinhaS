import ImageOne from "../../Assets/girl-sit.svg"
import ImageTwo from "../../Assets/girl-map.svg"
import "./Login.css"

const Login = () => {
    return (
        <>
        <body className="container-login"> 
            <main className="container-login--main">
                <header className="container-login--header">
                    <img className="image-login--girlmap" src={ImageTwo} alt="girl with the map" />
                    <img className="image-login--girlsit" src={ImageOne} alt="girl sitting in the wheelchair" />
                </header>
                <section className="container-section--text">
                    <div className="box-section--text">
                    <h1 className="box-text--logo">Rodinha</h1><span className="span-h1">s</span>
                    </div>
                    <div className="second-box-section--text">
                    <h2 className="box-text--login">Logi</h2><span className="span-h2">n</span>
                    </div>
                </section>
                <footer className="container-box--input">
                    <div className="box-input--user--pass">
                    <input className="input-user" type="text" name="user" id="user" placeholder="usuario"/>
                    <hr className="hr-input--user" />
                    <input className="input-password" type="text" name="password" id="password" placeholder="senha"/>
                    <hr className="hr-input--password" />
                    </div>
                    <div className="box-button--small" >
                    <small className="small-text">CADASTRE-SE</small>
                    <button className="container-box--button">Entrar</button>
                    </div>
                </footer>
            </main>
        </body>
        </>
    );
}


export {Login};