import { ArrowIcon } from "../../Components/ArrowIcon/ArrowIcon";
import { Icon } from "../../Components/Icon/icon";
import { Req } from "../../Components/Req/Req";
import "./Ranking.css";
import { Link } from "react-router-dom";

const Ranking = () => {
  return (
    <>
      <body className="container-ranking">
        <main className="container-main">
          <div className="container-main--nav">
            <ArrowIcon />
          </div>
          <header className="container-main--header">
            <div className="container-box--text">
              <div className="container-box--icon">
                <Link to="/home">
                  {" "}
                  <Icon imageGirlInwheelchair="icon-container--header" />
                </Link>
                <h1 className="ranking-box--h1">
                  Rankin<span className="span-h1-ranking">g</span>
                </h1>
              </div>
              <div className="container-text--h2">
                <h2 className="ranking-box--h2">Passeios acessiveis</h2>
              </div>
            </div>
          </header>
          <section className="container-main--section">
            <Link to="/map">
              {" "}
              <div>
                <Req />
              </div>{" "}
            </Link>
          </section>
        </main>
      </body>
    </>
  );
};

export { Ranking };
