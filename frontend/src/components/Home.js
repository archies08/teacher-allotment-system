const Home = () => {
  return (
    <>
      <body>
        <nav class="navbar navbar-dark bg-dark">
          <div className="text-white">
            <h1>Apni Shala Foundation</h1>
          </div>
          <div class="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="/images/APNI.jpg"
                alt=""
                width="100"
                height="100"
                class="d-inline-block align-text-top"
              />
            </a>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.apnishala.org/contact-us.html"
              >
                Write to us
              </a>
            </li>
          </div>
        </nav>
        <div className="container my-4 ">
          <div className="row mb-2 ">
            <div className="col-md-6">
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <h3 className="mb-0">About Us</h3>
                  <div className="mb-1 text-muted">Our Vision</div>
                  <p className="card-text mb-auto">
                    Let's know what we stand for!
                  </p>
                  <a
                    href="https://www.apnishala.org/what-we-stand-for.html"
                    className="btn btn-secondary stretched-link"
                  >
                    view
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    src="/images/pencils.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <h3 className="mb-0"></h3>
                  <h3 className="mb-0">Join Us</h3>
                  <div className="mb-1 text-muted">Session 2021</div>
                  <p className="mb-auto">
                    To know more insights about us please do join.
                  </p>
                  <a
                    href="https://www.apnishala.org/volunteer.html"
                    className="btn btn-secondary stretched-link"
                  >
                    view
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    src="/images/school.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <h3 className="mb-0">School Schedules</h3>
                  <div className="mb-1 text-muted">Session 2021</div>
                  <p className="card-text mb-auto">
                    Check the schedule for schools
                  </p>
                  <a
                    href="/schools"
                    className="btn btn-secondary stretched-link"
                  >
                    view
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    src="/images/sclsch.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <h3 className="mb-0">Facilitators Schedule</h3>
                  <div className="mb-1 text-muted">Session 2021</div>
                  <p className="mb-auto">
                    Check the schedule for facilitators, availability for the
                    next week
                  </p>
                  <a
                    href="/facilitators"
                    className="btn btn-secondary stretched-link"
                  >
                    view
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    src="/images/facisch.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="container">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>
            {" "}
            <b>
              {" "}
              Apni Shala Foundation is registered as a charitable trust under
              the Bombay Public Trusts Act (1950) | Registration No. E-29950 (M)
            </b>
          </p>
        </footer>
      </body>
    </>
  );
};
export default Home;
