import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import { MessageHistory } from '../../components/message-history/MessageHistory.comp';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp';
import { useParams } from "react-router-dom";


export const Ticket = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState('');
  const [message, setMessage] = useState('');

  const handleOnChange = e => {
    setMessage(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  }

  useEffect(() => {
    const data = tickets.find(row => parseInt(row.id) === parseInt(id));
    setTicket(data);
  }, [id]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Info" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
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
          {ticket.history &&
            <MessageHistory msg={ticket.history} />
          }
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