import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { shortText } from '../../utils/validation';

const initialFormData = {
  subject: "",
  issueDate: "",
  details: ""
};

const initialFormError = {
  subject: "",
  issueDate: "",
  details: ""
};

export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFormData);
  const [frmError, setFrmError] = useState(initialFormData);

  const handleOnChange = e => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value
    });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    const isValid = await shortText(frmData.subject);
    !isValid &&
      console.log('submitted', frmData, isValid);
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} frmDt={frmData} />
        </Col>
      </Row>
    </Container>
  )
}