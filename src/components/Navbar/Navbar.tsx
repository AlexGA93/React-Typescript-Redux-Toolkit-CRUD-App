import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import TerminalTwoToneIcon from '@mui/icons-material/TerminalTwoTone';
import React, { useState } from 'react'
import { ModalComponent } from '../ModalComponent';

const Navbar = () => {

  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpened(!modalOpened);
  };


  return (
    <AppBar position="fixed" className='navbar-container'>
      <Toolbar variant="dense">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Users C.R.U.D App
        </Typography>

        <IconButton
          color="error" 
          onClick={handleOpenModal}
        >
          <TerminalTwoToneIcon fontSize="large"/>
        </IconButton >

        {/* modal component called to change the local state */}
        <ModalComponent 
          isModalOpened={modalOpened}
          modalStateHandler={() => setModalOpened(!modalOpened  )}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar