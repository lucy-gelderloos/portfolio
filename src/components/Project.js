import React from "react";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.projectTitle = '';
        this.projectDescription = '';
        this.repoUrl = '';
        this.hostedUrl = '';
        this.stack = [];
        this.thumbnailUrl = '';
        this.heroUrl = '';
        this.screenshotUrls = [];
        this.lastUpdated = 0;
    }

    render() {
        return(
            <div className="project">

            </div>
        );
    }

}

export default Project;
