import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import React, { useState } from 'react'
import { ModalComponent } from '../ModalComponent';
import {Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { BootstrapModal } from '../BootstrapModal';
const NavbarComponent = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

          {/* <ModalComponent 
            openProp={modalIsOpened}
            setModalOpen={handleCloseModal}
          /> */}

          <BootstrapModal
            show={show}
            handleClose={handleClose}
          />

        </Toolbar>
      </AppBar>
  )
}

/**
 * TODO:
 * 
 * dispatch action when form is filled
 * add new user action
 * form error toast/alert MUI
 */

export default NavbarComponent