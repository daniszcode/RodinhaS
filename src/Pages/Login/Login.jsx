import "./Login.css"
import { ButtonPink } from "../../Components/Button/Button"
import { LogoImg } from "../../Components/Logo/Logo"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
        <body className="container-login"> 
            <main className="container-login--main">
                <header className="container-login--header">
                   <LogoImg imageGirlmap="image-login--girlmap" imageGirlsit="image-login--girlsit" />
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
                    <small className="small-text">cadastre-se</small>
                 <Link to="/home"><ButtonPink>Entrar</ButtonPink> </Link>   
                    </div>
                </footer>
            </main>
        </body>
        </>
    );
}


export {Login};