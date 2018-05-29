import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
    <header>
        <h1>ToDo</h1>
        <NavLink to="/" activeClassName="is-active" exact >Home</NavLink>
        <NavLink to="/add" activeClassName="is-active" exact >Add</NavLink>
    </header>
    );

    export default Header;