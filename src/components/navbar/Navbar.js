
import {Component} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export class Navbar extends Component {

    render = () => {
        return (
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid">
                    <Link className="display-6" to="/" style={{textDecoration: "none", color:"inherit"}}><strong>Sudipta Paul</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link" to="/myPortfolio">Home</Link>
                            <Link className="nav-link" to="/myPortfolio/resume">Resume</Link>
                            <Link className="nav-link" to="/myPortfolio/contact">Contact</Link>
                            {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

}