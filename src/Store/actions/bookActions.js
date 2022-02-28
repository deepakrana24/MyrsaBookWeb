import BookDataService from "../../Services/bookServices";
export const updateBook = (id, newBook)=> async(dispatch)=> {
    await BookDataService.updateBook(id, newBook);
    const data = await BookDataService.getAllBooks();
    let book = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    dispatch({
        type:"UPDATE_BOOK",
        payload:book,
    })
}

export const getBooks = () => async(dispatch)=> {
    const data = await BookDataService.getAllBooks();
    let book = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("get book api hit ",book)
    dispatch({
        type:"GET_BOOK",
        payload:book,
    })
}

export const addBook = (newBook)=> async (dispatch)=>{
    await BookDataService.addBooks(newBook);
    const data = await BookDataService.getAllBooks();
    let book = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    dispatch({
        type:"ADD_BOOK",
        payload:book,
    })
}

export const deleteBook = (id) => async(dispatch)=> {
    await BookDataService.deleteBook(id);
    const data = await BookDataService.getAllBooks();
    let book = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    dispatch({
        type:"DELETE_BOOK",
        payload:book,
    })
}
