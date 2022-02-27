
import {createSlice} from '@reduxjs/toolkit';
import BookDataService from '../../Services/bookServices';



const bookSlice = createSlice({
  name: 'bookSlice',
  initialState: {
    bookList: [],
    
  },
  reducers: {
    
  },
  extraReducers: {
    [BookDataService.getAllBooks.fulfilled]: (state, action) => {
      state.bookList = action.payload;
    },
    [BookDataService.getAllBooks.pending]: (state, action) => {
      state.bookList = [];
    },
    [BookDataService.getAllBooks.rejected]: (state, action) => {
        state.bookList = [];
      },
    
   
  },
});

export const {actions} = bookSlice;
export const {setRefreshEnabled, setStoreSelected, setCurrentLocation} =
  actions;

export default bookSlice.reducer;
