import { useParams } from "react-router-dom";
import { projects } from "../../data/Data";

const filter = (id) => {
    let filteredObjects = projects.filter(project => Number(project.id) === Number(id));
    
    return filteredObjects[0];
}

export function Project() {
    const { id } = useParams();
    const project = filter(id);
    console.log(project);
    return (
        <div className="container">
            <h1 className="display-4 my-3">{project.title}</h1>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-md-8">
                    <div class="ratio ratio-16x9">
                        <iframe src={project.videoLink} title="YouTube video" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-md-8">
                    <h3 className="my-4 text-start">{project.brief}</h3>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="my-4">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-md-8">
                        <h4 className="text-start">Key Features :</h4>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-md-8">
                        <ul className="text-start">
                            {
                                project.keys.map(e => <li className="lead">{e}</li>)
                            }
                        </ul>
                    </div>
                    <div className="col-2"><i class="logo github fab fa-github-square" aria-hidden="true"></i></div>
                </div>
            </div>
        </div>
    );
    
}