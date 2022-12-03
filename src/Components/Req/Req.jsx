import { useEffect, useState } from "react";
import "./Req.css";

const Req = () => {
  const [local, setLocal] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/daniszcode/RodinhaS-Backend/db")
      .then((response) => response.json())
      .then((item) => setLocal(item.response))
      .catch((err) => console.log(err));
  }, [local]);

  return (
    <>
      <section className="container-section--req">
        {local.map(({ id, title, url }) => (
          <div className="container-ul--req">
            <img className="img--req" src={url} alt={title} />
            <h1 className="option--req" key={id}>
              {" "}
              {title}{" "}
            </h1>
          </div>
        ))}
      </section>
    </>
  );
};

const UniqueReq = () => {
  const [local, setLocal] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/daniszcode/RodinhaS-Backend/db")
      .then((response) => response.json())
      .then((item) => setLocal(item.response))
      .catch((err) => console.log(err));
  }, [local]);

  return (
    <>
      <section className="container-section--req">
        {local.map(
          ({ id, title, url }) =>
            id === 1 && (
              <div className="container-ul--req">
                <img className="img--req" src={url} alt={title} />
                <h1 className="option--req" key={id}>
                  {" "}
                  {title}{" "}
                </h1>
              </div>
            )
        )}
      </section>
    </>
  );
};
export { Req, UniqueReq };
