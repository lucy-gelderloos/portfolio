import './css/App.css';

import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import React from 'react';
import Projects from './projects.json';
import SelectedProject from './components/SelectedProject.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalProjectTitle: '', 
      viewModal: false};
  }


  handleModalClick = (project) => {
    this.setState({
      // sets state for calling component to display modal contents
        modalProjectTitle: project.props.projectTitle, 
        viewModal: true
      });
  }

  closeModal = () => {
    this.setState({viewModal: false});
  }

  render() {
    console.log(Projects);
      return (
        <>
        <Header />
        <Main projects={Projects} handleModalClick={this.handleModalClick} />
        <SelectedProject projectTitle={this.state.modalProjectTitle} closeModal={this.closeModal} viewModal={this.state.viewModal} />
        <Footer />
      </>
      );
    }
}

export default App;