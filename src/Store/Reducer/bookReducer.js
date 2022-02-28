const init = {
  books:[],
}

 const bookReducer = (state=init, action)=> {
  switch (action.type) {
    case "UPDATE_BOOK":
      return {books:action.payload}
    case "GET_BOOK":
      return {books:action.payload}
    case "ADD_BOOK":
      return {books:action.payload}
    case "DELETE_BOOK":
      return {books:action.payload}
    default:
      return state;
  }
}

export default bookReducer;