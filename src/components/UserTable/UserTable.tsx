import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import PersonOffSharpIcon from '@mui/icons-material/PersonOffSharp';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import { User, UserState } from '../../models';
import './UserTable.scss';

const UserTable = () => {

    // extract redux state for render
    const reduxUserState = useSelector((state: UserState) => state);

    return (
        <TableContainer className="user-table-container" component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {reduxUserState.users.map((user: User) => (
                    <TableRow
                        key={user.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        {user.name.firstname + user.name.lastname}
                        </TableCell>
                        <TableCell align="right">{user.username}</TableCell>
                        <TableCell align="right">{user.email}</TableCell>
                        <TableCell align="right">{user.phone}</TableCell>
                        <TableCell align="right">{'C/ ' + user.address.street + ', ' + user.address.number  + ', ZIP: ' + user.address.zipcode + ', ' + user.address.city}</TableCell>
                        <TableCell align="right">
                            <div className="action">
                                <Button className='action-buttons' variant='contained' endIcon={<ManageAccountsSharpIcon />}>
                                    Edit User
                                </Button>
                                <Button className='action-buttons' color="error" variant='contained' endIcon={<PersonOffSharpIcon />}>
                                    Delete User
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        
    )
}

export default UserTable