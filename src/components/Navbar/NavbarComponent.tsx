import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { User } from '../../models';
import { BootstrapModal } from '../BootstrapModal';
const NavbarComponent = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const emptyForm: User = {
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
    },
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    phone: "",
    "__v":0
  };

  return (
    <AppBar position="fixed" className='navbar-container'>
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Users C.R.U.D App
          </Typography>

          <IconButton
            color="error" 
            onClick={handleShow}
          >
            <PersonAddOutlinedIcon color='action' fontSize="large"/>
          </IconButton >
          
          <BootstrapModal
            show={show}
            handleClose={handleClose}
            formInfo={emptyForm}
            mode={'Add'}
          />

        </Toolbar>
      </AppBar>
  )
}

export default NavbarComponent