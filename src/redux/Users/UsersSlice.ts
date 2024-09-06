import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'


interface UsersProps {
    users:Array<{
        username: string;
        id:number
    }>,
    loadingUsers:boolean
}

type UserACtion = {
    username: string;
    id: number;
}

const initialState:UsersProps = {
    users:[],
    loadingUsers:false,
}

export const getUsers = createAsyncThunk(
    "FETCH_USERS",
    async (_,{rejectWithValue}) => {
        try{
            const res = await fetch("http://localhost:8080/users")

            if (!res.ok){
                return rejectWithValue("server is not okey")
            }
            return res.json()
        }catch(error){
            return rejectWithValue(error)
        }
    }
)


export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loadingUsers = true
            })
            .addCase(getUsers.fulfilled, (state, action:PayloadAction<UserACtion[]>) => {
                state.loadingUsers = false
                state.users = action.payload
            })
    }
})


export default userSlice.reducer