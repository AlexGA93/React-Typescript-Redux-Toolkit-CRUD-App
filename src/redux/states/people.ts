import { createAsyncThunk, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { UserState, User } from "../../models";
import { LocalStorageTypes } from "../../models/localstorage";
import { getLocalStorage, setLocalStorage } from "../../utilities/localstorage.utility";
import axios from 'axios';

const initialUsersState: UserState = {
    users: []
};


const getInitialState = () => getLocalStorage(LocalStorageTypes.USERS) 
? getLocalStorage(LocalStorageTypes.USERS) 
: initialUsersState.users;

// redux slice
export const usersSlice = createSlice({
    name: LocalStorageTypes.USERS,
    initialState: initialUsersState,
    reducers: {
        setUsers: (state, action) => {
            // store users in localstorage AND update global app state
            // setLocalStorage(LocalStorageTypes.USERS, action.payload);

            // TODO: state must be updated with action.payload
            return action.payload;
        },
        addUser: (state, action) => {
            // state.users.push(action.payload);
        },
        editUser: (state, action) => {
            // state.users.push(action.payload);
        },
        deleteUser: (state, action) => {
            // state.users.push(action.payload);
        }
    },
});


// Action creators are generated for each case reducer function
export const { setUsers, addUser, editUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
