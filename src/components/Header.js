import React from 'react';
import PropTypes from 'prop-types';
const Header = ({titulo}) => (
    <nav className="nav-wrapper light-blue darken-3">
    <a href="#!" className="brand-logo center">{titulo}</a> {/* enlace q no lleva a NINGÚ LADO */}
    </nav>
);
Header.propTypes = {
    titulo : PropTypes.string.isRequired
}
export default Header;