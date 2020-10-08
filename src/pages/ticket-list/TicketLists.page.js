import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { SearchForm } from '../../components/search-form/SearchForm.comp';
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import { Link } from "react-router-dom";

export const TicketLists = () => {
  const [str, setStr] = useState('');
  const [ticket, setTicket] = useState(tickets);

  const handleOnChange = e => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  }

  const searchTicket = (sub) => {
    const filteredTickets = tickets.filter(row => row.subject.toLowerCase().includes(sub.toLowerCase()));
    setTicket(filteredTickets);
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={ticket} />
        </Col>
      </Row>
    </Container>
  )
}