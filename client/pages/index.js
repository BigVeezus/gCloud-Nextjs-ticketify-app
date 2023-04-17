import buildClient from "../api/build-client";

const Home = ({ currentUser }) => {
  // console.log(currentUser);
  // axios.get("api/users/currentuser");
  return (
    <>
      <title>Ticketify!</title>

      {/* <link rel="stylesheet" href="../public/index.css" /> */}
      <div>
        <div className="main">
          <section className="hero is-black is-fullheight">
            <div className="hero-head "></div>

            {/* Insert HERO HEADER HERE */}

            <div className="hero-body bg-img is-fluid">
              <div className="container has-text-centered">
                <p className="title bg-text">PURCHASE YOUR TICKETS NOW !</p>
                {currentUser ? (
                  <div>
                    <p className="subtitle">You are signed in</p>
                    <div className="control">
                      <button className="button is-dark">View tickets</button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="subtitle">You are not logged in</p>
                    <div className="control">
                      <a href="/auth/login">
                        <button className="button is-dark">Login</button>
                      </a>
                    </div>
                  </div>
                )}
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
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");

  return data;
};

export default Home;
