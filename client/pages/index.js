import axios from "axios";
import buildClient from "../api/build-client";

const Home = ({ currentUser }) => {
  console.log(currentUser);
  // axios.get("api/users/currentuser");
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Ticketify!</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      {/* <link rel="stylesheet" href="../public/index.css" /> */}
      <div>
        <div className="main">
          <section className="hero is-black is-fullheight">
            <div className="hero-head ">
              <nav className="navbar">
                <div className="container">
                  <div className="navbar-brand">
                    <a className="navbar-item">
                      <img
                        src="https://bulma.io/images/bulma-type-white.png"
                        alt="Logo"
                      />
                    </a>
                    <span
                      className="navbar-burger"
                      data-target="navbarMenuHeroB"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div id="navbarMenuHeroB" className="navbar-menu">
                    <div className="navbar-end">
                      <a className="navbar-item is-active">Home</a>
                      <a className="navbar-item">Tickets</a>
                      <a className="navbar-item">Contact Us</a>
                      <span className="navbar-item">
                        <a
                          className="button is-dark is-inverted"
                          href="/auth/signup"
                        >
                          <span>Sign Up</span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            {/* Insert HERO HEADER HERE */}

            <div className="hero-body bg-img is-fluid">
              <div className="container has-text-centered">
                <p className="title bg-text">PURCHASE YOUR TICKETS NOW</p>
                <p className="subtitle">Subtitle</p>
              </div>
            </div>
            <div className="hero-foot">
              <nav className="tabs is-boxed is-fullwidth">
                <div className="container">
                  <ul>
                    <li className="is-active">
                      <a>Overview</a>
                    </li>
                    <li>
                      <a>Modifiers</a>
                    </li>
                    <li>
                      <a>Grid</a>
                    </li>
                    <li>
                      <a>Elements</a>
                    </li>
                    <li>
                      <a>Components</a>
                    </li>
                    <li>
                      <a>Layout</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
Home.getInitialProps = async (context) => {
  const { data } = await buildClient(context).get("/api/users/currentuser");
  return data;
};

export default Home;
