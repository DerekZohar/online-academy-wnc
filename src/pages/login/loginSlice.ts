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
            console.log(action.payload)
            state.value.watchList.push(action.payload);
            state.value = {...state.value};
        }
        
    },
});

export const { initValue,userLogin,userLogout,addFavCourse } = loginSlice.actions;

export default loginSlice.reducer;
