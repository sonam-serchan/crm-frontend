import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import { MessageHistory } from '../../components/message-history/MessageHistory.comp';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp';

const ticket = tickets[0];

export const Ticket = () => {
  const [message, setMessage] = useState('');

  const handleOnChange = e => {
    setMessage(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Info" />
        </Col>
      </Row>
      <Row>
        <Col className="tezt-weight-bolder text-secondary">
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="date">Date: {ticket.createdDt}</div>
          <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket msg={message} handleOnChange={handleOnChange} onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  )
}