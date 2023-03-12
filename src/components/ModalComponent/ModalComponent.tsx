import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { RoutesList } from '../RoutesList';
import './ModalComponent.scss';

export interface ModalPropsType {
  isModalOpened: boolean;
  modalStateHandler: any;
}

const ModalComponent = ({ isModalOpened, modalStateHandler }: ModalPropsType) => {
  
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #fff',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <Modal
        className='modal'
        open={isModalOpened}
        onClose={modalStateHandler}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: 500 }}>
        {/* ROUTES List*/}
        <RoutesList />
      </Box>
    </Modal>
  )
}

export default ModalComponent;