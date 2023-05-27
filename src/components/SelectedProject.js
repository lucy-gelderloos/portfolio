import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from "react";

class SelectedProject extends React.Component {
  
  render() {
      return (
        <>
          <Modal show={this.props.viewModal} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.projectTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* formatted project details */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }

    // https://www.pluralsight.com/guides/how-to-trigger-modal-for-react-bootstrap

export default SelectedProject;
