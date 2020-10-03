import React from 'react';
import { Jumbotron, Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './add-ticket-form.style.css';

export const AddTicketForm = ({ handleOnChange, handleOnSubmit, frmDt, frmError }) => {
  return (
    <Jumbotron className="mt-3 bg-light add-new-ticket">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>Subject</Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmDt.subject}
              onChange={handleOnChange}
              placeholder="Enter subject"
              required />
            <Form.Text className="text-danger">
              {frmError.subject && "Subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>Issued Date</Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmDt.issueDate}
              onChange={handleOnChange}
              required />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            name="details"
            value={frmDt.details}
            onChange={handleOnChange}
            required />
        </Form.Group>
        <Button type="submit" variant="info" block name="addButton">Add</Button>
      </Form>
    </Jumbotron>
  )
};

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmError: PropTypes.object.isRequired
}