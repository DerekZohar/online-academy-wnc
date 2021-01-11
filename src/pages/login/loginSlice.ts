import { setNull } from './../../helpers/setNullObj';
import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        value: {
            avatarUrl:"",
            watchList:[],
        }
    },
    reducers: {
        initValue: (state, action)=>{
            setNull(state.value);
        },
        userLogin:(state, action) => {
            // console.log(action.payload)
            state.value = {...state.value, ...action.payload};
        },
        userLogout:(state, action)=>{
            setNull(state.value);
        },
        addFavCourse:(state: any, action: any)=>{
            state.value.watchList.push(action.payload);
            console.log(state.value.watchList)

            // state.value = {...state.value};
        },
        editUser: (state, action) => {
            state.value = { ...state.value, ...action.payload }
            console.log(action.payload)
        }
        
    },
});

export const { initValue,userLogin,userLogout,addFavCourse,editUser } = loginSlice.actions;

export default loginSlice.reducer;
