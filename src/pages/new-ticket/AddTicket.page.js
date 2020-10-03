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
  subject: false,
  issueDate: "",
  details: ""
};

export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFormData);
  const [frmError, setFrmError] = useState(initialFormError);

  const handleOnChange = e => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value
    });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    const isSubjectValid = shortText(frmData.subject);
    setFrmError({
      ...frmError,
      subject: !isSubjectValid
    });
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
          <AddTicketForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} frmDt={frmData} frmError={frmError} />
        </Col>
      </Row>
    </Container>
  )
}