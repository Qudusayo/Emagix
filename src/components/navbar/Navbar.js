import React from 'react'

import 'mdbootstrap/css/mdb.min.css'

const navbar = () => {
    return(
        <nav className="navbar navbar-dark default-color justify-content-between">
            <h3 className="p-1 text-light">EMAGIX</h3>
            <ul className="navbar-nav ml-auto nav-flex-icons">
                <li className="nav-item active">
                    <a className="nav-link  p-2" href="https://facebook.com/qudusayoo" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i> Facebook
                    </a>
                </li>
                <li className="nav-item active ml-3">
                    <a className="nav-link  p-2" href="https://github.com/qudusayo" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Github
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default navbar;