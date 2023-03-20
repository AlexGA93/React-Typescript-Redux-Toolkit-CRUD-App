import React from 'react'
import Toast from 'react-bootstrap/Toast';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const ToastComponent = ({ variant, mssg, showToast, showToastMethod }: any) => {  
  
  return (
    <Toast 
        bg={variant}
        onClose={showToastMethod} 
        show={showToast} 
        delay={3000} 
        autohide>
        <Toast.Header>
            <DoneAllIcon />
            <strong className="me-auto">State: {variant}!!</strong>
        </Toast.Header>
        <Toast.Body>{mssg}</Toast.Body>
    </Toast>
  )
}

export default ToastComponent;