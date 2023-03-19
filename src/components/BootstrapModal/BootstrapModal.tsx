import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { NewUserForm } from "../Forms";
import "./BootstrapModal.scss";

// form state

const BootstrapModal = ({ show, handleClose }: any) => {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a new user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NewUserForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BootstrapModal;
