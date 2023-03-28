import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import PersonOffSharpIcon from '@mui/icons-material/PersonOffSharp';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User, ReduxStore, UserState } from '../../models';
// import { deleteUser, editUser } from '../../redux/states/people';
import CircularProgress from '@mui/material/CircularProgress';
import './UserTable.scss';
import { AppDispatch, useAppSelector } from '../../redux/store';
import { deleteUser } from '../../redux/states/people';
import { BootstrapModal } from '../BootstrapModal';
// import { fetchUsers } from '../../redux/states/people';

const UserTable = () => {

    const { usersContent, isLoading, errs }: UserState = useAppSelector((state: ReduxStore) => state.users);

    const [localUserState, setLocalUserState] = useState<User[]>();
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);

    const handleShow = (userData: User) => {
        setShow(true);
    };

    const dispatch = useDispatch<AppDispatch>();

    const handleDelete = (userData: User) => {
        dispatch(deleteUser(userData.id!));
    };

    useEffect(() => {
      setLocalUserState(usersContent);
    }, [usersContent])
    
    
    return (
        isLoading || usersContent.length === 0 ?
        (
            <CircularProgress color="inherit" />
        ):(
            <TableContainer className="user-table-container" component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Username</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Phone</TableCell>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {
                            localUserState!.map((user: User) => (
                                <TableRow
                                    key={user.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {   
                                            (user.name.firstname +' '+ user.name.lastname)
                                            .toLowerCase()
                                            .split(' ')
                                            .map((word) =>(word.charAt(0).toUpperCase() + word.slice(1)))
                                            .join(' ')
                                        }
                                    </TableCell>
                                    <TableCell align="center">{user.username}</TableCell>
                                    <TableCell align="center">{user.email}</TableCell>
                                    <TableCell align="center">{user.phone}</TableCell>
                                    <TableCell align="center">{'C/ ' + user.address.street + ', ' + user.address.number  + ', ZIP: ' + user.address.zipcode + ', ' + user.address.city}</TableCell>
                                    <TableCell align="center">
                                        <div className="action">
                                            <Button 
                                                className='action-buttons' 
                                                variant='contained' 
                                                endIcon={<ManageAccountsSharpIcon />}
                                                onClick={() => handleShow(user)}
                                            >
                                                Edit User
                                            </Button>
                                            <Button 
                                                className='action-buttons' 
                                                color="error" 
                                                variant='contained' 
                                                endIcon={<PersonOffSharpIcon />}
                                                onClick={() => handleDelete(user)}
                                            >
                                                Delete User
                                            </Button>
                                            
                                            

                                        </div>
                                    </TableCell>
                                    <BootstrapModal
                                        show={show}
                                        handleClose={handleClose}
                                        formInfo={user}
                                        mode={'Edit'}
                                    />
                                </TableRow>
                                
                            ))
                        }
                            
                </TableBody>
                </Table>
            </TableContainer>

        )
    )
}

export default UserTable