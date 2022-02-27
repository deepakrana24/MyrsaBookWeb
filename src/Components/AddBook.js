import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../Services/bookServices";

const AddBook = ({ id, setBookId }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [edition, setEdition] = useState('');
  const [isbn, setIsbn] = useState('');
  const [publisher, setPublisher] = useState('')
  const [status, setStatus] = useState('Available');
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || author === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newBook = {
      title,
      author,
      status,
      edition,
      isbn,
      publisher,

    };
    console.log(newBook);

    try {
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle('');
    setStatus('')
    setAuthor('');
    setEdition('');
    setIsbn('');
    setPublisher('');



  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setEdition(docSnap.data().edition);
      setIsbn(docSnap.data().isbn);
      setPublisher(docSnap.data().publisher);
      setAuthor(docSnap.data().author);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  });
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBookEdition">
            <InputGroup>
              <InputGroup.Text id="formBookEdition">E</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Edition"
                value={edition}
                onChange={(e) => setEdition(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBookPublisher">
            <InputGroup>
              <InputGroup.Text id="formBookPublisher">P</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Publisher"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId= "formBookIsbn">
            <InputGroup>
              <InputGroup.Text id="formBookIsbn">I </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder=" Isbn"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="buttonn grp" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddBook;
