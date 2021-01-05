import { setNull } from './../../helpers/setNullObj';
import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        value: {
            avatarUrl:""
        }
    },
    reducers: {
        initValue: (state, action)=>{
            setNull(state.value);
        },
        userLogin:(state, action) => {
            console.log(action.payload)
            state.value = {...state.value, ...action.payload};
        },
        userLogout:(state, action)=>{
            setNull(state.value);
        }
        
        
    },
});

export const { initValue,userLogin,userLogout } = loginSlice.actions;

export default loginSlice.reducer;
