import React, { useContext, useState, useRef } from "react";
import { UserContext } from "./Context/UserContext";
import { Container, Form, Button, Table } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Notes() {
  let { notes, addNote, deleteNote, updateNote } = useContext(UserContext);
  let [title, setTitle] = useState(null);
  let [description, setDescription] = useState(null);

  const [update, setUpdate] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [currentDescription, setCurrentDescription] = useState(null);
  const [currentId, setCurrentId] = useState(null);

  let titleRef = useRef(null);
  let descriptionRef = useRef(null);
  let handleNotes = (e) => {
    e.preventDefault();
    let id = Date.now();
    let note = {
      id,
      title,
      description,
    };
    addNote(note);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };
  const handleEdit = (note) => {
    setUpdate(true);
    setCurrentId(note.id);
    setCurrentTitle(note.title);
    setCurrentDescription(note.description);
    titleRef.current.value = note.title;
    descriptionRef.current.value = note.description;
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    updateNote(currentId, currentTitle, currentDescription);
    setCurrentId(null);
    setCurrentTitle(null);
    setcurrentDescription(null);
    setTitle(null);
    setDescription(null);
    setUpdate(false);

    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <Container-fluid>
      <Row className="rowdiv">
        <Col sm={2} className="col1">
          <h3 className="headelement">Notes App</h3>
          <div className="h4tag">
            <h4>Notes</h4>
          </div>
        </Col>

        <Col className="col2">
          {update ? (
            <Form className="formtag" onSubmit={handleUpdate}>
              <Form.Group>
                <h5 className="formh5">Add a Note</h5>
                <Form.Label className="flabeltag">Title</Form.Label>
                <Form.Control
                  className="fcontag"
                  type="text"
                  onChange={(e) => setCurrentTitle(e.target.value)}
                  ref={titleRef}
                  placeholder="Enter a Title here"
                />
                <Form.Label className="flabel2">Description</Form.Label>
                <Form.Control
                  className="fcontag2"
                  type="text"
                  onChange={(e) => setCurrentDescription(e.target.value)}
                  ref={descriptionRef}
                  placeholder="Take a note"
                />
              </Form.Group>
              <br />
              <Button className="btn" type="submit">
                Update Notes
              </Button>
            </Form>
          ) : (
            <Form className="formtag" onSubmit={handleNotes}>
              <Form.Group>
                <h5 className="formh5">Add a Note</h5>
                <Form.Label className="flabeltag">Title</Form.Label>
                <Form.Control
                  className="fcontag"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  ref={titleRef}
                  placeholder="Enter a title here"
                />
                <Form.Label className="flabel2">Description</Form.Label>
                <Form.Control
                  className="fcontag2"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  ref={descriptionRef}
                  placeholder="Take a Note"
                />
              </Form.Group>
              <br />
              <Button className="btn" type="submit">
                Add Notes
              </Button>
            </Form>
          )}

          <Table className="tabletag">
            <thead className="table-hd">
              <tr className="table-rw">
                <th>Title</th>
                <th>Description</th>
                <th>Delete Note</th>
                <th>Edit Note</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {notes &&
                notes.map((u) => (
                  <tr>
                    <td>{u.title}</td>
                    <td>{u.description}</td>
                    <td>
                      <Button className="btn2" onClick={() => deleteNote(u.id)}>
                        Delete 
                      </Button>
                    </td>
                    <td>
                      <Button className="btn2" onClick={() => handleEdit(u)}>
                        Edit 
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container-fluid>
  );
}

export default Notes;
