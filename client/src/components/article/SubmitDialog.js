import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import articleService from "../../services/article";


export default class SubmitDialogComponent extends React.Component {
  toEdit = false;

  constructor(props) {
    super(props);
    this.toEdit = props.article !== undefined;
    this.state = this.getFormState();
  }

  getFormState() {
    return this.toEdit
      ? { ...this.props.book,}
      : { title: "", text: "",game :"", author: "", publish_date: 0 };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const jsonData = (({ title, text,game, author, publish_date }) => ({ title, text,game, author, publish_date }))(
      this.state
    );

    /*if (this.toEdit) {
      const { _id,} = this.props.article;
      articleService.update(_id, jsonData).then(() => this.handleCoverSubmit({ ...jsonData, _id }));
    } else {
      articleService.create(jsonData).then((result) => this.handleCoverSubmit({ ...jsonData, _id: result._id }));
    }**/
  }
/*
  handleCoverSubmit(bookData) {
    if (this.state.cover) {
      bookService.setCover(bookData._id, this.state.cover).then((result) => {
        this.props.submited({ ...bookData, cover: result.url });
      });
    } else {
      this.props.submited(bookData);
    }
  }
**/

  handleCancel() {
    this.setState(this.getFormState());
    this.props.handleClose();
  }
/*
  handleSelectCover(evt) {
    const formData = new FormData();
    formData.append("cover", evt.target.files[0]);
    this.setState({ cover: formData });
  }
**/
  render() {
    const { show } = this.props;
    const { title, text,game, author, publish_date } = this.state;

    return (
      <Modal show={show} onHide={this.handleCancel}>
        <Modal.Header>
          <Modal.Title>{this.toEdit ? "Edit article" : "Create article"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(evt) => this.handleSubmit(evt)}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control value={title} onChange={(evt) => this.setState({ title: evt.target.value })} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Content</Form.Label>
              <Form.Control value={text} onChange={(evt) => this.setState({ text: evt.target.value })} />
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Game</Form.Label>
              <Form.Control value={game} onChange={(evt) => this.setState({ game: evt.target.value })} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control value={author} onChange={(evt) => this.setState({ author: evt.target.value })} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Publish year</Form.Label>
              <Form.Control
                type="datetime"
                value={'now'}
                onChange={(evt) => this.setState({ publish_year: evt.target.value })}
              />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleCancel()}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}
