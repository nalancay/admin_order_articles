import { useContext } from "react";
import { LangContext } from "context/langContext";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Navbar, Nav, Container } from "react-bootstrap";

const styleButton = {
  color: "#5B2C6F",
  outline: "none",
  border: 0,
  background: "#F2F4F4 ",
};

export const NavBar = () => {
  const lang = useContext(LangContext);
  return (
    <header>
      <Navbar expand="lg" style={{ background: "#F2F4F4 " }}>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link className="nav-link " to="/" style={{ color: "#5B2C6F" }}>
                  <FormattedMessage id="tableArticles.title" />
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="nav-link"
                  to="/orders"
                  style={{ color: "#5B2C6F" }}
                >
                  <FormattedMessage id="tableOrders.title" />
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="d-flex">
            <button
              className="ml-4"
              style={styleButton}
              onClick={() => lang.setLang("es-ES")}
            >
              ESP
            </button>
            <span className="pl-1 pr-1">/</span>
            <button onClick={() => lang.setLang("en-US")} style={styleButton}>
              ING
            </button>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};
