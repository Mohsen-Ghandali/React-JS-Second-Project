import { Component } from "react";

import image1 from "../img/0000.jpg";
import image2 from "../img/nike.jpg";
import cart from "../img/cart.png";
import logo from "../img/nike-logo.png";
import instagram from "../img/instagram-svgrepo-com.png";
import facebook from "../img/facebook-svgrepo-com.png";
import twitter from "../img/twitter-svgrepo-com.png";
import youtube from "../img/youtube-svgrepo-com.png";
import Product from "./productBtn";

class Schuhe extends Component {
  state = {};
  render() {
    const haus = <a href="/index.html">Haus</a>;
    const produkte = <a href="/produkte.html">Produkte</a>;
    const uberUns = <a href="/uberUns.html">Über uns</a>;

    return (
      <>
        <header>
          <img src={logo} alt={"logo"} />
          <h1>JUST DO IT.</h1>
          <img src={cart} alt={"cart"} />
        </header>
        <main>
          <nav>
            <ul>
              <li>{haus}</li>
              <li>{produkte}</li>
              <li>{uberUns}</li>
            </ul>
          </nav>

          <section className="product">
            <nav>
              <ul>
                <li>{haus}</li>
                <li>{produkte}</li>
                <li>{uberUns}</li>
              </ul>
            </nav>
            <div>
              <div className="image">
                <img src={image2} alt={"nike-schuh"} />
              </div>

              <div className="prd">
                <h1>Nike Air</h1>
                <Product />
              </div>
            </div>

            <div>
              <div className="image">
                <img src={image1} alt={"nike-schuh"} />
              </div>

              <div className="prd">
                <h1>Nike Schuh</h1>
                <Product />
              </div>
            </div>
          </section>
        </main>
        <footer>
          <img src={instagram} alt={"instagram"} />
          <img src={facebook} alt={"facebook"} />
          <img src={twitter} alt={"twitter"} />
          <img src={youtube} alt={"youtube"} />
          <div>&copy;2023 WebEntwickler und Designer Mohsen Ghandali</div>
        </footer>
      </>
    );
  }
}

export default Schuhe;
