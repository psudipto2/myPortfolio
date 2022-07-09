import { Component } from "react";
import { Card } from "../card/Card";
import { projects } from "../../data/Data";

export class Home extends Component {

    render = () => {
        return (
            <div className="container my-4">
                <div className="row">
                    {
                        projects.map(e => {
                            return <Card key={e.id} data={e}/>
                        })
                    }
                </div>
            </div>
        );
    }

}