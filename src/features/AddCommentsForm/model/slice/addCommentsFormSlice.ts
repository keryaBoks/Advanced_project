import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentsFormSchema } from '../types/addCommentsFormSchema';

const initialState: AddCommentsFormSchema = {
    text: '',
};
export const addCommentsForm = createSlice({
    name: 'addCommentsForm',
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state, action) => {
    //             state.isLoading = true;
    //             state.error = undefined;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state, action) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             if (typeof action.payload === 'string') {
    //                 state.error = action.payload;
    //             } else {
    //                 console.error('Payload is not a string');
    //             }
    //         });
    // },
});

export const { actions: addCommentsFormActions } = addCommentsForm;
export const { reducer: addCommentsFormReducer } = addCommentsForm;
