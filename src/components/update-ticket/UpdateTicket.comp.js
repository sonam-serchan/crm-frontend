import React from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const UpdateTicket = ({ msg, handleOnChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text>Please reply your message here</Form.Text>
      <Form.Control
        name="detail"
        as="textarea"
        row="5"
        value={msg}
        onChange={handleOnChange}
      />
      <div className="mt-3 mb-2 text-right">
        <Button variant="info" type="submit">Reply</Button>
      </div>
    </Form>
  )
}

UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}