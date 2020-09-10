import { Link } from "gatsby";
import PropTypes from "prop-types";
import Container from "./container";
import Logo from "../images/plexus-icon.png";
import Techlore from "../images/techlore.png";
import React from "react";

const Header = ({ siteTitle }) => (
  <header className="bg-black border-b-4 border-brand-dark">
    <Container>
      <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div className="lg:w-0 lg:flex-1">
          <h1 className="flex items-center">
            <img className="h-6 w-auto sm:h-10" src={Logo} alt="Plexus" />
            <Link
              className="font-mono font-bold text-3xl md:text-5xl text-white ml-2"
              to="/"
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <a
          href="https://techlore.tech"
          className="text-gray-100 hover:text-gray-200"
          rel="noopener noreferrer"
        >
          <img className="h-10 md:h-12 w-auto" src={Techlore} alt="Techlore" />
        </a>
      </div>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
