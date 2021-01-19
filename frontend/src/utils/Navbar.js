import React from 'react';

import { Link } from "react-router-dom";


const Navbar = () => {
    return (


        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/board">Board</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/page">MyPage</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link disabled" to="/administer" tabindex="-1"
                              aria-disabled="true">AdminList</Link>
                    </li>
                </ul>
            </div>
            <input type="text"/>
        </nav>
    );

};

export default Navbar;