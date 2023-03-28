import { createAsyncThunk, createSlice, Dispatch, PayloadAction  } from "@reduxjs/toolkit";
import axios from 'axios';
import { User, UserState } from "../../models";
import { LocalStorageTypes } from "../../models/localstorage";

const initialUsersState: UserState = {
    usersContent: [],
    isLoading: true,
    errs: null
}

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
        
        try {
            // http request by axios returning an object as response
            const userAsResponse = await axios.post('http://localhost:8080/users', userData);

            // apply changes to our redux state by getting users again(where we'll call to the database and update state
            thunkAPI.dispatch(getUsers());

            // return object - In this case tthe change that we want is being applied by dispatching getUsers method
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
            // http request by axios returning an object as response
            const eObjectAsResponse = await axios.delete(`http://localhost:8080/users/${userId}`);

            // apply changes to our redux state by getting users again(where we'll call to the database and update state)
            thunkAPI.dispatch(getUsers());

            // return object - In this case tthe change that we want is being applied by dispatching getUsers method
            return eObjectAsResponse.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updateUser= createAsyncThunk<User, User>(
    "users/updateUser",
    async (userData, thunkAPI) => {
        try {

            // http request by axios returning an object as response
            const eObjectAsResponse = await axios.put(`http://localhost:8080/users/${userData.id}`);

            // this time we'll return oour data without dispatching 'getUsers' to  implement an state's update by reducer

            // return object - In this case tthe change that we want is being applied by dispatching getUsers method
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
        // UPDATE
        builder.addCase(updateUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false;

            const updatedState = state.usersContent.splice(0, state.usersContent.length, action.payload);

            console.log(updatedState);
            

            // update array
            state.usersContent = updatedState;
        })
        builder.addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false;
            state.errs = action.payload
        })
    }
});

export default usersSlice.reducer;
