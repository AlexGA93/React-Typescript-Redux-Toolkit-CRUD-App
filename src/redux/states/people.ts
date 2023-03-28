import { createAsyncThunk, createSlice, Dispatch, PayloadAction  } from "@reduxjs/toolkit";
import axios from 'axios';
import { User, UserState } from "../../models";
import { LocalStorageTypes } from "../../models/localstorage";

// const initialUsersState: User[] = [];
const initialUsersState: UserState = {
    usersContent: [],
    isLoading: true,
    errs: null
}

// https://github.com/arturfil/yt_reduxtk_frontend/blob/main/src/features/games/gameSlice.ts

export const getUsers = createAsyncThunk<User[]>(
    "users/getUsers",
    async(_, thunkAPI) => {
        try {
            const usersAsResponse = await axios.get("http://localhost:8080/users");
            
            return usersAsResponse.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addUser = createAsyncThunk<User, Object>(
    "users/addUser",
    async (userData, thunkAPI) => {
        // console.log(userData);
        
        try {
            const userAsResponse = await axios.post('http://localhost:8080/users', userData);

            thunkAPI.dispatch(getUsers());

            return userAsResponse.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteUser = createAsyncThunk<User, number>(
    "users/deleteUser",
    async (userId, thunkAPI) => {
        try {
            const eObjectAsResponse = await axios.delete(`http://localhost:8080/users/${userId}`);

            thunkAPI.dispatch(getUsers());

            return eObjectAsResponse.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// redux slice
export const usersSlice = createSlice({
    name: LocalStorageTypes.USERS,
    initialState: initialUsersState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.usersContent = action.payload
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.errs = action.payload
        })
    }
});

export default usersSlice.reducer;
