const Header = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <nav className="navbar is-black">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="https://bulma.io/images/bulma-type-white.png"
              alt="Logo"
            />
          </a>
          <span className="navbar-burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active" href="/">
              Home
            </a>
            <a className="navbar-item">Tickets</a>
            <a className="navbar-item">Contact Us</a>
            {currentUser ? (
              <a className="navbar-item" href="/auth/logout">
                Log Out
              </a>
            ) : (
              <a className="navbar-item" href="/auth/signup">
                Sign Up
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
