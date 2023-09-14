//react
import { useState } from "react";

//react-icons
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

//styles
import "./navbar.css";

//assets
import logo from "../../assets/images/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Inicio</a>
    </p>
    <p>
      <a href="#wgpt3">¿Qué es GPT3?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Caracteristicas</a>
    </p>
    <p>
      <a href="#blog">Blog</a>
    </p>
  </>
);

const Navbar = () => {
  //state variables
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Registrarse</p>
        <button type="button">Inscribirse</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Registrarse</p>
                <button type="button">Inscribirse</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
