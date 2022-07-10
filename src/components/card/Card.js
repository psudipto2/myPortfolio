import { Component } from "react";
import { Link } from "react-router-dom";
import './Card.css';

export class Card extends Component {
    render = () => {
        let data = this.props.data;
        return (
            <div className="col-md-6 my-2">
                <div className="card" style={{width: "100%"}}>
                    <Link style={{color: "inherit", textDecoration: "none"}} to={"/myPortfolio/work/" + data.id}>
                        <img src={require(`../../static/thumbnails/${data.thumbnail}`)} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.brief}</p>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}