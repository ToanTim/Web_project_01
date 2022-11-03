import React from "react";
import "./Style/Write_Post.css";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Form, Button } from "react-bootstrap";
import { writePostUserData } from "../Backend/FirebaseDB";
const WritePost = () => {
  const [author, setAuthor] = [""];
  const [content, setContent] = [""];
  const [name, setName] = [""];
  const { id } = useParams();
  return (
    <Container>
      <Form>
        <Form.Group controlId="form.Name">
          <Form.Label>Name as author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="form.Name">
          <Form.Label>Blog Header</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
          <Form.Label>Blog Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            className="btnFormSend"
            variant="outline-success"
            onClick={writePostUserData}
          >
            Public your post
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default WritePost;
