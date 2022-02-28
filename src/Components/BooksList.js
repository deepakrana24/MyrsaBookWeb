import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
// import BookDataService from "../Services/bookServices";
import { getBooks,deleteBook } from "../Store/actions/bookActions";
import { useDispatch, useSelector } from "react-redux";

const BooksList = ({ getBookId }) => {
  const dispatch = useDispatch();
  const books = useSelector(
     (state)=>{console.log(state); return state.books}
    //({ bookReducer }) => bookReducer,
    );
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
 // const [books, setBooks] = useState([]);
  // const { bookList = [] } = useSelector(
  //   // @ts-ignore
  //   ({ bookReducer }) => bookReducer,
  // );

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   getBooks();
  // }, []);

  // useEffect(()=>{
  //   if(isEmpty(bookList)){
  //     dispatch(BookDataService.getAllBooks())
  //   }
  // },[]);

  // const getBooks = async () => {
  //   const data = await BookDataService.getAllBooks();
  //   console.log("this is the  date", data.docs);
  //   setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  const deleteHandler = async (id) => {
   // await BookDataService.deleteBook(id);
   // getBooks();
   dispatch(deleteBook(id));
  };
  console.log(books);
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getBooks}>
          Refresh List
        </Button>
      </div>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Edition</th>
            <th>ISBN</th>
            <th>publisher</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            books.books.map((doc, index) => {
              return (
                <tr key={doc.id}>
                  <td>{index + 1}</td>
                  <td>{doc.title}</td>
                  <td>{doc.author}</td>
                  <td>{doc.edition}</td>
                  <td>{doc.isbn}</td>
                  <td>{doc.publisher}</td>
                  <td>{doc.status}</td>
                  <td>
                    <Button
                      variant="secondary"
                      className="edit"
                      onClick={(e) => getBookId(doc.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="delete"
                      onClick={(e) => deleteHandler(doc.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default BooksList;
