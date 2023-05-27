import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Project from './Project';
import featureImg from '../img/feature-image.png';

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state={

        };
        this.projects = props.projects;

    }

    render() {
        console.log("this.projects: " + this.projects)
        return (
        <main>
            <h1>The main div!</h1>
            <img src='../img/feature-image.png' alt="why won't this render"/>
            <Container>
                <Row>
                    {this.projects.map(el => <Project key={el._id} projectTitle={el.projectTitle} projectDescription={el.projectDescription} repoUrl={el.repoUrl} hostedUrl={el.hostedUrl} stack={el.stack} thumbnailUrl={el.thumbnailUrl} heroUrl={el.heroUrl} screenshotUrls={el.screenshotUrls} lastUpdated={el.lastUpdated} playStoreListing={el.playStoreListing} backEndUrl={el.backEndUrl} handleModalClick={this.props.handleModalClick} />)}                   
                </Row>
            </Container>
        </main>
        )
    }
}

export default Main;