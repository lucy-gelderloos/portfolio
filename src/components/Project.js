import React from "react";
import Col from "react-bootstrap/Col";
import "../css/Project.css"

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.projectTitle = props.projectTitle;
        this.projectDescription = props.projectDescription;
        this.repoUrl = props.repoUrl;
        this.hostedUrl = props.hostedUrl;
        this.stack = props.stack;
        this.thumbnailUrl = props.thumbnailUrl;
        this.heroUrl = props.heroUrl;
        this.screenshotUrls = props.screenshotUrls;
        this.lastUpdated = props.lastUpdated;
        this.playStoreListing = props.playStoreListing;
        this.backEndUrl = props.backEndUrl;
    }

    handleModalClick = () => {
        this.props.handleModalClick(this);
    }

    render() {
        return(
            <Col className="projectCol">
                <h2>{this.projectTitle}</h2>  
                <div className="projectDetails">
                    <img onClick={this.handleModalClick} src={require('../img/feature-image.png')} alt={this.projectDescription} title={this.projectTitle} className='heroImg'/>
                </div>
                <p>{this.projectDescription}</p>
            </Col> 
        );
    }
}

export default Project;
