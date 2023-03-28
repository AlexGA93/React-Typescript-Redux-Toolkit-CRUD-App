import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { User } from "../../models";
import { NewUserForm } from "../Forms";
import { ToastComponent } from "../Toast";
import "./BootstrapModal.scss";



const BootstrapModal = ({ show, handleClose, formInfo, mode }: any) => {

  // console.log(formInfo);
  

  const [showToast, setShowToast] = useState<boolean>(false);

  const [success, setSuccess] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string>('');

  const hideToastMethod = () => setShowToast(false);
  const showToastMethod = () => setShowToast(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{mode} a new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewUserForm
            setSuccess={setSuccess}
            setToastMessage={setToastMessage}
            showToastMethod={showToastMethod}
            formInfo={formInfo}
            mode={mode}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" form="myForm" onClick={handleClose}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastComponent 
        variant={success}
        mssg={toastMessage}
        showToast={showToast}
        showToastMethod={hideToastMethod}
      />
    </>
  );
};

export default BootstrapModal;
