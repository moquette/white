/* eslint-disable jsx-a11y/anchor-is-valid */
export const Header = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.data.company.name}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="me-auto mb-2 mb-md-0 "></div>
            <ul className="navbar-nav d-flex">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
